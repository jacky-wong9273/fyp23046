/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBid = /* GraphQL */ `
  query GetBid($id: ID!, $price: Float!, $createdAt: AWSDateTime!) {
    getBid(id: $id, price: $price, createdAt: $createdAt) {
      id
      mint
      price
      publicKey
      privateKey
      ownerPublicKey
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBids = /* GraphQL */ `
  query ListBids(
    $id: ID
    $priceCreatedAt: ModelBidPrimaryCompositeKeyConditionInput
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBids(
      id: $id
      priceCreatedAt: $priceCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        mint
        price
        publicKey
        privateKey
        ownerPublicKey
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAsk = /* GraphQL */ `
  query GetAsk($id: ID!, $price: Float!, $createdAt: AWSDateTime!) {
    getAsk(id: $id, price: $price, createdAt: $createdAt) {
      id
      mint
      price
      publicKey
      privateKey
      ownerPublicKey
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAsks = /* GraphQL */ `
  query ListAsks(
    $id: ID
    $priceCreatedAt: ModelAskPrimaryCompositeKeyConditionInput
    $filter: ModelAskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAsks(
      id: $id
      priceCreatedAt: $priceCreatedAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        mint
        price
        publicKey
        privateKey
        ownerPublicKey
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
