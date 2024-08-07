import { Module } from "@nestjs/common";
import { TenantModule } from "./tenant/tenant.module";
import { SpaceModule } from "./space/space.module";
import { LeaseAgreementModule } from "./leaseAgreement/leaseAgreement.module";
import { MallModule } from "./mall/mall.module";
import { PaymentModule } from "./payment/payment.module";
import { MaintenanceRequestModule } from "./maintenanceRequest/maintenanceRequest.module";
import { ContactLogModule } from "./contactLog/contactLog.module";
import { UserModule } from "./user/user.module";
import { PromotionModule } from "./promotion/promotion.module";
import { VisitorModule } from "./visitor/visitor.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { EventModule } from "./event/event.module";
import { LoyaltyProgramModule } from "./loyaltyProgram/loyaltyProgram.module";
import { StoreModule } from "./store/store.module";
import { NewsletterSubscriptionModule } from "./newsletterSubscription/newsletterSubscription.module";
import { StoreReviewsModule } from "./storeReviews/storeReviews.module";
import { AdvertisementModule } from "./advertisement/advertisement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    TenantModule,
    SpaceModule,
    LeaseAgreementModule,
    MallModule,
    PaymentModule,
    MaintenanceRequestModule,
    ContactLogModule,
    UserModule,
    PromotionModule,
    VisitorModule,
    FeedbackModule,
    EventModule,
    LoyaltyProgramModule,
    StoreModule,
    NewsletterSubscriptionModule,
    StoreReviewsModule,
    AdvertisementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
