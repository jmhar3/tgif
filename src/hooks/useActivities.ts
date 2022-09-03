import { useEffect, useState, useCallback } from "react";
import { useWeather } from "./api/useWeather";

export interface ActivityData {
  index: number;
  title: string;
  blurb: string;
  text?: string;
  icons: string[];
  location?: string;
}

export const useActivities = () => {
  const { isDay, todaysForecast: forecast, weatherStats } = useWeather();

  const generalActivities = [
    {
      index: 1,
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
      index: 2,
      title: "Escape this world",
      blurb: "Travel to a far away world or learn something new",
      text: "The world (and beyond) is your oyster when you hve a book in hand. Travel time and space or live like the whores of yore.",
      icons: [
        "/images/history-book.png",
        "/images/book-shop.png",
        "/images/romance.png",
      ],
    },
    {
      index: 3,
      title: "Deep Soak",
      blurb: "Relax with a steam, refresh with a swim",
      text: "",
      icons: [
        "/images/whirlpool.png",
        "/images/towel.png",
        "/images/woman.png",
      ],
    },
    {
      index: 6,
      title: "Ready Player One",
      blurb: "Start your engines... 3. 2. 1. GO!",
      text: "",
      icons: [
        "/images/joystick.png",
        "/images/game-boy.png",
        "/images/game-pad.png",
      ],
    },
    {
      index: 7,
      title: "Get puzzling",
      blurb: "Put your thinking cap on",
      text: "",
      icons: [
        "/images/puzzle.png",
        "/images/crossword.png",
        "/images/heart-puzzle.png",
      ],
    },
    {
      index: 8,
      title: "Play a tune",
      blurb: "Become your very own virtuoso",
      text: "",
      icons: [
       "/images/keyboard.png",
        "/images/piano.png",
        "/images/saxophone.png",
      ],
    },
    {
      index: 9,
      title: "Get inspired",
      blurb: "Make a secret art just for you",
      text: "",
      icons: [
       "/images/paint-tube.png",
        "/images/colored-pencils.png",
        "/images/palette.png",
      ],
    },
    {
      index: 10,
      title: "Be a builder",
      blurb: "Become a lego master... or a Ghostbuster... or a Jedi!",
      text: "",
      icons: [
       "/images/toys.png",
        "/images/blocks.png",
        "/images/lego.png",
      ],
    },
  ];

  const [activities, setActivities] =
    useState<ActivityData[]>(generalActivities);

  const fetchActivities = useCallback(() => {
    if (forecast) {
      const highlights = [
        ...new Set(forecast.map((report) => report.weather[0].main)),
      ].filter(Boolean);

      isDay &&
        setActivities((prevActivities) => [
          ...prevActivities,
          {
            index: 4,
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

      isDay &&
        !weatherStats.isRainy &&
        setActivities((prevActivities) => [
          ...prevActivities,
          {
            index: 5,
            image: "/images/gardens.jpg",
            title: "Soak up some sun",
            blurb: "Go for a stroll and find somewhere nice to read",
            icons: [
              "/images/sun.png",
              "/images/walking-the-dog.png",
              "/images/open-book.png",
            ],
          },
        ]);
    }
  }, [forecast, setActivities]);

  useEffect(() => {
    activities === generalActivities && fetchActivities();
  }, [forecast, fetchActivities]);

  return { activities };
};
