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
import { ContactLogWhereInput } from "./ContactLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContactLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContactLogWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactLogWhereInput)
  @IsOptional()
  @Field(() => ContactLogWhereInput, {
    nullable: true,
  })
  every?: ContactLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactLogWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactLogWhereInput)
  @IsOptional()
  @Field(() => ContactLogWhereInput, {
    nullable: true,
  })
  some?: ContactLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactLogWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactLogWhereInput)
  @IsOptional()
  @Field(() => ContactLogWhereInput, {
    nullable: true,
  })
  none?: ContactLogWhereInput;
}
export { ContactLogListRelationFilter as ContactLogListRelationFilter };
