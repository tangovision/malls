/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VisitorService } from "../visitor.service";
import { VisitorCreateInput } from "./VisitorCreateInput";
import { Visitor } from "./Visitor";
import { VisitorFindManyArgs } from "./VisitorFindManyArgs";
import { VisitorWhereUniqueInput } from "./VisitorWhereUniqueInput";
import { VisitorUpdateInput } from "./VisitorUpdateInput";
import { FeedbackFindManyArgs } from "../../feedback/base/FeedbackFindManyArgs";
import { Feedback } from "../../feedback/base/Feedback";
import { FeedbackWhereUniqueInput } from "../../feedback/base/FeedbackWhereUniqueInput";
import { StoreReviewsFindManyArgs } from "../../storeReviews/base/StoreReviewsFindManyArgs";
import { StoreReviews } from "../../storeReviews/base/StoreReviews";
import { StoreReviewsWhereUniqueInput } from "../../storeReviews/base/StoreReviewsWhereUniqueInput";

export class VisitorControllerBase {
  constructor(protected readonly service: VisitorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Visitor })
  @swagger.ApiBody({
    type: VisitorCreateInput,
  })
  async createVisitor(
    @common.Body() data: VisitorCreateInput
  ): Promise<Visitor> {
    return await this.service.createVisitor({
      data: data,
      select: {
        createdAt: true,
        email: true,
        feedback: true,
        id: true,
        name: true,
        phone: true,
        preferences: true,
        updatedAt: true,
        visitDate: true,
        visitorId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Visitor] })
  @ApiNestedQuery(VisitorFindManyArgs)
  async visitors(@common.Req() request: Request): Promise<Visitor[]> {
    const args = plainToClass(VisitorFindManyArgs, request.query);
    return this.service.visitors({
      ...args,
      select: {
        createdAt: true,
        email: true,
        feedback: true,
        id: true,
        name: true,
        phone: true,
        preferences: true,
        updatedAt: true,
        visitDate: true,
        visitorId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async visitor(
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Visitor | null> {
    const result = await this.service.visitor({
      where: params,
      select: {
        createdAt: true,
        email: true,
        feedback: true,
        id: true,
        name: true,
        phone: true,
        preferences: true,
        updatedAt: true,
        visitDate: true,
        visitorId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: VisitorUpdateInput,
  })
  async updateVisitor(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() data: VisitorUpdateInput
  ): Promise<Visitor | null> {
    try {
      return await this.service.updateVisitor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          feedback: true,
          id: true,
          name: true,
          phone: true,
          preferences: true,
          updatedAt: true,
          visitDate: true,
          visitorId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVisitor(
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Visitor | null> {
    try {
      return await this.service.deleteVisitor({
        where: params,
        select: {
          createdAt: true,
          email: true,
          feedback: true,
          id: true,
          name: true,
          phone: true,
          preferences: true,
          updatedAt: true,
          visitDate: true,
          visitorId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/feedbacks")
  @ApiNestedQuery(FeedbackFindManyArgs)
  async findFeedbacks(
    @common.Req() request: Request,
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Feedback[]> {
    const query = plainToClass(FeedbackFindManyArgs, request.query);
    const results = await this.service.findFeedbacks(params.id, {
      ...query,
      select: {
        comments: true,
        createdAt: true,
        date: true,
        feedbackId: true,
        id: true,
        rating: true,
        responseStatus: true,
        updatedAt: true,

        visitor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/feedbacks")
  async connectFeedbacks(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        connect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/feedbacks")
  async updateFeedbacks(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        set: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/feedbacks")
  async disconnectFeedbacks(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: FeedbackWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      feedbacks: {
        disconnect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/storeReviewsItems")
  @ApiNestedQuery(StoreReviewsFindManyArgs)
  async findStoreReviewsItems(
    @common.Req() request: Request,
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<StoreReviews[]> {
    const query = plainToClass(StoreReviewsFindManyArgs, request.query);
    const results = await this.service.findStoreReviewsItems(params.id, {
      ...query,
      select: {
        comments: true,
        createdAt: true,
        date: true,
        id: true,
        rating: true,
        reviewId: true,

        store: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        visitor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/storeReviewsItems")
  async connectStoreReviewsItems(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: StoreReviewsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      storeReviewsItems: {
        connect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/storeReviewsItems")
  async updateStoreReviewsItems(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: StoreReviewsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      storeReviewsItems: {
        set: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/storeReviewsItems")
  async disconnectStoreReviewsItems(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: StoreReviewsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      storeReviewsItems: {
        disconnect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }
}