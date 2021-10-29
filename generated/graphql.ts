import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Contributor = {
  __typename?: 'Contributor';
  user?: Maybe<User>;
  stamp?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
};

export type CreatePostOutput = MutationOutput & {
  __typename?: 'CreatePostOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  post?: Maybe<PostDetailed>;
};

export type CreateStoryInput = {
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  contentMarkdown: Scalars['String'];
  coverImageURL?: Maybe<Scalars['String']>;
  isRepublished?: Maybe<IsRepublished>;
  tags: Array<Maybe<TagsInput>>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  sourcedFromGithub?: Maybe<Scalars['Boolean']>;
};

export type DeleteOutput = MutationOutput & {
  __typename?: 'DeleteOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export enum FeedType {
  Community = 'COMMUNITY',
  Best = 'BEST',
  New = 'NEW',
  Featured = 'FEATURED',
}

export type FollowUserOutput = MutationOutput & {
  __typename?: 'FollowUserOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Links = {
  __typename?: 'Links';
  hashnode?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  followUser: FollowUserOutput;
  createStory: CreatePostOutput;
  createPublicationStory: CreatePostOutput;
  updateStory: CreatePostOutput;
  reactToStory: ReactToPostOutput;
  deletePost: DeleteOutput;
  createResponse: CreateResponseOutput;
  updateResponse: CreateResponseOutput;
  reactToResponse: ReactToResponseOutput;
  deleteResponse: DeleteOutput;
  createReply: CreateReplyOutput;
  updateReply: CreateReplyOutput;
  reactToReply: ReactToReplyOutput;
  deleteReply: DeleteOutput;
};

export type MutationFollowUserArgs = {
  userId: Scalars['String'];
};

export type MutationCreateStoryArgs = {
  input: CreateStoryInput;
};

export type MutationCreatePublicationStoryArgs = {
  input: CreateStoryInput;
  publicationId: Scalars['String'];
  hideFromHashnodeFeed?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateStoryArgs = {
  postId: Scalars['String'];
  input: UpdateStoryInput;
};

export type MutationReactToStoryArgs = {
  input: ReactToPostInput;
};

export type MutationDeletePostArgs = {
  id: Scalars['String'];
};

export type MutationCreateResponseArgs = {
  input: CreateResponseInput;
};

export type MutationUpdateResponseArgs = {
  responseId: Scalars['String'];
  postId?: Maybe<Scalars['String']>;
  contentInMarkdown: Scalars['String'];
};

export type MutationReactToResponseArgs = {
  input: ReactToResponseInput;
};

export type MutationDeleteResponseArgs = {
  responseId: Scalars['String'];
  postId: Scalars['String'];
};

export type MutationCreateReplyArgs = {
  input: CreateReplyInput;
};

export type MutationUpdateReplyArgs = {
  replyId: Scalars['String'];
  responseId: Scalars['String'];
  postId: Scalars['String'];
  contentInMarkdown: Scalars['String'];
};

export type MutationReactToReplyArgs = {
  input: ReactToReplyInput;
};

export type MutationDeleteReplyArgs = {
  replyId: Scalars['String'];
  responseId: Scalars['String'];
  postId: Scalars['String'];
};

export type MutationOutput = {
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Poll = {
  __typename?: 'Poll';
  pollOptions?: Maybe<Array<Maybe<PollOption>>>;
  totalVotes?: Maybe<Scalars['Int']>;
  pollClosingDate?: Maybe<Scalars['String']>;
  pollRunningTime?: Maybe<Scalars['String']>;
};

export type PollOption = {
  __typename?: 'PollOption';
  _id: Scalars['ID'];
  option: Scalars['String'];
  votes: Scalars['Int'];
};

export type PollOptionInput = {
  content: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID'];
  followersCount?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
  cuid?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  popularity?: Maybe<Scalars['Float']>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  totalReactions?: Maybe<Scalars['Int']>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  partOfPublication?: Maybe<Scalars['Boolean']>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  replyCount?: Maybe<Scalars['Int']>;
  responseCount?: Maybe<Scalars['Int']>;
  dateAdded?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  brief?: Maybe<Scalars['String']>;
  coverImage: Scalars['String'];
  isAnonymous?: Maybe<Scalars['Boolean']>;
  dateUpdated?: Maybe<Scalars['String']>;
  dateFeatured?: Maybe<Scalars['String']>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  poll?: Maybe<Poll>;
  contentMarkdown?: Maybe<Scalars['String']>;
  numUniqueUsersWhoReacted?: Maybe<Scalars['Int']>;
};

export type PostDetailed = {
  __typename?: 'PostDetailed';
  _id: Scalars['ID'];
  sourcedFromGithub?: Maybe<Scalars['Boolean']>;
  isRepublished?: Maybe<Scalars['Boolean']>;
  followersCount?: Maybe<Scalars['Int']>;
  cuid?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  partOfPublication?: Maybe<Scalars['Boolean']>;
  publication?: Maybe<Publication>;
  dateUpdated?: Maybe<Scalars['String']>;
  totalReactions?: Maybe<Scalars['Int']>;
  numCollapsed?: Maybe<Scalars['Int']>;
  isDelisted?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  replyCount?: Maybe<Scalars['Int']>;
  responseCount?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Float']>;
  dateAdded?: Maybe<Scalars['String']>;
  contentMarkdown?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  brief?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  isAnonymous?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  untaggedFrom?: Maybe<Array<Maybe<Scalars['String']>>>;
  contributors?: Maybe<Array<Maybe<Contributor>>>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  author?: Maybe<User>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
  poll?: Maybe<Poll>;
  responses: Array<Response>;
};

export type PostDetailedResponsesArgs = {
  page?: Maybe<Scalars['Int']>;
};

export type Publication = {
  __typename?: 'Publication';
  _id: Scalars['ID'];
  author?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
  headerColor?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  metaHTML?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  favicon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayTitle?: Maybe<Scalars['String']>;
  ogImage?: Maybe<Scalars['String']>;
  embedCode?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  sitemapSubmitted?: Maybe<Scalars['Boolean']>;
  tweetedAboutBlog?: Maybe<Scalars['Boolean']>;
  fbPixelID?: Maybe<Scalars['String']>;
  gaTrackingID?: Maybe<Scalars['String']>;
  isAMPEnabled?: Maybe<Scalars['Boolean']>;
  metaTags?: Maybe<Scalars['String']>;
  imprint?: Maybe<Scalars['String']>;
  imprintMarkdown?: Maybe<Scalars['String']>;
  links?: Maybe<Links>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type PublicationPostsArgs = {
  page?: Maybe<Scalars['Int']>;
};

export type PublicationDetails = {
  publicationId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  storiesFeed?: Maybe<Array<Maybe<Post>>>;
  amas?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<PostDetailed>;
  tagCategories?: Maybe<Array<Maybe<TagCategory>>>;
};

export type QueryUserArgs = {
  username: Scalars['String'];
};

export type QueryStoriesFeedArgs = {
  type: FeedType;
  page?: Maybe<Scalars['Int']>;
};

export type QueryAmasArgs = {
  page?: Maybe<Scalars['Int']>;
};

export type QueryPostArgs = {
  slug: Scalars['String'];
  hostname?: Maybe<Scalars['String']>;
};

export type ReactToPostInput = {
  reaction: ReactionName;
  postId: Scalars['String'];
};

export type ReactToPostOutput = MutationOutput & {
  __typename?: 'ReactToPostOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type ReactToReplyInput = {
  postId: Scalars['String'];
  responseId: Scalars['String'];
  replyId: Scalars['String'];
  reaction: ReactionName;
};

export type ReactToReplyOutput = MutationOutput & {
  __typename?: 'ReactToReplyOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type ReactToResponseInput = {
  responseId: Scalars['String'];
  postId: Scalars['String'];
  reaction: ReactionName;
};

export type ReactToResponseOutput = MutationOutput & {
  __typename?: 'ReactToResponseOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
};

export type Reaction = {
  __typename?: 'Reaction';
  image: Scalars['String'];
  name: ReactionName;
};

export enum ReactionName {
  ThumbsUp = 'THUMBS_UP',
  Love = 'LOVE',
  Unicorn = 'UNICORN',
  Clap = 'CLAP',
  Beer = 'BEER',
  Trophy = 'TROPHY',
  HeartEyes = 'HEART_EYES',
  TakeMyMoney = 'TAKE_MY_MONEY',
  Party = 'PARTY',
  Rocket = 'ROCKET',
}

export type ReactionsAndCount = {
  __typename?: 'ReactionsAndCount';
  reaction: Reaction;
  count: Scalars['Int'];
};

export type Reply = {
  __typename?: 'Reply';
  _id: Scalars['ID'];
  content: Scalars['String'];
  contentMarkdown: Scalars['String'];
  author: User;
  dateAdded: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  stamp?: Maybe<Scalars['String']>;
  totalReactions?: Maybe<Scalars['Int']>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
};

export type Response = {
  __typename?: 'Response';
  _id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  contentMarkdown?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  stamp?: Maybe<Scalars['String']>;
  post?: Maybe<Scalars['String']>;
  totalReactions?: Maybe<Scalars['Int']>;
  reactions?: Maybe<Array<Maybe<ReactionsAndCount>>>;
  bookmarkedIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  isCollapsed?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  dateAdded?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Float']>;
  replies?: Maybe<Array<Maybe<Reply>>>;
  reactionsByCurrentUser?: Maybe<Array<Maybe<Reaction>>>;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  stackoverflow?: Maybe<Scalars['String']>;
  linkedin?: Maybe<Scalars['String']>;
  google?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  isApproved?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  numPosts?: Maybe<Scalars['Int']>;
  followersCount?: Maybe<Scalars['Int']>;
  tagline?: Maybe<Scalars['String']>;
  wiki?: Maybe<Scalars['String']>;
  wikiMarkdown?: Maybe<Scalars['String']>;
  stats?: Maybe<TagStats>;
  leaderboard?: Maybe<TagLeaderBoard>;
  managers?: Maybe<Array<Maybe<TagManager>>>;
  socialMedia?: Maybe<TagSocialMedia>;
  posts?: Maybe<Array<Maybe<Post>>>;
  contributors?: Maybe<TagContributors>;
};

export type TagPostsArgs = {
  filter: TagsPostFilter;
  page?: Maybe<Scalars['Int']>;
};

export type TagCategory = {
  __typename?: 'TagCategory';
  _id: Scalars['ID'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  priority?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type TagContributorLeaders = {
  __typename?: 'TagContributorLeaders';
  monthlyTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
  allTimeTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
};

export type TagContributors = {
  __typename?: 'TagContributors';
  managers?: Maybe<Array<Maybe<TagManager>>>;
  leaders?: Maybe<TagContributorLeaders>;
};

export type TagLeaderBoard = {
  __typename?: 'TagLeaderBoard';
  monthlyTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
  allTimeTopDevelopers?: Maybe<Array<Maybe<TagLeaderBoardMember>>>;
};

export type TagLeaderBoardMember = {
  __typename?: 'TagLeaderBoardMember';
  user?: Maybe<User>;
  appreciations?: Maybe<Scalars['Int']>;
  upvotes?: Maybe<Scalars['Int']>;
};

export type TagManager = {
  __typename?: 'TagManager';
  _id: Scalars['ID'];
  role: Scalars['String'];
  user?: Maybe<User>;
};

export type TagSocialMedia = {
  __typename?: 'TagSocialMedia';
  github?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  officialWebsite?: Maybe<Scalars['String']>;
};

export type TagStats = {
  __typename?: 'TagStats';
  currentWeekPostsCount?: Maybe<Scalars['Int']>;
  lastWeekPostsCount?: Maybe<Scalars['Int']>;
  currentWeekFollowersCount?: Maybe<Scalars['Int']>;
  lastWeekFollowersCount?: Maybe<Scalars['Int']>;
};

export type TagsInput = {
  _id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum TagsPostFilter {
  Hot = 'HOT',
  Recent = 'RECENT',
  Best = 'BEST',
}

export type UpdateStoryInput = {
  title: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  contentMarkdown: Scalars['String'];
  coverImageURL?: Maybe<Scalars['String']>;
  isRepublished?: Maybe<IsRepublished>;
  isPartOfPublication: PublicationDetails;
  tags: Array<Maybe<TagsInput>>;
  sourcedFromGithub?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  isEvangelist?: Maybe<Scalars['Boolean']>;
  dateJoined?: Maybe<Scalars['String']>;
  socialMedia?: Maybe<SocialMedia>;
  numFollowing?: Maybe<Scalars['Int']>;
  numFollowers?: Maybe<Scalars['Int']>;
  isDeactivated?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  numPosts?: Maybe<Scalars['Int']>;
  numReactions?: Maybe<Scalars['Int']>;
  publication?: Maybe<Publication>;
  blogHandle?: Maybe<Scalars['String']>;
  publicationDomain?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<User>>>;
};

export type CreateReplyInput = {
  postId: Scalars['String'];
  responseId: Scalars['String'];
  contentInMarkdown: Scalars['String'];
};

export type CreateReplyOutput = MutationOutput & {
  __typename?: 'createReplyOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  reply?: Maybe<Response>;
};

export type CreateResponseInput = {
  postId: Scalars['String'];
  contentInMarkdown: Scalars['String'];
};

export type CreateResponseOutput = MutationOutput & {
  __typename?: 'createResponseOutput';
  code: Scalars['Int'];
  success: Scalars['Boolean'];
  message: Scalars['String'];
  response?: Maybe<Response>;
};

export type IsRepublished = {
  originalArticleURL: Scalars['String'];
};

export type PostPreviewsQueryVariables = Exact<{ [key: string]: never }>;

export type PostPreviewsQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'User' } & {
      publication?: Maybe<
        { __typename?: 'Publication' } & {
          posts?: Maybe<
            Array<
              Maybe<
                { __typename?: 'Post' } & Pick<
                  Post,
                  'title' | 'brief' | '_id' | 'dateAdded' | 'slug'
                >
              >
            >
          >;
        }
      >;
    }
  >;
};

export const PostPreviewsDocument = `
    query postPreviews {
  user(username: "Tiu") {
    publication {
      posts {
        title
        brief
        _id
        dateAdded
        slug
      }
    }
  }
}
    `;
export const usePostPreviewsQuery = <
  TData = PostPreviewsQuery,
  TError = unknown
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: PostPreviewsQueryVariables,
  options?: UseQueryOptions<PostPreviewsQuery, TError, TData>
) =>
  useQuery<PostPreviewsQuery, TError, TData>(
    ['postPreviews', variables],
    fetcher<PostPreviewsQuery, PostPreviewsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      PostPreviewsDocument,
      variables
    ),
    options
  );
usePostPreviewsQuery.fetcher = (
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: PostPreviewsQueryVariables
) =>
  fetcher<PostPreviewsQuery, PostPreviewsQueryVariables>(
    dataSource.endpoint,
    dataSource.fetchParams || {},
    PostPreviewsDocument,
    variables
  );
