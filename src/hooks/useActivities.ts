import { useEffect, useState, useCallback } from "react";
import { useWeather } from "./api/useWeather";

export interface WarningData {
  title: string;
  blurb: string;
  text?: string;
  icons: string[];
  location?: string;
}

export const useActivities = () => {
  const { isDay, todaysForecast: forecast } = useWeather();

  const generalActivities = [
    {
      title: "Tone and limber",
      blurb: "Time to get zen. Stretch it out with your inner yogi",
      text: "",
      icons: [
        "/images/pilates.png",
        "/images/yoga.png",
        "/images/yoga-pose.png",
      ],
    },
    {
      title: "Get Inspired",
      blurb: "Travel to a far away world or learn something new",
      text: "The world (and beyond) is your oyster when you hve a book in hand. Travel time and space or live like the whores of yore.",
      icons: [
        "/images/history-book.png",
        "/images/book-shop.png",
        "/images/romance.png",
      ],
    },
    {
      title: "Deep Soak",
      blurb: "Relax with a steam, refresh with a swim",
      text: "",
      icons: [
        "/images/whirlpool.png",
        "/images/towel.png",
        "/images/woman.png",
      ],
    },
  ];

  const [activities, setActivities] =
    useState<WarningData[]>(generalActivities);

  const fetchActivities = useCallback(() => {
    if (forecast) {
      const highlights = [
        ...new Set(forecast.map((report) => report.weather[0].main)),
      ].filter(Boolean);

      isDay &&
        setActivities((prevActivities) => [
          ...prevActivities,
          {
            title: "Green Thumbelina",
            blurb: "Get in touch with your inner Horticulturist",
            text: "",
            icons: [
              "/images/gardening.png",
              "/images/gardening2.png",
              "/images/gardening3.png",
            ],
          },
        ]);
    }
  }, [forecast, setActivities]);

  useEffect(() => {
    fetchActivities();
  }, [forecast, fetchActivities]);

  return { activities };
};
