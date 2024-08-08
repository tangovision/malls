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
import { CustomerFeedbackWhereInput } from "./CustomerFeedbackWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomerFeedbackListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomerFeedbackWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerFeedbackWhereInput)
  @IsOptional()
  @Field(() => CustomerFeedbackWhereInput, {
    nullable: true,
  })
  every?: CustomerFeedbackWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerFeedbackWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerFeedbackWhereInput)
  @IsOptional()
  @Field(() => CustomerFeedbackWhereInput, {
    nullable: true,
  })
  some?: CustomerFeedbackWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomerFeedbackWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomerFeedbackWhereInput)
  @IsOptional()
  @Field(() => CustomerFeedbackWhereInput, {
    nullable: true,
  })
  none?: CustomerFeedbackWhereInput;
}
export { CustomerFeedbackListRelationFilter as CustomerFeedbackListRelationFilter };