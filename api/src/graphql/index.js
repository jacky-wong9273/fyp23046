export const listBids = /* GraphQL */ `
  query ListBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
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

export const listAsks = /* GraphQL */ `
  query ListAsks(
    $filter: ModelAskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
