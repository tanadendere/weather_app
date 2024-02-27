import { ForecastRoot } from "../models/forecast";

export function getWeatherData(
  longitude: number,
  latitude: number
): Promise<ForecastRoot> {
  return fetch(
    `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
  ).then((response) => response.json());
}
