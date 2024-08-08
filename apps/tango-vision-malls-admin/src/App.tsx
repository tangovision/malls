import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TenantList } from "./tenant/TenantList";
import { TenantCreate } from "./tenant/TenantCreate";
import { TenantEdit } from "./tenant/TenantEdit";
import { TenantShow } from "./tenant/TenantShow";
import { SpaceList } from "./space/SpaceList";
import { SpaceCreate } from "./space/SpaceCreate";
import { SpaceEdit } from "./space/SpaceEdit";
import { SpaceShow } from "./space/SpaceShow";
import { LeaseAgreementList } from "./leaseAgreement/LeaseAgreementList";
import { LeaseAgreementCreate } from "./leaseAgreement/LeaseAgreementCreate";
import { LeaseAgreementEdit } from "./leaseAgreement/LeaseAgreementEdit";
import { LeaseAgreementShow } from "./leaseAgreement/LeaseAgreementShow";
import { MallList } from "./mall/MallList";
import { MallCreate } from "./mall/MallCreate";
import { MallEdit } from "./mall/MallEdit";
import { MallShow } from "./mall/MallShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { MaintenanceRequestList } from "./maintenanceRequest/MaintenanceRequestList";
import { MaintenanceRequestCreate } from "./maintenanceRequest/MaintenanceRequestCreate";
import { MaintenanceRequestEdit } from "./maintenanceRequest/MaintenanceRequestEdit";
import { MaintenanceRequestShow } from "./maintenanceRequest/MaintenanceRequestShow";
import { ContactLogList } from "./contactLog/ContactLogList";
import { ContactLogCreate } from "./contactLog/ContactLogCreate";
import { ContactLogEdit } from "./contactLog/ContactLogEdit";
import { ContactLogShow } from "./contactLog/ContactLogShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PromotionList } from "./promotion/PromotionList";
import { PromotionCreate } from "./promotion/PromotionCreate";
import { PromotionEdit } from "./promotion/PromotionEdit";
import { PromotionShow } from "./promotion/PromotionShow";
import { VisitorList } from "./visitor/VisitorList";
import { VisitorCreate } from "./visitor/VisitorCreate";
import { VisitorEdit } from "./visitor/VisitorEdit";
import { VisitorShow } from "./visitor/VisitorShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { LoyaltyProgramList } from "./loyaltyProgram/LoyaltyProgramList";
import { LoyaltyProgramCreate } from "./loyaltyProgram/LoyaltyProgramCreate";
import { LoyaltyProgramEdit } from "./loyaltyProgram/LoyaltyProgramEdit";
import { LoyaltyProgramShow } from "./loyaltyProgram/LoyaltyProgramShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { NewsletterSubscriptionList } from "./newsletterSubscription/NewsletterSubscriptionList";
import { NewsletterSubscriptionCreate } from "./newsletterSubscription/NewsletterSubscriptionCreate";
import { NewsletterSubscriptionEdit } from "./newsletterSubscription/NewsletterSubscriptionEdit";
import { NewsletterSubscriptionShow } from "./newsletterSubscription/NewsletterSubscriptionShow";
import { StoreReviewsList } from "./storeReviews/StoreReviewsList";
import { StoreReviewsCreate } from "./storeReviews/StoreReviewsCreate";
import { StoreReviewsEdit } from "./storeReviews/StoreReviewsEdit";
import { StoreReviewsShow } from "./storeReviews/StoreReviewsShow";
import { AdvertisementList } from "./advertisement/AdvertisementList";
import { AdvertisementCreate } from "./advertisement/AdvertisementCreate";
import { AdvertisementEdit } from "./advertisement/AdvertisementEdit";
import { AdvertisementShow } from "./advertisement/AdvertisementShow";
import { TicketList } from "./ticket/TicketList";
import { TicketCreate } from "./ticket/TicketCreate";
import { TicketEdit } from "./ticket/TicketEdit";
import { TicketShow } from "./ticket/TicketShow";
import { SupportStaffList } from "./supportStaff/SupportStaffList";
import { SupportStaffCreate } from "./supportStaff/SupportStaffCreate";
import { SupportStaffEdit } from "./supportStaff/SupportStaffEdit";
import { SupportStaffShow } from "./supportStaff/SupportStaffShow";
import { CustomerFeedbackList } from "./customerFeedback/CustomerFeedbackList";
import { CustomerFeedbackCreate } from "./customerFeedback/CustomerFeedbackCreate";
import { CustomerFeedbackEdit } from "./customerFeedback/CustomerFeedbackEdit";
import { CustomerFeedbackShow } from "./customerFeedback/CustomerFeedbackShow";
import { IssueCategoryList } from "./issueCategory/IssueCategoryList";
import { IssueCategoryCreate } from "./issueCategory/IssueCategoryCreate";
import { IssueCategoryEdit } from "./issueCategory/IssueCategoryEdit";
import { IssueCategoryShow } from "./issueCategory/IssueCategoryShow";
import { KnowledgeBaseArticleList } from "./knowledgeBaseArticle/KnowledgeBaseArticleList";
import { KnowledgeBaseArticleCreate } from "./knowledgeBaseArticle/KnowledgeBaseArticleCreate";
import { KnowledgeBaseArticleEdit } from "./knowledgeBaseArticle/KnowledgeBaseArticleEdit";
import { KnowledgeBaseArticleShow } from "./knowledgeBaseArticle/KnowledgeBaseArticleShow";
import { ServiceLevelAgreementList } from "./serviceLevelAgreement/ServiceLevelAgreementList";
import { ServiceLevelAgreementCreate } from "./serviceLevelAgreement/ServiceLevelAgreementCreate";
import { ServiceLevelAgreementEdit } from "./serviceLevelAgreement/ServiceLevelAgreementEdit";
import { ServiceLevelAgreementShow } from "./serviceLevelAgreement/ServiceLevelAgreementShow";
import { ServiceRequestList } from "./serviceRequest/ServiceRequestList";
import { ServiceRequestCreate } from "./serviceRequest/ServiceRequestCreate";
import { ServiceRequestEdit } from "./serviceRequest/ServiceRequestEdit";
import { ServiceRequestShow } from "./serviceRequest/ServiceRequestShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Tango.Vision Malls"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Tenant"
          list={TenantList}
          edit={TenantEdit}
          create={TenantCreate}
          show={TenantShow}
        />
        <Resource
          name="Space"
          list={SpaceList}
          edit={SpaceEdit}
          create={SpaceCreate}
          show={SpaceShow}
        />
        <Resource
          name="LeaseAgreement"
          list={LeaseAgreementList}
          edit={LeaseAgreementEdit}
          create={LeaseAgreementCreate}
          show={LeaseAgreementShow}
        />
        <Resource
          name="Mall"
          list={MallList}
          edit={MallEdit}
          create={MallCreate}
          show={MallShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="MaintenanceRequest"
          list={MaintenanceRequestList}
          edit={MaintenanceRequestEdit}
          create={MaintenanceRequestCreate}
          show={MaintenanceRequestShow}
        />
        <Resource
          name="ContactLog"
          list={ContactLogList}
          edit={ContactLogEdit}
          create={ContactLogCreate}
          show={ContactLogShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Promotion"
          list={PromotionList}
          edit={PromotionEdit}
          create={PromotionCreate}
          show={PromotionShow}
        />
        <Resource
          name="Visitor"
          list={VisitorList}
          edit={VisitorEdit}
          create={VisitorCreate}
          show={VisitorShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="LoyaltyProgram"
          list={LoyaltyProgramList}
          edit={LoyaltyProgramEdit}
          create={LoyaltyProgramCreate}
          show={LoyaltyProgramShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="NewsletterSubscription"
          list={NewsletterSubscriptionList}
          edit={NewsletterSubscriptionEdit}
          create={NewsletterSubscriptionCreate}
          show={NewsletterSubscriptionShow}
        />
        <Resource
          name="StoreReviews"
          list={StoreReviewsList}
          edit={StoreReviewsEdit}
          create={StoreReviewsCreate}
          show={StoreReviewsShow}
        />
        <Resource
          name="Advertisement"
          list={AdvertisementList}
          edit={AdvertisementEdit}
          create={AdvertisementCreate}
          show={AdvertisementShow}
        />
        <Resource
          name="Ticket"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
          show={TicketShow}
        />
        <Resource
          name="SupportStaff"
          list={SupportStaffList}
          edit={SupportStaffEdit}
          create={SupportStaffCreate}
          show={SupportStaffShow}
        />
        <Resource
          name="CustomerFeedback"
          list={CustomerFeedbackList}
          edit={CustomerFeedbackEdit}
          create={CustomerFeedbackCreate}
          show={CustomerFeedbackShow}
        />
        <Resource
          name="IssueCategory"
          list={IssueCategoryList}
          edit={IssueCategoryEdit}
          create={IssueCategoryCreate}
          show={IssueCategoryShow}
        />
        <Resource
          name="KnowledgeBaseArticle"
          list={KnowledgeBaseArticleList}
          edit={KnowledgeBaseArticleEdit}
          create={KnowledgeBaseArticleCreate}
          show={KnowledgeBaseArticleShow}
        />
        <Resource
          name="ServiceLevelAgreement"
          list={ServiceLevelAgreementList}
          edit={ServiceLevelAgreementEdit}
          create={ServiceLevelAgreementCreate}
          show={ServiceLevelAgreementShow}
        />
        <Resource
          name="ServiceRequest"
          list={ServiceRequestList}
          edit={ServiceRequestEdit}
          create={ServiceRequestCreate}
          show={ServiceRequestShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
      </Admin>
    </div>
  );
};

export default App;
