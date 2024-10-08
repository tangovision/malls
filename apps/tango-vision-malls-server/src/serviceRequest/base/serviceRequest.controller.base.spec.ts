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
import { ServiceRequestController } from "../serviceRequest.controller";
import { ServiceRequestService } from "../serviceRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  assignedTo: "exampleAssignedTo",
  completionDate: new Date(),
  createdAt: new Date(),
  creationDate: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  requestType: "exampleRequestType",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  assignedTo: "exampleAssignedTo",
  completionDate: new Date(),
  createdAt: new Date(),
  creationDate: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  requestType: "exampleRequestType",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    assignedTo: "exampleAssignedTo",
    completionDate: new Date(),
    createdAt: new Date(),
    creationDate: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    requestType: "exampleRequestType",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  assignedTo: "exampleAssignedTo",
  completionDate: new Date(),
  createdAt: new Date(),
  creationDate: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  requestType: "exampleRequestType",
  updatedAt: new Date(),
};

const service = {
  createServiceRequest() {
    return CREATE_RESULT;
  },
  serviceRequests: () => FIND_MANY_RESULT,
  serviceRequest: ({ where }: { where: { id: string } }) => {
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

describe("ServiceRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ServiceRequestService,
          useValue: service,
        },
      ],
      controllers: [ServiceRequestController],
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

  test("POST /serviceRequests", async () => {
    await request(app.getHttpServer())
      .post("/serviceRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /serviceRequests", async () => {
    await request(app.getHttpServer())
      .get("/serviceRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completionDate: FIND_MANY_RESULT[0].completionDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creationDate: FIND_MANY_RESULT[0].creationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /serviceRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serviceRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /serviceRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/serviceRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completionDate: FIND_ONE_RESULT.completionDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creationDate: FIND_ONE_RESULT.creationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /serviceRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/serviceRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completionDate: CREATE_RESULT.completionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/serviceRequests")
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
