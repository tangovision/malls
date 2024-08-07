import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { VisitorController } from "../visitor.controller";
import { VisitorService } from "../visitor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  email: "exampleEmail",
  feedback: "exampleFeedback",
  id: "exampleId",
  name: "exampleName",
  phone: "examplePhone",
  preferences: "examplePreferences",
  updatedAt: new Date(),
  visitDate: new Date(),
  visitorId: "exampleVisitorId",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  email: "exampleEmail",
  feedback: "exampleFeedback",
  id: "exampleId",
  name: "exampleName",
  phone: "examplePhone",
  preferences: "examplePreferences",
  updatedAt: new Date(),
  visitDate: new Date(),
  visitorId: "exampleVisitorId",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    email: "exampleEmail",
    feedback: "exampleFeedback",
    id: "exampleId",
    name: "exampleName",
    phone: "examplePhone",
    preferences: "examplePreferences",
    updatedAt: new Date(),
    visitDate: new Date(),
    visitorId: "exampleVisitorId",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  email: "exampleEmail",
  feedback: "exampleFeedback",
  id: "exampleId",
  name: "exampleName",
  phone: "examplePhone",
  preferences: "examplePreferences",
  updatedAt: new Date(),
  visitDate: new Date(),
  visitorId: "exampleVisitorId",
};

const service = {
  createVisitor() {
    return CREATE_RESULT;
  },
  visitors: () => FIND_MANY_RESULT,
  visitor: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Visitor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VisitorService,
          useValue: service,
        },
      ],
      controllers: [VisitorController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /visitors", async () => {
    await request(app.getHttpServer())
      .post("/visitors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        visitDate: CREATE_RESULT.visitDate.toISOString(),
      });
  });

  test("GET /visitors", async () => {
    await request(app.getHttpServer())
      .get("/visitors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          visitDate: FIND_MANY_RESULT[0].visitDate.toISOString(),
        },
      ]);
  });

  test("GET /visitors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/visitors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /visitors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/visitors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        visitDate: FIND_ONE_RESULT.visitDate.toISOString(),
      });
  });

  test("POST /visitors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/visitors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        visitDate: CREATE_RESULT.visitDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/visitors")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
