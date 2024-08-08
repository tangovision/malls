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
import { KnowledgeBaseArticleController } from "../knowledgeBaseArticle.controller";
import { KnowledgeBaseArticleService } from "../knowledgeBaseArticle.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  author: "exampleAuthor",
  categoryId: "exampleCategoryId",
  content: "exampleContent",
  createdAt: new Date(),
  creationDate: new Date(),
  id: "exampleId",
  lastUpdatedDate: new Date(),
  tags: "exampleTags",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  author: "exampleAuthor",
  categoryId: "exampleCategoryId",
  content: "exampleContent",
  createdAt: new Date(),
  creationDate: new Date(),
  id: "exampleId",
  lastUpdatedDate: new Date(),
  tags: "exampleTags",
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    author: "exampleAuthor",
    categoryId: "exampleCategoryId",
    content: "exampleContent",
    createdAt: new Date(),
    creationDate: new Date(),
    id: "exampleId",
    lastUpdatedDate: new Date(),
    tags: "exampleTags",
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  author: "exampleAuthor",
  categoryId: "exampleCategoryId",
  content: "exampleContent",
  createdAt: new Date(),
  creationDate: new Date(),
  id: "exampleId",
  lastUpdatedDate: new Date(),
  tags: "exampleTags",
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  createKnowledgeBaseArticle() {
    return CREATE_RESULT;
  },
  knowledgeBaseArticles: () => FIND_MANY_RESULT,
  knowledgeBaseArticle: ({ where }: { where: { id: string } }) => {
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

describe("KnowledgeBaseArticle", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: KnowledgeBaseArticleService,
          useValue: service,
        },
      ],
      controllers: [KnowledgeBaseArticleController],
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

  test("POST /knowledgeBaseArticles", async () => {
    await request(app.getHttpServer())
      .post("/knowledgeBaseArticles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        lastUpdatedDate: CREATE_RESULT.lastUpdatedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /knowledgeBaseArticles", async () => {
    await request(app.getHttpServer())
      .get("/knowledgeBaseArticles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          creationDate: FIND_MANY_RESULT[0].creationDate.toISOString(),
          lastUpdatedDate: FIND_MANY_RESULT[0].lastUpdatedDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /knowledgeBaseArticles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/knowledgeBaseArticles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /knowledgeBaseArticles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/knowledgeBaseArticles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        creationDate: FIND_ONE_RESULT.creationDate.toISOString(),
        lastUpdatedDate: FIND_ONE_RESULT.lastUpdatedDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /knowledgeBaseArticles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/knowledgeBaseArticles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        creationDate: CREATE_RESULT.creationDate.toISOString(),
        lastUpdatedDate: CREATE_RESULT.lastUpdatedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/knowledgeBaseArticles")
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
