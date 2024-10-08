/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StoreReviewsWhereUniqueInput } from "../../storeReviews/base/StoreReviewsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StoreReviewsUpdateManyWithoutStoresInput {
  @Field(() => [StoreReviewsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StoreReviewsWhereUniqueInput],
  })
  connect?: Array<StoreReviewsWhereUniqueInput>;

  @Field(() => [StoreReviewsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StoreReviewsWhereUniqueInput],
  })
  disconnect?: Array<StoreReviewsWhereUniqueInput>;

  @Field(() => [StoreReviewsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StoreReviewsWhereUniqueInput],
  })
  set?: Array<StoreReviewsWhereUniqueInput>;
}

export { StoreReviewsUpdateManyWithoutStoresInput as StoreReviewsUpdateManyWithoutStoresInput };
