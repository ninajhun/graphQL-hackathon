import { gql } from "graphql-tag";

export const GET_WEATHER_QUERY = gql`
  query getWeather($ip: String!) {
      location(ip: $ip) {
        city
        weather {
          temp
          description
        }
      }
    }
`;
