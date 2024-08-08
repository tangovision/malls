/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceLevelAgreementCreateInput } from "./ServiceLevelAgreementCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateServiceLevelAgreementArgs {
  @ApiProperty({
    required: true,
    type: () => ServiceLevelAgreementCreateInput,
  })
  @ValidateNested()
  @Type(() => ServiceLevelAgreementCreateInput)
  @Field(() => ServiceLevelAgreementCreateInput, { nullable: false })
  data!: ServiceLevelAgreementCreateInput;
}

export { CreateServiceLevelAgreementArgs as CreateServiceLevelAgreementArgs };
