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
import { TicketController } from "../ticket.controller";
import { TicketService } from "../ticket.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  assignedTo: "exampleAssignedTo",
  category: "exampleCategory",
  createdAt: new Date(),
  creationDate: new Date(),
  description: "exampleDescription",
  dueDate: new Date(),
  id: "exampleId",
  resolution: "exampleResolution",
  resolutionDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  assignedTo: "exampleAssignedTo",
  category: "exampleCategory",
  createdAt: new Date(),
  creationDate: new Date(),
  description: "exampleDescription",
  dueDate: new Date(),
  id: "exampleId",
  resolution: "exampleResolution",
  resolutionDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    assignedTo: "exampleAssignedTo",
    category: "exampleCategory",
    createdAt: new Date(),
    creationDate: new Date(),
    description: "exampleDescription",
    dueDate: new Date(),
    id: "exampleId",
    resolution: "exampleResolution",
    resolutionDate: new Date(),
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  assignedTo: "exampleAssignedTo",
  category: "exampleCategory",
  createdAt: new Date(),
  creationDate: new Date(),
  description: "exampleDescription",
  dueDate: new Date(),
  id: "exampleId",
  resolution: "exampleResolution",
  resolutionDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  createTicket() {
    return CREATE_RESULT;
  },
  tickets: () => FIND_MANY_RESULT,
  ticket: ({ where }: { where: { id: string } }) => {
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

describe("Ticket", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TicketService,
          useValue: service,
        },
      ],
      controllers: [TicketController],
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

  test("POST /tickets", async () => {
    await request(app.getHttpServer())
      .post("/tickets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        resolutionDate: CREATE_RESULT.resolutionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /tickets", async () => {
    await request(app.getHttpServer())
      .get("/tickets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creationDate: FIND_MANY_RESULT[0].creationDate.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          resolutionDate: FIND_MANY_RESULT[0].resolutionDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /tickets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tickets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tickets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tickets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creationDate: FIND_ONE_RESULT.creationDate.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        resolutionDate: FIND_ONE_RESULT.resolutionDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /tickets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tickets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        resolutionDate: CREATE_RESULT.resolutionDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/tickets")
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
