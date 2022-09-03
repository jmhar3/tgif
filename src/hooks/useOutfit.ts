import { useMemo } from "react";
import { WeatherStats } from "../pages";

export interface OutfitProps {
 weatherStats: WeatherStats
 activityLevel: string
}

export interface OutfitData {
  icons: string[];
}

export const useOutfit = (props: OutfitProps) => {
 const {weatherStats, activityLevel} = props

  const outfitRecommendation = useMemo(() => {

  }, [weatherStats, activityLevel]);

  return { outfitRecommendation };
};
