import { gql } from "graphql-tag";

export const GET_COFFEE_QUERY = gql`
  query getCoffee($ip: String!) {
    location(ip: $ip) {
      city
      currency
      postalCode
      coffeeShops {
        image_url
        name
        url
      }
    }
  }
`;
