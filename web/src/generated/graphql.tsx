import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Announcement = {
  __typename?: 'Announcement';
  author: Scalars['String'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  summary: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAnnInput = {
  author: Scalars['String'];
  body: Scalars['String'];
  summary: Scalars['String'];
};

export type CreateAnnResponse = {
  __typename?: 'CreateAnnResponse';
  announcement: Announcement;
  ok: Scalars['Boolean'];
};

export type CreatePostInput = {
  author?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePostResponse = {
  __typename?: 'CreatePostResponse';
  ok: Scalars['Boolean'];
  post: Post;
};

export type CreateSuggInput = {
  body: Scalars['String'];
  tag: Scalars['String'];
};

export type CreateSuggResponse = {
  __typename?: 'CreateSuggResponse';
  ok: Scalars['Boolean'];
  suggestion: Suggestion;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnnouncement: CreateAnnResponse;
  createPost: CreatePostResponse;
  createSuggugestion: CreateSuggResponse;
  createTrend: Trend;
  createView: Scalars['Boolean'];
  deletePost: Scalars['Boolean'];
};


export type MutationCreateAnnouncementArgs = {
  input: CreateAnnInput;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationCreateSuggugestionArgs = {
  input: CreateSuggInput;
};


export type MutationCreateTrendArgs = {
  body: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  sourceUrl?: Maybe<Scalars['String']>;
};


export type MutationCreateViewArgs = {
  trendId: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  announcement: Announcement;
  announcements: Array<Announcement>;
  facebookTrends: Array<Trend>;
  hello: Scalars['String'];
  newSuggestions: Array<Suggestion>;
  newTrends: Array<Trend>;
  post: Post;
  posts: Array<Post>;
  suggestions: Array<Suggestion>;
  tiktokTrends: Array<Trend>;
  trends: Array<Trend>;
  views: Scalars['String'];
};


export type QueryAnnouncementArgs = {
  annId: Scalars['String'];
};


export type QueryPostArgs = {
  postId: Scalars['String'];
};


export type QueryViewsArgs = {
  trendId: Scalars['String'];
};

export type Suggestion = {
  __typename?: 'Suggestion';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  tag: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Trend = {
  __typename?: 'Trend';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'CreatePostResponse', ok: boolean, post: { __typename?: 'Post', id: string, author?: Maybe<string>, title: string, body: string, createdAt: any, updatedAt: any } } };

export type CreateSuggestionMutationVariables = Exact<{
  input: CreateSuggInput;
}>;


export type CreateSuggestionMutation = { __typename?: 'Mutation', createSuggugestion: { __typename?: 'CreateSuggResponse', ok: boolean, suggestion: { __typename?: 'Suggestion', id: string, body: string, tag: string } } };

export type CreateTrendMutationVariables = Exact<{
  body: Scalars['String'];
  imageUrl: Scalars['String'];
  sourceUrl: Scalars['String'];
  source: Scalars['String'];
}>;


export type CreateTrendMutation = { __typename?: 'Mutation', createTrend: { __typename?: 'Trend', id: string, source?: Maybe<string>, sourceUrl?: Maybe<string>, imageUrl?: Maybe<string>, body: string, createdAt: any, updatedAt: any } };

export type CreateViewMutationVariables = Exact<{
  trendId: Scalars['String'];
}>;


export type CreateViewMutation = { __typename?: 'Mutation', createView: boolean };

export type AnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type AnnouncementsQuery = { __typename?: 'Query', announcements: Array<{ __typename?: 'Announcement', id: string, author: string, body: string, summary: string, createdAt: any, updatedAt: any }> };

export type AnnouncementQueryVariables = Exact<{
  annId: Scalars['String'];
}>;


export type AnnouncementQuery = { __typename?: 'Query', announcement: { __typename?: 'Announcement', id: string, author: string, body: string, summary: string, createdAt: any, updatedAt: any } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, author?: Maybe<string>, title: string, body: string, createdAt: any, updatedAt: any }> };

export type PostQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, author?: Maybe<string>, title: string, body: string, createdAt: any, updatedAt: any } };

export type SuggestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SuggestionsQuery = { __typename?: 'Query', suggestions: Array<{ __typename?: 'Suggestion', id: string, body: string, tag: string, createdAt: any }> };

export type NewSuggestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewSuggestionsQuery = { __typename?: 'Query', newSuggestions: Array<{ __typename?: 'Suggestion', id: string, body: string, tag: string, createdAt: any }> };

export type TrendsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendsQuery = { __typename?: 'Query', trends: Array<{ __typename?: 'Trend', id: string, source?: Maybe<string>, sourceUrl?: Maybe<string>, imageUrl?: Maybe<string>, body: string, createdAt: any }> };

export type NewTrendsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewTrendsQuery = { __typename?: 'Query', newTrends: Array<{ __typename?: 'Trend', id: string, source?: Maybe<string>, sourceUrl?: Maybe<string>, imageUrl?: Maybe<string>, body: string, createdAt: any, updatedAt: any }> };

export type ViewsQueryVariables = Exact<{
  trendId: Scalars['String'];
}>;


export type ViewsQuery = { __typename?: 'Query', views: string };


export const CreatePostDocument = gql`
    mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    ok
    post {
      id
      author
      title
      body
      createdAt
      updatedAt
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;
export type CreatePostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePostMutation, CreatePostMutationVariables>, 'mutation'>;

    export const CreatePostComponent = (props: CreatePostComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePostMutation, CreatePostMutationVariables> mutation={CreatePostDocument} {...props} />
    );
    

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const CreateSuggestionDocument = gql`
    mutation CreateSuggestion($input: CreateSuggInput!) {
  createSuggugestion(input: $input) {
    ok
    suggestion {
      id
      body
      tag
    }
  }
}
    `;
export type CreateSuggestionMutationFn = Apollo.MutationFunction<CreateSuggestionMutation, CreateSuggestionMutationVariables>;
export type CreateSuggestionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSuggestionMutation, CreateSuggestionMutationVariables>, 'mutation'>;

    export const CreateSuggestionComponent = (props: CreateSuggestionComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSuggestionMutation, CreateSuggestionMutationVariables> mutation={CreateSuggestionDocument} {...props} />
    );
    

/**
 * __useCreateSuggestionMutation__
 *
 * To run a mutation, you first call `useCreateSuggestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSuggestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSuggestionMutation, { data, loading, error }] = useCreateSuggestionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSuggestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSuggestionMutation, CreateSuggestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSuggestionMutation, CreateSuggestionMutationVariables>(CreateSuggestionDocument, options);
      }
export type CreateSuggestionMutationHookResult = ReturnType<typeof useCreateSuggestionMutation>;
export type CreateSuggestionMutationResult = Apollo.MutationResult<CreateSuggestionMutation>;
export type CreateSuggestionMutationOptions = Apollo.BaseMutationOptions<CreateSuggestionMutation, CreateSuggestionMutationVariables>;
export const CreateTrendDocument = gql`
    mutation createTrend($body: String!, $imageUrl: String!, $sourceUrl: String!, $source: String!) {
  createTrend(
    body: $body
    imageUrl: $imageUrl
    sourceUrl: $sourceUrl
    source: $source
  ) {
    id
    source
    sourceUrl
    imageUrl
    body
    createdAt
    updatedAt
  }
}
    `;
export type CreateTrendMutationFn = Apollo.MutationFunction<CreateTrendMutation, CreateTrendMutationVariables>;
export type CreateTrendComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateTrendMutation, CreateTrendMutationVariables>, 'mutation'>;

    export const CreateTrendComponent = (props: CreateTrendComponentProps) => (
      <ApolloReactComponents.Mutation<CreateTrendMutation, CreateTrendMutationVariables> mutation={CreateTrendDocument} {...props} />
    );
    

/**
 * __useCreateTrendMutation__
 *
 * To run a mutation, you first call `useCreateTrendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTrendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTrendMutation, { data, loading, error }] = useCreateTrendMutation({
 *   variables: {
 *      body: // value for 'body'
 *      imageUrl: // value for 'imageUrl'
 *      sourceUrl: // value for 'sourceUrl'
 *      source: // value for 'source'
 *   },
 * });
 */
export function useCreateTrendMutation(baseOptions?: Apollo.MutationHookOptions<CreateTrendMutation, CreateTrendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTrendMutation, CreateTrendMutationVariables>(CreateTrendDocument, options);
      }
export type CreateTrendMutationHookResult = ReturnType<typeof useCreateTrendMutation>;
export type CreateTrendMutationResult = Apollo.MutationResult<CreateTrendMutation>;
export type CreateTrendMutationOptions = Apollo.BaseMutationOptions<CreateTrendMutation, CreateTrendMutationVariables>;
export const CreateViewDocument = gql`
    mutation createView($trendId: String!) {
  createView(trendId: $trendId)
}
    `;
export type CreateViewMutationFn = Apollo.MutationFunction<CreateViewMutation, CreateViewMutationVariables>;
export type CreateViewComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateViewMutation, CreateViewMutationVariables>, 'mutation'>;

    export const CreateViewComponent = (props: CreateViewComponentProps) => (
      <ApolloReactComponents.Mutation<CreateViewMutation, CreateViewMutationVariables> mutation={CreateViewDocument} {...props} />
    );
    

/**
 * __useCreateViewMutation__
 *
 * To run a mutation, you first call `useCreateViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewMutation, { data, loading, error }] = useCreateViewMutation({
 *   variables: {
 *      trendId: // value for 'trendId'
 *   },
 * });
 */
export function useCreateViewMutation(baseOptions?: Apollo.MutationHookOptions<CreateViewMutation, CreateViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateViewMutation, CreateViewMutationVariables>(CreateViewDocument, options);
      }
export type CreateViewMutationHookResult = ReturnType<typeof useCreateViewMutation>;
export type CreateViewMutationResult = Apollo.MutationResult<CreateViewMutation>;
export type CreateViewMutationOptions = Apollo.BaseMutationOptions<CreateViewMutation, CreateViewMutationVariables>;
export const AnnouncementsDocument = gql`
    query Announcements {
  announcements {
    id
    author
    body
    summary
    createdAt
    updatedAt
  }
}
    `;
export type AnnouncementsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AnnouncementsQuery, AnnouncementsQueryVariables>, 'query'>;

    export const AnnouncementsComponent = (props: AnnouncementsComponentProps) => (
      <ApolloReactComponents.Query<AnnouncementsQuery, AnnouncementsQueryVariables> query={AnnouncementsDocument} {...props} />
    );
    

/**
 * __useAnnouncementsQuery__
 *
 * To run a query within a React component, call `useAnnouncementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnouncementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnouncementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAnnouncementsQuery(baseOptions?: Apollo.QueryHookOptions<AnnouncementsQuery, AnnouncementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnnouncementsQuery, AnnouncementsQueryVariables>(AnnouncementsDocument, options);
      }
export function useAnnouncementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnnouncementsQuery, AnnouncementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnnouncementsQuery, AnnouncementsQueryVariables>(AnnouncementsDocument, options);
        }
export type AnnouncementsQueryHookResult = ReturnType<typeof useAnnouncementsQuery>;
export type AnnouncementsLazyQueryHookResult = ReturnType<typeof useAnnouncementsLazyQuery>;
export type AnnouncementsQueryResult = Apollo.QueryResult<AnnouncementsQuery, AnnouncementsQueryVariables>;
export const AnnouncementDocument = gql`
    query Announcement($annId: String!) {
  announcement(annId: $annId) {
    id
    author
    body
    summary
    createdAt
    updatedAt
  }
}
    `;
export type AnnouncementComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AnnouncementQuery, AnnouncementQueryVariables>, 'query'> & ({ variables: AnnouncementQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AnnouncementComponent = (props: AnnouncementComponentProps) => (
      <ApolloReactComponents.Query<AnnouncementQuery, AnnouncementQueryVariables> query={AnnouncementDocument} {...props} />
    );
    

/**
 * __useAnnouncementQuery__
 *
 * To run a query within a React component, call `useAnnouncementQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnnouncementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnnouncementQuery({
 *   variables: {
 *      annId: // value for 'annId'
 *   },
 * });
 */
export function useAnnouncementQuery(baseOptions: Apollo.QueryHookOptions<AnnouncementQuery, AnnouncementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AnnouncementQuery, AnnouncementQueryVariables>(AnnouncementDocument, options);
      }
export function useAnnouncementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AnnouncementQuery, AnnouncementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AnnouncementQuery, AnnouncementQueryVariables>(AnnouncementDocument, options);
        }
export type AnnouncementQueryHookResult = ReturnType<typeof useAnnouncementQuery>;
export type AnnouncementLazyQueryHookResult = ReturnType<typeof useAnnouncementLazyQuery>;
export type AnnouncementQueryResult = Apollo.QueryResult<AnnouncementQuery, AnnouncementQueryVariables>;
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    author
    title
    body
    createdAt
    updatedAt
  }
}
    `;
export type PostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>, 'query'>;

    export const PostsComponent = (props: PostsComponentProps) => (
      <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
    );
    

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const PostDocument = gql`
    query Post($postId: String!) {
  post(postId: $postId) {
    id
    author
    title
    body
    createdAt
    updatedAt
  }
}
    `;
export type PostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostQuery, PostQueryVariables>, 'query'> & ({ variables: PostQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PostComponent = (props: PostComponentProps) => (
      <ApolloReactComponents.Query<PostQuery, PostQueryVariables> query={PostDocument} {...props} />
    );
    

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const SuggestionsDocument = gql`
    query Suggestions {
  suggestions {
    id
    body
    tag
    createdAt
  }
}
    `;
export type SuggestionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SuggestionsQuery, SuggestionsQueryVariables>, 'query'>;

    export const SuggestionsComponent = (props: SuggestionsComponentProps) => (
      <ApolloReactComponents.Query<SuggestionsQuery, SuggestionsQueryVariables> query={SuggestionsDocument} {...props} />
    );
    

/**
 * __useSuggestionsQuery__
 *
 * To run a query within a React component, call `useSuggestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSuggestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSuggestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSuggestionsQuery(baseOptions?: Apollo.QueryHookOptions<SuggestionsQuery, SuggestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SuggestionsQuery, SuggestionsQueryVariables>(SuggestionsDocument, options);
      }
export function useSuggestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SuggestionsQuery, SuggestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SuggestionsQuery, SuggestionsQueryVariables>(SuggestionsDocument, options);
        }
export type SuggestionsQueryHookResult = ReturnType<typeof useSuggestionsQuery>;
export type SuggestionsLazyQueryHookResult = ReturnType<typeof useSuggestionsLazyQuery>;
export type SuggestionsQueryResult = Apollo.QueryResult<SuggestionsQuery, SuggestionsQueryVariables>;
export const NewSuggestionsDocument = gql`
    query newSuggestions {
  newSuggestions {
    id
    body
    tag
    createdAt
  }
}
    `;
export type NewSuggestionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NewSuggestionsQuery, NewSuggestionsQueryVariables>, 'query'>;

    export const NewSuggestionsComponent = (props: NewSuggestionsComponentProps) => (
      <ApolloReactComponents.Query<NewSuggestionsQuery, NewSuggestionsQueryVariables> query={NewSuggestionsDocument} {...props} />
    );
    

/**
 * __useNewSuggestionsQuery__
 *
 * To run a query within a React component, call `useNewSuggestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewSuggestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewSuggestionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewSuggestionsQuery(baseOptions?: Apollo.QueryHookOptions<NewSuggestionsQuery, NewSuggestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewSuggestionsQuery, NewSuggestionsQueryVariables>(NewSuggestionsDocument, options);
      }
export function useNewSuggestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewSuggestionsQuery, NewSuggestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewSuggestionsQuery, NewSuggestionsQueryVariables>(NewSuggestionsDocument, options);
        }
export type NewSuggestionsQueryHookResult = ReturnType<typeof useNewSuggestionsQuery>;
export type NewSuggestionsLazyQueryHookResult = ReturnType<typeof useNewSuggestionsLazyQuery>;
export type NewSuggestionsQueryResult = Apollo.QueryResult<NewSuggestionsQuery, NewSuggestionsQueryVariables>;
export const TrendsDocument = gql`
    query Trends {
  trends {
    id
    source
    sourceUrl
    imageUrl
    body
    createdAt
  }
}
    `;
export type TrendsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TrendsQuery, TrendsQueryVariables>, 'query'>;

    export const TrendsComponent = (props: TrendsComponentProps) => (
      <ApolloReactComponents.Query<TrendsQuery, TrendsQueryVariables> query={TrendsDocument} {...props} />
    );
    

/**
 * __useTrendsQuery__
 *
 * To run a query within a React component, call `useTrendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrendsQuery(baseOptions?: Apollo.QueryHookOptions<TrendsQuery, TrendsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendsQuery, TrendsQueryVariables>(TrendsDocument, options);
      }
export function useTrendsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendsQuery, TrendsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendsQuery, TrendsQueryVariables>(TrendsDocument, options);
        }
export type TrendsQueryHookResult = ReturnType<typeof useTrendsQuery>;
export type TrendsLazyQueryHookResult = ReturnType<typeof useTrendsLazyQuery>;
export type TrendsQueryResult = Apollo.QueryResult<TrendsQuery, TrendsQueryVariables>;
export const NewTrendsDocument = gql`
    query NewTrends {
  newTrends {
    id
    source
    sourceUrl
    imageUrl
    body
    createdAt
    createdAt
    updatedAt
  }
}
    `;
export type NewTrendsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<NewTrendsQuery, NewTrendsQueryVariables>, 'query'>;

    export const NewTrendsComponent = (props: NewTrendsComponentProps) => (
      <ApolloReactComponents.Query<NewTrendsQuery, NewTrendsQueryVariables> query={NewTrendsDocument} {...props} />
    );
    

/**
 * __useNewTrendsQuery__
 *
 * To run a query within a React component, call `useNewTrendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewTrendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewTrendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewTrendsQuery(baseOptions?: Apollo.QueryHookOptions<NewTrendsQuery, NewTrendsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewTrendsQuery, NewTrendsQueryVariables>(NewTrendsDocument, options);
      }
export function useNewTrendsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewTrendsQuery, NewTrendsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewTrendsQuery, NewTrendsQueryVariables>(NewTrendsDocument, options);
        }
export type NewTrendsQueryHookResult = ReturnType<typeof useNewTrendsQuery>;
export type NewTrendsLazyQueryHookResult = ReturnType<typeof useNewTrendsLazyQuery>;
export type NewTrendsQueryResult = Apollo.QueryResult<NewTrendsQuery, NewTrendsQueryVariables>;
export const ViewsDocument = gql`
    query Views($trendId: String!) {
  views(trendId: $trendId)
}
    `;
export type ViewsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewsQuery, ViewsQueryVariables>, 'query'> & ({ variables: ViewsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ViewsComponent = (props: ViewsComponentProps) => (
      <ApolloReactComponents.Query<ViewsQuery, ViewsQueryVariables> query={ViewsDocument} {...props} />
    );
    

/**
 * __useViewsQuery__
 *
 * To run a query within a React component, call `useViewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewsQuery({
 *   variables: {
 *      trendId: // value for 'trendId'
 *   },
 * });
 */
export function useViewsQuery(baseOptions: Apollo.QueryHookOptions<ViewsQuery, ViewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewsQuery, ViewsQueryVariables>(ViewsDocument, options);
      }
export function useViewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewsQuery, ViewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewsQuery, ViewsQueryVariables>(ViewsDocument, options);
        }
export type ViewsQueryHookResult = ReturnType<typeof useViewsQuery>;
export type ViewsLazyQueryHookResult = ReturnType<typeof useViewsLazyQuery>;
export type ViewsQueryResult = Apollo.QueryResult<ViewsQuery, ViewsQueryVariables>;