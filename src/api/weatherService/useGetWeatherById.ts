import { gql, useQuery } from "@apollo/client";

export const useGetWeatherById = (
  id: string[],
  config = { units: "metric", lang: "sp" },
) => {
  const GET_WEATHER_BY_ID = gql`
    query GetWeatherById($id: [String!], $config: ConfigInput) {
      getCityById(id: $id, config: $config) {
        id
        name
        weather {
          summary {
            icon
          }
          temperature {
            actual
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_WEATHER_BY_ID,
    { variables: { id, config } },
  );

  return {
    loading,
    weather: data?.getCityById,
    error,
  };
};