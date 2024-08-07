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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumSpaceAvailability } from "./EnumSpaceAvailability";
import { StringFilter } from "../../util/StringFilter";
import { LeaseAgreementListRelationFilter } from "../../leaseAgreement/base/LeaseAgreementListRelationFilter";
import { MaintenanceRequestListRelationFilter } from "../../maintenanceRequest/base/MaintenanceRequestListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

@InputType()
class SpaceWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  amenities?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumSpaceAvailability,
  })
  @IsEnum(EnumSpaceAvailability)
  @IsOptional()
  @Field(() => EnumSpaceAvailability, {
    nullable: true,
  })
  availability?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LeaseAgreementListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LeaseAgreementListRelationFilter)
  @IsOptional()
  @Field(() => LeaseAgreementListRelationFilter, {
    nullable: true,
  })
  leaseAgreements?: LeaseAgreementListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  location?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => MaintenanceRequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MaintenanceRequestListRelationFilter)
  @IsOptional()
  @Field(() => MaintenanceRequestListRelationFilter, {
    nullable: true,
  })
  maintenanceRequests?: MaintenanceRequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  monthlyRent?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  size?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  spaceId?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  typeField?: StringNullableFilter;
}

export { SpaceWhereInput as SpaceWhereInput };
