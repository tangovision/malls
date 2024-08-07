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
import { AdvertisementWhereUniqueInput } from "./AdvertisementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdvertisementUpdateInput } from "./AdvertisementUpdateInput";

@ArgsType()
class UpdateAdvertisementArgs {
  @ApiProperty({
    required: true,
    type: () => AdvertisementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdvertisementWhereUniqueInput)
  @Field(() => AdvertisementWhereUniqueInput, { nullable: false })
  where!: AdvertisementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AdvertisementUpdateInput,
  })
  @ValidateNested()
  @Type(() => AdvertisementUpdateInput)
  @Field(() => AdvertisementUpdateInput, { nullable: false })
  data!: AdvertisementUpdateInput;
}

export { UpdateAdvertisementArgs as UpdateAdvertisementArgs };
