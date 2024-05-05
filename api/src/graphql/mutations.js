/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
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
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
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
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
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
export const createAsk = /* GraphQL */ `
  mutation CreateAsk(
    $input: CreateAskInput!
    $condition: ModelAskConditionInput
  ) {
    createAsk(input: $input, condition: $condition) {
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
export const updateAsk = /* GraphQL */ `
  mutation UpdateAsk(
    $input: UpdateAskInput!
    $condition: ModelAskConditionInput
  ) {
    updateAsk(input: $input, condition: $condition) {
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
export const deleteAsk = /* GraphQL */ `
  mutation DeleteAsk(
    $input: DeleteAskInput!
    $condition: ModelAskConditionInput
  ) {
    deleteAsk(input: $input, condition: $condition) {
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
