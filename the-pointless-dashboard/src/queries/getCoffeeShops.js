import { gql } from "graphql-tag";

export const GET_COFFEE_QUERY = gql`
  query getCoffeeShops {
    getCoffeeShops {
      id
      name
    }
  }
`;
