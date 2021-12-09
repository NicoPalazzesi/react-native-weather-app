export type Weather = {
  id: string;
  name: string;
  weather: {
    summary: {
      icon: string;
    },
    temperature: {
      actual: number;
    },
  };
};

export type WeatherDetails = {
  name: string;
  weather: {
    summary: {
      description: string;
      icon: string;
    },
    temperature: {
      actual: number;
      min: number;
      max: number;
    },
    wind: {
      speed: number;
    },
    clouds: {
      all: number;
      humidity: number;
    },
  },
};

export type GetWeatherByIdResponse = {
  loading: boolean;
  weather: Weather[] | undefined;
  error: object | undefined;
};

export type GetWeatherDetailsByIdResponse = {
  loading: boolean;
  weatherDetails: WeatherDetails;
  error: object | undefined;
};