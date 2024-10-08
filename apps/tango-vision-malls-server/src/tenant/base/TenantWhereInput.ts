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
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { ContactLogListRelationFilter } from "../../contactLog/base/ContactLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaseAgreementListRelationFilter } from "../../leaseAgreement/base/LeaseAgreementListRelationFilter";
import { MaintenanceRequestListRelationFilter } from "../../maintenanceRequest/base/MaintenanceRequestListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentListRelationFilter } from "../../payment/base/PaymentListRelationFilter";
import { EnumTenantStatus } from "./EnumTenantStatus";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TicketListRelationFilter } from "../../ticket/base/TicketListRelationFilter";

@InputType()
class TenantWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  businessType?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ContactLogListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContactLogListRelationFilter)
  @IsOptional()
  @Field(() => ContactLogListRelationFilter, {
    nullable: true,
  })
  contactLogs?: ContactLogListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  contactNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  contactPerson?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  moveInDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentListRelationFilter)
  @IsOptional()
  @Field(() => PaymentListRelationFilter, {
    nullable: true,
  })
  payments?: PaymentListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumTenantStatus,
  })
  @IsEnum(EnumTenantStatus)
  @IsOptional()
  @Field(() => EnumTenantStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  tenantId?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TicketListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TicketListRelationFilter)
  @IsOptional()
  @Field(() => TicketListRelationFilter, {
    nullable: true,
  })
  tickets?: TicketListRelationFilter;
}

export { TenantWhereInput as TenantWhereInput };
