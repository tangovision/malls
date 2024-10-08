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
import { ServiceRequestService } from "../serviceRequest.service";
import { ServiceRequestCreateInput } from "./ServiceRequestCreateInput";
import { ServiceRequest } from "./ServiceRequest";
import { ServiceRequestFindManyArgs } from "./ServiceRequestFindManyArgs";
import { ServiceRequestWhereUniqueInput } from "./ServiceRequestWhereUniqueInput";
import { ServiceRequestUpdateInput } from "./ServiceRequestUpdateInput";

export class ServiceRequestControllerBase {
  constructor(protected readonly service: ServiceRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ServiceRequest })
  @swagger.ApiBody({
    type: ServiceRequestCreateInput,
  })
  async createServiceRequest(
    @common.Body() data: ServiceRequestCreateInput
  ): Promise<ServiceRequest> {
    return await this.service.createServiceRequest({
      data: data,
      select: {
        assignedTo: true,
        completionDate: true,
        createdAt: true,
        creationDate: true,
        description: true,
        id: true,
        requestType: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ServiceRequest] })
  @ApiNestedQuery(ServiceRequestFindManyArgs)
  async serviceRequests(
    @common.Req() request: Request
  ): Promise<ServiceRequest[]> {
    const args = plainToClass(ServiceRequestFindManyArgs, request.query);
    return this.service.serviceRequests({
      ...args,
      select: {
        assignedTo: true,
        completionDate: true,
        createdAt: true,
        creationDate: true,
        description: true,
        id: true,
        requestType: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ServiceRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async serviceRequest(
    @common.Param() params: ServiceRequestWhereUniqueInput
  ): Promise<ServiceRequest | null> {
    const result = await this.service.serviceRequest({
      where: params,
      select: {
        assignedTo: true,
        completionDate: true,
        createdAt: true,
        creationDate: true,
        description: true,
        id: true,
        requestType: true,
        status: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: ServiceRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ServiceRequestUpdateInput,
  })
  async updateServiceRequest(
    @common.Param() params: ServiceRequestWhereUniqueInput,
    @common.Body() data: ServiceRequestUpdateInput
  ): Promise<ServiceRequest | null> {
    try {
      return await this.service.updateServiceRequest({
        where: params,
        data: data,
        select: {
          assignedTo: true,
          completionDate: true,
          createdAt: true,
          creationDate: true,
          description: true,
          id: true,
          requestType: true,
          status: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: ServiceRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteServiceRequest(
    @common.Param() params: ServiceRequestWhereUniqueInput
  ): Promise<ServiceRequest | null> {
    try {
      return await this.service.deleteServiceRequest({
        where: params,
        select: {
          assignedTo: true,
          completionDate: true,
          createdAt: true,
          creationDate: true,
          description: true,
          id: true,
          requestType: true,
          status: true,
          updatedAt: true,
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
}
