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
import { ContactLogWhereInput } from "./ContactLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContactLogOrderByInput } from "./ContactLogOrderByInput";

@ArgsType()
class ContactLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContactLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContactLogWhereInput, { nullable: true })
  @Type(() => ContactLogWhereInput)
  where?: ContactLogWhereInput;

  @ApiProperty({
    required: false,
    type: [ContactLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContactLogOrderByInput], { nullable: true })
  @Type(() => ContactLogOrderByInput)
  orderBy?: Array<ContactLogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContactLogFindManyArgs as ContactLogFindManyArgs };