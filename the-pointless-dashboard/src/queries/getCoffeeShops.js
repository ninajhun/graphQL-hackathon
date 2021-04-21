import { gql } from "graphql-tag";

export const GET_COFFEE_QUERY = gql`
  query getCoffee($ip: String!) {
    location(ip: $ip) {
      coffeeShops {
        image_url
        name
        url
      }
    }
  }
`;
