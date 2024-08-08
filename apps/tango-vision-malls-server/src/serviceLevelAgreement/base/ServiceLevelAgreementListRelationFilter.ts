/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceLevelAgreementWhereInput } from "./ServiceLevelAgreementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ServiceLevelAgreementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ServiceLevelAgreementWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceLevelAgreementWhereInput)
  @IsOptional()
  @Field(() => ServiceLevelAgreementWhereInput, {
    nullable: true,
  })
  every?: ServiceLevelAgreementWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceLevelAgreementWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceLevelAgreementWhereInput)
  @IsOptional()
  @Field(() => ServiceLevelAgreementWhereInput, {
    nullable: true,
  })
  some?: ServiceLevelAgreementWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceLevelAgreementWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceLevelAgreementWhereInput)
  @IsOptional()
  @Field(() => ServiceLevelAgreementWhereInput, {
    nullable: true,
  })
  none?: ServiceLevelAgreementWhereInput;
}
export { ServiceLevelAgreementListRelationFilter as ServiceLevelAgreementListRelationFilter };