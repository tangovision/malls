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
import { CustomerFeedbackWhereInput } from "./CustomerFeedbackWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class CustomerFeedbackCountArgs {
  @ApiProperty({
    required: false,
    type: () => CustomerFeedbackWhereInput,
  })
  @Field(() => CustomerFeedbackWhereInput, { nullable: true })
  @Type(() => CustomerFeedbackWhereInput)
  where?: CustomerFeedbackWhereInput;
}

export { CustomerFeedbackCountArgs as CustomerFeedbackCountArgs };