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
import { MallWhereInput } from "./MallWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MallOrderByInput } from "./MallOrderByInput";

@ArgsType()
class MallFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MallWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MallWhereInput, { nullable: true })
  @Type(() => MallWhereInput)
  where?: MallWhereInput;

  @ApiProperty({
    required: false,
    type: [MallOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MallOrderByInput], { nullable: true })
  @Type(() => MallOrderByInput)
  orderBy?: Array<MallOrderByInput>;

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

export { MallFindManyArgs as MallFindManyArgs };
