import { gql, useQuery } from "@apollo/client";
import { GetWeatherDetailsByIdResponse } from "./types";

const DEFAULT_WEATHER_DETAILS = {
  name: "Ciudad",
  weather: {
    summary: {
      description: "",
      icon: "",
    },
    temperature: {
      actual: 0.0,
      min: 0.0,
      max: 0.0,
    },
    wind: {
      speed: 0,
    },
    clouds: {
      all: 0,
      humidity: 0,
    },
  },
};

export const useGetWeatherDetailsById = (
  id: string,
  config = { units: "metric", lang: "sp" },
): GetWeatherDetailsByIdResponse => {
  const GET_WEATHER_DETAILS_BY_ID = gql`
    query GetWeatherById($id: [String!], $config: ConfigInput) {
      getCityById(id: $id, config: $config) {
        name
        weather {
          summary {
            description
            icon
          }
          temperature {
            actual
            min
            max
          }
          wind {
            speed
          }
          clouds {
            all
            humidity
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(
    GET_WEATHER_DETAILS_BY_ID,
    { variables: { id: [id], config } },
  );

  return {
    loading,
    weatherDetails: data ? data.getCityById[0] : DEFAULT_WEATHER_DETAILS,
    error,
  };
};