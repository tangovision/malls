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
import {
  IsString,
  IsOptional,
  MaxLength,
  ValidateNested,
  IsDate,
} from "class-validator";
import { FeedbackUpdateManyWithoutVisitorsInput } from "./FeedbackUpdateManyWithoutVisitorsInput";
import { Type } from "class-transformer";
import { StoreReviewsUpdateManyWithoutVisitorsInput } from "./StoreReviewsUpdateManyWithoutVisitorsInput";

@InputType()
class VisitorUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  feedback?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeedbackUpdateManyWithoutVisitorsInput,
  })
  @ValidateNested()
  @Type(() => FeedbackUpdateManyWithoutVisitorsInput)
  @IsOptional()
  @Field(() => FeedbackUpdateManyWithoutVisitorsInput, {
    nullable: true,
  })
  feedbacks?: FeedbackUpdateManyWithoutVisitorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  preferences?: string | null;

  @ApiProperty({
    required: false,
    type: () => StoreReviewsUpdateManyWithoutVisitorsInput,
  })
  @ValidateNested()
  @Type(() => StoreReviewsUpdateManyWithoutVisitorsInput)
  @IsOptional()
  @Field(() => StoreReviewsUpdateManyWithoutVisitorsInput, {
    nullable: true,
  })
  storeReviewsItems?: StoreReviewsUpdateManyWithoutVisitorsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  visitDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  visitorId?: string | null;
}

export { VisitorUpdateInput as VisitorUpdateInput };