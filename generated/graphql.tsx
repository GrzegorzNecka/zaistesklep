import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    DateTime: any;
    Hex: any;
    Json: any;
    Long: any;
    RGBAHue: any;
    RGBATransparency: any;
    RichTextAST: any;
};

export type Account = Node & {
    __typename?: "Account";
    accountVariant?: Maybe<AccountVariant>;
    cart?: Maybe<Cart>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Account>;
    email: Scalars["String"];
    /** List of Account versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    order?: Maybe<Order>;
    password: Scalars["String"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type AccountAccountVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountCartArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type AccountHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type AccountOrderArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AccountUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: AccountWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccountConnection = {
    __typename?: "AccountConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<AccountEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type AccountCreateInput = {
    accountVariant?: InputMaybe<AccountVariantCreateOneInlineInput>;
    cart?: InputMaybe<CartCreateOneInlineInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    order?: InputMaybe<OrderCreateOneInlineInput>;
    password: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AccountCreateManyInlineInput = {
    /** Connect multiple existing Account documents */
    connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
    /** Create and connect multiple existing Account documents */
    create?: InputMaybe<Array<AccountCreateInput>>;
};

export type AccountCreateOneInlineInput = {
    /** Connect one existing Account document */
    connect?: InputMaybe<AccountWhereUniqueInput>;
    /** Create and connect one Account document */
    create?: InputMaybe<AccountCreateInput>;
};

/** An edge in a connection. */
export type AccountEdge = {
    __typename?: "AccountEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Account;
};

/** Identifies documents */
export type AccountManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AccountWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AccountWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AccountWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    accountVariant?: InputMaybe<AccountVariantWhereInput>;
    cart?: InputMaybe<CartWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    email?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    email_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    email_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    email_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    email_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    email_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    email_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    email_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    order?: InputMaybe<OrderWhereInput>;
    password?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    password_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    password_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    password_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    password_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    password_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    password_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    password_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    password_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    password_starts_with?: InputMaybe<Scalars["String"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AccountOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PasswordAsc = "password_ASC",
    PasswordDesc = "password_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type AccountUpdateInput = {
    accountVariant?: InputMaybe<AccountVariantUpdateOneInlineInput>;
    cart?: InputMaybe<CartUpdateOneInlineInput>;
    email?: InputMaybe<Scalars["String"]>;
    order?: InputMaybe<OrderUpdateOneInlineInput>;
    password?: InputMaybe<Scalars["String"]>;
};

export type AccountUpdateManyInlineInput = {
    /** Connect multiple existing Account documents */
    connect?: InputMaybe<Array<AccountConnectInput>>;
    /** Create and connect multiple Account documents */
    create?: InputMaybe<Array<AccountCreateInput>>;
    /** Delete multiple Account documents */
    delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
    /** Disconnect multiple Account documents */
    disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Account documents */
    set?: InputMaybe<Array<AccountWhereUniqueInput>>;
    /** Update multiple Account documents */
    update?: InputMaybe<Array<AccountUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Account documents */
    upsert?: InputMaybe<Array<AccountUpsertWithNestedWhereUniqueInput>>;
};

export type AccountUpdateManyInput = {
    password?: InputMaybe<Scalars["String"]>;
};

export type AccountUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: AccountUpdateManyInput;
    /** Document search */
    where: AccountWhereInput;
};

export type AccountUpdateOneInlineInput = {
    /** Connect existing Account document */
    connect?: InputMaybe<AccountWhereUniqueInput>;
    /** Create and connect one Account document */
    create?: InputMaybe<AccountCreateInput>;
    /** Delete currently connected Account document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Account document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Account document */
    update?: InputMaybe<AccountUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Account document */
    upsert?: InputMaybe<AccountUpsertWithNestedWhereUniqueInput>;
};

export type AccountUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: AccountUpdateInput;
    /** Unique document search */
    where: AccountWhereUniqueInput;
};

export type AccountUpsertInput = {
    /** Create document if it didn't exist */
    create: AccountCreateInput;
    /** Update document if it exists */
    update: AccountUpdateInput;
};

export type AccountUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: AccountUpsertInput;
    /** Unique document search */
    where: AccountWhereUniqueInput;
};

export type AccountVariant = Node & {
    __typename?: "AccountVariant";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<AccountVariant>;
    /** List of AccountVariant versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<AccountVariant>;
    name: Scalars["String"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    role?: Maybe<Role>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type AccountVariantCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type AccountVariantCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountVariantDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type AccountVariantHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type AccountVariantLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

export type AccountVariantPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type AccountVariantPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountVariantScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AccountVariantUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type AccountVariantUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type AccountVariantConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: AccountVariantWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccountVariantConnection = {
    __typename?: "AccountVariantConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<AccountVariantEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type AccountVariantCreateInput = {
    cl7osjtn93iep01uh9hk73c54?: InputMaybe<AccountCreateManyInlineInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<AccountVariantCreateLocalizationsInput>;
    /** name input for default locale (en) */
    name: Scalars["String"];
    role?: InputMaybe<Role>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AccountVariantCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    name: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AccountVariantCreateLocalizationInput = {
    /** Localization input */
    data: AccountVariantCreateLocalizationDataInput;
    locale: Locale;
};

export type AccountVariantCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<AccountVariantCreateLocalizationInput>>;
};

export type AccountVariantCreateManyInlineInput = {
    /** Connect multiple existing AccountVariant documents */
    connect?: InputMaybe<Array<AccountVariantWhereUniqueInput>>;
    /** Create and connect multiple existing AccountVariant documents */
    create?: InputMaybe<Array<AccountVariantCreateInput>>;
};

export type AccountVariantCreateOneInlineInput = {
    /** Connect one existing AccountVariant document */
    connect?: InputMaybe<AccountVariantWhereUniqueInput>;
    /** Create and connect one AccountVariant document */
    create?: InputMaybe<AccountVariantCreateInput>;
};

/** An edge in a connection. */
export type AccountVariantEdge = {
    __typename?: "AccountVariantEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: AccountVariant;
};

/** Identifies documents */
export type AccountVariantManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AccountVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AccountVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AccountVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    role?: InputMaybe<Role>;
    /** All values that are contained in given list. */
    role_in?: InputMaybe<Array<InputMaybe<Role>>>;
    /** All values that are not equal to given value. */
    role_not?: InputMaybe<Role>;
    /** All values that are not contained in given list. */
    role_not_in?: InputMaybe<Array<InputMaybe<Role>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AccountVariantOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    RoleAsc = "role_ASC",
    RoleDesc = "role_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type AccountVariantUpdateInput = {
    cl7osjtn93iep01uh9hk73c54?: InputMaybe<AccountUpdateManyInlineInput>;
    /** Manage document localizations */
    localizations?: InputMaybe<AccountVariantUpdateLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    role?: InputMaybe<Role>;
};

export type AccountVariantUpdateLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type AccountVariantUpdateLocalizationInput = {
    data: AccountVariantUpdateLocalizationDataInput;
    locale: Locale;
};

export type AccountVariantUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<AccountVariantCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<AccountVariantUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<AccountVariantUpsertLocalizationInput>>;
};

export type AccountVariantUpdateManyInlineInput = {
    /** Connect multiple existing AccountVariant documents */
    connect?: InputMaybe<Array<AccountVariantConnectInput>>;
    /** Create and connect multiple AccountVariant documents */
    create?: InputMaybe<Array<AccountVariantCreateInput>>;
    /** Delete multiple AccountVariant documents */
    delete?: InputMaybe<Array<AccountVariantWhereUniqueInput>>;
    /** Disconnect multiple AccountVariant documents */
    disconnect?: InputMaybe<Array<AccountVariantWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing AccountVariant documents */
    set?: InputMaybe<Array<AccountVariantWhereUniqueInput>>;
    /** Update multiple AccountVariant documents */
    update?: InputMaybe<Array<AccountVariantUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple AccountVariant documents */
    upsert?: InputMaybe<Array<AccountVariantUpsertWithNestedWhereUniqueInput>>;
};

export type AccountVariantUpdateManyInput = {
    /** Optional updates to localizations */
    localizations?: InputMaybe<AccountVariantUpdateManyLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    role?: InputMaybe<Role>;
};

export type AccountVariantUpdateManyLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type AccountVariantUpdateManyLocalizationInput = {
    data: AccountVariantUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type AccountVariantUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<AccountVariantUpdateManyLocalizationInput>>;
};

export type AccountVariantUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: AccountVariantUpdateManyInput;
    /** Document search */
    where: AccountVariantWhereInput;
};

export type AccountVariantUpdateOneInlineInput = {
    /** Connect existing AccountVariant document */
    connect?: InputMaybe<AccountVariantWhereUniqueInput>;
    /** Create and connect one AccountVariant document */
    create?: InputMaybe<AccountVariantCreateInput>;
    /** Delete currently connected AccountVariant document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected AccountVariant document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single AccountVariant document */
    update?: InputMaybe<AccountVariantUpdateWithNestedWhereUniqueInput>;
    /** Upsert single AccountVariant document */
    upsert?: InputMaybe<AccountVariantUpsertWithNestedWhereUniqueInput>;
};

export type AccountVariantUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: AccountVariantUpdateInput;
    /** Unique document search */
    where: AccountVariantWhereUniqueInput;
};

export type AccountVariantUpsertInput = {
    /** Create document if it didn't exist */
    create: AccountVariantCreateInput;
    /** Update document if it exists */
    update: AccountVariantUpdateInput;
};

export type AccountVariantUpsertLocalizationInput = {
    create: AccountVariantCreateLocalizationDataInput;
    locale: Locale;
    update: AccountVariantUpdateLocalizationDataInput;
};

export type AccountVariantUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: AccountVariantUpsertInput;
    /** Unique document search */
    where: AccountVariantWhereUniqueInput;
};

/** Identifies documents */
export type AccountVariantWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AccountVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AccountVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AccountVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    role?: InputMaybe<Role>;
    /** All values that are contained in given list. */
    role_in?: InputMaybe<Array<InputMaybe<Role>>>;
    /** All values that are not equal to given value. */
    role_not?: InputMaybe<Role>;
    /** All values that are not contained in given list. */
    role_not_in?: InputMaybe<Array<InputMaybe<Role>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References AccountVariant record uniquely */
export type AccountVariantWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Identifies documents */
export type AccountWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AccountWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AccountWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AccountWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    accountVariant?: InputMaybe<AccountVariantWhereInput>;
    cart?: InputMaybe<CartWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    email?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    email_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    email_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    email_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    email_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    email_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    email_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    email_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    order?: InputMaybe<OrderWhereInput>;
    password?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    password_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    password_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    password_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    password_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    password_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    password_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    password_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    password_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    password_starts_with?: InputMaybe<Scalars["String"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Account record uniquely */
export type AccountWhereUniqueInput = {
    email?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
};

export type Aggregate = {
    __typename?: "Aggregate";
    count: Scalars["Int"];
};

/** Asset system model */
export type Asset = Node & {
    __typename?: "Asset";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Asset>;
    /** The file name */
    fileName: Scalars["String"];
    /** The file handle */
    handle: Scalars["String"];
    /** The height of the file */
    height?: Maybe<Scalars["Float"]>;
    /** List of Asset versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Asset>;
    /** The mime type of the file */
    mimeType?: Maybe<Scalars["String"]>;
    productImages: Array<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** The file size */
    size?: Maybe<Scalars["Float"]>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars["String"];
    /** The file width */
    width?: Maybe<Scalars["Float"]>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

/** Asset system model */
export type AssetProductImagesArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ProductOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductWhereInput>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
    transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
    __typename?: "AssetConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<AssetEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type AssetCreateInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    fileName: Scalars["String"];
    handle: Scalars["String"];
    height?: InputMaybe<Scalars["Float"]>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<AssetCreateLocalizationsInput>;
    mimeType?: InputMaybe<Scalars["String"]>;
    productImages?: InputMaybe<ProductCreateManyInlineInput>;
    size?: InputMaybe<Scalars["Float"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    fileName: Scalars["String"];
    handle: Scalars["String"];
    height?: InputMaybe<Scalars["Float"]>;
    mimeType?: InputMaybe<Scalars["String"]>;
    size?: InputMaybe<Scalars["Float"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    width?: InputMaybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationInput = {
    /** Localization input */
    data: AssetCreateLocalizationDataInput;
    locale: Locale;
};

export type AssetCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Create and connect multiple existing Asset documents */
    create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
    /** Connect one existing Asset document */
    connect?: InputMaybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
    __typename?: "AssetEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    productImages_every?: InputMaybe<ProductWhereInput>;
    productImages_none?: InputMaybe<ProductWhereInput>;
    productImages_some?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    FileNameAsc = "fileName_ASC",
    FileNameDesc = "fileName_DESC",
    HandleAsc = "handle_ASC",
    HandleDesc = "handle_DESC",
    HeightAsc = "height_ASC",
    HeightDesc = "height_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    MimeTypeAsc = "mimeType_ASC",
    MimeTypeDesc = "mimeType_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    SizeAsc = "size_ASC",
    SizeDesc = "size_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
    WidthAsc = "width_ASC",
    WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
    document?: InputMaybe<DocumentTransformationInput>;
    image?: InputMaybe<ImageTransformationInput>;
    /** Pass true if you want to validate the passed transformation parameters */
    validateOptions?: InputMaybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
    fileName?: InputMaybe<Scalars["String"]>;
    handle?: InputMaybe<Scalars["String"]>;
    height?: InputMaybe<Scalars["Float"]>;
    /** Manage document localizations */
    localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
    mimeType?: InputMaybe<Scalars["String"]>;
    productImages?: InputMaybe<ProductUpdateManyInlineInput>;
    size?: InputMaybe<Scalars["Float"]>;
    width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationDataInput = {
    fileName?: InputMaybe<Scalars["String"]>;
    handle?: InputMaybe<Scalars["String"]>;
    height?: InputMaybe<Scalars["Float"]>;
    mimeType?: InputMaybe<Scalars["String"]>;
    size?: InputMaybe<Scalars["Float"]>;
    width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationInput = {
    data: AssetUpdateLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
    /** Connect multiple existing Asset documents */
    connect?: InputMaybe<Array<AssetConnectInput>>;
    /** Create and connect multiple Asset documents */
    create?: InputMaybe<Array<AssetCreateInput>>;
    /** Delete multiple Asset documents */
    delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Disconnect multiple Asset documents */
    disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Asset documents */
    set?: InputMaybe<Array<AssetWhereUniqueInput>>;
    /** Update multiple Asset documents */
    update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Asset documents */
    upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
    fileName?: InputMaybe<Scalars["String"]>;
    height?: InputMaybe<Scalars["Float"]>;
    /** Optional updates to localizations */
    localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
    mimeType?: InputMaybe<Scalars["String"]>;
    size?: InputMaybe<Scalars["Float"]>;
    width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
    fileName?: InputMaybe<Scalars["String"]>;
    height?: InputMaybe<Scalars["Float"]>;
    mimeType?: InputMaybe<Scalars["String"]>;
    size?: InputMaybe<Scalars["Float"]>;
    width?: InputMaybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationInput = {
    data: AssetUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: AssetUpdateManyInput;
    /** Document search */
    where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
    /** Connect existing Asset document */
    connect?: InputMaybe<AssetWhereUniqueInput>;
    /** Create and connect one Asset document */
    create?: InputMaybe<AssetCreateInput>;
    /** Delete currently connected Asset document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Asset document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Asset document */
    update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Asset document */
    upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: AssetUpdateInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
    /** Create document if it didn't exist */
    create: AssetCreateInput;
    /** Update document if it exists */
    update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
    create: AssetCreateLocalizationDataInput;
    locale: Locale;
    update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: AssetUpsertInput;
    /** Unique document search */
    where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<AssetWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<AssetWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    fileName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    fileName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    fileName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    fileName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    fileName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    fileName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    fileName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    fileName_starts_with?: InputMaybe<Scalars["String"]>;
    handle?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    handle_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    handle_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    handle_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    handle_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    handle_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    handle_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    handle_starts_with?: InputMaybe<Scalars["String"]>;
    height?: InputMaybe<Scalars["Float"]>;
    /** All values greater than the given value. */
    height_gt?: InputMaybe<Scalars["Float"]>;
    /** All values greater than or equal the given value. */
    height_gte?: InputMaybe<Scalars["Float"]>;
    /** All values that are contained in given list. */
    height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    /** All values less than the given value. */
    height_lt?: InputMaybe<Scalars["Float"]>;
    /** All values less than or equal the given value. */
    height_lte?: InputMaybe<Scalars["Float"]>;
    /** All values that are not equal to given value. */
    height_not?: InputMaybe<Scalars["Float"]>;
    /** All values that are not contained in given list. */
    height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    mimeType?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    mimeType_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    mimeType_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    mimeType_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    mimeType_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    mimeType_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    mimeType_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    mimeType_starts_with?: InputMaybe<Scalars["String"]>;
    productImages_every?: InputMaybe<ProductWhereInput>;
    productImages_none?: InputMaybe<ProductWhereInput>;
    productImages_some?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    size?: InputMaybe<Scalars["Float"]>;
    /** All values greater than the given value. */
    size_gt?: InputMaybe<Scalars["Float"]>;
    /** All values greater than or equal the given value. */
    size_gte?: InputMaybe<Scalars["Float"]>;
    /** All values that are contained in given list. */
    size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    /** All values less than the given value. */
    size_lt?: InputMaybe<Scalars["Float"]>;
    /** All values less than or equal the given value. */
    size_lte?: InputMaybe<Scalars["Float"]>;
    /** All values that are not equal to given value. */
    size_not?: InputMaybe<Scalars["Float"]>;
    /** All values that are not contained in given list. */
    size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
    width?: InputMaybe<Scalars["Float"]>;
    /** All values greater than the given value. */
    width_gt?: InputMaybe<Scalars["Float"]>;
    /** All values greater than or equal the given value. */
    width_gte?: InputMaybe<Scalars["Float"]>;
    /** All values that are contained in given list. */
    width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    /** All values less than the given value. */
    width_lt?: InputMaybe<Scalars["Float"]>;
    /** All values less than or equal the given value. */
    width_lte?: InputMaybe<Scalars["Float"]>;
    /** All values that are not equal to given value. */
    width_not?: InputMaybe<Scalars["Float"]>;
    /** All values that are not contained in given list. */
    width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export type BatchPayload = {
    __typename?: "BatchPayload";
    /** The number of nodes that have been affected by the Batch operation. */
    count: Scalars["Long"];
};

export type Cart = Node & {
    __typename?: "Cart";
    account?: Maybe<Account>;
    cartItems: Array<CartItem>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Cart>;
    /** List of Cart versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type CartAccountArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartCartItemsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<CartItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CartItemWhereInput>;
};

export type CartCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type CartHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type CartPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CartUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: CartWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartConnection = {
    __typename?: "CartConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<CartEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type CartCreateInput = {
    account?: InputMaybe<AccountCreateOneInlineInput>;
    cartItems?: InputMaybe<CartItemCreateManyInlineInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CartCreateManyInlineInput = {
    /** Connect multiple existing Cart documents */
    connect?: InputMaybe<Array<CartWhereUniqueInput>>;
    /** Create and connect multiple existing Cart documents */
    create?: InputMaybe<Array<CartCreateInput>>;
};

export type CartCreateOneInlineInput = {
    /** Connect one existing Cart document */
    connect?: InputMaybe<CartWhereUniqueInput>;
    /** Create and connect one Cart document */
    create?: InputMaybe<CartCreateInput>;
};

/** An edge in a connection. */
export type CartEdge = {
    __typename?: "CartEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Cart;
};

export type CartItem = Node & {
    __typename?: "CartItem";
    cart?: Maybe<Cart>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<CartItem>;
    /** List of CartItem versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    product?: Maybe<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    quantity: Scalars["Int"];
    scheduledIn: Array<ScheduledOperation>;
    sign: Scalars["String"];
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type CartItemCartArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartItemCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartItemDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type CartItemHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type CartItemProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartItemPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartItemScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CartItemUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CartItemConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: CartItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartItemConnection = {
    __typename?: "CartItemConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<CartItemEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type CartItemCreateInput = {
    cart?: InputMaybe<CartCreateOneInlineInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    product?: InputMaybe<ProductCreateOneInlineInput>;
    quantity: Scalars["Int"];
    sign: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CartItemCreateManyInlineInput = {
    /** Connect multiple existing CartItem documents */
    connect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
    /** Create and connect multiple existing CartItem documents */
    create?: InputMaybe<Array<CartItemCreateInput>>;
};

export type CartItemCreateOneInlineInput = {
    /** Connect one existing CartItem document */
    connect?: InputMaybe<CartItemWhereUniqueInput>;
    /** Create and connect one CartItem document */
    create?: InputMaybe<CartItemCreateInput>;
};

/** An edge in a connection. */
export type CartItemEdge = {
    __typename?: "CartItemEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: CartItem;
};

/** Identifies documents */
export type CartItemManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CartItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CartItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CartItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    cart?: InputMaybe<CartWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    quantity?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    quantity_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    quantity_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    quantity_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    quantity_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    quantity_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    sign?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    sign_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    sign_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    sign_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    sign_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    sign_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    sign_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    sign_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    sign_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    sign_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CartItemOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    QuantityAsc = "quantity_ASC",
    QuantityDesc = "quantity_DESC",
    SignAsc = "sign_ASC",
    SignDesc = "sign_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type CartItemUpdateInput = {
    cart?: InputMaybe<CartUpdateOneInlineInput>;
    product?: InputMaybe<ProductUpdateOneInlineInput>;
    quantity?: InputMaybe<Scalars["Int"]>;
    sign?: InputMaybe<Scalars["String"]>;
};

export type CartItemUpdateManyInlineInput = {
    /** Connect multiple existing CartItem documents */
    connect?: InputMaybe<Array<CartItemConnectInput>>;
    /** Create and connect multiple CartItem documents */
    create?: InputMaybe<Array<CartItemCreateInput>>;
    /** Delete multiple CartItem documents */
    delete?: InputMaybe<Array<CartItemWhereUniqueInput>>;
    /** Disconnect multiple CartItem documents */
    disconnect?: InputMaybe<Array<CartItemWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing CartItem documents */
    set?: InputMaybe<Array<CartItemWhereUniqueInput>>;
    /** Update multiple CartItem documents */
    update?: InputMaybe<Array<CartItemUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple CartItem documents */
    upsert?: InputMaybe<Array<CartItemUpsertWithNestedWhereUniqueInput>>;
};

export type CartItemUpdateManyInput = {
    quantity?: InputMaybe<Scalars["Int"]>;
};

export type CartItemUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: CartItemUpdateManyInput;
    /** Document search */
    where: CartItemWhereInput;
};

export type CartItemUpdateOneInlineInput = {
    /** Connect existing CartItem document */
    connect?: InputMaybe<CartItemWhereUniqueInput>;
    /** Create and connect one CartItem document */
    create?: InputMaybe<CartItemCreateInput>;
    /** Delete currently connected CartItem document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected CartItem document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single CartItem document */
    update?: InputMaybe<CartItemUpdateWithNestedWhereUniqueInput>;
    /** Upsert single CartItem document */
    upsert?: InputMaybe<CartItemUpsertWithNestedWhereUniqueInput>;
};

export type CartItemUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: CartItemUpdateInput;
    /** Unique document search */
    where: CartItemWhereUniqueInput;
};

export type CartItemUpsertInput = {
    /** Create document if it didn't exist */
    create: CartItemCreateInput;
    /** Update document if it exists */
    update: CartItemUpdateInput;
};

export type CartItemUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: CartItemUpsertInput;
    /** Unique document search */
    where: CartItemWhereUniqueInput;
};

/** Identifies documents */
export type CartItemWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CartItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CartItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CartItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    cart?: InputMaybe<CartWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    quantity?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    quantity_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    quantity_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    quantity_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    quantity_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    quantity_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    sign?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    sign_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    sign_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    sign_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    sign_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    sign_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    sign_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    sign_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    sign_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    sign_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CartItem record uniquely */
export type CartItemWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
    sign?: InputMaybe<Scalars["String"]>;
};

/** Identifies documents */
export type CartManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CartWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CartWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CartWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    account?: InputMaybe<AccountWhereInput>;
    cartItems_every?: InputMaybe<CartItemWhereInput>;
    cartItems_none?: InputMaybe<CartItemWhereInput>;
    cartItems_some?: InputMaybe<CartItemWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CartOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type CartUpdateInput = {
    account?: InputMaybe<AccountUpdateOneInlineInput>;
    cartItems?: InputMaybe<CartItemUpdateManyInlineInput>;
};

export type CartUpdateManyInlineInput = {
    /** Connect multiple existing Cart documents */
    connect?: InputMaybe<Array<CartConnectInput>>;
    /** Create and connect multiple Cart documents */
    create?: InputMaybe<Array<CartCreateInput>>;
    /** Delete multiple Cart documents */
    delete?: InputMaybe<Array<CartWhereUniqueInput>>;
    /** Disconnect multiple Cart documents */
    disconnect?: InputMaybe<Array<CartWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Cart documents */
    set?: InputMaybe<Array<CartWhereUniqueInput>>;
    /** Update multiple Cart documents */
    update?: InputMaybe<Array<CartUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Cart documents */
    upsert?: InputMaybe<Array<CartUpsertWithNestedWhereUniqueInput>>;
};

export type CartUpdateManyInput = {
    /** No fields in updateMany data input */
    _?: InputMaybe<Scalars["String"]>;
};

export type CartUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: CartUpdateManyInput;
    /** Document search */
    where: CartWhereInput;
};

export type CartUpdateOneInlineInput = {
    /** Connect existing Cart document */
    connect?: InputMaybe<CartWhereUniqueInput>;
    /** Create and connect one Cart document */
    create?: InputMaybe<CartCreateInput>;
    /** Delete currently connected Cart document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Cart document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Cart document */
    update?: InputMaybe<CartUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Cart document */
    upsert?: InputMaybe<CartUpsertWithNestedWhereUniqueInput>;
};

export type CartUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: CartUpdateInput;
    /** Unique document search */
    where: CartWhereUniqueInput;
};

export type CartUpsertInput = {
    /** Create document if it didn't exist */
    create: CartCreateInput;
    /** Update document if it exists */
    update: CartUpdateInput;
};

export type CartUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: CartUpsertInput;
    /** Unique document search */
    where: CartWhereUniqueInput;
};

/** Identifies documents */
export type CartWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CartWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CartWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CartWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    account?: InputMaybe<AccountWhereInput>;
    cartItems_every?: InputMaybe<CartItemWhereInput>;
    cartItems_none?: InputMaybe<CartItemWhereInput>;
    cartItems_some?: InputMaybe<CartItemWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Cart record uniquely */
export type CartWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Category of products, e.g. Menswear. */
export type Category = Node & {
    __typename?: "Category";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    description?: Maybe<Scalars["String"]>;
    /** Get the document in other stages */
    documentInStages: Array<Category>;
    /** List of Category versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Category>;
    name: Scalars["String"];
    products: Array<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    slug: Scalars["String"];
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Category of products, e.g. Menswear. */
export type CategoryCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Category of products, e.g. Menswear. */
export type CategoryDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

/** Category of products, e.g. Menswear. */
export type CategoryHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

/** Category of products, e.g. Menswear. */
export type CategoryLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

/** Category of products, e.g. Menswear. */
export type CategoryProductsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ProductOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductWhereInput>;
};

/** Category of products, e.g. Menswear. */
export type CategoryPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Category of products, e.g. Menswear. */
export type CategoryScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Category of products, e.g. Menswear. */
export type CategoryUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
    __typename?: "CategoryConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<CategoryEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type CategoryCreateInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<CategoryCreateLocalizationsInput>;
    /** name input for default locale (en) */
    name: Scalars["String"];
    products?: InputMaybe<ProductCreateManyInlineInput>;
    /** slug input for default locale (en) */
    slug: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    description?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    slug: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CategoryCreateLocalizationInput = {
    /** Localization input */
    data: CategoryCreateLocalizationDataInput;
    locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
    /** Connect multiple existing Category documents */
    connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
    /** Create and connect multiple existing Category documents */
    create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
    /** Connect one existing Category document */
    connect?: InputMaybe<CategoryWhereUniqueInput>;
    /** Create and connect one Category document */
    create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
    __typename?: "CategoryEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CategoryWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CategoryWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CategoryWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    products_every?: InputMaybe<ProductWhereInput>;
    products_none?: InputMaybe<ProductWhereInput>;
    products_some?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type CategoryUpdateInput = {
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    /** Manage document localizations */
    localizations?: InputMaybe<CategoryUpdateLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    products?: InputMaybe<ProductUpdateManyInlineInput>;
    /** slug input for default locale (en) */
    slug?: InputMaybe<Scalars["String"]>;
};

export type CategoryUpdateLocalizationDataInput = {
    description?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    slug?: InputMaybe<Scalars["String"]>;
};

export type CategoryUpdateLocalizationInput = {
    data: CategoryUpdateLocalizationDataInput;
    locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<CategoryUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<CategoryUpsertLocalizationInput>>;
};

export type CategoryUpdateManyInlineInput = {
    /** Connect multiple existing Category documents */
    connect?: InputMaybe<Array<CategoryConnectInput>>;
    /** Create and connect multiple Category documents */
    create?: InputMaybe<Array<CategoryCreateInput>>;
    /** Delete multiple Category documents */
    delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
    /** Disconnect multiple Category documents */
    disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Category documents */
    set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
    /** Update multiple Category documents */
    update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Category documents */
    upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    /** Optional updates to localizations */
    localizations?: InputMaybe<CategoryUpdateManyLocalizationsInput>;
};

export type CategoryUpdateManyLocalizationDataInput = {
    description?: InputMaybe<Scalars["String"]>;
};

export type CategoryUpdateManyLocalizationInput = {
    data: CategoryUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type CategoryUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<CategoryUpdateManyLocalizationInput>>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: CategoryUpdateManyInput;
    /** Document search */
    where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
    /** Connect existing Category document */
    connect?: InputMaybe<CategoryWhereUniqueInput>;
    /** Create and connect one Category document */
    create?: InputMaybe<CategoryCreateInput>;
    /** Delete currently connected Category document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Category document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Category document */
    update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Category document */
    upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: CategoryUpdateInput;
    /** Unique document search */
    where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
    /** Create document if it didn't exist */
    create: CategoryCreateInput;
    /** Update document if it exists */
    update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
    create: CategoryCreateLocalizationDataInput;
    locale: Locale;
    update: CategoryUpdateLocalizationDataInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: CategoryUpsertInput;
    /** Unique document search */
    where: CategoryWhereUniqueInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CategoryWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CategoryWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CategoryWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    description_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    products_every?: InputMaybe<ProductWhereInput>;
    products_none?: InputMaybe<ProductWhereInput>;
    products_some?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    slug?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    slug_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Collection of products, e.g. Winter Sale. */
export type Collection = Node & {
    __typename?: "Collection";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    description?: Maybe<Scalars["String"]>;
    /** Get the document in other stages */
    documentInStages: Array<Collection>;
    /** List of Collection versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Collection>;
    name: Scalars["String"];
    products: Array<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    slug: Scalars["String"];
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionProductsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ProductOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductWhereInput>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CollectionConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: CollectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionConnection = {
    __typename?: "CollectionConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<CollectionEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type CollectionCreateInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<CollectionCreateLocalizationsInput>;
    /** name input for default locale (en) */
    name: Scalars["String"];
    products?: InputMaybe<ProductCreateManyInlineInput>;
    /** slug input for default locale (en) */
    slug: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CollectionCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    description?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    slug: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CollectionCreateLocalizationInput = {
    /** Localization input */
    data: CollectionCreateLocalizationDataInput;
    locale: Locale;
};

export type CollectionCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
};

export type CollectionCreateManyInlineInput = {
    /** Connect multiple existing Collection documents */
    connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
    /** Create and connect multiple existing Collection documents */
    create?: InputMaybe<Array<CollectionCreateInput>>;
};

export type CollectionCreateOneInlineInput = {
    /** Connect one existing Collection document */
    connect?: InputMaybe<CollectionWhereUniqueInput>;
    /** Create and connect one Collection document */
    create?: InputMaybe<CollectionCreateInput>;
};

/** An edge in a connection. */
export type CollectionEdge = {
    __typename?: "CollectionEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Collection;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CollectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CollectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CollectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    products_every?: InputMaybe<ProductWhereInput>;
    products_none?: InputMaybe<ProductWhereInput>;
    products_some?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CollectionOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type CollectionUpdateInput = {
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    /** Manage document localizations */
    localizations?: InputMaybe<CollectionUpdateLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    products?: InputMaybe<ProductUpdateManyInlineInput>;
    /** slug input for default locale (en) */
    slug?: InputMaybe<Scalars["String"]>;
};

export type CollectionUpdateLocalizationDataInput = {
    description?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    slug?: InputMaybe<Scalars["String"]>;
};

export type CollectionUpdateLocalizationInput = {
    data: CollectionUpdateLocalizationDataInput;
    locale: Locale;
};

export type CollectionUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<CollectionUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<CollectionUpsertLocalizationInput>>;
};

export type CollectionUpdateManyInlineInput = {
    /** Connect multiple existing Collection documents */
    connect?: InputMaybe<Array<CollectionConnectInput>>;
    /** Create and connect multiple Collection documents */
    create?: InputMaybe<Array<CollectionCreateInput>>;
    /** Delete multiple Collection documents */
    delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
    /** Disconnect multiple Collection documents */
    disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Collection documents */
    set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
    /** Update multiple Collection documents */
    update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Collection documents */
    upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionUpdateManyInput = {
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    /** Optional updates to localizations */
    localizations?: InputMaybe<CollectionUpdateManyLocalizationsInput>;
};

export type CollectionUpdateManyLocalizationDataInput = {
    description?: InputMaybe<Scalars["String"]>;
};

export type CollectionUpdateManyLocalizationInput = {
    data: CollectionUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type CollectionUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<CollectionUpdateManyLocalizationInput>>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: CollectionUpdateManyInput;
    /** Document search */
    where: CollectionWhereInput;
};

export type CollectionUpdateOneInlineInput = {
    /** Connect existing Collection document */
    connect?: InputMaybe<CollectionWhereUniqueInput>;
    /** Create and connect one Collection document */
    create?: InputMaybe<CollectionCreateInput>;
    /** Delete currently connected Collection document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Collection document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Collection document */
    update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Collection document */
    upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: CollectionUpdateInput;
    /** Unique document search */
    where: CollectionWhereUniqueInput;
};

export type CollectionUpsertInput = {
    /** Create document if it didn't exist */
    create: CollectionCreateInput;
    /** Update document if it exists */
    update: CollectionUpdateInput;
};

export type CollectionUpsertLocalizationInput = {
    create: CollectionCreateLocalizationDataInput;
    locale: Locale;
    update: CollectionUpdateLocalizationDataInput;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: CollectionUpsertInput;
    /** Unique document search */
    where: CollectionWhereUniqueInput;
};

/** Identifies documents */
export type CollectionWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CollectionWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CollectionWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CollectionWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    description_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    products_every?: InputMaybe<ProductWhereInput>;
    products_none?: InputMaybe<ProductWhereInput>;
    products_some?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    slug?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    slug_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
    __typename?: "Color";
    css: Scalars["String"];
    hex: Scalars["Hex"];
    rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
    hex?: InputMaybe<Scalars["Hex"]>;
    rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
    /** Connect document after specified document */
    after?: InputMaybe<Scalars["ID"]>;
    /** Connect document before specified document */
    before?: InputMaybe<Scalars["ID"]>;
    /** Connect document at last position */
    end?: InputMaybe<Scalars["Boolean"]>;
    /** Connect document at first position */
    start?: InputMaybe<Scalars["Boolean"]>;
};

export type Currency = Node & {
    __typename?: "Currency";
    code: Scalars["String"];
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    default: Scalars["Boolean"];
    /** Get the document in other stages */
    documentInStages: Array<Currency>;
    /** List of Currency versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    rate: Scalars["Float"];
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type CurrencyCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type CurrencyHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type CurrencyPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CurrencyUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: CurrencyWhereUniqueInput;
};

/** A connection to a list of items. */
export type CurrencyConnection = {
    __typename?: "CurrencyConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<CurrencyEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type CurrencyCreateInput = {
    code: Scalars["String"];
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    default: Scalars["Boolean"];
    rate: Scalars["Float"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type CurrencyCreateManyInlineInput = {
    /** Connect multiple existing Currency documents */
    connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
    /** Create and connect multiple existing Currency documents */
    create?: InputMaybe<Array<CurrencyCreateInput>>;
};

export type CurrencyCreateOneInlineInput = {
    /** Connect one existing Currency document */
    connect?: InputMaybe<CurrencyWhereUniqueInput>;
    /** Create and connect one Currency document */
    create?: InputMaybe<CurrencyCreateInput>;
};

/** An edge in a connection. */
export type CurrencyEdge = {
    __typename?: "CurrencyEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Currency;
};

/** Identifies documents */
export type CurrencyManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CurrencyWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CurrencyWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CurrencyWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    code?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    code_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    code_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    code_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    code_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    code_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    code_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    code_starts_with?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    default?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    default_not?: InputMaybe<Scalars["Boolean"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    rate?: InputMaybe<Scalars["Float"]>;
    /** All values greater than the given value. */
    rate_gt?: InputMaybe<Scalars["Float"]>;
    /** All values greater than or equal the given value. */
    rate_gte?: InputMaybe<Scalars["Float"]>;
    /** All values that are contained in given list. */
    rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    /** All values less than the given value. */
    rate_lt?: InputMaybe<Scalars["Float"]>;
    /** All values less than or equal the given value. */
    rate_lte?: InputMaybe<Scalars["Float"]>;
    /** All values that are not equal to given value. */
    rate_not?: InputMaybe<Scalars["Float"]>;
    /** All values that are not contained in given list. */
    rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CurrencyOrderByInput {
    CodeAsc = "code_ASC",
    CodeDesc = "code_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    DefaultAsc = "default_ASC",
    DefaultDesc = "default_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    RateAsc = "rate_ASC",
    RateDesc = "rate_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type CurrencyUpdateInput = {
    code?: InputMaybe<Scalars["String"]>;
    default?: InputMaybe<Scalars["Boolean"]>;
    rate?: InputMaybe<Scalars["Float"]>;
};

export type CurrencyUpdateManyInlineInput = {
    /** Connect multiple existing Currency documents */
    connect?: InputMaybe<Array<CurrencyConnectInput>>;
    /** Create and connect multiple Currency documents */
    create?: InputMaybe<Array<CurrencyCreateInput>>;
    /** Delete multiple Currency documents */
    delete?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
    /** Disconnect multiple Currency documents */
    disconnect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Currency documents */
    set?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
    /** Update multiple Currency documents */
    update?: InputMaybe<Array<CurrencyUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Currency documents */
    upsert?: InputMaybe<Array<CurrencyUpsertWithNestedWhereUniqueInput>>;
};

export type CurrencyUpdateManyInput = {
    rate?: InputMaybe<Scalars["Float"]>;
};

export type CurrencyUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: CurrencyUpdateManyInput;
    /** Document search */
    where: CurrencyWhereInput;
};

export type CurrencyUpdateOneInlineInput = {
    /** Connect existing Currency document */
    connect?: InputMaybe<CurrencyWhereUniqueInput>;
    /** Create and connect one Currency document */
    create?: InputMaybe<CurrencyCreateInput>;
    /** Delete currently connected Currency document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Currency document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Currency document */
    update?: InputMaybe<CurrencyUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Currency document */
    upsert?: InputMaybe<CurrencyUpsertWithNestedWhereUniqueInput>;
};

export type CurrencyUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: CurrencyUpdateInput;
    /** Unique document search */
    where: CurrencyWhereUniqueInput;
};

export type CurrencyUpsertInput = {
    /** Create document if it didn't exist */
    create: CurrencyCreateInput;
    /** Update document if it exists */
    update: CurrencyUpdateInput;
};

export type CurrencyUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: CurrencyUpsertInput;
    /** Unique document search */
    where: CurrencyWhereUniqueInput;
};

/** Identifies documents */
export type CurrencyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<CurrencyWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<CurrencyWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<CurrencyWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    code?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    code_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    code_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    code_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    code_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    code_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    code_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    code_starts_with?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    default?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    default_not?: InputMaybe<Scalars["Boolean"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    rate?: InputMaybe<Scalars["Float"]>;
    /** All values greater than the given value. */
    rate_gt?: InputMaybe<Scalars["Float"]>;
    /** All values greater than or equal the given value. */
    rate_gte?: InputMaybe<Scalars["Float"]>;
    /** All values that are contained in given list. */
    rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    /** All values less than the given value. */
    rate_lt?: InputMaybe<Scalars["Float"]>;
    /** All values less than or equal the given value. */
    rate_lte?: InputMaybe<Scalars["Float"]>;
    /** All values that are not equal to given value. */
    rate_not?: InputMaybe<Scalars["Float"]>;
    /** All values that are not contained in given list. */
    rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Currency record uniquely */
export type CurrencyWhereUniqueInput = {
    code?: InputMaybe<Scalars["String"]>;
    default?: InputMaybe<Scalars["Boolean"]>;
    id?: InputMaybe<Scalars["ID"]>;
};

export enum DocumentFileTypes {
    Doc = "doc",
    Docx = "docx",
    Html = "html",
    Jpg = "jpg",
    Odp = "odp",
    Ods = "ods",
    Odt = "odt",
    Pdf = "pdf",
    Png = "png",
    Ppt = "ppt",
    Pptx = "pptx",
    Svg = "svg",
    Txt = "txt",
    Webp = "webp",
    Xls = "xls",
    Xlsx = "xlsx",
}

export type DocumentOutputInput = {
    /**
     * Transforms a document into a desired file type.
     * See this matrix for format support:
     *
     * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
     * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
     * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
     * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
     * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
     * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
     * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
     * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
     * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
     * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
     * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
     * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
     * SVG:	jpg, odp, ods, odt, pdf, png, and webp
     * HTML:	jpg, odt, pdf, svg, txt, and webp
     * TXT:	jpg, html, odt, pdf, svg, and webp
     */
    format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
    /** Changes the output for the file. */
    output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
    __typename?: "DocumentVersion";
    createdAt: Scalars["DateTime"];
    data?: Maybe<Scalars["Json"]>;
    id: Scalars["ID"];
    revision: Scalars["Int"];
    stage: Stage;
};

export enum ImageFit {
    /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
    Clip = "clip",
    /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
    Crop = "crop",
    /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
    Max = "max",
    /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
    Scale = "scale",
}

export type ImageResizeInput = {
    /** The default value for the fit parameter is fit:clip. */
    fit?: InputMaybe<ImageFit>;
    /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    height?: InputMaybe<Scalars["Int"]>;
    /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
    width?: InputMaybe<Scalars["Int"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
    /** Resizes the image */
    resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
    De = "de",
    /** System locale */
    En = "en",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
    __typename?: "Location";
    distance: Scalars["Float"];
    latitude: Scalars["Float"];
    longitude: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
    from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
    latitude: Scalars["Float"];
    longitude: Scalars["Float"];
};

export type Man = {
    __typename?: "Man";
    age?: Maybe<Scalars["Int"]>;
    firstName?: Maybe<Scalars["String"]>;
    /** The unique identifier */
    id: Scalars["ID"];
    lastName?: Maybe<Scalars["String"]>;
    /** System stage field */
    stage: Stage;
};

export type ManConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ManWhereUniqueInput;
};

/** A connection to a list of items. */
export type ManConnection = {
    __typename?: "ManConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ManEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ManCreateInput = {
    age?: InputMaybe<Scalars["Int"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    lastName?: InputMaybe<Scalars["String"]>;
};

export type ManCreateManyInlineInput = {
    /** Create and connect multiple existing Man documents */
    create?: InputMaybe<Array<ManCreateInput>>;
};

export type ManCreateOneInlineInput = {
    /** Create and connect one Man document */
    create?: InputMaybe<ManCreateInput>;
};

export type ManCreateWithPositionInput = {
    /** Document to create */
    data: ManCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ManEdge = {
    __typename?: "ManEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Man;
};

/** Identifies documents */
export type ManManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ManWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ManWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ManWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    age?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    age_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    age_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    age_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    age_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    age_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    age_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    age_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    firstName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    firstName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    firstName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    firstName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    firstName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    firstName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    firstName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    firstName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    firstName_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    lastName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    lastName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    lastName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    lastName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    lastName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    lastName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    lastName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    lastName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    lastName_starts_with?: InputMaybe<Scalars["String"]>;
};

export enum ManOrderByInput {
    AgeAsc = "age_ASC",
    AgeDesc = "age_DESC",
    FirstNameAsc = "firstName_ASC",
    FirstNameDesc = "firstName_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    LastNameAsc = "lastName_ASC",
    LastNameDesc = "lastName_DESC",
}

export type ManParent = Person;

export type ManParentConnectInput = {
    Person?: InputMaybe<PersonConnectInput>;
};

export type ManParentCreateInput = {
    Person?: InputMaybe<PersonCreateInput>;
};

export type ManParentCreateManyInlineInput = {
    /** Connect multiple existing ManParent documents */
    connect?: InputMaybe<Array<ManParentWhereUniqueInput>>;
    /** Create and connect multiple existing ManParent documents */
    create?: InputMaybe<Array<ManParentCreateInput>>;
};

export type ManParentCreateOneInlineInput = {
    /** Connect one existing ManParent document */
    connect?: InputMaybe<ManParentWhereUniqueInput>;
    /** Create and connect one ManParent document */
    create?: InputMaybe<ManParentCreateInput>;
};

export type ManParentUpdateInput = {
    Person?: InputMaybe<PersonUpdateInput>;
};

export type ManParentUpdateManyInlineInput = {
    /** Connect multiple existing ManParent documents */
    connect?: InputMaybe<Array<ManParentConnectInput>>;
    /** Create and connect multiple ManParent documents */
    create?: InputMaybe<Array<ManParentCreateInput>>;
    /** Delete multiple ManParent documents */
    delete?: InputMaybe<Array<ManParentWhereUniqueInput>>;
    /** Disconnect multiple ManParent documents */
    disconnect?: InputMaybe<Array<ManParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ManParent documents */
    set?: InputMaybe<Array<ManParentWhereUniqueInput>>;
    /** Update multiple ManParent documents */
    update?: InputMaybe<Array<ManParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ManParent documents */
    upsert?: InputMaybe<Array<ManParentUpsertWithNestedWhereUniqueInput>>;
};

export type ManParentUpdateManyWithNestedWhereInput = {
    Person?: InputMaybe<PersonUpdateManyWithNestedWhereInput>;
};

export type ManParentUpdateOneInlineInput = {
    /** Connect existing ManParent document */
    connect?: InputMaybe<ManParentWhereUniqueInput>;
    /** Create and connect one ManParent document */
    create?: InputMaybe<ManParentCreateInput>;
    /** Delete currently connected ManParent document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected ManParent document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single ManParent document */
    update?: InputMaybe<ManParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ManParent document */
    upsert?: InputMaybe<ManParentUpsertWithNestedWhereUniqueInput>;
};

export type ManParentUpdateWithNestedWhereUniqueInput = {
    Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
};

export type ManParentUpsertWithNestedWhereUniqueInput = {
    Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type ManParentWhereInput = {
    Person?: InputMaybe<PersonWhereInput>;
};

export type ManParentWhereUniqueInput = {
    Person?: InputMaybe<PersonWhereUniqueInput>;
};

export type ManUpdateInput = {
    age?: InputMaybe<Scalars["Int"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    lastName?: InputMaybe<Scalars["String"]>;
};

export type ManUpdateManyInlineInput = {
    /** Create and connect multiple Man component instances */
    create?: InputMaybe<Array<ManCreateWithPositionInput>>;
    /** Delete multiple Man documents */
    delete?: InputMaybe<Array<ManWhereUniqueInput>>;
    /** Update multiple Man component instances */
    update?: InputMaybe<Array<ManUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple Man component instances */
    upsert?: InputMaybe<Array<ManUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ManUpdateManyInput = {
    age?: InputMaybe<Scalars["Int"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    lastName?: InputMaybe<Scalars["String"]>;
};

export type ManUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ManUpdateManyInput;
    /** Document search */
    where: ManWhereInput;
};

export type ManUpdateOneInlineInput = {
    /** Create and connect one Man document */
    create?: InputMaybe<ManCreateInput>;
    /** Delete currently connected Man document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Man document */
    update?: InputMaybe<ManUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Man document */
    upsert?: InputMaybe<ManUpsertWithNestedWhereUniqueInput>;
};

export type ManUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<ManUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: ManWhereUniqueInput;
};

export type ManUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ManUpdateInput;
    /** Unique document search */
    where: ManWhereUniqueInput;
};

export type ManUpsertInput = {
    /** Create document if it didn't exist */
    create: ManCreateInput;
    /** Update document if it exists */
    update: ManUpdateInput;
};

export type ManUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<ManUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: ManWhereUniqueInput;
};

export type ManUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ManUpsertInput;
    /** Unique document search */
    where: ManWhereUniqueInput;
};

/** Identifies documents */
export type ManWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ManWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ManWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ManWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    age?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    age_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    age_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    age_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    age_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    age_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    age_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    age_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    firstName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    firstName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    firstName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    firstName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    firstName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    firstName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    firstName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    firstName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    firstName_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    lastName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    lastName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    lastName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    lastName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    lastName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    lastName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    lastName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    lastName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    lastName_starts_with?: InputMaybe<Scalars["String"]>;
};

/** References Man record uniquely */
export type ManWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export type Mutation = {
    __typename?: "Mutation";
    /** Create one account */
    createAccount?: Maybe<Account>;
    /** Create one accountVariant */
    createAccountVariant?: Maybe<AccountVariant>;
    /**
     * Create one asset
     * @deprecated Asset mutations will be overhauled soon
     */
    createAsset?: Maybe<Asset>;
    /** Create one cart */
    createCart?: Maybe<Cart>;
    /** Create one cartItem */
    createCartItem?: Maybe<CartItem>;
    /** Create one category */
    createCategory?: Maybe<Category>;
    /** Create one collection */
    createCollection?: Maybe<Collection>;
    /** Create one currency */
    createCurrency?: Maybe<Currency>;
    /** Create one order */
    createOrder?: Maybe<Order>;
    /** Create one orderItem */
    createOrderItem?: Maybe<OrderItem>;
    /** Create one person */
    createPerson?: Maybe<Person>;
    /** Create one product */
    createProduct?: Maybe<Product>;
    /** Create one productColorVariant */
    createProductColorVariant?: Maybe<ProductColorVariant>;
    /** Create one productSizeColorVariant */
    createProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Create one productSizeVariant */
    createProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Create one review */
    createReview?: Maybe<Review>;
    /** Create one scheduledRelease */
    createScheduledRelease?: Maybe<ScheduledRelease>;
    /** Delete one account from _all_ existing stages. Returns deleted document. */
    deleteAccount?: Maybe<Account>;
    /** Delete one accountVariant from _all_ existing stages. Returns deleted document. */
    deleteAccountVariant?: Maybe<AccountVariant>;
    /** Delete one asset from _all_ existing stages. Returns deleted document. */
    deleteAsset?: Maybe<Asset>;
    /** Delete one cart from _all_ existing stages. Returns deleted document. */
    deleteCart?: Maybe<Cart>;
    /** Delete one cartItem from _all_ existing stages. Returns deleted document. */
    deleteCartItem?: Maybe<CartItem>;
    /** Delete one category from _all_ existing stages. Returns deleted document. */
    deleteCategory?: Maybe<Category>;
    /** Delete one collection from _all_ existing stages. Returns deleted document. */
    deleteCollection?: Maybe<Collection>;
    /** Delete one currency from _all_ existing stages. Returns deleted document. */
    deleteCurrency?: Maybe<Currency>;
    /**
     * Delete many AccountVariant documents
     * @deprecated Please use the new paginated many mutation (deleteManyAccountVariantsConnection)
     */
    deleteManyAccountVariants: BatchPayload;
    /** Delete many AccountVariant documents, return deleted documents */
    deleteManyAccountVariantsConnection: AccountVariantConnection;
    /**
     * Delete many Account documents
     * @deprecated Please use the new paginated many mutation (deleteManyAccountsConnection)
     */
    deleteManyAccounts: BatchPayload;
    /** Delete many Account documents, return deleted documents */
    deleteManyAccountsConnection: AccountConnection;
    /**
     * Delete many Asset documents
     * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
     */
    deleteManyAssets: BatchPayload;
    /** Delete many Asset documents, return deleted documents */
    deleteManyAssetsConnection: AssetConnection;
    /**
     * Delete many CartItem documents
     * @deprecated Please use the new paginated many mutation (deleteManyCartItemsConnection)
     */
    deleteManyCartItems: BatchPayload;
    /** Delete many CartItem documents, return deleted documents */
    deleteManyCartItemsConnection: CartItemConnection;
    /**
     * Delete many Cart documents
     * @deprecated Please use the new paginated many mutation (deleteManyCartsConnection)
     */
    deleteManyCarts: BatchPayload;
    /** Delete many Cart documents, return deleted documents */
    deleteManyCartsConnection: CartConnection;
    /**
     * Delete many Category documents
     * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
     */
    deleteManyCategories: BatchPayload;
    /** Delete many Category documents, return deleted documents */
    deleteManyCategoriesConnection: CategoryConnection;
    /**
     * Delete many Collection documents
     * @deprecated Please use the new paginated many mutation (deleteManyCollectionsConnection)
     */
    deleteManyCollections: BatchPayload;
    /** Delete many Collection documents, return deleted documents */
    deleteManyCollectionsConnection: CollectionConnection;
    /**
     * Delete many Currency documents
     * @deprecated Please use the new paginated many mutation (deleteManyCurrenciesConnection)
     */
    deleteManyCurrencies: BatchPayload;
    /** Delete many Currency documents, return deleted documents */
    deleteManyCurrenciesConnection: CurrencyConnection;
    /**
     * Delete many OrderItem documents
     * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
     */
    deleteManyOrderItems: BatchPayload;
    /** Delete many OrderItem documents, return deleted documents */
    deleteManyOrderItemsConnection: OrderItemConnection;
    /**
     * Delete many Order documents
     * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
     */
    deleteManyOrders: BatchPayload;
    /** Delete many Order documents, return deleted documents */
    deleteManyOrdersConnection: OrderConnection;
    /**
     * Delete many Person documents
     * @deprecated Please use the new paginated many mutation (deleteManyPeopleConnection)
     */
    deleteManyPeople: BatchPayload;
    /** Delete many Person documents, return deleted documents */
    deleteManyPeopleConnection: PersonConnection;
    /**
     * Delete many ProductColorVariant documents
     * @deprecated Please use the new paginated many mutation (deleteManyProductColorVariantsConnection)
     */
    deleteManyProductColorVariants: BatchPayload;
    /** Delete many ProductColorVariant documents, return deleted documents */
    deleteManyProductColorVariantsConnection: ProductColorVariantConnection;
    /**
     * Delete many ProductSizeColorVariant documents
     * @deprecated Please use the new paginated many mutation (deleteManyProductSizeColorVariantsConnection)
     */
    deleteManyProductSizeColorVariants: BatchPayload;
    /** Delete many ProductSizeColorVariant documents, return deleted documents */
    deleteManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
    /**
     * Delete many ProductSizeVariant documents
     * @deprecated Please use the new paginated many mutation (deleteManyProductSizeVariantsConnection)
     */
    deleteManyProductSizeVariants: BatchPayload;
    /** Delete many ProductSizeVariant documents, return deleted documents */
    deleteManyProductSizeVariantsConnection: ProductSizeVariantConnection;
    /**
     * Delete many Product documents
     * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
     */
    deleteManyProducts: BatchPayload;
    /** Delete many Product documents, return deleted documents */
    deleteManyProductsConnection: ProductConnection;
    /**
     * Delete many Review documents
     * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
     */
    deleteManyReviews: BatchPayload;
    /** Delete many Review documents, return deleted documents */
    deleteManyReviewsConnection: ReviewConnection;
    /** Delete one order from _all_ existing stages. Returns deleted document. */
    deleteOrder?: Maybe<Order>;
    /** Delete one orderItem from _all_ existing stages. Returns deleted document. */
    deleteOrderItem?: Maybe<OrderItem>;
    /** Delete one person from _all_ existing stages. Returns deleted document. */
    deletePerson?: Maybe<Person>;
    /** Delete one product from _all_ existing stages. Returns deleted document. */
    deleteProduct?: Maybe<Product>;
    /** Delete one productColorVariant from _all_ existing stages. Returns deleted document. */
    deleteProductColorVariant?: Maybe<ProductColorVariant>;
    /** Delete one productSizeColorVariant from _all_ existing stages. Returns deleted document. */
    deleteProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Delete one productSizeVariant from _all_ existing stages. Returns deleted document. */
    deleteProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Delete one review from _all_ existing stages. Returns deleted document. */
    deleteReview?: Maybe<Review>;
    /** Delete and return scheduled operation */
    deleteScheduledOperation?: Maybe<ScheduledOperation>;
    /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
    deleteScheduledRelease?: Maybe<ScheduledRelease>;
    /** Publish one account */
    publishAccount?: Maybe<Account>;
    /** Publish one accountVariant */
    publishAccountVariant?: Maybe<AccountVariant>;
    /** Publish one asset */
    publishAsset?: Maybe<Asset>;
    /** Publish one cart */
    publishCart?: Maybe<Cart>;
    /** Publish one cartItem */
    publishCartItem?: Maybe<CartItem>;
    /** Publish one category */
    publishCategory?: Maybe<Category>;
    /** Publish one collection */
    publishCollection?: Maybe<Collection>;
    /** Publish one currency */
    publishCurrency?: Maybe<Currency>;
    /**
     * Publish many AccountVariant documents
     * @deprecated Please use the new paginated many mutation (publishManyAccountVariantsConnection)
     */
    publishManyAccountVariants: BatchPayload;
    /** Publish many AccountVariant documents */
    publishManyAccountVariantsConnection: AccountVariantConnection;
    /**
     * Publish many Account documents
     * @deprecated Please use the new paginated many mutation (publishManyAccountsConnection)
     */
    publishManyAccounts: BatchPayload;
    /** Publish many Account documents */
    publishManyAccountsConnection: AccountConnection;
    /**
     * Publish many Asset documents
     * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
     */
    publishManyAssets: BatchPayload;
    /** Publish many Asset documents */
    publishManyAssetsConnection: AssetConnection;
    /**
     * Publish many CartItem documents
     * @deprecated Please use the new paginated many mutation (publishManyCartItemsConnection)
     */
    publishManyCartItems: BatchPayload;
    /** Publish many CartItem documents */
    publishManyCartItemsConnection: CartItemConnection;
    /**
     * Publish many Cart documents
     * @deprecated Please use the new paginated many mutation (publishManyCartsConnection)
     */
    publishManyCarts: BatchPayload;
    /** Publish many Cart documents */
    publishManyCartsConnection: CartConnection;
    /**
     * Publish many Category documents
     * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
     */
    publishManyCategories: BatchPayload;
    /** Publish many Category documents */
    publishManyCategoriesConnection: CategoryConnection;
    /**
     * Publish many Collection documents
     * @deprecated Please use the new paginated many mutation (publishManyCollectionsConnection)
     */
    publishManyCollections: BatchPayload;
    /** Publish many Collection documents */
    publishManyCollectionsConnection: CollectionConnection;
    /**
     * Publish many Currency documents
     * @deprecated Please use the new paginated many mutation (publishManyCurrenciesConnection)
     */
    publishManyCurrencies: BatchPayload;
    /** Publish many Currency documents */
    publishManyCurrenciesConnection: CurrencyConnection;
    /**
     * Publish many OrderItem documents
     * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
     */
    publishManyOrderItems: BatchPayload;
    /** Publish many OrderItem documents */
    publishManyOrderItemsConnection: OrderItemConnection;
    /**
     * Publish many Order documents
     * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
     */
    publishManyOrders: BatchPayload;
    /** Publish many Order documents */
    publishManyOrdersConnection: OrderConnection;
    /**
     * Publish many Person documents
     * @deprecated Please use the new paginated many mutation (publishManyPeopleConnection)
     */
    publishManyPeople: BatchPayload;
    /** Publish many Person documents */
    publishManyPeopleConnection: PersonConnection;
    /**
     * Publish many ProductColorVariant documents
     * @deprecated Please use the new paginated many mutation (publishManyProductColorVariantsConnection)
     */
    publishManyProductColorVariants: BatchPayload;
    /** Publish many ProductColorVariant documents */
    publishManyProductColorVariantsConnection: ProductColorVariantConnection;
    /**
     * Publish many ProductSizeColorVariant documents
     * @deprecated Please use the new paginated many mutation (publishManyProductSizeColorVariantsConnection)
     */
    publishManyProductSizeColorVariants: BatchPayload;
    /** Publish many ProductSizeColorVariant documents */
    publishManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
    /**
     * Publish many ProductSizeVariant documents
     * @deprecated Please use the new paginated many mutation (publishManyProductSizeVariantsConnection)
     */
    publishManyProductSizeVariants: BatchPayload;
    /** Publish many ProductSizeVariant documents */
    publishManyProductSizeVariantsConnection: ProductSizeVariantConnection;
    /**
     * Publish many Product documents
     * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
     */
    publishManyProducts: BatchPayload;
    /** Publish many Product documents */
    publishManyProductsConnection: ProductConnection;
    /**
     * Publish many Review documents
     * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
     */
    publishManyReviews: BatchPayload;
    /** Publish many Review documents */
    publishManyReviewsConnection: ReviewConnection;
    /** Publish one order */
    publishOrder?: Maybe<Order>;
    /** Publish one orderItem */
    publishOrderItem?: Maybe<OrderItem>;
    /** Publish one person */
    publishPerson?: Maybe<Person>;
    /** Publish one product */
    publishProduct?: Maybe<Product>;
    /** Publish one productColorVariant */
    publishProductColorVariant?: Maybe<ProductColorVariant>;
    /** Publish one productSizeColorVariant */
    publishProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Publish one productSizeVariant */
    publishProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Publish one review */
    publishReview?: Maybe<Review>;
    /** Schedule to publish one account */
    schedulePublishAccount?: Maybe<Account>;
    /** Schedule to publish one accountVariant */
    schedulePublishAccountVariant?: Maybe<AccountVariant>;
    /** Schedule to publish one asset */
    schedulePublishAsset?: Maybe<Asset>;
    /** Schedule to publish one cart */
    schedulePublishCart?: Maybe<Cart>;
    /** Schedule to publish one cartItem */
    schedulePublishCartItem?: Maybe<CartItem>;
    /** Schedule to publish one category */
    schedulePublishCategory?: Maybe<Category>;
    /** Schedule to publish one collection */
    schedulePublishCollection?: Maybe<Collection>;
    /** Schedule to publish one currency */
    schedulePublishCurrency?: Maybe<Currency>;
    /** Schedule to publish one order */
    schedulePublishOrder?: Maybe<Order>;
    /** Schedule to publish one orderItem */
    schedulePublishOrderItem?: Maybe<OrderItem>;
    /** Schedule to publish one person */
    schedulePublishPerson?: Maybe<Person>;
    /** Schedule to publish one product */
    schedulePublishProduct?: Maybe<Product>;
    /** Schedule to publish one productColorVariant */
    schedulePublishProductColorVariant?: Maybe<ProductColorVariant>;
    /** Schedule to publish one productSizeColorVariant */
    schedulePublishProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Schedule to publish one productSizeVariant */
    schedulePublishProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Schedule to publish one review */
    schedulePublishReview?: Maybe<Review>;
    /** Unpublish one account from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAccount?: Maybe<Account>;
    /** Unpublish one accountVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAccountVariant?: Maybe<AccountVariant>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAsset?: Maybe<Asset>;
    /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishCart?: Maybe<Cart>;
    /** Unpublish one cartItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishCartItem?: Maybe<CartItem>;
    /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishCategory?: Maybe<Category>;
    /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishCollection?: Maybe<Collection>;
    /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishCurrency?: Maybe<Currency>;
    /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishOrder?: Maybe<Order>;
    /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishOrderItem?: Maybe<OrderItem>;
    /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishPerson?: Maybe<Person>;
    /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishProduct?: Maybe<Product>;
    /** Unpublish one productColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishProductColorVariant?: Maybe<ProductColorVariant>;
    /** Unpublish one productSizeColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Unpublish one productSizeVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishReview?: Maybe<Review>;
    /** Unpublish one account from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAccount?: Maybe<Account>;
    /** Unpublish one accountVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAccountVariant?: Maybe<AccountVariant>;
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAsset?: Maybe<Asset>;
    /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishCart?: Maybe<Cart>;
    /** Unpublish one cartItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishCartItem?: Maybe<CartItem>;
    /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishCategory?: Maybe<Category>;
    /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishCollection?: Maybe<Collection>;
    /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishCurrency?: Maybe<Currency>;
    /**
     * Unpublish many AccountVariant documents
     * @deprecated Please use the new paginated many mutation (unpublishManyAccountVariantsConnection)
     */
    unpublishManyAccountVariants: BatchPayload;
    /** Find many AccountVariant documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAccountVariantsConnection: AccountVariantConnection;
    /**
     * Unpublish many Account documents
     * @deprecated Please use the new paginated many mutation (unpublishManyAccountsConnection)
     */
    unpublishManyAccounts: BatchPayload;
    /** Find many Account documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAccountsConnection: AccountConnection;
    /**
     * Unpublish many Asset documents
     * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
     */
    unpublishManyAssets: BatchPayload;
    /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAssetsConnection: AssetConnection;
    /**
     * Unpublish many CartItem documents
     * @deprecated Please use the new paginated many mutation (unpublishManyCartItemsConnection)
     */
    unpublishManyCartItems: BatchPayload;
    /** Find many CartItem documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyCartItemsConnection: CartItemConnection;
    /**
     * Unpublish many Cart documents
     * @deprecated Please use the new paginated many mutation (unpublishManyCartsConnection)
     */
    unpublishManyCarts: BatchPayload;
    /** Find many Cart documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyCartsConnection: CartConnection;
    /**
     * Unpublish many Category documents
     * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
     */
    unpublishManyCategories: BatchPayload;
    /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyCategoriesConnection: CategoryConnection;
    /**
     * Unpublish many Collection documents
     * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsConnection)
     */
    unpublishManyCollections: BatchPayload;
    /** Find many Collection documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyCollectionsConnection: CollectionConnection;
    /**
     * Unpublish many Currency documents
     * @deprecated Please use the new paginated many mutation (unpublishManyCurrenciesConnection)
     */
    unpublishManyCurrencies: BatchPayload;
    /** Find many Currency documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyCurrenciesConnection: CurrencyConnection;
    /**
     * Unpublish many OrderItem documents
     * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
     */
    unpublishManyOrderItems: BatchPayload;
    /** Find many OrderItem documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyOrderItemsConnection: OrderItemConnection;
    /**
     * Unpublish many Order documents
     * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
     */
    unpublishManyOrders: BatchPayload;
    /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyOrdersConnection: OrderConnection;
    /**
     * Unpublish many Person documents
     * @deprecated Please use the new paginated many mutation (unpublishManyPeopleConnection)
     */
    unpublishManyPeople: BatchPayload;
    /** Find many Person documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyPeopleConnection: PersonConnection;
    /**
     * Unpublish many ProductColorVariant documents
     * @deprecated Please use the new paginated many mutation (unpublishManyProductColorVariantsConnection)
     */
    unpublishManyProductColorVariants: BatchPayload;
    /** Find many ProductColorVariant documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyProductColorVariantsConnection: ProductColorVariantConnection;
    /**
     * Unpublish many ProductSizeColorVariant documents
     * @deprecated Please use the new paginated many mutation (unpublishManyProductSizeColorVariantsConnection)
     */
    unpublishManyProductSizeColorVariants: BatchPayload;
    /** Find many ProductSizeColorVariant documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
    /**
     * Unpublish many ProductSizeVariant documents
     * @deprecated Please use the new paginated many mutation (unpublishManyProductSizeVariantsConnection)
     */
    unpublishManyProductSizeVariants: BatchPayload;
    /** Find many ProductSizeVariant documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyProductSizeVariantsConnection: ProductSizeVariantConnection;
    /**
     * Unpublish many Product documents
     * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
     */
    unpublishManyProducts: BatchPayload;
    /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyProductsConnection: ProductConnection;
    /**
     * Unpublish many Review documents
     * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
     */
    unpublishManyReviews: BatchPayload;
    /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyReviewsConnection: ReviewConnection;
    /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishOrder?: Maybe<Order>;
    /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishOrderItem?: Maybe<OrderItem>;
    /** Unpublish one person from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishPerson?: Maybe<Person>;
    /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishProduct?: Maybe<Product>;
    /** Unpublish one productColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishProductColorVariant?: Maybe<ProductColorVariant>;
    /** Unpublish one productSizeColorVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Unpublish one productSizeVariant from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishReview?: Maybe<Review>;
    /** Update one account */
    updateAccount?: Maybe<Account>;
    /** Update one accountVariant */
    updateAccountVariant?: Maybe<AccountVariant>;
    /** Update one asset */
    updateAsset?: Maybe<Asset>;
    /** Update one cart */
    updateCart?: Maybe<Cart>;
    /** Update one cartItem */
    updateCartItem?: Maybe<CartItem>;
    /** Update one category */
    updateCategory?: Maybe<Category>;
    /** Update one collection */
    updateCollection?: Maybe<Collection>;
    /** Update one currency */
    updateCurrency?: Maybe<Currency>;
    /**
     * Update many accountVariants
     * @deprecated Please use the new paginated many mutation (updateManyAccountVariantsConnection)
     */
    updateManyAccountVariants: BatchPayload;
    /** Update many AccountVariant documents */
    updateManyAccountVariantsConnection: AccountVariantConnection;
    /**
     * Update many accounts
     * @deprecated Please use the new paginated many mutation (updateManyAccountsConnection)
     */
    updateManyAccounts: BatchPayload;
    /** Update many Account documents */
    updateManyAccountsConnection: AccountConnection;
    /**
     * Update many assets
     * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
     */
    updateManyAssets: BatchPayload;
    /** Update many Asset documents */
    updateManyAssetsConnection: AssetConnection;
    /**
     * Update many cartItems
     * @deprecated Please use the new paginated many mutation (updateManyCartItemsConnection)
     */
    updateManyCartItems: BatchPayload;
    /** Update many CartItem documents */
    updateManyCartItemsConnection: CartItemConnection;
    /**
     * Update many carts
     * @deprecated Please use the new paginated many mutation (updateManyCartsConnection)
     */
    updateManyCarts: BatchPayload;
    /** Update many Cart documents */
    updateManyCartsConnection: CartConnection;
    /**
     * Update many categories
     * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
     */
    updateManyCategories: BatchPayload;
    /** Update many Category documents */
    updateManyCategoriesConnection: CategoryConnection;
    /**
     * Update many collections
     * @deprecated Please use the new paginated many mutation (updateManyCollectionsConnection)
     */
    updateManyCollections: BatchPayload;
    /** Update many Collection documents */
    updateManyCollectionsConnection: CollectionConnection;
    /**
     * Update many currencies
     * @deprecated Please use the new paginated many mutation (updateManyCurrenciesConnection)
     */
    updateManyCurrencies: BatchPayload;
    /** Update many Currency documents */
    updateManyCurrenciesConnection: CurrencyConnection;
    /**
     * Update many orderItems
     * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
     */
    updateManyOrderItems: BatchPayload;
    /** Update many OrderItem documents */
    updateManyOrderItemsConnection: OrderItemConnection;
    /**
     * Update many orders
     * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
     */
    updateManyOrders: BatchPayload;
    /** Update many Order documents */
    updateManyOrdersConnection: OrderConnection;
    /**
     * Update many people
     * @deprecated Please use the new paginated many mutation (updateManyPeopleConnection)
     */
    updateManyPeople: BatchPayload;
    /** Update many Person documents */
    updateManyPeopleConnection: PersonConnection;
    /**
     * Update many productColorVariants
     * @deprecated Please use the new paginated many mutation (updateManyProductColorVariantsConnection)
     */
    updateManyProductColorVariants: BatchPayload;
    /** Update many ProductColorVariant documents */
    updateManyProductColorVariantsConnection: ProductColorVariantConnection;
    /**
     * Update many productSizeColorVariants
     * @deprecated Please use the new paginated many mutation (updateManyProductSizeColorVariantsConnection)
     */
    updateManyProductSizeColorVariants: BatchPayload;
    /** Update many ProductSizeColorVariant documents */
    updateManyProductSizeColorVariantsConnection: ProductSizeColorVariantConnection;
    /**
     * Update many productSizeVariants
     * @deprecated Please use the new paginated many mutation (updateManyProductSizeVariantsConnection)
     */
    updateManyProductSizeVariants: BatchPayload;
    /** Update many ProductSizeVariant documents */
    updateManyProductSizeVariantsConnection: ProductSizeVariantConnection;
    /**
     * Update many products
     * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
     */
    updateManyProducts: BatchPayload;
    /** Update many Product documents */
    updateManyProductsConnection: ProductConnection;
    /**
     * Update many reviews
     * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
     */
    updateManyReviews: BatchPayload;
    /** Update many Review documents */
    updateManyReviewsConnection: ReviewConnection;
    /** Update one order */
    updateOrder?: Maybe<Order>;
    /** Update one orderItem */
    updateOrderItem?: Maybe<OrderItem>;
    /** Update one person */
    updatePerson?: Maybe<Person>;
    /** Update one product */
    updateProduct?: Maybe<Product>;
    /** Update one productColorVariant */
    updateProductColorVariant?: Maybe<ProductColorVariant>;
    /** Update one productSizeColorVariant */
    updateProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Update one productSizeVariant */
    updateProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Update one review */
    updateReview?: Maybe<Review>;
    /** Update one scheduledRelease */
    updateScheduledRelease?: Maybe<ScheduledRelease>;
    /** Upsert one account */
    upsertAccount?: Maybe<Account>;
    /** Upsert one accountVariant */
    upsertAccountVariant?: Maybe<AccountVariant>;
    /** Upsert one asset */
    upsertAsset?: Maybe<Asset>;
    /** Upsert one cart */
    upsertCart?: Maybe<Cart>;
    /** Upsert one cartItem */
    upsertCartItem?: Maybe<CartItem>;
    /** Upsert one category */
    upsertCategory?: Maybe<Category>;
    /** Upsert one collection */
    upsertCollection?: Maybe<Collection>;
    /** Upsert one currency */
    upsertCurrency?: Maybe<Currency>;
    /** Upsert one order */
    upsertOrder?: Maybe<Order>;
    /** Upsert one orderItem */
    upsertOrderItem?: Maybe<OrderItem>;
    /** Upsert one person */
    upsertPerson?: Maybe<Person>;
    /** Upsert one product */
    upsertProduct?: Maybe<Product>;
    /** Upsert one productColorVariant */
    upsertProductColorVariant?: Maybe<ProductColorVariant>;
    /** Upsert one productSizeColorVariant */
    upsertProductSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Upsert one productSizeVariant */
    upsertProductSizeVariant?: Maybe<ProductSizeVariant>;
    /** Upsert one review */
    upsertReview?: Maybe<Review>;
};

export type MutationCreateAccountArgs = {
    data: AccountCreateInput;
};

export type MutationCreateAccountVariantArgs = {
    data: AccountVariantCreateInput;
};

export type MutationCreateAssetArgs = {
    data: AssetCreateInput;
};

export type MutationCreateCartArgs = {
    data: CartCreateInput;
};

export type MutationCreateCartItemArgs = {
    data: CartItemCreateInput;
};

export type MutationCreateCategoryArgs = {
    data: CategoryCreateInput;
};

export type MutationCreateCollectionArgs = {
    data: CollectionCreateInput;
};

export type MutationCreateCurrencyArgs = {
    data: CurrencyCreateInput;
};

export type MutationCreateOrderArgs = {
    data: OrderCreateInput;
};

export type MutationCreateOrderItemArgs = {
    data: OrderItemCreateInput;
};

export type MutationCreatePersonArgs = {
    data: PersonCreateInput;
};

export type MutationCreateProductArgs = {
    data: ProductCreateInput;
};

export type MutationCreateProductColorVariantArgs = {
    data: ProductColorVariantCreateInput;
};

export type MutationCreateProductSizeColorVariantArgs = {
    data: ProductSizeColorVariantCreateInput;
};

export type MutationCreateProductSizeVariantArgs = {
    data: ProductSizeVariantCreateInput;
};

export type MutationCreateReviewArgs = {
    data: ReviewCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
    data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAccountArgs = {
    where: AccountWhereUniqueInput;
};

export type MutationDeleteAccountVariantArgs = {
    where: AccountVariantWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
    where: AssetWhereUniqueInput;
};

export type MutationDeleteCartArgs = {
    where: CartWhereUniqueInput;
};

export type MutationDeleteCartItemArgs = {
    where: CartItemWhereUniqueInput;
};

export type MutationDeleteCategoryArgs = {
    where: CategoryWhereUniqueInput;
};

export type MutationDeleteCollectionArgs = {
    where: CollectionWhereUniqueInput;
};

export type MutationDeleteCurrencyArgs = {
    where: CurrencyWhereUniqueInput;
};

export type MutationDeleteManyAccountVariantsArgs = {
    where?: InputMaybe<AccountVariantManyWhereInput>;
};

export type MutationDeleteManyAccountVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<AccountVariantManyWhereInput>;
};

export type MutationDeleteManyAccountsArgs = {
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationDeleteManyAccountsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationDeleteManyAssetsArgs = {
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyCartItemsArgs = {
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationDeleteManyCartItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationDeleteManyCartsArgs = {
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationDeleteManyCartsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationDeleteManyCategoriesArgs = {
    where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyCategoriesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyCollectionsArgs = {
    where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationDeleteManyCollectionsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationDeleteManyCurrenciesArgs = {
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationDeleteManyCurrenciesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationDeleteManyOrderItemsArgs = {
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationDeleteManyOrderItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationDeleteManyOrdersArgs = {
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationDeleteManyOrdersConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationDeleteManyPeopleArgs = {
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationDeleteManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationDeleteManyProductColorVariantsArgs = {
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationDeleteManyProductColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationDeleteManyProductSizeColorVariantsArgs = {
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
};

export type MutationDeleteManyProductSizeColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
};

export type MutationDeleteManyProductSizeVariantsArgs = {
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationDeleteManyProductSizeVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationDeleteManyProductsArgs = {
    where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteManyProductsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteManyReviewsArgs = {
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationDeleteManyReviewsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationDeleteOrderArgs = {
    where: OrderWhereUniqueInput;
};

export type MutationDeleteOrderItemArgs = {
    where: OrderItemWhereUniqueInput;
};

export type MutationDeletePersonArgs = {
    where: PersonWhereUniqueInput;
};

export type MutationDeleteProductArgs = {
    where: ProductWhereUniqueInput;
};

export type MutationDeleteProductColorVariantArgs = {
    where: ProductColorVariantWhereUniqueInput;
};

export type MutationDeleteProductSizeColorVariantArgs = {
    where: ProductSizeColorVariantWhereUniqueInput;
};

export type MutationDeleteProductSizeVariantArgs = {
    where: ProductSizeVariantWhereUniqueInput;
};

export type MutationDeleteReviewArgs = {
    where: ReviewWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
    where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAccountArgs = {
    to?: Array<Stage>;
    where: AccountWhereUniqueInput;
};

export type MutationPublishAccountVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: AccountVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishAssetArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishCartArgs = {
    to?: Array<Stage>;
    where: CartWhereUniqueInput;
};

export type MutationPublishCartItemArgs = {
    to?: Array<Stage>;
    where: CartItemWhereUniqueInput;
};

export type MutationPublishCategoryArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: CategoryWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishCollectionArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: CollectionWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishCurrencyArgs = {
    to?: Array<Stage>;
    where: CurrencyWhereUniqueInput;
};

export type MutationPublishManyAccountVariantsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<AccountVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAccountVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<AccountVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAccountsArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationPublishManyAccountsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<AssetManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<AssetManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCartItemsArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationPublishManyCartItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationPublishManyCartsArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationPublishManyCartsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationPublishManyCategoriesArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<CategoryManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCategoriesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<CategoryManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCollectionsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<CollectionManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCollectionsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<CollectionManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyCurrenciesArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationPublishManyCurrenciesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationPublishManyOrderItemsArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationPublishManyOrderItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationPublishManyOrdersArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationPublishManyOrdersConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationPublishManyPeopleArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationPublishManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationPublishManyProductColorVariantsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductSizeColorVariantsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductSizeColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductSizeVariantsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductSizeVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductsArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyProductsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ProductManyWhereInput>;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishManyReviewsArgs = {
    to?: Array<Stage>;
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationPublishManyReviewsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: InputMaybe<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    to?: Array<Stage>;
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationPublishOrderArgs = {
    to?: Array<Stage>;
    where: OrderWhereUniqueInput;
};

export type MutationPublishOrderItemArgs = {
    to?: Array<Stage>;
    where: OrderItemWhereUniqueInput;
};

export type MutationPublishPersonArgs = {
    to?: Array<Stage>;
    where: PersonWhereUniqueInput;
};

export type MutationPublishProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: ProductWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishProductColorVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: ProductColorVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishProductSizeColorVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: ProductSizeColorVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishProductSizeVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    to?: Array<Stage>;
    where: ProductSizeVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationPublishReviewArgs = {
    to?: Array<Stage>;
    where: ReviewWhereUniqueInput;
};

export type MutationSchedulePublishAccountArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: AccountWhereUniqueInput;
};

export type MutationSchedulePublishAccountVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: AccountVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishAssetArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: AssetWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishCartArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: CartWhereUniqueInput;
};

export type MutationSchedulePublishCartItemArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: CartItemWhereUniqueInput;
};

export type MutationSchedulePublishCategoryArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: CategoryWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishCollectionArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: CollectionWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishCurrencyArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: CurrencyWhereUniqueInput;
};

export type MutationSchedulePublishOrderArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: OrderWhereUniqueInput;
};

export type MutationSchedulePublishOrderItemArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: OrderItemWhereUniqueInput;
};

export type MutationSchedulePublishPersonArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: PersonWhereUniqueInput;
};

export type MutationSchedulePublishProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: ProductWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishProductColorVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: ProductColorVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishProductSizeColorVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: ProductSizeColorVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishProductSizeVariantArgs = {
    locales?: InputMaybe<Array<Locale>>;
    publishBase?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: ProductSizeVariantWhereUniqueInput;
    withDefaultLocale?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationSchedulePublishReviewArgs = {
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    to?: Array<Stage>;
    where: ReviewWhereUniqueInput;
};

export type MutationScheduleUnpublishAccountArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: AccountWhereUniqueInput;
};

export type MutationScheduleUnpublishAccountVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: AccountVariantWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishCartArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: CartWhereUniqueInput;
};

export type MutationScheduleUnpublishCartItemArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: CartItemWhereUniqueInput;
};

export type MutationScheduleUnpublishCategoryArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: CategoryWhereUniqueInput;
};

export type MutationScheduleUnpublishCollectionArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: CollectionWhereUniqueInput;
};

export type MutationScheduleUnpublishCurrencyArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: CurrencyWhereUniqueInput;
};

export type MutationScheduleUnpublishOrderArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: OrderWhereUniqueInput;
};

export type MutationScheduleUnpublishOrderItemArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: OrderItemWhereUniqueInput;
};

export type MutationScheduleUnpublishPersonArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: PersonWhereUniqueInput;
};

export type MutationScheduleUnpublishProductArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductWhereUniqueInput;
};

export type MutationScheduleUnpublishProductColorVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductColorVariantWhereUniqueInput;
};

export type MutationScheduleUnpublishProductSizeColorVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductSizeColorVariantWhereUniqueInput;
};

export type MutationScheduleUnpublishProductSizeVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductSizeVariantWhereUniqueInput;
};

export type MutationScheduleUnpublishReviewArgs = {
    from?: Array<Stage>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    releaseId?: InputMaybe<Scalars["String"]>;
    where: ReviewWhereUniqueInput;
};

export type MutationUnpublishAccountArgs = {
    from?: Array<Stage>;
    where: AccountWhereUniqueInput;
};

export type MutationUnpublishAccountVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: AccountVariantWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: AssetWhereUniqueInput;
};

export type MutationUnpublishCartArgs = {
    from?: Array<Stage>;
    where: CartWhereUniqueInput;
};

export type MutationUnpublishCartItemArgs = {
    from?: Array<Stage>;
    where: CartItemWhereUniqueInput;
};

export type MutationUnpublishCategoryArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: CategoryWhereUniqueInput;
};

export type MutationUnpublishCollectionArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: CollectionWhereUniqueInput;
};

export type MutationUnpublishCurrencyArgs = {
    from?: Array<Stage>;
    where: CurrencyWhereUniqueInput;
};

export type MutationUnpublishManyAccountVariantsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<AccountVariantManyWhereInput>;
};

export type MutationUnpublishManyAccountVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<AccountVariantManyWhereInput>;
};

export type MutationUnpublishManyAccountsArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUnpublishManyAccountsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUnpublishManyAssetsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyCartItemsArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationUnpublishManyCartItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationUnpublishManyCartsArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUnpublishManyCartsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUnpublishManyCategoriesArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyCategoriesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyCollectionsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUnpublishManyCollectionsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUnpublishManyCurrenciesArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUnpublishManyCurrenciesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUnpublishManyOrderItemsArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUnpublishManyOrderItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUnpublishManyOrdersArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUnpublishManyOrdersConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUnpublishManyPeopleArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUnpublishManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUnpublishManyProductColorVariantsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUnpublishManyProductColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUnpublishManyProductSizeColorVariantsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
};

export type MutationUnpublishManyProductSizeColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
};

export type MutationUnpublishManyProductSizeVariantsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUnpublishManyProductSizeVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUnpublishManyProductsArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishManyProductsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishManyReviewsArgs = {
    from?: Array<Stage>;
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUnpublishManyReviewsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    first?: InputMaybe<Scalars["Int"]>;
    from?: Array<Stage>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: InputMaybe<Stage>;
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUnpublishOrderArgs = {
    from?: Array<Stage>;
    where: OrderWhereUniqueInput;
};

export type MutationUnpublishOrderItemArgs = {
    from?: Array<Stage>;
    where: OrderItemWhereUniqueInput;
};

export type MutationUnpublishPersonArgs = {
    from?: Array<Stage>;
    where: PersonWhereUniqueInput;
};

export type MutationUnpublishProductArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductWhereUniqueInput;
};

export type MutationUnpublishProductColorVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductColorVariantWhereUniqueInput;
};

export type MutationUnpublishProductSizeColorVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductSizeColorVariantWhereUniqueInput;
};

export type MutationUnpublishProductSizeVariantArgs = {
    from?: Array<Stage>;
    locales?: InputMaybe<Array<Locale>>;
    unpublishBase?: InputMaybe<Scalars["Boolean"]>;
    where: ProductSizeVariantWhereUniqueInput;
};

export type MutationUnpublishReviewArgs = {
    from?: Array<Stage>;
    where: ReviewWhereUniqueInput;
};

export type MutationUpdateAccountArgs = {
    data: AccountUpdateInput;
    where: AccountWhereUniqueInput;
};

export type MutationUpdateAccountVariantArgs = {
    data: AccountVariantUpdateInput;
    where: AccountVariantWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
    data: AssetUpdateInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpdateCartArgs = {
    data: CartUpdateInput;
    where: CartWhereUniqueInput;
};

export type MutationUpdateCartItemArgs = {
    data: CartItemUpdateInput;
    where: CartItemWhereUniqueInput;
};

export type MutationUpdateCategoryArgs = {
    data: CategoryUpdateInput;
    where: CategoryWhereUniqueInput;
};

export type MutationUpdateCollectionArgs = {
    data: CollectionUpdateInput;
    where: CollectionWhereUniqueInput;
};

export type MutationUpdateCurrencyArgs = {
    data: CurrencyUpdateInput;
    where: CurrencyWhereUniqueInput;
};

export type MutationUpdateManyAccountVariantsArgs = {
    data: AccountVariantUpdateManyInput;
    where?: InputMaybe<AccountVariantManyWhereInput>;
};

export type MutationUpdateManyAccountVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: AccountVariantUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<AccountVariantManyWhereInput>;
};

export type MutationUpdateManyAccountsArgs = {
    data: AccountUpdateManyInput;
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUpdateManyAccountsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: AccountUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUpdateManyAssetsArgs = {
    data: AssetUpdateManyInput;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: AssetUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyCartItemsArgs = {
    data: CartItemUpdateManyInput;
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationUpdateManyCartItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: CartItemUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CartItemManyWhereInput>;
};

export type MutationUpdateManyCartsArgs = {
    data: CartUpdateManyInput;
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUpdateManyCartsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: CartUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CartManyWhereInput>;
};

export type MutationUpdateManyCategoriesArgs = {
    data: CategoryUpdateManyInput;
    where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyCategoriesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: CategoryUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyCollectionsArgs = {
    data: CollectionUpdateManyInput;
    where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUpdateManyCollectionsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: CollectionUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CollectionManyWhereInput>;
};

export type MutationUpdateManyCurrenciesArgs = {
    data: CurrencyUpdateManyInput;
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUpdateManyCurrenciesConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: CurrencyUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUpdateManyOrderItemsArgs = {
    data: OrderItemUpdateManyInput;
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUpdateManyOrderItemsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: OrderItemUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUpdateManyOrdersArgs = {
    data: OrderUpdateManyInput;
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUpdateManyOrdersConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: OrderUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUpdateManyPeopleArgs = {
    data: PersonUpdateManyInput;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUpdateManyPeopleConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: PersonUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<PersonManyWhereInput>;
};

export type MutationUpdateManyProductColorVariantsArgs = {
    data: ProductColorVariantUpdateManyInput;
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUpdateManyProductColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: ProductColorVariantUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductColorVariantManyWhereInput>;
};

export type MutationUpdateManyProductSizeColorVariantsArgs = {
    data: ProductSizeColorVariantUpdateManyInput;
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
};

export type MutationUpdateManyProductSizeColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: ProductSizeColorVariantUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductSizeColorVariantManyWhereInput>;
};

export type MutationUpdateManyProductSizeVariantsArgs = {
    data: ProductSizeVariantUpdateManyInput;
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUpdateManyProductSizeVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: ProductSizeVariantUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductSizeVariantManyWhereInput>;
};

export type MutationUpdateManyProductsArgs = {
    data: ProductUpdateManyInput;
    where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateManyProductsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: ProductUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateManyReviewsArgs = {
    data: ReviewUpdateManyInput;
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUpdateManyReviewsConnectionArgs = {
    after?: InputMaybe<Scalars["ID"]>;
    before?: InputMaybe<Scalars["ID"]>;
    data: ReviewUpdateManyInput;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUpdateOrderArgs = {
    data: OrderUpdateInput;
    where: OrderWhereUniqueInput;
};

export type MutationUpdateOrderItemArgs = {
    data: OrderItemUpdateInput;
    where: OrderItemWhereUniqueInput;
};

export type MutationUpdatePersonArgs = {
    data: PersonUpdateInput;
    where: PersonWhereUniqueInput;
};

export type MutationUpdateProductArgs = {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
};

export type MutationUpdateProductColorVariantArgs = {
    data: ProductColorVariantUpdateInput;
    where: ProductColorVariantWhereUniqueInput;
};

export type MutationUpdateProductSizeColorVariantArgs = {
    data: ProductSizeColorVariantUpdateInput;
    where: ProductSizeColorVariantWhereUniqueInput;
};

export type MutationUpdateProductSizeVariantArgs = {
    data: ProductSizeVariantUpdateInput;
    where: ProductSizeVariantWhereUniqueInput;
};

export type MutationUpdateReviewArgs = {
    data: ReviewUpdateInput;
    where: ReviewWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
    data: ScheduledReleaseUpdateInput;
    where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAccountArgs = {
    upsert: AccountUpsertInput;
    where: AccountWhereUniqueInput;
};

export type MutationUpsertAccountVariantArgs = {
    upsert: AccountVariantUpsertInput;
    where: AccountVariantWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
    upsert: AssetUpsertInput;
    where: AssetWhereUniqueInput;
};

export type MutationUpsertCartArgs = {
    upsert: CartUpsertInput;
    where: CartWhereUniqueInput;
};

export type MutationUpsertCartItemArgs = {
    upsert: CartItemUpsertInput;
    where: CartItemWhereUniqueInput;
};

export type MutationUpsertCategoryArgs = {
    upsert: CategoryUpsertInput;
    where: CategoryWhereUniqueInput;
};

export type MutationUpsertCollectionArgs = {
    upsert: CollectionUpsertInput;
    where: CollectionWhereUniqueInput;
};

export type MutationUpsertCurrencyArgs = {
    upsert: CurrencyUpsertInput;
    where: CurrencyWhereUniqueInput;
};

export type MutationUpsertOrderArgs = {
    upsert: OrderUpsertInput;
    where: OrderWhereUniqueInput;
};

export type MutationUpsertOrderItemArgs = {
    upsert: OrderItemUpsertInput;
    where: OrderItemWhereUniqueInput;
};

export type MutationUpsertPersonArgs = {
    upsert: PersonUpsertInput;
    where: PersonWhereUniqueInput;
};

export type MutationUpsertProductArgs = {
    upsert: ProductUpsertInput;
    where: ProductWhereUniqueInput;
};

export type MutationUpsertProductColorVariantArgs = {
    upsert: ProductColorVariantUpsertInput;
    where: ProductColorVariantWhereUniqueInput;
};

export type MutationUpsertProductSizeColorVariantArgs = {
    upsert: ProductSizeColorVariantUpsertInput;
    where: ProductSizeColorVariantWhereUniqueInput;
};

export type MutationUpsertProductSizeVariantArgs = {
    upsert: ProductSizeVariantUpsertInput;
    where: ProductSizeVariantWhereUniqueInput;
};

export type MutationUpsertReviewArgs = {
    upsert: ReviewUpsertInput;
    where: ReviewWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
    /** The id of the object. */
    id: Scalars["ID"];
    /** The Stage of an object */
    stage: Stage;
};

export type Order = Node & {
    __typename?: "Order";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Order>;
    email: Scalars["String"];
    /** List of Order versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    orderItems: Array<OrderItem>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    stripeCheckoutId: Scalars["String"];
    total: Scalars["Int"];
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type OrderCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type OrderHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type OrderOrderItemsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<OrderItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<OrderItemWhereInput>;
};

export type OrderPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type OrderUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: OrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderConnection = {
    __typename?: "OrderConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<OrderEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type OrderCreateInput = {
    cl7np0f7e2mea01up0sutgji6?: InputMaybe<AccountCreateManyInlineInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
    stripeCheckoutId: Scalars["String"];
    total: Scalars["Int"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type OrderCreateManyInlineInput = {
    /** Connect multiple existing Order documents */
    connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
    /** Create and connect multiple existing Order documents */
    create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
    /** Connect one existing Order document */
    connect?: InputMaybe<OrderWhereUniqueInput>;
    /** Create and connect one Order document */
    create?: InputMaybe<OrderCreateInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
    __typename?: "OrderEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Order;
};

export type OrderItem = Node & {
    __typename?: "OrderItem";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<OrderItem>;
    /** List of OrderItem versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    order?: Maybe<Order>;
    product?: Maybe<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    quantity: Scalars["Int"];
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    total: Scalars["Int"];
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type OrderItemCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type OrderItemHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type OrderItemOrderArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type OrderItemUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: OrderItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderItemConnection = {
    __typename?: "OrderItemConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<OrderItemEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type OrderItemCreateInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    order?: InputMaybe<OrderCreateOneInlineInput>;
    product?: InputMaybe<ProductCreateOneInlineInput>;
    quantity: Scalars["Int"];
    total: Scalars["Int"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type OrderItemCreateManyInlineInput = {
    /** Connect multiple existing OrderItem documents */
    connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
    /** Create and connect multiple existing OrderItem documents */
    create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemCreateOneInlineInput = {
    /** Connect one existing OrderItem document */
    connect?: InputMaybe<OrderItemWhereUniqueInput>;
    /** Create and connect one OrderItem document */
    create?: InputMaybe<OrderItemCreateInput>;
};

/** An edge in a connection. */
export type OrderItemEdge = {
    __typename?: "OrderItemEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: OrderItem;
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<OrderItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<OrderItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<OrderItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    order?: InputMaybe<OrderWhereInput>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    quantity?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    quantity_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    quantity_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    quantity_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    quantity_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    quantity_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    total?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    total_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    total_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    total_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    total_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    total_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum OrderItemOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    QuantityAsc = "quantity_ASC",
    QuantityDesc = "quantity_DESC",
    TotalAsc = "total_ASC",
    TotalDesc = "total_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type OrderItemUpdateInput = {
    order?: InputMaybe<OrderUpdateOneInlineInput>;
    product?: InputMaybe<ProductUpdateOneInlineInput>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

export type OrderItemUpdateManyInlineInput = {
    /** Connect multiple existing OrderItem documents */
    connect?: InputMaybe<Array<OrderItemConnectInput>>;
    /** Create and connect multiple OrderItem documents */
    create?: InputMaybe<Array<OrderItemCreateInput>>;
    /** Delete multiple OrderItem documents */
    delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
    /** Disconnect multiple OrderItem documents */
    disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing OrderItem documents */
    set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
    /** Update multiple OrderItem documents */
    update?: InputMaybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple OrderItem documents */
    upsert?: InputMaybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
};

export type OrderItemUpdateManyInput = {
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: OrderItemUpdateManyInput;
    /** Document search */
    where: OrderItemWhereInput;
};

export type OrderItemUpdateOneInlineInput = {
    /** Connect existing OrderItem document */
    connect?: InputMaybe<OrderItemWhereUniqueInput>;
    /** Create and connect one OrderItem document */
    create?: InputMaybe<OrderItemCreateInput>;
    /** Delete currently connected OrderItem document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected OrderItem document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single OrderItem document */
    update?: InputMaybe<OrderItemUpdateWithNestedWhereUniqueInput>;
    /** Upsert single OrderItem document */
    upsert?: InputMaybe<OrderItemUpsertWithNestedWhereUniqueInput>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: OrderItemUpdateInput;
    /** Unique document search */
    where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertInput = {
    /** Create document if it didn't exist */
    create: OrderItemCreateInput;
    /** Update document if it exists */
    update: OrderItemUpdateInput;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: OrderItemUpsertInput;
    /** Unique document search */
    where: OrderItemWhereUniqueInput;
};

/** Identifies documents */
export type OrderItemWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<OrderItemWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<OrderItemWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<OrderItemWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    order?: InputMaybe<OrderWhereInput>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    quantity?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    quantity_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    quantity_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    quantity_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    quantity_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    quantity_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    total?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    total_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    total_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    total_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    total_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    total_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Identifies documents */
export type OrderManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<OrderWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<OrderWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<OrderWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    email?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    email_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    email_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    email_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    email_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    email_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    email_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    email_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    orderItems_every?: InputMaybe<OrderItemWhereInput>;
    orderItems_none?: InputMaybe<OrderItemWhereInput>;
    orderItems_some?: InputMaybe<OrderItemWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    stripeCheckoutId?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    stripeCheckoutId_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    stripeCheckoutId_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    total_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    total_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    total_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    total_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    total_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum OrderOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    StripeCheckoutIdAsc = "stripeCheckoutId_ASC",
    StripeCheckoutIdDesc = "stripeCheckoutId_DESC",
    TotalAsc = "total_ASC",
    TotalDesc = "total_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type OrderUpdateInput = {
    cl7np0f7e2mea01up0sutgji6?: InputMaybe<AccountUpdateManyInlineInput>;
    email?: InputMaybe<Scalars["String"]>;
    orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
    stripeCheckoutId?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

export type OrderUpdateManyInlineInput = {
    /** Connect multiple existing Order documents */
    connect?: InputMaybe<Array<OrderConnectInput>>;
    /** Create and connect multiple Order documents */
    create?: InputMaybe<Array<OrderCreateInput>>;
    /** Delete multiple Order documents */
    delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
    /** Disconnect multiple Order documents */
    disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Order documents */
    set?: InputMaybe<Array<OrderWhereUniqueInput>>;
    /** Update multiple Order documents */
    update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Order documents */
    upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
    email?: InputMaybe<Scalars["String"]>;
    stripeCheckoutId?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

export type OrderUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: OrderUpdateManyInput;
    /** Document search */
    where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
    /** Connect existing Order document */
    connect?: InputMaybe<OrderWhereUniqueInput>;
    /** Create and connect one Order document */
    create?: InputMaybe<OrderCreateInput>;
    /** Delete currently connected Order document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Order document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Order document */
    update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Order document */
    upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: OrderUpdateInput;
    /** Unique document search */
    where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
    /** Create document if it didn't exist */
    create: OrderCreateInput;
    /** Update document if it exists */
    update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: OrderUpsertInput;
    /** Unique document search */
    where: OrderWhereUniqueInput;
};

/** Identifies documents */
export type OrderWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<OrderWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<OrderWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<OrderWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    email?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    email_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    email_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    email_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    email_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    email_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    email_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    email_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    orderItems_every?: InputMaybe<OrderItemWhereInput>;
    orderItems_none?: InputMaybe<OrderItemWhereInput>;
    orderItems_some?: InputMaybe<OrderItemWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    stripeCheckoutId?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    stripeCheckoutId_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    stripeCheckoutId_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    stripeCheckoutId_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    stripeCheckoutId_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    total_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    total_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    total_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    total_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    total_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: "PageInfo";
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars["Boolean"];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars["Boolean"];
    /** Number of items in the current page. */
    pageSize?: Maybe<Scalars["Int"]>;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]>;
};

export type Person = Node & {
    __typename?: "Person";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Person>;
    gender?: Maybe<PersongenderUnion>;
    /** List of Person versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type PersonCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type PersonDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type PersonGenderArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type PersonHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type PersonPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type PersonScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PersonUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type PersonConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: PersonWhereUniqueInput;
};

/** A connection to a list of items. */
export type PersonConnection = {
    __typename?: "PersonConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<PersonEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type PersonCreateInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    gender?: InputMaybe<PersongenderUnionCreateOneInlineInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PersonCreateManyInlineInput = {
    /** Connect multiple existing Person documents */
    connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Create and connect multiple existing Person documents */
    create?: InputMaybe<Array<PersonCreateInput>>;
};

export type PersonCreateOneInlineInput = {
    /** Connect one existing Person document */
    connect?: InputMaybe<PersonWhereUniqueInput>;
    /** Create and connect one Person document */
    create?: InputMaybe<PersonCreateInput>;
};

/** An edge in a connection. */
export type PersonEdge = {
    __typename?: "PersonEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Person;
};

/** Identifies documents */
export type PersonManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PersonWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PersonOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type PersonUpdateInput = {
    gender?: InputMaybe<PersongenderUnionUpdateOneInlineInput>;
};

export type PersonUpdateManyInlineInput = {
    /** Connect multiple existing Person documents */
    connect?: InputMaybe<Array<PersonConnectInput>>;
    /** Create and connect multiple Person documents */
    create?: InputMaybe<Array<PersonCreateInput>>;
    /** Delete multiple Person documents */
    delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Disconnect multiple Person documents */
    disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Person documents */
    set?: InputMaybe<Array<PersonWhereUniqueInput>>;
    /** Update multiple Person documents */
    update?: InputMaybe<Array<PersonUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Person documents */
    upsert?: InputMaybe<Array<PersonUpsertWithNestedWhereUniqueInput>>;
};

export type PersonUpdateManyInput = {
    /** No fields in updateMany data input */
    _?: InputMaybe<Scalars["String"]>;
};

export type PersonUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: PersonUpdateManyInput;
    /** Document search */
    where: PersonWhereInput;
};

export type PersonUpdateOneInlineInput = {
    /** Connect existing Person document */
    connect?: InputMaybe<PersonWhereUniqueInput>;
    /** Create and connect one Person document */
    create?: InputMaybe<PersonCreateInput>;
    /** Delete currently connected Person document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Person document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Person document */
    update?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Person document */
    upsert?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type PersonUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: PersonUpdateInput;
    /** Unique document search */
    where: PersonWhereUniqueInput;
};

export type PersonUpsertInput = {
    /** Create document if it didn't exist */
    create: PersonCreateInput;
    /** Update document if it exists */
    update: PersonUpdateInput;
};

export type PersonUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: PersonUpsertInput;
    /** Unique document search */
    where: PersonWhereUniqueInput;
};

/** Identifies documents */
export type PersonWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<PersonWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<PersonWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Person record uniquely */
export type PersonWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export type PersongenderUnion = Man | Woman;

export type PersongenderUnionConnectInput = {
    Man?: InputMaybe<ManConnectInput>;
    Woman?: InputMaybe<WomanConnectInput>;
};

export type PersongenderUnionCreateInput = {
    Man?: InputMaybe<ManCreateInput>;
    Woman?: InputMaybe<WomanCreateInput>;
};

export type PersongenderUnionCreateManyInlineInput = {
    /** Create and connect multiple existing PersongenderUnion documents */
    create?: InputMaybe<Array<PersongenderUnionCreateInput>>;
};

export type PersongenderUnionCreateOneInlineInput = {
    /** Create and connect one PersongenderUnion document */
    create?: InputMaybe<PersongenderUnionCreateInput>;
};

export type PersongenderUnionCreateWithPositionInput = {
    Man?: InputMaybe<ManCreateWithPositionInput>;
    Woman?: InputMaybe<WomanCreateWithPositionInput>;
};

export type PersongenderUnionUpdateInput = {
    Man?: InputMaybe<ManUpdateInput>;
    Woman?: InputMaybe<WomanUpdateInput>;
};

export type PersongenderUnionUpdateManyInlineInput = {
    /** Create and connect multiple PersongenderUnion component instances */
    create?: InputMaybe<Array<PersongenderUnionCreateWithPositionInput>>;
    /** Delete multiple PersongenderUnion documents */
    delete?: InputMaybe<Array<PersongenderUnionWhereUniqueInput>>;
    /** Update multiple PersongenderUnion component instances */
    update?: InputMaybe<Array<PersongenderUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple PersongenderUnion component instances */
    upsert?: InputMaybe<Array<PersongenderUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PersongenderUnionUpdateManyWithNestedWhereInput = {
    Man?: InputMaybe<ManUpdateManyWithNestedWhereInput>;
    Woman?: InputMaybe<WomanUpdateManyWithNestedWhereInput>;
};

export type PersongenderUnionUpdateOneInlineInput = {
    /** Create and connect one PersongenderUnion document */
    create?: InputMaybe<PersongenderUnionCreateInput>;
    /** Delete currently connected PersongenderUnion document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Update single PersongenderUnion document */
    update?: InputMaybe<PersongenderUnionUpdateWithNestedWhereUniqueInput>;
    /** Upsert single PersongenderUnion document */
    upsert?: InputMaybe<PersongenderUnionUpsertWithNestedWhereUniqueInput>;
};

export type PersongenderUnionUpdateWithNestedWhereUniqueAndPositionInput = {
    Man?: InputMaybe<ManUpdateWithNestedWhereUniqueAndPositionInput>;
    Woman?: InputMaybe<WomanUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PersongenderUnionUpdateWithNestedWhereUniqueInput = {
    Man?: InputMaybe<ManUpdateWithNestedWhereUniqueInput>;
    Woman?: InputMaybe<WomanUpdateWithNestedWhereUniqueInput>;
};

export type PersongenderUnionUpsertWithNestedWhereUniqueAndPositionInput = {
    Man?: InputMaybe<ManUpsertWithNestedWhereUniqueAndPositionInput>;
    Woman?: InputMaybe<WomanUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PersongenderUnionUpsertWithNestedWhereUniqueInput = {
    Man?: InputMaybe<ManUpsertWithNestedWhereUniqueInput>;
    Woman?: InputMaybe<WomanUpsertWithNestedWhereUniqueInput>;
};

export type PersongenderUnionWhereInput = {
    Man?: InputMaybe<ManWhereInput>;
    Woman?: InputMaybe<WomanWhereInput>;
};

export type PersongenderUnionWhereUniqueInput = {
    Man?: InputMaybe<ManWhereUniqueInput>;
    Woman?: InputMaybe<WomanWhereUniqueInput>;
};

export type Product = Node & {
    __typename?: "Product";
    categories: Array<Category>;
    checkoutItemTests: Array<CartItem>;
    collections: Array<Collection>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    description: Scalars["String"];
    /** Get the document in other stages */
    documentInStages: Array<Product>;
    /** List of Product versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    images: Array<Asset>;
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<Product>;
    name: Scalars["String"];
    orderItems: Array<OrderItem>;
    price: Scalars["Int"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    reviews: Array<Review>;
    scheduledIn: Array<ScheduledOperation>;
    slug: Scalars["String"];
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
    variants: Array<ProductVariants>;
};

export type ProductCategoriesArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<CategoryOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CategoryWhereInput>;
};

export type ProductCheckoutItemTestsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<CartItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CartItemWhereInput>;
};

export type ProductCollectionsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<CollectionOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<CollectionWhereInput>;
};

export type ProductCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type ProductHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type ProductImagesArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<AssetOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<AssetWhereInput>;
};

export type ProductLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

export type ProductOrderItemsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<OrderItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<OrderItemWhereInput>;
};

export type ProductPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductReviewsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ReviewOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ReviewWhereInput>;
};

export type ProductScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductVariantsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
};

export enum ProductColor {
    Black = "BLACK",
    Pink = "PINK",
    Purple = "PURPLE",
}

export type ProductColorVariant = Node & {
    __typename?: "ProductColorVariant";
    color: ProductColor;
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<ProductColorVariant>;
    /** List of ProductColorVariant versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<ProductColorVariant>;
    name: Scalars["String"];
    product?: Maybe<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type ProductColorVariantCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductColorVariantCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariantDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type ProductColorVariantHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type ProductColorVariantLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

export type ProductColorVariantProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariantPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductColorVariantPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariantScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductColorVariantUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductColorVariantUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductColorVariantConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ProductColorVariantWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductColorVariantConnection = {
    __typename?: "ProductColorVariantConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ProductColorVariantEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ProductColorVariantCreateInput = {
    color: ProductColor;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<ProductColorVariantCreateLocalizationsInput>;
    /** name input for default locale (en) */
    name: Scalars["String"];
    product?: InputMaybe<ProductCreateOneInlineInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductColorVariantCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    name: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductColorVariantCreateLocalizationInput = {
    /** Localization input */
    data: ProductColorVariantCreateLocalizationDataInput;
    locale: Locale;
};

export type ProductColorVariantCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<ProductColorVariantCreateLocalizationInput>>;
};

export type ProductColorVariantCreateManyInlineInput = {
    /** Connect multiple existing ProductColorVariant documents */
    connect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
    /** Create and connect multiple existing ProductColorVariant documents */
    create?: InputMaybe<Array<ProductColorVariantCreateInput>>;
};

export type ProductColorVariantCreateOneInlineInput = {
    /** Connect one existing ProductColorVariant document */
    connect?: InputMaybe<ProductColorVariantWhereUniqueInput>;
    /** Create and connect one ProductColorVariant document */
    create?: InputMaybe<ProductColorVariantCreateInput>;
};

/** An edge in a connection. */
export type ProductColorVariantEdge = {
    __typename?: "ProductColorVariantEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: ProductColorVariant;
};

/** Identifies documents */
export type ProductColorVariantManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductColorVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductColorVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    color?: InputMaybe<ProductColor>;
    /** All values that are contained in given list. */
    color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    /** All values that are not equal to given value. */
    color_not?: InputMaybe<ProductColor>;
    /** All values that are not contained in given list. */
    color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductColorVariantOrderByInput {
    ColorAsc = "color_ASC",
    ColorDesc = "color_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type ProductColorVariantUpdateInput = {
    color?: InputMaybe<ProductColor>;
    /** Manage document localizations */
    localizations?: InputMaybe<ProductColorVariantUpdateLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductUpdateOneInlineInput>;
};

export type ProductColorVariantUpdateLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type ProductColorVariantUpdateLocalizationInput = {
    data: ProductColorVariantUpdateLocalizationDataInput;
    locale: Locale;
};

export type ProductColorVariantUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<ProductColorVariantCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<ProductColorVariantUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<ProductColorVariantUpsertLocalizationInput>>;
};

export type ProductColorVariantUpdateManyInlineInput = {
    /** Connect multiple existing ProductColorVariant documents */
    connect?: InputMaybe<Array<ProductColorVariantConnectInput>>;
    /** Create and connect multiple ProductColorVariant documents */
    create?: InputMaybe<Array<ProductColorVariantCreateInput>>;
    /** Delete multiple ProductColorVariant documents */
    delete?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
    /** Disconnect multiple ProductColorVariant documents */
    disconnect?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ProductColorVariant documents */
    set?: InputMaybe<Array<ProductColorVariantWhereUniqueInput>>;
    /** Update multiple ProductColorVariant documents */
    update?: InputMaybe<Array<ProductColorVariantUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ProductColorVariant documents */
    upsert?: InputMaybe<Array<ProductColorVariantUpsertWithNestedWhereUniqueInput>>;
};

export type ProductColorVariantUpdateManyInput = {
    color?: InputMaybe<ProductColor>;
    /** Optional updates to localizations */
    localizations?: InputMaybe<ProductColorVariantUpdateManyLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
};

export type ProductColorVariantUpdateManyLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type ProductColorVariantUpdateManyLocalizationInput = {
    data: ProductColorVariantUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type ProductColorVariantUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<ProductColorVariantUpdateManyLocalizationInput>>;
};

export type ProductColorVariantUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ProductColorVariantUpdateManyInput;
    /** Document search */
    where: ProductColorVariantWhereInput;
};

export type ProductColorVariantUpdateOneInlineInput = {
    /** Connect existing ProductColorVariant document */
    connect?: InputMaybe<ProductColorVariantWhereUniqueInput>;
    /** Create and connect one ProductColorVariant document */
    create?: InputMaybe<ProductColorVariantCreateInput>;
    /** Delete currently connected ProductColorVariant document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected ProductColorVariant document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single ProductColorVariant document */
    update?: InputMaybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ProductColorVariant document */
    upsert?: InputMaybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductColorVariantUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ProductColorVariantUpdateInput;
    /** Unique document search */
    where: ProductColorVariantWhereUniqueInput;
};

export type ProductColorVariantUpsertInput = {
    /** Create document if it didn't exist */
    create: ProductColorVariantCreateInput;
    /** Update document if it exists */
    update: ProductColorVariantUpdateInput;
};

export type ProductColorVariantUpsertLocalizationInput = {
    create: ProductColorVariantCreateLocalizationDataInput;
    locale: Locale;
    update: ProductColorVariantUpdateLocalizationDataInput;
};

export type ProductColorVariantUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ProductColorVariantUpsertInput;
    /** Unique document search */
    where: ProductColorVariantWhereUniqueInput;
};

/** Identifies documents */
export type ProductColorVariantWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductColorVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductColorVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductColorVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    color?: InputMaybe<ProductColor>;
    /** All values that are contained in given list. */
    color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    /** All values that are not equal to given value. */
    color_not?: InputMaybe<ProductColor>;
    /** All values that are not contained in given list. */
    color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ProductColorVariant record uniquely */
export type ProductColorVariantWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export type ProductConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
    __typename?: "ProductConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ProductEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ProductCreateInput = {
    categories?: InputMaybe<CategoryCreateManyInlineInput>;
    checkoutItemTests?: InputMaybe<CartItemCreateManyInlineInput>;
    collections?: InputMaybe<CollectionCreateManyInlineInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** description input for default locale (en) */
    description: Scalars["String"];
    images?: InputMaybe<AssetCreateManyInlineInput>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<ProductCreateLocalizationsInput>;
    /** name input for default locale (en) */
    name: Scalars["String"];
    orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
    /** price input for default locale (en) */
    price: Scalars["Int"];
    reviews?: InputMaybe<ReviewCreateManyInlineInput>;
    slug: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    variants?: InputMaybe<ProductVariantsCreateManyInlineInput>;
};

export type ProductCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    description: Scalars["String"];
    name: Scalars["String"];
    price: Scalars["Int"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductCreateLocalizationInput = {
    /** Localization input */
    data: ProductCreateLocalizationDataInput;
    locale: Locale;
};

export type ProductCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
    /** Connect multiple existing Product documents */
    connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
    /** Create and connect multiple existing Product documents */
    create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
    /** Connect one existing Product document */
    connect?: InputMaybe<ProductWhereUniqueInput>;
    /** Create and connect one Product document */
    create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
    __typename?: "ProductEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    categories_every?: InputMaybe<CategoryWhereInput>;
    categories_none?: InputMaybe<CategoryWhereInput>;
    categories_some?: InputMaybe<CategoryWhereInput>;
    checkoutItemTests_every?: InputMaybe<CartItemWhereInput>;
    checkoutItemTests_none?: InputMaybe<CartItemWhereInput>;
    checkoutItemTests_some?: InputMaybe<CartItemWhereInput>;
    collections_every?: InputMaybe<CollectionWhereInput>;
    collections_none?: InputMaybe<CollectionWhereInput>;
    collections_some?: InputMaybe<CollectionWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    images_every?: InputMaybe<AssetWhereInput>;
    images_none?: InputMaybe<AssetWhereInput>;
    images_some?: InputMaybe<AssetWhereInput>;
    orderItems_every?: InputMaybe<OrderItemWhereInput>;
    orderItems_none?: InputMaybe<OrderItemWhereInput>;
    orderItems_some?: InputMaybe<OrderItemWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    reviews_every?: InputMaybe<ReviewWhereInput>;
    reviews_none?: InputMaybe<ReviewWhereInput>;
    reviews_some?: InputMaybe<ReviewWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    slug?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    slug_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PriceAsc = "price_ASC",
    PriceDesc = "price_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export enum ProductSize {
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL",
    Xl = "XL",
    Xs = "XS",
}

export type ProductSizeColorVariant = Node & {
    __typename?: "ProductSizeColorVariant";
    color: ProductColor;
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<ProductSizeColorVariant>;
    /** List of ProductSizeColorVariant versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<ProductSizeColorVariant>;
    name: Scalars["String"];
    product?: Maybe<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    size: ProductSize;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type ProductSizeColorVariantCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductSizeColorVariantCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeColorVariantDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type ProductSizeColorVariantHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type ProductSizeColorVariantLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

export type ProductSizeColorVariantProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeColorVariantPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductSizeColorVariantPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeColorVariantScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductSizeColorVariantUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductSizeColorVariantUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeColorVariantConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ProductSizeColorVariantWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductSizeColorVariantConnection = {
    __typename?: "ProductSizeColorVariantConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ProductSizeColorVariantEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ProductSizeColorVariantCreateInput = {
    color: ProductColor;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<ProductSizeColorVariantCreateLocalizationsInput>;
    /** name input for default locale (en) */
    name: Scalars["String"];
    product?: InputMaybe<ProductCreateOneInlineInput>;
    size: ProductSize;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductSizeColorVariantCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    name: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductSizeColorVariantCreateLocalizationInput = {
    /** Localization input */
    data: ProductSizeColorVariantCreateLocalizationDataInput;
    locale: Locale;
};

export type ProductSizeColorVariantCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<ProductSizeColorVariantCreateLocalizationInput>>;
};

export type ProductSizeColorVariantCreateManyInlineInput = {
    /** Connect multiple existing ProductSizeColorVariant documents */
    connect?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
    /** Create and connect multiple existing ProductSizeColorVariant documents */
    create?: InputMaybe<Array<ProductSizeColorVariantCreateInput>>;
};

export type ProductSizeColorVariantCreateOneInlineInput = {
    /** Connect one existing ProductSizeColorVariant document */
    connect?: InputMaybe<ProductSizeColorVariantWhereUniqueInput>;
    /** Create and connect one ProductSizeColorVariant document */
    create?: InputMaybe<ProductSizeColorVariantCreateInput>;
};

/** An edge in a connection. */
export type ProductSizeColorVariantEdge = {
    __typename?: "ProductSizeColorVariantEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: ProductSizeColorVariant;
};

/** Identifies documents */
export type ProductSizeColorVariantManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    color?: InputMaybe<ProductColor>;
    /** All values that are contained in given list. */
    color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    /** All values that are not equal to given value. */
    color_not?: InputMaybe<ProductColor>;
    /** All values that are not contained in given list. */
    color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    size?: InputMaybe<ProductSize>;
    /** All values that are contained in given list. */
    size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    /** All values that are not equal to given value. */
    size_not?: InputMaybe<ProductSize>;
    /** All values that are not contained in given list. */
    size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductSizeColorVariantOrderByInput {
    ColorAsc = "color_ASC",
    ColorDesc = "color_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    SizeAsc = "size_ASC",
    SizeDesc = "size_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type ProductSizeColorVariantUpdateInput = {
    color?: InputMaybe<ProductColor>;
    /** Manage document localizations */
    localizations?: InputMaybe<ProductSizeColorVariantUpdateLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductUpdateOneInlineInput>;
    size?: InputMaybe<ProductSize>;
};

export type ProductSizeColorVariantUpdateLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type ProductSizeColorVariantUpdateLocalizationInput = {
    data: ProductSizeColorVariantUpdateLocalizationDataInput;
    locale: Locale;
};

export type ProductSizeColorVariantUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<ProductSizeColorVariantCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<ProductSizeColorVariantUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<ProductSizeColorVariantUpsertLocalizationInput>>;
};

export type ProductSizeColorVariantUpdateManyInlineInput = {
    /** Connect multiple existing ProductSizeColorVariant documents */
    connect?: InputMaybe<Array<ProductSizeColorVariantConnectInput>>;
    /** Create and connect multiple ProductSizeColorVariant documents */
    create?: InputMaybe<Array<ProductSizeColorVariantCreateInput>>;
    /** Delete multiple ProductSizeColorVariant documents */
    delete?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
    /** Disconnect multiple ProductSizeColorVariant documents */
    disconnect?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ProductSizeColorVariant documents */
    set?: InputMaybe<Array<ProductSizeColorVariantWhereUniqueInput>>;
    /** Update multiple ProductSizeColorVariant documents */
    update?: InputMaybe<Array<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ProductSizeColorVariant documents */
    upsert?: InputMaybe<Array<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>>;
};

export type ProductSizeColorVariantUpdateManyInput = {
    color?: InputMaybe<ProductColor>;
    /** Optional updates to localizations */
    localizations?: InputMaybe<ProductSizeColorVariantUpdateManyLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    size?: InputMaybe<ProductSize>;
};

export type ProductSizeColorVariantUpdateManyLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type ProductSizeColorVariantUpdateManyLocalizationInput = {
    data: ProductSizeColorVariantUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type ProductSizeColorVariantUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<ProductSizeColorVariantUpdateManyLocalizationInput>>;
};

export type ProductSizeColorVariantUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ProductSizeColorVariantUpdateManyInput;
    /** Document search */
    where: ProductSizeColorVariantWhereInput;
};

export type ProductSizeColorVariantUpdateOneInlineInput = {
    /** Connect existing ProductSizeColorVariant document */
    connect?: InputMaybe<ProductSizeColorVariantWhereUniqueInput>;
    /** Create and connect one ProductSizeColorVariant document */
    create?: InputMaybe<ProductSizeColorVariantCreateInput>;
    /** Delete currently connected ProductSizeColorVariant document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected ProductSizeColorVariant document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single ProductSizeColorVariant document */
    update?: InputMaybe<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ProductSizeColorVariant document */
    upsert?: InputMaybe<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductSizeColorVariantUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ProductSizeColorVariantUpdateInput;
    /** Unique document search */
    where: ProductSizeColorVariantWhereUniqueInput;
};

export type ProductSizeColorVariantUpsertInput = {
    /** Create document if it didn't exist */
    create: ProductSizeColorVariantCreateInput;
    /** Update document if it exists */
    update: ProductSizeColorVariantUpdateInput;
};

export type ProductSizeColorVariantUpsertLocalizationInput = {
    create: ProductSizeColorVariantCreateLocalizationDataInput;
    locale: Locale;
    update: ProductSizeColorVariantUpdateLocalizationDataInput;
};

export type ProductSizeColorVariantUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ProductSizeColorVariantUpsertInput;
    /** Unique document search */
    where: ProductSizeColorVariantWhereUniqueInput;
};

/** Identifies documents */
export type ProductSizeColorVariantWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductSizeColorVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    color?: InputMaybe<ProductColor>;
    /** All values that are contained in given list. */
    color_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    /** All values that are not equal to given value. */
    color_not?: InputMaybe<ProductColor>;
    /** All values that are not contained in given list. */
    color_not_in?: InputMaybe<Array<InputMaybe<ProductColor>>>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    size?: InputMaybe<ProductSize>;
    /** All values that are contained in given list. */
    size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    /** All values that are not equal to given value. */
    size_not?: InputMaybe<ProductSize>;
    /** All values that are not contained in given list. */
    size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ProductSizeColorVariant record uniquely */
export type ProductSizeColorVariantWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export type ProductSizeVariant = Node & {
    __typename?: "ProductSizeVariant";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<ProductSizeVariant>;
    /** List of ProductSizeVariant versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** System Locale field */
    locale: Locale;
    /** Get the other localizations for this document */
    localizations: Array<ProductSizeVariant>;
    name: Scalars["String"];
    product?: Maybe<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    scheduledIn: Array<ScheduledOperation>;
    size: ProductSize;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type ProductSizeVariantCreatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductSizeVariantCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeVariantDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type ProductSizeVariantHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type ProductSizeVariantLocalizationsArgs = {
    includeCurrent?: Scalars["Boolean"];
    locales?: Array<Locale>;
};

export type ProductSizeVariantProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeVariantPublishedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductSizeVariantPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeVariantScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductSizeVariantUpdatedAtArgs = {
    variation?: SystemDateTimeFieldVariation;
};

export type ProductSizeVariantUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ProductSizeVariantConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ProductSizeVariantWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductSizeVariantConnection = {
    __typename?: "ProductSizeVariantConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ProductSizeVariantEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ProductSizeVariantCreateInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** Inline mutations for managing document localizations excluding the default locale */
    localizations?: InputMaybe<ProductSizeVariantCreateLocalizationsInput>;
    /** name input for default locale (en) */
    name: Scalars["String"];
    product?: InputMaybe<ProductCreateOneInlineInput>;
    size: ProductSize;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductSizeVariantCreateLocalizationDataInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    name: Scalars["String"];
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ProductSizeVariantCreateLocalizationInput = {
    /** Localization input */
    data: ProductSizeVariantCreateLocalizationDataInput;
    locale: Locale;
};

export type ProductSizeVariantCreateLocalizationsInput = {
    /** Create localizations for the newly-created document */
    create?: InputMaybe<Array<ProductSizeVariantCreateLocalizationInput>>;
};

export type ProductSizeVariantCreateManyInlineInput = {
    /** Connect multiple existing ProductSizeVariant documents */
    connect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
    /** Create and connect multiple existing ProductSizeVariant documents */
    create?: InputMaybe<Array<ProductSizeVariantCreateInput>>;
};

export type ProductSizeVariantCreateOneInlineInput = {
    /** Connect one existing ProductSizeVariant document */
    connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>;
    /** Create and connect one ProductSizeVariant document */
    create?: InputMaybe<ProductSizeVariantCreateInput>;
};

/** An edge in a connection. */
export type ProductSizeVariantEdge = {
    __typename?: "ProductSizeVariantEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: ProductSizeVariant;
};

/** Identifies documents */
export type ProductSizeVariantManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    size?: InputMaybe<ProductSize>;
    /** All values that are contained in given list. */
    size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    /** All values that are not equal to given value. */
    size_not?: InputMaybe<ProductSize>;
    /** All values that are not contained in given list. */
    size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductSizeVariantOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    SizeAsc = "size_ASC",
    SizeDesc = "size_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type ProductSizeVariantUpdateInput = {
    /** Manage document localizations */
    localizations?: InputMaybe<ProductSizeVariantUpdateLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductUpdateOneInlineInput>;
    size?: InputMaybe<ProductSize>;
};

export type ProductSizeVariantUpdateLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type ProductSizeVariantUpdateLocalizationInput = {
    data: ProductSizeVariantUpdateLocalizationDataInput;
    locale: Locale;
};

export type ProductSizeVariantUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<ProductSizeVariantCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<ProductSizeVariantUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<ProductSizeVariantUpsertLocalizationInput>>;
};

export type ProductSizeVariantUpdateManyInlineInput = {
    /** Connect multiple existing ProductSizeVariant documents */
    connect?: InputMaybe<Array<ProductSizeVariantConnectInput>>;
    /** Create and connect multiple ProductSizeVariant documents */
    create?: InputMaybe<Array<ProductSizeVariantCreateInput>>;
    /** Delete multiple ProductSizeVariant documents */
    delete?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
    /** Disconnect multiple ProductSizeVariant documents */
    disconnect?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ProductSizeVariant documents */
    set?: InputMaybe<Array<ProductSizeVariantWhereUniqueInput>>;
    /** Update multiple ProductSizeVariant documents */
    update?: InputMaybe<Array<ProductSizeVariantUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ProductSizeVariant documents */
    upsert?: InputMaybe<Array<ProductSizeVariantUpsertWithNestedWhereUniqueInput>>;
};

export type ProductSizeVariantUpdateManyInput = {
    /** Optional updates to localizations */
    localizations?: InputMaybe<ProductSizeVariantUpdateManyLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    size?: InputMaybe<ProductSize>;
};

export type ProductSizeVariantUpdateManyLocalizationDataInput = {
    name?: InputMaybe<Scalars["String"]>;
};

export type ProductSizeVariantUpdateManyLocalizationInput = {
    data: ProductSizeVariantUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type ProductSizeVariantUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<ProductSizeVariantUpdateManyLocalizationInput>>;
};

export type ProductSizeVariantUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ProductSizeVariantUpdateManyInput;
    /** Document search */
    where: ProductSizeVariantWhereInput;
};

export type ProductSizeVariantUpdateOneInlineInput = {
    /** Connect existing ProductSizeVariant document */
    connect?: InputMaybe<ProductSizeVariantWhereUniqueInput>;
    /** Create and connect one ProductSizeVariant document */
    create?: InputMaybe<ProductSizeVariantCreateInput>;
    /** Delete currently connected ProductSizeVariant document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected ProductSizeVariant document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single ProductSizeVariant document */
    update?: InputMaybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ProductSizeVariant document */
    upsert?: InputMaybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductSizeVariantUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ProductSizeVariantUpdateInput;
    /** Unique document search */
    where: ProductSizeVariantWhereUniqueInput;
};

export type ProductSizeVariantUpsertInput = {
    /** Create document if it didn't exist */
    create: ProductSizeVariantCreateInput;
    /** Update document if it exists */
    update: ProductSizeVariantUpdateInput;
};

export type ProductSizeVariantUpsertLocalizationInput = {
    create: ProductSizeVariantCreateLocalizationDataInput;
    locale: Locale;
    update: ProductSizeVariantUpdateLocalizationDataInput;
};

export type ProductSizeVariantUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ProductSizeVariantUpsertInput;
    /** Unique document search */
    where: ProductSizeVariantWhereUniqueInput;
};

/** Identifies documents */
export type ProductSizeVariantWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductSizeVariantWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    size?: InputMaybe<ProductSize>;
    /** All values that are contained in given list. */
    size_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    /** All values that are not equal to given value. */
    size_not?: InputMaybe<ProductSize>;
    /** All values that are not contained in given list. */
    size_not_in?: InputMaybe<Array<InputMaybe<ProductSize>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ProductSizeVariant record uniquely */
export type ProductSizeVariantWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export type ProductUpdateInput = {
    categories?: InputMaybe<CategoryUpdateManyInlineInput>;
    checkoutItemTests?: InputMaybe<CartItemUpdateManyInlineInput>;
    collections?: InputMaybe<CollectionUpdateManyInlineInput>;
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    images?: InputMaybe<AssetUpdateManyInlineInput>;
    /** Manage document localizations */
    localizations?: InputMaybe<ProductUpdateLocalizationsInput>;
    /** name input for default locale (en) */
    name?: InputMaybe<Scalars["String"]>;
    orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
    /** price input for default locale (en) */
    price?: InputMaybe<Scalars["Int"]>;
    reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
    slug?: InputMaybe<Scalars["String"]>;
    variants?: InputMaybe<ProductVariantsUpdateManyInlineInput>;
};

export type ProductUpdateLocalizationDataInput = {
    description?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    price?: InputMaybe<Scalars["Int"]>;
};

export type ProductUpdateLocalizationInput = {
    data: ProductUpdateLocalizationDataInput;
    locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
    /** Localizations to create */
    create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
    /** Localizations to delete */
    delete?: InputMaybe<Array<Locale>>;
    /** Localizations to update */
    update?: InputMaybe<Array<ProductUpdateLocalizationInput>>;
    upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>;
};

export type ProductUpdateManyInlineInput = {
    /** Connect multiple existing Product documents */
    connect?: InputMaybe<Array<ProductConnectInput>>;
    /** Create and connect multiple Product documents */
    create?: InputMaybe<Array<ProductCreateInput>>;
    /** Delete multiple Product documents */
    delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
    /** Disconnect multiple Product documents */
    disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Product documents */
    set?: InputMaybe<Array<ProductWhereUniqueInput>>;
    /** Update multiple Product documents */
    update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Product documents */
    upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
    /** description input for default locale (en) */
    description?: InputMaybe<Scalars["String"]>;
    /** Optional updates to localizations */
    localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>;
    /** price input for default locale (en) */
    price?: InputMaybe<Scalars["Int"]>;
};

export type ProductUpdateManyLocalizationDataInput = {
    description?: InputMaybe<Scalars["String"]>;
    price?: InputMaybe<Scalars["Int"]>;
};

export type ProductUpdateManyLocalizationInput = {
    data: ProductUpdateManyLocalizationDataInput;
    locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
    /** Localizations to update */
    update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ProductUpdateManyInput;
    /** Document search */
    where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
    /** Connect existing Product document */
    connect?: InputMaybe<ProductWhereUniqueInput>;
    /** Create and connect one Product document */
    create?: InputMaybe<ProductCreateInput>;
    /** Delete currently connected Product document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Product document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Product document */
    update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Product document */
    upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ProductUpdateInput;
    /** Unique document search */
    where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
    /** Create document if it didn't exist */
    create: ProductCreateInput;
    /** Update document if it exists */
    update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
    create: ProductCreateLocalizationDataInput;
    locale: Locale;
    update: ProductUpdateLocalizationDataInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ProductUpsertInput;
    /** Unique document search */
    where: ProductWhereUniqueInput;
};

export type ProductVariants = ProductColorVariant | ProductSizeColorVariant | ProductSizeVariant;

export type ProductVariantsConnectInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantConnectInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantConnectInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantConnectInput>;
};

export type ProductVariantsCreateInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantCreateInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantCreateInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantCreateInput>;
};

export type ProductVariantsCreateManyInlineInput = {
    /** Connect multiple existing ProductVariants documents */
    connect?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
    /** Create and connect multiple existing ProductVariants documents */
    create?: InputMaybe<Array<ProductVariantsCreateInput>>;
};

export type ProductVariantsCreateOneInlineInput = {
    /** Connect one existing ProductVariants document */
    connect?: InputMaybe<ProductVariantsWhereUniqueInput>;
    /** Create and connect one ProductVariants document */
    create?: InputMaybe<ProductVariantsCreateInput>;
};

export type ProductVariantsUpdateInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantUpdateInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpdateInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantUpdateInput>;
};

export type ProductVariantsUpdateManyInlineInput = {
    /** Connect multiple existing ProductVariants documents */
    connect?: InputMaybe<Array<ProductVariantsConnectInput>>;
    /** Create and connect multiple ProductVariants documents */
    create?: InputMaybe<Array<ProductVariantsCreateInput>>;
    /** Delete multiple ProductVariants documents */
    delete?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
    /** Disconnect multiple ProductVariants documents */
    disconnect?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ProductVariants documents */
    set?: InputMaybe<Array<ProductVariantsWhereUniqueInput>>;
    /** Update multiple ProductVariants documents */
    update?: InputMaybe<Array<ProductVariantsUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ProductVariants documents */
    upsert?: InputMaybe<Array<ProductVariantsUpsertWithNestedWhereUniqueInput>>;
};

export type ProductVariantsUpdateManyWithNestedWhereInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantUpdateManyWithNestedWhereInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpdateManyWithNestedWhereInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantUpdateManyWithNestedWhereInput>;
};

export type ProductVariantsUpdateOneInlineInput = {
    /** Connect existing ProductVariants document */
    connect?: InputMaybe<ProductVariantsWhereUniqueInput>;
    /** Create and connect one ProductVariants document */
    create?: InputMaybe<ProductVariantsCreateInput>;
    /** Delete currently connected ProductVariants document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected ProductVariants document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single ProductVariants document */
    update?: InputMaybe<ProductVariantsUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ProductVariants document */
    upsert?: InputMaybe<ProductVariantsUpsertWithNestedWhereUniqueInput>;
};

export type ProductVariantsUpdateWithNestedWhereUniqueInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantUpdateWithNestedWhereUniqueInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpdateWithNestedWhereUniqueInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantUpdateWithNestedWhereUniqueInput>;
};

export type ProductVariantsUpsertWithNestedWhereUniqueInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantUpsertWithNestedWhereUniqueInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantUpsertWithNestedWhereUniqueInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantUpsertWithNestedWhereUniqueInput>;
};

export type ProductVariantsWhereInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantWhereInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantWhereInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantWhereInput>;
};

export type ProductVariantsWhereUniqueInput = {
    ProductColorVariant?: InputMaybe<ProductColorVariantWhereUniqueInput>;
    ProductSizeColorVariant?: InputMaybe<ProductSizeColorVariantWhereUniqueInput>;
    ProductSizeVariant?: InputMaybe<ProductSizeVariantWhereUniqueInput>;
};

/** Identifies documents */
export type ProductWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ProductWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ProductWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ProductWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    categories_every?: InputMaybe<CategoryWhereInput>;
    categories_none?: InputMaybe<CategoryWhereInput>;
    categories_some?: InputMaybe<CategoryWhereInput>;
    checkoutItemTests_every?: InputMaybe<CartItemWhereInput>;
    checkoutItemTests_none?: InputMaybe<CartItemWhereInput>;
    checkoutItemTests_some?: InputMaybe<CartItemWhereInput>;
    collections_every?: InputMaybe<CollectionWhereInput>;
    collections_none?: InputMaybe<CollectionWhereInput>;
    collections_some?: InputMaybe<CollectionWhereInput>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    description_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    images_every?: InputMaybe<AssetWhereInput>;
    images_none?: InputMaybe<AssetWhereInput>;
    images_some?: InputMaybe<AssetWhereInput>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    orderItems_every?: InputMaybe<OrderItemWhereInput>;
    orderItems_none?: InputMaybe<OrderItemWhereInput>;
    orderItems_some?: InputMaybe<OrderItemWhereInput>;
    price?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    price_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    price_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    price_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    price_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    price_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    reviews_every?: InputMaybe<ReviewWhereInput>;
    reviews_none?: InputMaybe<ReviewWhereInput>;
    reviews_some?: InputMaybe<ReviewWhereInput>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    slug?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    slug_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    slug_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    slug_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    slug_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    slug_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    slug_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    slug_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
    slug?: InputMaybe<Scalars["String"]>;
};

export type PublishLocaleInput = {
    /** Locales to publish */
    locale: Locale;
    /** Stages to publish selected locales to */
    stages: Array<Stage>;
};

export type Query = {
    __typename?: "Query";
    /** Retrieve a single account */
    account?: Maybe<Account>;
    /** Retrieve a single accountVariant */
    accountVariant?: Maybe<AccountVariant>;
    /** Retrieve document version */
    accountVariantVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple accountVariants */
    accountVariants: Array<AccountVariant>;
    /** Retrieve multiple accountVariants using the Relay connection interface */
    accountVariantsConnection: AccountVariantConnection;
    /** Retrieve document version */
    accountVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple accounts */
    accounts: Array<Account>;
    /** Retrieve multiple accounts using the Relay connection interface */
    accountsConnection: AccountConnection;
    /** Retrieve a single asset */
    asset?: Maybe<Asset>;
    /** Retrieve document version */
    assetVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple assets */
    assets: Array<Asset>;
    /** Retrieve multiple assets using the Relay connection interface */
    assetsConnection: AssetConnection;
    /** Retrieve a single cart */
    cart?: Maybe<Cart>;
    /** Retrieve a single cartItem */
    cartItem?: Maybe<CartItem>;
    /** Retrieve document version */
    cartItemVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple cartItems */
    cartItems: Array<CartItem>;
    /** Retrieve multiple cartItems using the Relay connection interface */
    cartItemsConnection: CartItemConnection;
    /** Retrieve document version */
    cartVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple carts */
    carts: Array<Cart>;
    /** Retrieve multiple carts using the Relay connection interface */
    cartsConnection: CartConnection;
    /** Retrieve multiple categories */
    categories: Array<Category>;
    /** Retrieve multiple categories using the Relay connection interface */
    categoriesConnection: CategoryConnection;
    /** Retrieve a single category */
    category?: Maybe<Category>;
    /** Retrieve document version */
    categoryVersion?: Maybe<DocumentVersion>;
    /** Retrieve a single collection */
    collection?: Maybe<Collection>;
    /** Retrieve document version */
    collectionVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple collections */
    collections: Array<Collection>;
    /** Retrieve multiple collections using the Relay connection interface */
    collectionsConnection: CollectionConnection;
    /** Retrieve multiple currencies */
    currencies: Array<Currency>;
    /** Retrieve multiple currencies using the Relay connection interface */
    currenciesConnection: CurrencyConnection;
    /** Retrieve a single currency */
    currency?: Maybe<Currency>;
    /** Retrieve document version */
    currencyVersion?: Maybe<DocumentVersion>;
    /** Fetches an object given its ID */
    node?: Maybe<Node>;
    /** Retrieve a single order */
    order?: Maybe<Order>;
    /** Retrieve a single orderItem */
    orderItem?: Maybe<OrderItem>;
    /** Retrieve document version */
    orderItemVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple orderItems */
    orderItems: Array<OrderItem>;
    /** Retrieve multiple orderItems using the Relay connection interface */
    orderItemsConnection: OrderItemConnection;
    /** Retrieve document version */
    orderVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple orders */
    orders: Array<Order>;
    /** Retrieve multiple orders using the Relay connection interface */
    ordersConnection: OrderConnection;
    /** Retrieve multiple people */
    people: Array<Person>;
    /** Retrieve multiple people using the Relay connection interface */
    peopleConnection: PersonConnection;
    /** Retrieve a single person */
    person?: Maybe<Person>;
    /** Retrieve document version */
    personVersion?: Maybe<DocumentVersion>;
    /** Retrieve a single product */
    product?: Maybe<Product>;
    /** Retrieve a single productColorVariant */
    productColorVariant?: Maybe<ProductColorVariant>;
    /** Retrieve document version */
    productColorVariantVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple productColorVariants */
    productColorVariants: Array<ProductColorVariant>;
    /** Retrieve multiple productColorVariants using the Relay connection interface */
    productColorVariantsConnection: ProductColorVariantConnection;
    /** Retrieve a single productSizeColorVariant */
    productSizeColorVariant?: Maybe<ProductSizeColorVariant>;
    /** Retrieve document version */
    productSizeColorVariantVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple productSizeColorVariants */
    productSizeColorVariants: Array<ProductSizeColorVariant>;
    /** Retrieve multiple productSizeColorVariants using the Relay connection interface */
    productSizeColorVariantsConnection: ProductSizeColorVariantConnection;
    /** Retrieve a single productSizeVariant */
    productSizeVariant?: Maybe<ProductSizeVariant>;
    /** Retrieve document version */
    productSizeVariantVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple productSizeVariants */
    productSizeVariants: Array<ProductSizeVariant>;
    /** Retrieve multiple productSizeVariants using the Relay connection interface */
    productSizeVariantsConnection: ProductSizeVariantConnection;
    /** Retrieve document version */
    productVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple products */
    products: Array<Product>;
    /** Retrieve multiple products using the Relay connection interface */
    productsConnection: ProductConnection;
    /** Retrieve a single review */
    review?: Maybe<Review>;
    /** Retrieve document version */
    reviewVersion?: Maybe<DocumentVersion>;
    /** Retrieve multiple reviews */
    reviews: Array<Review>;
    /** Retrieve multiple reviews using the Relay connection interface */
    reviewsConnection: ReviewConnection;
    /** Retrieve a single scheduledOperation */
    scheduledOperation?: Maybe<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations */
    scheduledOperations: Array<ScheduledOperation>;
    /** Retrieve multiple scheduledOperations using the Relay connection interface */
    scheduledOperationsConnection: ScheduledOperationConnection;
    /** Retrieve a single scheduledRelease */
    scheduledRelease?: Maybe<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases */
    scheduledReleases: Array<ScheduledRelease>;
    /** Retrieve multiple scheduledReleases using the Relay connection interface */
    scheduledReleasesConnection: ScheduledReleaseConnection;
    /** Retrieve a single user */
    user?: Maybe<User>;
    /** Retrieve multiple users */
    users: Array<User>;
    /** Retrieve multiple users using the Relay connection interface */
    usersConnection: UserConnection;
};

export type QueryAccountArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: AccountWhereUniqueInput;
};

export type QueryAccountVariantArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: AccountVariantWhereUniqueInput;
};

export type QueryAccountVariantVersionArgs = {
    where: VersionWhereInput;
};

export type QueryAccountVariantsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AccountVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<AccountVariantWhereInput>;
};

export type QueryAccountVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AccountVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<AccountVariantWhereInput>;
};

export type QueryAccountVersionArgs = {
    where: VersionWhereInput;
};

export type QueryAccountsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AccountOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<AccountWhereInput>;
};

export type QueryAccountsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AccountOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<AccountWhereInput>;
};

export type QueryAssetArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
    where: VersionWhereInput;
};

export type QueryAssetsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AssetOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<AssetOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<AssetWhereInput>;
};

export type QueryCartArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: CartWhereUniqueInput;
};

export type QueryCartItemArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: CartItemWhereUniqueInput;
};

export type QueryCartItemVersionArgs = {
    where: VersionWhereInput;
};

export type QueryCartItemsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CartItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CartItemWhereInput>;
};

export type QueryCartItemsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CartItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CartItemWhereInput>;
};

export type QueryCartVersionArgs = {
    where: VersionWhereInput;
};

export type QueryCartsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CartOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CartWhereInput>;
};

export type QueryCartsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CartOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CartWhereInput>;
};

export type QueryCategoriesArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CategoryOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoriesConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CategoryOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoryArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: CategoryWhereUniqueInput;
};

export type QueryCategoryVersionArgs = {
    where: VersionWhereInput;
};

export type QueryCollectionArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: CollectionWhereUniqueInput;
};

export type QueryCollectionVersionArgs = {
    where: VersionWhereInput;
};

export type QueryCollectionsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CollectionOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CollectionWhereInput>;
};

export type QueryCollectionsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CollectionOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CollectionWhereInput>;
};

export type QueryCurrenciesArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CurrencyOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CurrencyWhereInput>;
};

export type QueryCurrenciesConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<CurrencyOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<CurrencyWhereInput>;
};

export type QueryCurrencyArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: CurrencyWhereUniqueInput;
};

export type QueryCurrencyVersionArgs = {
    where: VersionWhereInput;
};

export type QueryNodeArgs = {
    id: Scalars["ID"];
    locales?: Array<Locale>;
    stage?: Stage;
};

export type QueryOrderArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: OrderWhereUniqueInput;
};

export type QueryOrderItemArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: OrderItemWhereUniqueInput;
};

export type QueryOrderItemVersionArgs = {
    where: VersionWhereInput;
};

export type QueryOrderItemsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<OrderItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<OrderItemWhereInput>;
};

export type QueryOrderItemsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<OrderItemOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<OrderItemWhereInput>;
};

export type QueryOrderVersionArgs = {
    where: VersionWhereInput;
};

export type QueryOrdersArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<OrderOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<OrderWhereInput>;
};

export type QueryOrdersConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<OrderOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<OrderWhereInput>;
};

export type QueryPeopleArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<PersonOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<PersonWhereInput>;
};

export type QueryPeopleConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<PersonOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<PersonWhereInput>;
};

export type QueryPersonArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: PersonWhereUniqueInput;
};

export type QueryPersonVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProductArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ProductWhereUniqueInput;
};

export type QueryProductColorVariantArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ProductColorVariantWhereUniqueInput;
};

export type QueryProductColorVariantVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProductColorVariantsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductColorVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductColorVariantWhereInput>;
};

export type QueryProductColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductColorVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductColorVariantWhereInput>;
};

export type QueryProductSizeColorVariantArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ProductSizeColorVariantWhereUniqueInput;
};

export type QueryProductSizeColorVariantVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProductSizeColorVariantsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductSizeColorVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductSizeColorVariantWhereInput>;
};

export type QueryProductSizeColorVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductSizeColorVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductSizeColorVariantWhereInput>;
};

export type QueryProductSizeVariantArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ProductSizeVariantWhereUniqueInput;
};

export type QueryProductSizeVariantVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProductSizeVariantsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductSizeVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductSizeVariantWhereInput>;
};

export type QueryProductSizeVariantsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductSizeVariantOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductSizeVariantWhereInput>;
};

export type QueryProductVersionArgs = {
    where: VersionWhereInput;
};

export type QueryProductsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductWhereInput>;
};

export type QueryProductsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ProductOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ProductWhereInput>;
};

export type QueryReviewArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ReviewWhereUniqueInput;
};

export type QueryReviewVersionArgs = {
    where: VersionWhereInput;
};

export type QueryReviewsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ReviewOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ReviewWhereInput>;
};

export type QueryReviewsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ReviewOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ReviewWhereInput>;
};

export type QueryScheduledOperationArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
    locales?: Array<Locale>;
    stage?: Stage;
    where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<UserOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: Array<Locale>;
    orderBy?: InputMaybe<UserOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    stage?: Stage;
    where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
    __typename?: "RGBA";
    a: Scalars["RGBATransparency"];
    b: Scalars["RGBAHue"];
    g: Scalars["RGBAHue"];
    r: Scalars["RGBAHue"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
    a: Scalars["RGBATransparency"];
    b: Scalars["RGBAHue"];
    g: Scalars["RGBAHue"];
    r: Scalars["RGBAHue"];
};

export type Review = Node & {
    __typename?: "Review";
    content: Scalars["String"];
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Get the document in other stages */
    documentInStages: Array<Review>;
    email: Scalars["String"];
    headline?: Maybe<Scalars["String"]>;
    /** List of Review versions */
    history: Array<Version>;
    /** The unique identifier */
    id: Scalars["ID"];
    name: Scalars["String"];
    product?: Maybe<Product>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    rating?: Maybe<Scalars["Int"]>;
    scheduledIn: Array<ScheduledOperation>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

export type ReviewCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ReviewDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type ReviewHistoryArgs = {
    limit?: Scalars["Int"];
    skip?: Scalars["Int"];
    stageOverride?: InputMaybe<Stage>;
};

export type ReviewProductArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ReviewPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ReviewScheduledInArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ReviewUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ReviewConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ReviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReviewConnection = {
    __typename?: "ReviewConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ReviewEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ReviewCreateInput = {
    content: Scalars["String"];
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    email: Scalars["String"];
    headline?: InputMaybe<Scalars["String"]>;
    name: Scalars["String"];
    product?: InputMaybe<ProductCreateOneInlineInput>;
    rating?: InputMaybe<Scalars["Int"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ReviewCreateManyInlineInput = {
    /** Connect multiple existing Review documents */
    connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
    /** Create and connect multiple existing Review documents */
    create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
    /** Connect one existing Review document */
    connect?: InputMaybe<ReviewWhereUniqueInput>;
    /** Create and connect one Review document */
    create?: InputMaybe<ReviewCreateInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
    __typename?: "ReviewEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Review;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ReviewWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ReviewWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ReviewWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    content?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    content_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    content_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    content_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    content_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    content_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    content_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    content_starts_with?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    email?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    email_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    email_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    email_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    email_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    email_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    email_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    email_starts_with?: InputMaybe<Scalars["String"]>;
    headline?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    headline_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    headline_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    headline_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    headline_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    headline_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    headline_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    headline_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    rating?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    rating_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    rating_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    rating_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    rating_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    rating_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReviewOrderByInput {
    ContentAsc = "content_ASC",
    ContentDesc = "content_DESC",
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    EmailAsc = "email_ASC",
    EmailDesc = "email_DESC",
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    RatingAsc = "rating_ASC",
    RatingDesc = "rating_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type ReviewUpdateInput = {
    content?: InputMaybe<Scalars["String"]>;
    email?: InputMaybe<Scalars["String"]>;
    headline?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductUpdateOneInlineInput>;
    rating?: InputMaybe<Scalars["Int"]>;
};

export type ReviewUpdateManyInlineInput = {
    /** Connect multiple existing Review documents */
    connect?: InputMaybe<Array<ReviewConnectInput>>;
    /** Create and connect multiple Review documents */
    create?: InputMaybe<Array<ReviewCreateInput>>;
    /** Delete multiple Review documents */
    delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
    /** Disconnect multiple Review documents */
    disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing Review documents */
    set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
    /** Update multiple Review documents */
    update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple Review documents */
    upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
    content?: InputMaybe<Scalars["String"]>;
    email?: InputMaybe<Scalars["String"]>;
    headline?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    rating?: InputMaybe<Scalars["Int"]>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ReviewUpdateManyInput;
    /** Document search */
    where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
    /** Connect existing Review document */
    connect?: InputMaybe<ReviewWhereUniqueInput>;
    /** Create and connect one Review document */
    create?: InputMaybe<ReviewCreateInput>;
    /** Delete currently connected Review document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected Review document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Review document */
    update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Review document */
    upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ReviewUpdateInput;
    /** Unique document search */
    where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
    /** Create document if it didn't exist */
    create: ReviewCreateInput;
    /** Update document if it exists */
    update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ReviewUpsertInput;
    /** Unique document search */
    where: ReviewWhereUniqueInput;
};

/** Identifies documents */
export type ReviewWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ReviewWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ReviewWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ReviewWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    content?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    content_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    content_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    content_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    content_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    content_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    content_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    content_starts_with?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    email?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    email_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    email_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    email_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    email_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    email_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    email_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    email_starts_with?: InputMaybe<Scalars["String"]>;
    headline?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    headline_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    headline_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    headline_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    headline_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    headline_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    headline_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    headline_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    product?: InputMaybe<ProductWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    rating?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    rating_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    rating_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    rating_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    rating_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    rating_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
    scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
    __typename?: "RichText";
    /** Returns HTMl representation */
    html: Scalars["String"];
    /** Returns Markdown representation */
    markdown: Scalars["String"];
    /** Returns AST representation */
    raw: Scalars["RichTextAST"];
    /** Returns plain-text contents of RichText */
    text: Scalars["String"];
};

export enum Role {
    Admin = "Admin",
    User = "User",
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
    __typename?: "ScheduledOperation";
    affectedDocuments: Array<ScheduledOperationAffectedDocument>;
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Operation description */
    description?: Maybe<Scalars["String"]>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>;
    /** Operation error message */
    errorMessage?: Maybe<Scalars["String"]>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars["Json"];
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>;
    /** System stage field */
    stage: Stage;
    /** operation Status */
    status: ScheduledOperationStatus;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    skip?: InputMaybe<Scalars["Int"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
    | Account
    | AccountVariant
    | Asset
    | Cart
    | CartItem
    | Category
    | Collection
    | Currency
    | Order
    | OrderItem
    | Person
    | Product
    | ProductColorVariant
    | ProductSizeColorVariant
    | ProductSizeVariant
    | Review;

export type ScheduledOperationConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
    __typename?: "ScheduledOperationConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledOperationEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
    /** Connect one existing ScheduledOperation document */
    connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
    __typename?: "ScheduledOperationEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    description_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars["String"]>;
    errorMessage?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    release?: InputMaybe<ScheduledReleaseWhereInput>;
    status?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    /** All values that are not equal to given value. */
    status_not?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    ErrorMessageAsc = "errorMessage_ASC",
    ErrorMessageDesc = "errorMessage_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    StatusAsc = "status_ASC",
    StatusDesc = "status_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
    Canceled = "CANCELED",
    Completed = "COMPLETED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledOperation documents */
    connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
    /** Disconnect multiple ScheduledOperation documents */
    disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledOperation documents */
    set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
    /** Connect existing ScheduledOperation document */
    connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
    /** Disconnect currently connected ScheduledOperation document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    description_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars["String"]>;
    errorMessage?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    release?: InputMaybe<ScheduledReleaseWhereInput>;
    status?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    /** All values that are not equal to given value. */
    status_not?: InputMaybe<ScheduledOperationStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
    __typename?: "ScheduledRelease";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** User that created this document */
    createdBy?: Maybe<User>;
    /** Release description */
    description?: Maybe<Scalars["String"]>;
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>;
    /** Release error message */
    errorMessage?: Maybe<Scalars["String"]>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** Whether scheduled release should be run */
    isActive: Scalars["Boolean"];
    /** Whether scheduled release is implicit */
    isImplicit: Scalars["Boolean"];
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** User that last published this document */
    publishedBy?: Maybe<User>;
    /** Release date and time */
    releaseAt?: Maybe<Scalars["DateTime"]>;
    /** System stage field */
    stage: Stage;
    /** Release Status */
    status: ScheduledReleaseStatus;
    /** Release Title */
    title?: Maybe<Scalars["String"]>;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
    /** User that last updated this document */
    updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    locales?: InputMaybe<Array<Locale>>;
    orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
    skip?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
    locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
    __typename?: "ScheduledReleaseConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<ScheduledReleaseEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    description?: InputMaybe<Scalars["String"]>;
    errorMessage?: InputMaybe<Scalars["String"]>;
    isActive?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    title?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Create and connect multiple existing ScheduledRelease documents */
    create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
    /** Connect one existing ScheduledRelease document */
    connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
    __typename?: "ScheduledReleaseEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    description_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars["String"]>;
    errorMessage?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    isActive?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    isActive_not?: InputMaybe<Scalars["Boolean"]>;
    isImplicit?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
    operations_every?: InputMaybe<ScheduledOperationWhereInput>;
    operations_none?: InputMaybe<ScheduledOperationWhereInput>;
    operations_some?: InputMaybe<ScheduledOperationWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    status?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    /** All values that are not equal to given value. */
    status_not?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    title?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    title_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    ErrorMessageAsc = "errorMessage_ASC",
    ErrorMessageDesc = "errorMessage_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    IsActiveAsc = "isActive_ASC",
    IsActiveDesc = "isActive_DESC",
    IsImplicitAsc = "isImplicit_ASC",
    IsImplicitDesc = "isImplicit_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    ReleaseAtAsc = "releaseAt_ASC",
    ReleaseAtDesc = "releaseAt_DESC",
    StatusAsc = "status_ASC",
    StatusDesc = "status_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
    Completed = "COMPLETED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS",
    Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
    description?: InputMaybe<Scalars["String"]>;
    errorMessage?: InputMaybe<Scalars["String"]>;
    isActive?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
    /** Connect multiple existing ScheduledRelease documents */
    connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
    /** Create and connect multiple ScheduledRelease documents */
    create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
    /** Delete multiple ScheduledRelease documents */
    delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Disconnect multiple ScheduledRelease documents */
    disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing ScheduledRelease documents */
    set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
    /** Update multiple ScheduledRelease documents */
    update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple ScheduledRelease documents */
    upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
    description?: InputMaybe<Scalars["String"]>;
    errorMessage?: InputMaybe<Scalars["String"]>;
    isActive?: InputMaybe<Scalars["Boolean"]>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    title?: InputMaybe<Scalars["String"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: ScheduledReleaseUpdateManyInput;
    /** Document search */
    where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
    /** Connect existing ScheduledRelease document */
    connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
    /** Create and connect one ScheduledRelease document */
    create?: InputMaybe<ScheduledReleaseCreateInput>;
    /** Delete currently connected ScheduledRelease document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected ScheduledRelease document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single ScheduledRelease document */
    update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
    /** Upsert single ScheduledRelease document */
    upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: ScheduledReleaseUpdateInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
    /** Create document if it didn't exist */
    create: ScheduledReleaseCreateInput;
    /** Update document if it exists */
    update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: ScheduledReleaseUpsertInput;
    /** Unique document search */
    where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    createdBy?: InputMaybe<UserWhereInput>;
    description?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    description_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    description_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    description_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    description_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    description_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    description_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    description_starts_with?: InputMaybe<Scalars["String"]>;
    errorMessage?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    errorMessage_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    errorMessage_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    errorMessage_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    errorMessage_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    errorMessage_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    errorMessage_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    errorMessage_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    isActive?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    isActive_not?: InputMaybe<Scalars["Boolean"]>;
    isImplicit?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    isImplicit_not?: InputMaybe<Scalars["Boolean"]>;
    operations_every?: InputMaybe<ScheduledOperationWhereInput>;
    operations_none?: InputMaybe<ScheduledOperationWhereInput>;
    operations_some?: InputMaybe<ScheduledOperationWhereInput>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    publishedBy?: InputMaybe<UserWhereInput>;
    releaseAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    releaseAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    releaseAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    releaseAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    releaseAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    releaseAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    status?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are contained in given list. */
    status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    /** All values that are not equal to given value. */
    status_not?: InputMaybe<ScheduledReleaseStatus>;
    /** All values that are not contained in given list. */
    status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
    title?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    title_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    title_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    title_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    title_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    title_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    title_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    title_starts_with?: InputMaybe<Scalars["String"]>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

/** Stage system enumeration */
export enum Stage {
    /** The Draft is the default stage for all your content. */
    Draft = "DRAFT",
    /** The Published stage is where you can publish your content to. */
    Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
    Base = "BASE",
    Combined = "COMBINED",
    Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
    /** Locales to unpublish */
    locale: Locale;
    /** Stages to unpublish selected locales from */
    stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
    __typename?: "User";
    /** The time the document was created */
    createdAt: Scalars["DateTime"];
    /** Get the document in other stages */
    documentInStages: Array<User>;
    /** The unique identifier */
    id: Scalars["ID"];
    /** Flag to determine if user is active or not */
    isActive: Scalars["Boolean"];
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind;
    /** The username */
    name: Scalars["String"];
    /** Profile Picture url */
    picture?: Maybe<Scalars["String"]>;
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** System stage field */
    stage: Stage;
    /** The time the document was updated */
    updatedAt: Scalars["DateTime"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
    includeCurrent?: Scalars["Boolean"];
    inheritLocale?: Scalars["Boolean"];
    stages?: Array<Stage>;
};

export type UserConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
    __typename?: "UserConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<UserEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
    /** Connect one existing User document */
    connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
    __typename?: "UserEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: User;
};

/** System User Kind */
export enum UserKind {
    Member = "MEMBER",
    Pat = "PAT",
    Public = "PUBLIC",
    Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    isActive?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    isActive_not?: InputMaybe<Scalars["Boolean"]>;
    kind?: InputMaybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    /** All values that are not equal to given value. */
    kind_not?: InputMaybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    picture?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    picture_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    picture_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    picture_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    picture_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    picture_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    picture_starts_with?: InputMaybe<Scalars["String"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

export enum UserOrderByInput {
    CreatedAtAsc = "createdAt_ASC",
    CreatedAtDesc = "createdAt_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    IsActiveAsc = "isActive_ASC",
    IsActiveDesc = "isActive_DESC",
    KindAsc = "kind_ASC",
    KindDesc = "kind_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    PictureAsc = "picture_ASC",
    PictureDesc = "picture_DESC",
    PublishedAtAsc = "publishedAt_ASC",
    PublishedAtDesc = "publishedAt_DESC",
    UpdatedAtAsc = "updatedAt_ASC",
    UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
    /** Connect multiple existing User documents */
    connect?: InputMaybe<Array<UserConnectInput>>;
    /** Disconnect multiple User documents */
    disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing User documents */
    set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
    /** Connect existing User document */
    connect?: InputMaybe<UserWhereUniqueInput>;
    /** Disconnect currently connected User document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<UserWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<UserWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<UserWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    createdAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    createdAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    createdAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    createdAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    createdAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    createdAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    isActive?: InputMaybe<Scalars["Boolean"]>;
    /** All values that are not equal to given value. */
    isActive_not?: InputMaybe<Scalars["Boolean"]>;
    kind?: InputMaybe<UserKind>;
    /** All values that are contained in given list. */
    kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    /** All values that are not equal to given value. */
    kind_not?: InputMaybe<UserKind>;
    /** All values that are not contained in given list. */
    kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
    name?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    name_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    name_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    name_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    name_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    name_starts_with?: InputMaybe<Scalars["String"]>;
    picture?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    picture_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    picture_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    picture_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    picture_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    picture_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    picture_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    picture_starts_with?: InputMaybe<Scalars["String"]>;
    publishedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    updatedAt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than the given value. */
    updatedAt_gt?: InputMaybe<Scalars["DateTime"]>;
    /** All values greater than or equal the given value. */
    updatedAt_gte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are contained in given list. */
    updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
    /** All values less than the given value. */
    updatedAt_lt?: InputMaybe<Scalars["DateTime"]>;
    /** All values less than or equal the given value. */
    updatedAt_lte?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not equal to given value. */
    updatedAt_not?: InputMaybe<Scalars["DateTime"]>;
    /** All values that are not contained in given list. */
    updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export type Version = {
    __typename?: "Version";
    createdAt: Scalars["DateTime"];
    id: Scalars["ID"];
    revision: Scalars["Int"];
    stage: Stage;
};

export type VersionWhereInput = {
    id: Scalars["ID"];
    revision: Scalars["Int"];
    stage: Stage;
};

export type Woman = {
    __typename?: "Woman";
    age?: Maybe<Scalars["Int"]>;
    favoriteClothes?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    /** The unique identifier */
    id: Scalars["ID"];
    lastName?: Maybe<Scalars["String"]>;
    /** System stage field */
    stage: Stage;
};

export type WomanConnectInput = {
    /** Allow to specify document position in list of connected documents, will default to appending at end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Document to connect */
    where: WomanWhereUniqueInput;
};

/** A connection to a list of items. */
export type WomanConnection = {
    __typename?: "WomanConnection";
    aggregate: Aggregate;
    /** A list of edges. */
    edges: Array<WomanEdge>;
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};

export type WomanCreateInput = {
    age?: InputMaybe<Scalars["Int"]>;
    favoriteClothes?: InputMaybe<Scalars["String"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    lastName?: InputMaybe<Scalars["String"]>;
};

export type WomanCreateManyInlineInput = {
    /** Create and connect multiple existing Woman documents */
    create?: InputMaybe<Array<WomanCreateInput>>;
};

export type WomanCreateOneInlineInput = {
    /** Create and connect one Woman document */
    create?: InputMaybe<WomanCreateInput>;
};

export type WomanCreateWithPositionInput = {
    /** Document to create */
    data: WomanCreateInput;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type WomanEdge = {
    __typename?: "WomanEdge";
    /** A cursor for use in pagination. */
    cursor: Scalars["String"];
    /** The item at the end of the edge. */
    node: Woman;
};

/** Identifies documents */
export type WomanManyWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<WomanWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<WomanWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<WomanWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    age?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    age_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    age_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    age_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    age_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    age_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    age_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    age_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    favoriteClothes?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    favoriteClothes_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    favoriteClothes_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    favoriteClothes_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    favoriteClothes_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    favoriteClothes_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    favoriteClothes_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    favoriteClothes_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    favoriteClothes_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    favoriteClothes_starts_with?: InputMaybe<Scalars["String"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    firstName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    firstName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    firstName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    firstName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    firstName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    firstName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    firstName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    firstName_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    lastName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    lastName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    lastName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    lastName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    lastName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    lastName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    lastName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    lastName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    lastName_starts_with?: InputMaybe<Scalars["String"]>;
};

export enum WomanOrderByInput {
    AgeAsc = "age_ASC",
    AgeDesc = "age_DESC",
    FavoriteClothesAsc = "favoriteClothes_ASC",
    FavoriteClothesDesc = "favoriteClothes_DESC",
    FirstNameAsc = "firstName_ASC",
    FirstNameDesc = "firstName_DESC",
    IdAsc = "id_ASC",
    IdDesc = "id_DESC",
    LastNameAsc = "lastName_ASC",
    LastNameDesc = "lastName_DESC",
}

export type WomanParent = Person;

export type WomanParentConnectInput = {
    Person?: InputMaybe<PersonConnectInput>;
};

export type WomanParentCreateInput = {
    Person?: InputMaybe<PersonCreateInput>;
};

export type WomanParentCreateManyInlineInput = {
    /** Connect multiple existing WomanParent documents */
    connect?: InputMaybe<Array<WomanParentWhereUniqueInput>>;
    /** Create and connect multiple existing WomanParent documents */
    create?: InputMaybe<Array<WomanParentCreateInput>>;
};

export type WomanParentCreateOneInlineInput = {
    /** Connect one existing WomanParent document */
    connect?: InputMaybe<WomanParentWhereUniqueInput>;
    /** Create and connect one WomanParent document */
    create?: InputMaybe<WomanParentCreateInput>;
};

export type WomanParentUpdateInput = {
    Person?: InputMaybe<PersonUpdateInput>;
};

export type WomanParentUpdateManyInlineInput = {
    /** Connect multiple existing WomanParent documents */
    connect?: InputMaybe<Array<WomanParentConnectInput>>;
    /** Create and connect multiple WomanParent documents */
    create?: InputMaybe<Array<WomanParentCreateInput>>;
    /** Delete multiple WomanParent documents */
    delete?: InputMaybe<Array<WomanParentWhereUniqueInput>>;
    /** Disconnect multiple WomanParent documents */
    disconnect?: InputMaybe<Array<WomanParentWhereUniqueInput>>;
    /** Override currently-connected documents with multiple existing WomanParent documents */
    set?: InputMaybe<Array<WomanParentWhereUniqueInput>>;
    /** Update multiple WomanParent documents */
    update?: InputMaybe<Array<WomanParentUpdateWithNestedWhereUniqueInput>>;
    /** Upsert multiple WomanParent documents */
    upsert?: InputMaybe<Array<WomanParentUpsertWithNestedWhereUniqueInput>>;
};

export type WomanParentUpdateManyWithNestedWhereInput = {
    Person?: InputMaybe<PersonUpdateManyWithNestedWhereInput>;
};

export type WomanParentUpdateOneInlineInput = {
    /** Connect existing WomanParent document */
    connect?: InputMaybe<WomanParentWhereUniqueInput>;
    /** Create and connect one WomanParent document */
    create?: InputMaybe<WomanParentCreateInput>;
    /** Delete currently connected WomanParent document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Disconnect currently connected WomanParent document */
    disconnect?: InputMaybe<Scalars["Boolean"]>;
    /** Update single WomanParent document */
    update?: InputMaybe<WomanParentUpdateWithNestedWhereUniqueInput>;
    /** Upsert single WomanParent document */
    upsert?: InputMaybe<WomanParentUpsertWithNestedWhereUniqueInput>;
};

export type WomanParentUpdateWithNestedWhereUniqueInput = {
    Person?: InputMaybe<PersonUpdateWithNestedWhereUniqueInput>;
};

export type WomanParentUpsertWithNestedWhereUniqueInput = {
    Person?: InputMaybe<PersonUpsertWithNestedWhereUniqueInput>;
};

export type WomanParentWhereInput = {
    Person?: InputMaybe<PersonWhereInput>;
};

export type WomanParentWhereUniqueInput = {
    Person?: InputMaybe<PersonWhereUniqueInput>;
};

export type WomanUpdateInput = {
    age?: InputMaybe<Scalars["Int"]>;
    favoriteClothes?: InputMaybe<Scalars["String"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    lastName?: InputMaybe<Scalars["String"]>;
};

export type WomanUpdateManyInlineInput = {
    /** Create and connect multiple Woman component instances */
    create?: InputMaybe<Array<WomanCreateWithPositionInput>>;
    /** Delete multiple Woman documents */
    delete?: InputMaybe<Array<WomanWhereUniqueInput>>;
    /** Update multiple Woman component instances */
    update?: InputMaybe<Array<WomanUpdateWithNestedWhereUniqueAndPositionInput>>;
    /** Upsert multiple Woman component instances */
    upsert?: InputMaybe<Array<WomanUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type WomanUpdateManyInput = {
    age?: InputMaybe<Scalars["Int"]>;
    favoriteClothes?: InputMaybe<Scalars["String"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    lastName?: InputMaybe<Scalars["String"]>;
};

export type WomanUpdateManyWithNestedWhereInput = {
    /** Update many input */
    data: WomanUpdateManyInput;
    /** Document search */
    where: WomanWhereInput;
};

export type WomanUpdateOneInlineInput = {
    /** Create and connect one Woman document */
    create?: InputMaybe<WomanCreateInput>;
    /** Delete currently connected Woman document */
    delete?: InputMaybe<Scalars["Boolean"]>;
    /** Update single Woman document */
    update?: InputMaybe<WomanUpdateWithNestedWhereUniqueInput>;
    /** Upsert single Woman document */
    upsert?: InputMaybe<WomanUpsertWithNestedWhereUniqueInput>;
};

export type WomanUpdateWithNestedWhereUniqueAndPositionInput = {
    /** Document to update */
    data?: InputMaybe<WomanUpdateInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: WomanWhereUniqueInput;
};

export type WomanUpdateWithNestedWhereUniqueInput = {
    /** Document to update */
    data: WomanUpdateInput;
    /** Unique document search */
    where: WomanWhereUniqueInput;
};

export type WomanUpsertInput = {
    /** Create document if it didn't exist */
    create: WomanCreateInput;
    /** Update document if it exists */
    update: WomanUpdateInput;
};

export type WomanUpsertWithNestedWhereUniqueAndPositionInput = {
    /** Document to upsert */
    data?: InputMaybe<WomanUpsertInput>;
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>;
    /** Unique component instance search */
    where: WomanWhereUniqueInput;
};

export type WomanUpsertWithNestedWhereUniqueInput = {
    /** Upsert data */
    data: WomanUpsertInput;
    /** Unique document search */
    where: WomanWhereUniqueInput;
};

/** Identifies documents */
export type WomanWhereInput = {
    /** Logical AND on all given filters. */
    AND?: InputMaybe<Array<WomanWhereInput>>;
    /** Logical NOT on all given filters combined by AND. */
    NOT?: InputMaybe<Array<WomanWhereInput>>;
    /** Logical OR on all given filters. */
    OR?: InputMaybe<Array<WomanWhereInput>>;
    /** Contains search across all appropriate fields. */
    _search?: InputMaybe<Scalars["String"]>;
    age?: InputMaybe<Scalars["Int"]>;
    /** All values greater than the given value. */
    age_gt?: InputMaybe<Scalars["Int"]>;
    /** All values greater than or equal the given value. */
    age_gte?: InputMaybe<Scalars["Int"]>;
    /** All values that are contained in given list. */
    age_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    /** All values less than the given value. */
    age_lt?: InputMaybe<Scalars["Int"]>;
    /** All values less than or equal the given value. */
    age_lte?: InputMaybe<Scalars["Int"]>;
    /** All values that are not equal to given value. */
    age_not?: InputMaybe<Scalars["Int"]>;
    /** All values that are not contained in given list. */
    age_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
    favoriteClothes?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    favoriteClothes_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    favoriteClothes_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    favoriteClothes_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    favoriteClothes_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    favoriteClothes_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    favoriteClothes_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    favoriteClothes_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    favoriteClothes_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    favoriteClothes_starts_with?: InputMaybe<Scalars["String"]>;
    firstName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    firstName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    firstName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    firstName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    firstName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    firstName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    firstName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    firstName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    firstName_starts_with?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["ID"]>;
    /** All values containing the given string. */
    id_contains?: InputMaybe<Scalars["ID"]>;
    /** All values ending with the given string. */
    id_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are contained in given list. */
    id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values that are not equal to given value. */
    id_not?: InputMaybe<Scalars["ID"]>;
    /** All values not containing the given string. */
    id_not_contains?: InputMaybe<Scalars["ID"]>;
    /** All values not ending with the given string */
    id_not_ends_with?: InputMaybe<Scalars["ID"]>;
    /** All values that are not contained in given list. */
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    /** All values not starting with the given string. */
    id_not_starts_with?: InputMaybe<Scalars["ID"]>;
    /** All values starting with the given string. */
    id_starts_with?: InputMaybe<Scalars["ID"]>;
    lastName?: InputMaybe<Scalars["String"]>;
    /** All values containing the given string. */
    lastName_contains?: InputMaybe<Scalars["String"]>;
    /** All values ending with the given string. */
    lastName_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are contained in given list. */
    lastName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values that are not equal to given value. */
    lastName_not?: InputMaybe<Scalars["String"]>;
    /** All values not containing the given string. */
    lastName_not_contains?: InputMaybe<Scalars["String"]>;
    /** All values not ending with the given string */
    lastName_not_ends_with?: InputMaybe<Scalars["String"]>;
    /** All values that are not contained in given list. */
    lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
    /** All values not starting with the given string. */
    lastName_not_starts_with?: InputMaybe<Scalars["String"]>;
    /** All values starting with the given string. */
    lastName_starts_with?: InputMaybe<Scalars["String"]>;
};

/** References Woman record uniquely */
export type WomanWhereUniqueInput = {
    id?: InputMaybe<Scalars["ID"]>;
};

export enum _FilterKind {
    And = "AND",
    Not = "NOT",
    Or = "OR",
    Contains = "contains",
    ContainsAll = "contains_all",
    ContainsNone = "contains_none",
    ContainsSome = "contains_some",
    EndsWith = "ends_with",
    Eq = "eq",
    EqNot = "eq_not",
    Gt = "gt",
    Gte = "gte",
    In = "in",
    Lt = "lt",
    Lte = "lte",
    NotContains = "not_contains",
    NotEndsWith = "not_ends_with",
    NotIn = "not_in",
    NotStartsWith = "not_starts_with",
    RelationalEvery = "relational_every",
    RelationalNone = "relational_none",
    RelationalSingle = "relational_single",
    RelationalSome = "relational_some",
    Search = "search",
    StartsWith = "starts_with",
}

export enum _MutationInputFieldKind {
    Enum = "enum",
    Relation = "relation",
    RichText = "richText",
    RichTextWithEmbeds = "richTextWithEmbeds",
    Scalar = "scalar",
    Union = "union",
    Virtual = "virtual",
}

export enum _MutationKind {
    Create = "create",
    Delete = "delete",
    DeleteMany = "deleteMany",
    Publish = "publish",
    PublishMany = "publishMany",
    SchedulePublish = "schedulePublish",
    ScheduleUnpublish = "scheduleUnpublish",
    Unpublish = "unpublish",
    UnpublishMany = "unpublishMany",
    Update = "update",
    UpdateMany = "updateMany",
    Upsert = "upsert",
}

export enum _OrderDirection {
    Asc = "asc",
    Desc = "desc",
}

export enum _RelationInputCardinality {
    Many = "many",
    One = "one",
}

export enum _RelationInputKind {
    Create = "create",
    Update = "update",
}

export enum _RelationKind {
    Regular = "regular",
    Union = "union",
}

export enum _SystemDateTimeFieldVariation {
    Base = "base",
    Combined = "combined",
    Localization = "localization",
}

export type CreateProductReviewMutationVariables = Exact<{
    review: ReviewCreateInput;
}>;

export type CreateProductReviewMutation = {
    __typename?: "Mutation";
    review?: {
        __typename?: "Review";
        content: string;
        headline?: string | null;
        id: string;
        name: string;
        rating?: number | null;
    } | null;
};

export type CreateItemOrderMutationVariables = Exact<{
    orderItemData: OrderItemCreateInput;
}>;

export type CreateItemOrderMutation = {
    __typename?: "Mutation";
    createOrderItem?: { __typename?: "OrderItem"; id: string } | null;
};

export type CreateOrderMutationVariables = Exact<{
    orderData: OrderCreateInput;
}>;

export type CreateOrderMutation = {
    __typename?: "Mutation";
    createOrder?: { __typename?: "Order"; id: string } | null;
};

export type CreateAccountMutationVariables = Exact<{
    email: Scalars["String"];
    password: Scalars["String"];
}>;

export type CreateAccountMutation = {
    __typename?: "Mutation";
    createAccount?: { __typename?: "Account"; id: string } | null;
};

export type CreateCartMutationVariables = Exact<{ [key: string]: never }>;

export type CreateCartMutation = { __typename?: "Mutation"; createCart?: { __typename?: "Cart"; id: string } | null };

export type ConnectAccountWithCartAndPublishMutationVariables = Exact<{
    accountId: Scalars["ID"];
    cartId: Scalars["ID"];
}>;

export type ConnectAccountWithCartAndPublishMutation = {
    __typename?: "Mutation";
    updateAccount?: { __typename?: "Account"; id: string } | null;
    publishAccount?: { __typename?: "Account"; id: string } | null;
    publishCart?: { __typename?: "Cart"; id: string } | null;
};

export type CartContentFragment = {
    __typename?: "Cart";
    id: string;
    cartItems: Array<{ __typename?: "CartItem"; id: string }>;
};

export type AddProductToCartMutationVariables = Exact<{
    cartId: Scalars["ID"];
    productId: Scalars["ID"];
    sign: Scalars["String"];
}>;

export type AddProductToCartMutation = {
    __typename?: "Mutation";
    updateCart?: { __typename?: "Cart"; id: string; cartItems: Array<{ __typename?: "CartItem"; id: string }> } | null;
};

export type UpdateProductQuantityInCartItemMutationVariables = Exact<{
    cartId: Scalars["ID"];
    cartItemId: Scalars["ID"];
    quantity: Scalars["Int"];
}>;

export type UpdateProductQuantityInCartItemMutation = {
    __typename?: "Mutation";
    updateCart?: { __typename?: "Cart"; id: string; cartItems: Array<{ __typename?: "CartItem"; id: string }> } | null;
};

export type ClearCartItemsMutationVariables = Exact<{
    id: Scalars["ID"];
}>;

export type ClearCartItemsMutation = {
    __typename?: "Mutation";
    updateCart?: { __typename?: "Cart"; id: string } | null;
};

export type DeleteCartItemMutationVariables = Exact<{
    id: Scalars["ID"];
}>;

export type DeleteCartItemMutation = {
    __typename?: "Mutation";
    deleteCartItem?: { __typename?: "CartItem"; id: string } | null;
};

export type PublishCartItemMutationVariables = Exact<{
    cartItemId: Scalars["ID"];
}>;

export type PublishCartItemMutation = {
    __typename?: "Mutation";
    publishCartItem?: { __typename?: "CartItem"; id: string } | null;
};

export type PublishCartMutationVariables = Exact<{
    cartId: Scalars["ID"];
}>;

export type PublishCartMutation = { __typename?: "Mutation"; publishCart?: { __typename?: "Cart"; id: string } | null };

export type CreateCartItemMutationVariables = Exact<{
    cartId: Scalars["ID"];
    productId: Scalars["ID"];
    sign: Scalars["String"];
}>;

export type CreateCartItemMutation = {
    __typename?: "Mutation";
    create?: {
        __typename?: "CartItem";
        quantity: number;
        id: string;
        sign: string;
        product?: { __typename?: "Product"; id: string } | null;
    } | null;
};

export type GetProductsSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsSlugsQuery = { __typename?: "Query"; products: Array<{ __typename?: "Product"; slug: string }> };

export type GetProductDetailsBySlugQueryVariables = Exact<{
    slug?: InputMaybe<Scalars["String"]>;
}>;

export type GetProductDetailsBySlugQuery = {
    __typename?: "Query";
    product?: {
        __typename?: "Product";
        id: string;
        slug: string;
        name: string;
        price: number;
        description: string;
        images: Array<{ __typename?: "Asset"; url: string }>;
    } | null;
};

export type GetProductsListQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsListQuery = {
    __typename?: "Query";
    products: Array<{
        __typename?: "Product";
        id: string;
        slug: string;
        name: string;
        price: number;
        images: Array<{ __typename?: "Asset"; url: string; width?: number | null; height?: number | null; id: string }>;
    }>;
};

export type ReviewContentFragment = {
    __typename?: "Review";
    content: string;
    headline?: string | null;
    id: string;
    name: string;
    rating?: number | null;
};

export type GetAllProductsReviewsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProductsReviewsQuery = {
    __typename?: "Query";
    products: Array<{
        __typename?: "Product";
        name: string;
        reviews: Array<{
            __typename?: "Review";
            content: string;
            headline?: string | null;
            id: string;
            name: string;
            rating?: number | null;
        }>;
    }>;
};

export type GetAllReviewsWithProductQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllReviewsWithProductQuery = {
    __typename?: "Query";
    reviews: Array<{
        __typename?: "Review";
        content: string;
        headline?: string | null;
        id: string;
        name: string;
        rating?: number | null;
        product?: { __typename?: "Product"; name: string; slug: string } | null;
    }>;
};

export type GetReviewsForProductSlugQueryVariables = Exact<{
    slug: Scalars["String"];
}>;

export type GetReviewsForProductSlugQuery = {
    __typename?: "Query";
    product?: {
        __typename?: "Product";
        reviews: Array<{
            __typename?: "Review";
            content: string;
            headline?: string | null;
            id: string;
            name: string;
            rating?: number | null;
        }>;
    } | null;
};

export type GetProductBySlugQueryVariables = Exact<{
    slug: Scalars["String"];
}>;

export type GetProductBySlugQuery = {
    __typename?: "Query";
    product?: {
        __typename?: "Product";
        id: string;
        slug: string;
        price: number;
        name: string;
        images: Array<{ __typename?: "Asset"; url: string }>;
    } | null;
};

export type GetAccountByEmailQueryVariables = Exact<{
    email: Scalars["String"];
}>;

export type GetAccountByEmailQuery = {
    __typename?: "Query";
    account?: { __typename?: "Account"; id: string; email: string; password: string } | null;
};

export type GetCartIdByAccountIdQueryVariables = Exact<{
    id: Scalars["ID"];
}>;

export type GetCartIdByAccountIdQuery = {
    __typename?: "Query";
    account?: { __typename?: "Account"; cart?: { __typename?: "Cart"; id: string } | null } | null;
};

export type CartContentQueryFragment = {
    __typename: "Cart";
    id: string;
    cartItems: Array<{
        __typename: "CartItem";
        id: string;
        quantity: number;
        product?: {
            __typename: "Product";
            id: string;
            name: string;
            price: number;
            slug: string;
            images: Array<{ __typename?: "Asset"; url: string }>;
        } | null;
    }>;
};

export type GetCartItemsByCartIdQueryVariables = Exact<{
    id: Scalars["ID"];
}>;

export type GetCartItemsByCartIdQuery = {
    __typename?: "Query";
    cart?: {
        __typename: "Cart";
        id: string;
        cartItems: Array<{
            __typename: "CartItem";
            id: string;
            quantity: number;
            product?: {
                __typename: "Product";
                id: string;
                name: string;
                price: number;
                slug: string;
                images: Array<{ __typename?: "Asset"; url: string }>;
            } | null;
        }>;
    } | null;
};

export type GetCartItemsQueryVariables = Exact<{
    id: Scalars["ID"];
}>;

export type GetCartItemsQuery = {
    __typename?: "Query";
    cart?: { __typename?: "Cart"; id: string; cartItems: Array<{ __typename?: "CartItem"; id: string }> } | null;
};

export const CartContentFragmentDoc = gql`
    fragment cartContent on Cart {
        id
        cartItems {
            id
        }
    }
`;
export const ReviewContentFragmentDoc = gql`
    fragment reviewContent on Review {
        content
        headline
        id
        name
        rating
    }
`;
export const CartContentQueryFragmentDoc = gql`
    fragment cartContentQuery on Cart {
        __typename
        id
        cartItems {
            __typename
            id
            quantity
            product {
                __typename
                id
                name
                price
                images {
                    url
                }
                slug
            }
        }
    }
`;
export const CreateProductReviewDocument = gql`
    mutation CreateProductReview($review: ReviewCreateInput!) {
        review: createReview(data: $review) {
            ...reviewContent
        }
    }
    ${ReviewContentFragmentDoc}
`;
export type CreateProductReviewMutationFn = Apollo.MutationFunction<
    CreateProductReviewMutation,
    CreateProductReviewMutationVariables
>;

/**
 * __useCreateProductReviewMutation__
 *
 * To run a mutation, you first call `useCreateProductReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductReviewMutation, { data, loading, error }] = useCreateProductReviewMutation({
 *   variables: {
 *      review: // value for 'review'
 *   },
 * });
 */
export function useCreateProductReviewMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateProductReviewMutation, CreateProductReviewMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateProductReviewMutation, CreateProductReviewMutationVariables>(
        CreateProductReviewDocument,
        options
    );
}
export type CreateProductReviewMutationHookResult = ReturnType<typeof useCreateProductReviewMutation>;
export type CreateProductReviewMutationResult = Apollo.MutationResult<CreateProductReviewMutation>;
export type CreateProductReviewMutationOptions = Apollo.BaseMutationOptions<
    CreateProductReviewMutation,
    CreateProductReviewMutationVariables
>;
export const CreateItemOrderDocument = gql`
    mutation CreateItemOrder($orderItemData: OrderItemCreateInput!) {
        createOrderItem(data: $orderItemData) {
            id
        }
    }
`;
export type CreateItemOrderMutationFn = Apollo.MutationFunction<
    CreateItemOrderMutation,
    CreateItemOrderMutationVariables
>;

/**
 * __useCreateItemOrderMutation__
 *
 * To run a mutation, you first call `useCreateItemOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemOrderMutation, { data, loading, error }] = useCreateItemOrderMutation({
 *   variables: {
 *      orderItemData: // value for 'orderItemData'
 *   },
 * });
 */
export function useCreateItemOrderMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateItemOrderMutation, CreateItemOrderMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateItemOrderMutation, CreateItemOrderMutationVariables>(
        CreateItemOrderDocument,
        options
    );
}
export type CreateItemOrderMutationHookResult = ReturnType<typeof useCreateItemOrderMutation>;
export type CreateItemOrderMutationResult = Apollo.MutationResult<CreateItemOrderMutation>;
export type CreateItemOrderMutationOptions = Apollo.BaseMutationOptions<
    CreateItemOrderMutation,
    CreateItemOrderMutationVariables
>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($orderData: OrderCreateInput!) {
        createOrder(data: $orderData) {
            id
        }
    }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      orderData: // value for 'orderData'
 *   },
 * });
 */
export function useCreateOrderMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($email: String!, $password: String!) {
        createAccount(data: { email: $email, password: $password }) {
            id
        }
    }
`;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
}
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<
    CreateAccountMutation,
    CreateAccountMutationVariables
>;
export const CreateCartDocument = gql`
    mutation CreateCart {
        createCart(data: {}) {
            id
        }
    }
`;
export type CreateCartMutationFn = Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>;

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCartMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, options);
}
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationResult = Apollo.MutationResult<CreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const ConnectAccountWithCartAndPublishDocument = gql`
    mutation ConnectAccountWithCartAndPublish($accountId: ID!, $cartId: ID!) {
        updateAccount(where: { id: $accountId }, data: { cart: { connect: { id: $cartId } } }) {
            id
        }
        publishAccount(to: PUBLISHED, where: { id: $accountId }) {
            id
        }
        publishCart(to: PUBLISHED, where: { id: $cartId }) {
            id
        }
    }
`;
export type ConnectAccountWithCartAndPublishMutationFn = Apollo.MutationFunction<
    ConnectAccountWithCartAndPublishMutation,
    ConnectAccountWithCartAndPublishMutationVariables
>;

/**
 * __useConnectAccountWithCartAndPublishMutation__
 *
 * To run a mutation, you first call `useConnectAccountWithCartAndPublishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectAccountWithCartAndPublishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectAccountWithCartAndPublishMutation, { data, loading, error }] = useConnectAccountWithCartAndPublishMutation({
 *   variables: {
 *      accountId: // value for 'accountId'
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function useConnectAccountWithCartAndPublishMutation(
    baseOptions?: Apollo.MutationHookOptions<
        ConnectAccountWithCartAndPublishMutation,
        ConnectAccountWithCartAndPublishMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        ConnectAccountWithCartAndPublishMutation,
        ConnectAccountWithCartAndPublishMutationVariables
    >(ConnectAccountWithCartAndPublishDocument, options);
}
export type ConnectAccountWithCartAndPublishMutationHookResult = ReturnType<
    typeof useConnectAccountWithCartAndPublishMutation
>;
export type ConnectAccountWithCartAndPublishMutationResult =
    Apollo.MutationResult<ConnectAccountWithCartAndPublishMutation>;
export type ConnectAccountWithCartAndPublishMutationOptions = Apollo.BaseMutationOptions<
    ConnectAccountWithCartAndPublishMutation,
    ConnectAccountWithCartAndPublishMutationVariables
>;
export const AddProductToCartDocument = gql`
    mutation AddProductToCart($cartId: ID!, $productId: ID!, $sign: String!) {
        updateCart(
            where: { id: $cartId }
            data: { cartItems: { create: { sign: $sign, quantity: 1, product: { connect: { id: $productId } } } } }
        ) {
            ...cartContent
        }
    }
    ${CartContentFragmentDoc}
`;
export type AddProductToCartMutationFn = Apollo.MutationFunction<
    AddProductToCartMutation,
    AddProductToCartMutationVariables
>;

/**
 * __useAddProductToCartMutation__
 *
 * To run a mutation, you first call `useAddProductToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToCartMutation, { data, loading, error }] = useAddProductToCartMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      productId: // value for 'productId'
 *      sign: // value for 'sign'
 *   },
 * });
 */
export function useAddProductToCartMutation(
    baseOptions?: Apollo.MutationHookOptions<AddProductToCartMutation, AddProductToCartMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<AddProductToCartMutation, AddProductToCartMutationVariables>(
        AddProductToCartDocument,
        options
    );
}
export type AddProductToCartMutationHookResult = ReturnType<typeof useAddProductToCartMutation>;
export type AddProductToCartMutationResult = Apollo.MutationResult<AddProductToCartMutation>;
export type AddProductToCartMutationOptions = Apollo.BaseMutationOptions<
    AddProductToCartMutation,
    AddProductToCartMutationVariables
>;
export const UpdateProductQuantityInCartItemDocument = gql`
    mutation UpdateProductQuantityInCartItem($cartId: ID!, $cartItemId: ID!, $quantity: Int!) {
        updateCart(
            where: { id: $cartId }
            data: { cartItems: { update: { where: { id: $cartItemId }, data: { quantity: $quantity } } } }
        ) {
            ...cartContent
        }
    }
    ${CartContentFragmentDoc}
`;
export type UpdateProductQuantityInCartItemMutationFn = Apollo.MutationFunction<
    UpdateProductQuantityInCartItemMutation,
    UpdateProductQuantityInCartItemMutationVariables
>;

/**
 * __useUpdateProductQuantityInCartItemMutation__
 *
 * To run a mutation, you first call `useUpdateProductQuantityInCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductQuantityInCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductQuantityInCartItemMutation, { data, loading, error }] = useUpdateProductQuantityInCartItemMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      cartItemId: // value for 'cartItemId'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useUpdateProductQuantityInCartItemMutation(
    baseOptions?: Apollo.MutationHookOptions<
        UpdateProductQuantityInCartItemMutation,
        UpdateProductQuantityInCartItemMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<
        UpdateProductQuantityInCartItemMutation,
        UpdateProductQuantityInCartItemMutationVariables
    >(UpdateProductQuantityInCartItemDocument, options);
}
export type UpdateProductQuantityInCartItemMutationHookResult = ReturnType<
    typeof useUpdateProductQuantityInCartItemMutation
>;
export type UpdateProductQuantityInCartItemMutationResult =
    Apollo.MutationResult<UpdateProductQuantityInCartItemMutation>;
export type UpdateProductQuantityInCartItemMutationOptions = Apollo.BaseMutationOptions<
    UpdateProductQuantityInCartItemMutation,
    UpdateProductQuantityInCartItemMutationVariables
>;
export const ClearCartItemsDocument = gql`
    mutation ClearCartItems($id: ID!) {
        updateCart(where: { id: $id }, data: { cartItems: { set: [] } }) {
            id
        }
    }
`;
export type ClearCartItemsMutationFn = Apollo.MutationFunction<ClearCartItemsMutation, ClearCartItemsMutationVariables>;

/**
 * __useClearCartItemsMutation__
 *
 * To run a mutation, you first call `useClearCartItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearCartItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearCartItemsMutation, { data, loading, error }] = useClearCartItemsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useClearCartItemsMutation(
    baseOptions?: Apollo.MutationHookOptions<ClearCartItemsMutation, ClearCartItemsMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<ClearCartItemsMutation, ClearCartItemsMutationVariables>(ClearCartItemsDocument, options);
}
export type ClearCartItemsMutationHookResult = ReturnType<typeof useClearCartItemsMutation>;
export type ClearCartItemsMutationResult = Apollo.MutationResult<ClearCartItemsMutation>;
export type ClearCartItemsMutationOptions = Apollo.BaseMutationOptions<
    ClearCartItemsMutation,
    ClearCartItemsMutationVariables
>;
export const DeleteCartItemDocument = gql`
    mutation DeleteCartItem($id: ID!) {
        deleteCartItem(where: { id: $id }) {
            id
        }
    }
`;
export type DeleteCartItemMutationFn = Apollo.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>;

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCartItemMutation(
    baseOptions?: Apollo.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, options);
}
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<
    DeleteCartItemMutation,
    DeleteCartItemMutationVariables
>;
export const PublishCartItemDocument = gql`
    mutation PublishCartItem($cartItemId: ID!) {
        publishCartItem(to: PUBLISHED, where: { id: $cartItemId }) {
            id
        }
    }
`;
export type PublishCartItemMutationFn = Apollo.MutationFunction<
    PublishCartItemMutation,
    PublishCartItemMutationVariables
>;

/**
 * __usePublishCartItemMutation__
 *
 * To run a mutation, you first call `usePublishCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishCartItemMutation, { data, loading, error }] = usePublishCartItemMutation({
 *   variables: {
 *      cartItemId: // value for 'cartItemId'
 *   },
 * });
 */
export function usePublishCartItemMutation(
    baseOptions?: Apollo.MutationHookOptions<PublishCartItemMutation, PublishCartItemMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<PublishCartItemMutation, PublishCartItemMutationVariables>(
        PublishCartItemDocument,
        options
    );
}
export type PublishCartItemMutationHookResult = ReturnType<typeof usePublishCartItemMutation>;
export type PublishCartItemMutationResult = Apollo.MutationResult<PublishCartItemMutation>;
export type PublishCartItemMutationOptions = Apollo.BaseMutationOptions<
    PublishCartItemMutation,
    PublishCartItemMutationVariables
>;
export const PublishCartDocument = gql`
    mutation PublishCart($cartId: ID!) {
        publishCart(to: PUBLISHED, where: { id: $cartId }) {
            id
        }
    }
`;
export type PublishCartMutationFn = Apollo.MutationFunction<PublishCartMutation, PublishCartMutationVariables>;

/**
 * __usePublishCartMutation__
 *
 * To run a mutation, you first call `usePublishCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishCartMutation, { data, loading, error }] = usePublishCartMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *   },
 * });
 */
export function usePublishCartMutation(
    baseOptions?: Apollo.MutationHookOptions<PublishCartMutation, PublishCartMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<PublishCartMutation, PublishCartMutationVariables>(PublishCartDocument, options);
}
export type PublishCartMutationHookResult = ReturnType<typeof usePublishCartMutation>;
export type PublishCartMutationResult = Apollo.MutationResult<PublishCartMutation>;
export type PublishCartMutationOptions = Apollo.BaseMutationOptions<PublishCartMutation, PublishCartMutationVariables>;
export const CreateCartItemDocument = gql`
    mutation CreateCartItem($cartId: ID!, $productId: ID!, $sign: String!) {
        create: createCartItem(
            data: {
                quantity: 1
                sign: $sign
                cart: { connect: { id: $cartId } }
                product: { connect: { id: $productId } }
            }
        ) {
            quantity
            id
            sign
            product {
                id
            }
        }
    }
`;
export type CreateCartItemMutationFn = Apollo.MutationFunction<CreateCartItemMutation, CreateCartItemMutationVariables>;

/**
 * __useCreateCartItemMutation__
 *
 * To run a mutation, you first call `useCreateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartItemMutation, { data, loading, error }] = useCreateCartItemMutation({
 *   variables: {
 *      cartId: // value for 'cartId'
 *      productId: // value for 'productId'
 *      sign: // value for 'sign'
 *   },
 * });
 */
export function useCreateCartItemMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateCartItemMutation, CreateCartItemMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateCartItemMutation, CreateCartItemMutationVariables>(CreateCartItemDocument, options);
}
export type CreateCartItemMutationHookResult = ReturnType<typeof useCreateCartItemMutation>;
export type CreateCartItemMutationResult = Apollo.MutationResult<CreateCartItemMutation>;
export type CreateCartItemMutationOptions = Apollo.BaseMutationOptions<
    CreateCartItemMutation,
    CreateCartItemMutationVariables
>;
export const GetProductsSlugsDocument = gql`
    query GetProductsSlugs {
        products {
            slug
        }
    }
`;

/**
 * __useGetProductsSlugsQuery__
 *
 * To run a query within a React component, call `useGetProductsSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsSlugsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>(GetProductsSlugsDocument, options);
}
export function useGetProductsSlugsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>(
        GetProductsSlugsDocument,
        options
    );
}
export type GetProductsSlugsQueryHookResult = ReturnType<typeof useGetProductsSlugsQuery>;
export type GetProductsSlugsLazyQueryHookResult = ReturnType<typeof useGetProductsSlugsLazyQuery>;
export type GetProductsSlugsQueryResult = Apollo.QueryResult<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>;
export const GetProductDetailsBySlugDocument = gql`
    query GetProductDetailsBySlug($slug: String) {
        product(where: { slug: $slug }) {
            id
            slug
            name
            price
            description
            images {
                url
            }
        }
    }
`;

/**
 * __useGetProductDetailsBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductDetailsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductDetailsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductDetailsBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductDetailsBySlugQuery(
    baseOptions?: Apollo.QueryHookOptions<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>(
        GetProductDetailsBySlugDocument,
        options
    );
}
export function useGetProductDetailsBySlugLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>(
        GetProductDetailsBySlugDocument,
        options
    );
}
export type GetProductDetailsBySlugQueryHookResult = ReturnType<typeof useGetProductDetailsBySlugQuery>;
export type GetProductDetailsBySlugLazyQueryHookResult = ReturnType<typeof useGetProductDetailsBySlugLazyQuery>;
export type GetProductDetailsBySlugQueryResult = Apollo.QueryResult<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
>;
export const GetProductsListDocument = gql`
    query GetProductsList {
        products {
            id
            slug
            name
            price
            images(first: 1) {
                url
                width
                height
                id
            }
        }
    }
`;

/**
 * __useGetProductsListQuery__
 *
 * To run a query within a React component, call `useGetProductsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsListQuery(
    baseOptions?: Apollo.QueryHookOptions<GetProductsListQuery, GetProductsListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProductsListQuery, GetProductsListQueryVariables>(GetProductsListDocument, options);
}
export function useGetProductsListLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProductsListQuery, GetProductsListQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProductsListQuery, GetProductsListQueryVariables>(GetProductsListDocument, options);
}
export type GetProductsListQueryHookResult = ReturnType<typeof useGetProductsListQuery>;
export type GetProductsListLazyQueryHookResult = ReturnType<typeof useGetProductsListLazyQuery>;
export type GetProductsListQueryResult = Apollo.QueryResult<GetProductsListQuery, GetProductsListQueryVariables>;
export const GetAllProductsReviewsDocument = gql`
    query GetAllProductsReviews {
        products {
            reviews {
                ...reviewContent
            }
            name
        }
    }
    ${ReviewContentFragmentDoc}
`;

/**
 * __useGetAllProductsReviewsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsReviewsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetAllProductsReviewsQuery, GetAllProductsReviewsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAllProductsReviewsQuery, GetAllProductsReviewsQueryVariables>(
        GetAllProductsReviewsDocument,
        options
    );
}
export function useGetAllProductsReviewsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsReviewsQuery, GetAllProductsReviewsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAllProductsReviewsQuery, GetAllProductsReviewsQueryVariables>(
        GetAllProductsReviewsDocument,
        options
    );
}
export type GetAllProductsReviewsQueryHookResult = ReturnType<typeof useGetAllProductsReviewsQuery>;
export type GetAllProductsReviewsLazyQueryHookResult = ReturnType<typeof useGetAllProductsReviewsLazyQuery>;
export type GetAllProductsReviewsQueryResult = Apollo.QueryResult<
    GetAllProductsReviewsQuery,
    GetAllProductsReviewsQueryVariables
>;
export const GetAllReviewsWithProductDocument = gql`
    query GetAllReviewsWithProduct {
        reviews {
            ...reviewContent
            product {
                name
                slug
            }
        }
    }
    ${ReviewContentFragmentDoc}
`;

/**
 * __useGetAllReviewsWithProductQuery__
 *
 * To run a query within a React component, call `useGetAllReviewsWithProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReviewsWithProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReviewsWithProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllReviewsWithProductQuery(
    baseOptions?: Apollo.QueryHookOptions<GetAllReviewsWithProductQuery, GetAllReviewsWithProductQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAllReviewsWithProductQuery, GetAllReviewsWithProductQueryVariables>(
        GetAllReviewsWithProductDocument,
        options
    );
}
export function useGetAllReviewsWithProductLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetAllReviewsWithProductQuery, GetAllReviewsWithProductQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAllReviewsWithProductQuery, GetAllReviewsWithProductQueryVariables>(
        GetAllReviewsWithProductDocument,
        options
    );
}
export type GetAllReviewsWithProductQueryHookResult = ReturnType<typeof useGetAllReviewsWithProductQuery>;
export type GetAllReviewsWithProductLazyQueryHookResult = ReturnType<typeof useGetAllReviewsWithProductLazyQuery>;
export type GetAllReviewsWithProductQueryResult = Apollo.QueryResult<
    GetAllReviewsWithProductQuery,
    GetAllReviewsWithProductQueryVariables
>;
export const GetReviewsForProductSlugDocument = gql`
    query GetReviewsForProductSlug($slug: String!) {
        product(where: { slug: $slug }) {
            reviews {
                ...reviewContent
            }
        }
    }
    ${ReviewContentFragmentDoc}
`;

/**
 * __useGetReviewsForProductSlugQuery__
 *
 * To run a query within a React component, call `useGetReviewsForProductSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsForProductSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsForProductSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetReviewsForProductSlugQuery(
    baseOptions: Apollo.QueryHookOptions<GetReviewsForProductSlugQuery, GetReviewsForProductSlugQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetReviewsForProductSlugQuery, GetReviewsForProductSlugQueryVariables>(
        GetReviewsForProductSlugDocument,
        options
    );
}
export function useGetReviewsForProductSlugLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetReviewsForProductSlugQuery, GetReviewsForProductSlugQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetReviewsForProductSlugQuery, GetReviewsForProductSlugQueryVariables>(
        GetReviewsForProductSlugDocument,
        options
    );
}
export type GetReviewsForProductSlugQueryHookResult = ReturnType<typeof useGetReviewsForProductSlugQuery>;
export type GetReviewsForProductSlugLazyQueryHookResult = ReturnType<typeof useGetReviewsForProductSlugLazyQuery>;
export type GetReviewsForProductSlugQueryResult = Apollo.QueryResult<
    GetReviewsForProductSlugQuery,
    GetReviewsForProductSlugQueryVariables
>;
export const GetProductBySlugDocument = gql`
    query GetProductBySlug($slug: String!) {
        product(where: { slug: $slug }) {
            id
            slug
            price
            name
            images {
                url
            }
        }
    }
`;

/**
 * __useGetProductBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductBySlugQuery(
    baseOptions: Apollo.QueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, options);
}
export function useGetProductBySlugLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(
        GetProductBySlugDocument,
        options
    );
}
export type GetProductBySlugQueryHookResult = ReturnType<typeof useGetProductBySlugQuery>;
export type GetProductBySlugLazyQueryHookResult = ReturnType<typeof useGetProductBySlugLazyQuery>;
export type GetProductBySlugQueryResult = Apollo.QueryResult<GetProductBySlugQuery, GetProductBySlugQueryVariables>;
export const GetAccountByEmailDocument = gql`
    query GetAccountByEmail($email: String!) {
        account(where: { email: $email }, stage: DRAFT) {
            id
            email
            password
        }
    }
`;

/**
 * __useGetAccountByEmailQuery__
 *
 * To run a query within a React component, call `useGetAccountByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetAccountByEmailQuery(
    baseOptions: Apollo.QueryHookOptions<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>(GetAccountByEmailDocument, options);
}
export function useGetAccountByEmailLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>(
        GetAccountByEmailDocument,
        options
    );
}
export type GetAccountByEmailQueryHookResult = ReturnType<typeof useGetAccountByEmailQuery>;
export type GetAccountByEmailLazyQueryHookResult = ReturnType<typeof useGetAccountByEmailLazyQuery>;
export type GetAccountByEmailQueryResult = Apollo.QueryResult<GetAccountByEmailQuery, GetAccountByEmailQueryVariables>;
export const GetCartIdByAccountIdDocument = gql`
    query GetCartIdByAccountId($id: ID!) {
        account(where: { id: $id }) {
            cart {
                id
            }
        }
    }
`;

/**
 * __useGetCartIdByAccountIdQuery__
 *
 * To run a query within a React component, call `useGetCartIdByAccountIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartIdByAccountIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartIdByAccountIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCartIdByAccountIdQuery(
    baseOptions: Apollo.QueryHookOptions<GetCartIdByAccountIdQuery, GetCartIdByAccountIdQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetCartIdByAccountIdQuery, GetCartIdByAccountIdQueryVariables>(
        GetCartIdByAccountIdDocument,
        options
    );
}
export function useGetCartIdByAccountIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetCartIdByAccountIdQuery, GetCartIdByAccountIdQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetCartIdByAccountIdQuery, GetCartIdByAccountIdQueryVariables>(
        GetCartIdByAccountIdDocument,
        options
    );
}
export type GetCartIdByAccountIdQueryHookResult = ReturnType<typeof useGetCartIdByAccountIdQuery>;
export type GetCartIdByAccountIdLazyQueryHookResult = ReturnType<typeof useGetCartIdByAccountIdLazyQuery>;
export type GetCartIdByAccountIdQueryResult = Apollo.QueryResult<
    GetCartIdByAccountIdQuery,
    GetCartIdByAccountIdQueryVariables
>;
export const GetCartItemsByCartIdDocument = gql`
    query GetCartItemsByCartId($id: ID!) {
        cart(where: { id: $id }) {
            ...cartContentQuery
        }
    }
    ${CartContentQueryFragmentDoc}
`;

/**
 * __useGetCartItemsByCartIdQuery__
 *
 * To run a query within a React component, call `useGetCartItemsByCartIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemsByCartIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemsByCartIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCartItemsByCartIdQuery(
    baseOptions: Apollo.QueryHookOptions<GetCartItemsByCartIdQuery, GetCartItemsByCartIdQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetCartItemsByCartIdQuery, GetCartItemsByCartIdQueryVariables>(
        GetCartItemsByCartIdDocument,
        options
    );
}
export function useGetCartItemsByCartIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemsByCartIdQuery, GetCartItemsByCartIdQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetCartItemsByCartIdQuery, GetCartItemsByCartIdQueryVariables>(
        GetCartItemsByCartIdDocument,
        options
    );
}
export type GetCartItemsByCartIdQueryHookResult = ReturnType<typeof useGetCartItemsByCartIdQuery>;
export type GetCartItemsByCartIdLazyQueryHookResult = ReturnType<typeof useGetCartItemsByCartIdLazyQuery>;
export type GetCartItemsByCartIdQueryResult = Apollo.QueryResult<
    GetCartItemsByCartIdQuery,
    GetCartItemsByCartIdQueryVariables
>;
export const GetCartItemsDocument = gql`
    query GetCartItems($id: ID!) {
        cart(where: { id: $id }) {
            id
            cartItems {
                id
            }
        }
    }
`;

/**
 * __useGetCartItemsQuery__
 *
 * To run a query within a React component, call `useGetCartItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCartItemsQuery(
    baseOptions: Apollo.QueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
}
export function useGetCartItemsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemsQuery, GetCartItemsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetCartItemsQuery, GetCartItemsQueryVariables>(GetCartItemsDocument, options);
}
export type GetCartItemsQueryHookResult = ReturnType<typeof useGetCartItemsQuery>;
export type GetCartItemsLazyQueryHookResult = ReturnType<typeof useGetCartItemsLazyQuery>;
export type GetCartItemsQueryResult = Apollo.QueryResult<GetCartItemsQuery, GetCartItemsQueryVariables>;
