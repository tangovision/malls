import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerFeedbackServiceBase } from "./base/customerFeedback.service.base";

@Injectable()
export class CustomerFeedbackService extends CustomerFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
