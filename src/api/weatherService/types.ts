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