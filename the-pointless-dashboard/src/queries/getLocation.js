import { gql } from "graphql-tag";

export const GET_LOCATION_QUERY = gql`
  query MyQuery($ip: String!) {
  location(ip: $ip) {
    latitude
    longitude
  }
}

`;
