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
import { ServiceLevelAgreementWhereUniqueInput } from "./ServiceLevelAgreementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ServiceLevelAgreementUpdateInput } from "./ServiceLevelAgreementUpdateInput";

@ArgsType()
class UpdateServiceLevelAgreementArgs {
  @ApiProperty({
    required: true,
    type: () => ServiceLevelAgreementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceLevelAgreementWhereUniqueInput)
  @Field(() => ServiceLevelAgreementWhereUniqueInput, { nullable: false })
  where!: ServiceLevelAgreementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ServiceLevelAgreementUpdateInput,
  })
  @ValidateNested()
  @Type(() => ServiceLevelAgreementUpdateInput)
  @Field(() => ServiceLevelAgreementUpdateInput, { nullable: false })
  data!: ServiceLevelAgreementUpdateInput;
}

export { UpdateServiceLevelAgreementArgs as UpdateServiceLevelAgreementArgs };
