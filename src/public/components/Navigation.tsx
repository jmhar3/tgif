import Link from "next/link";
import { Stack, IconButton, Img, Image } from "@chakra-ui/react";

import folder from "../images/folder.png";
import heart from "../images/heart.png";
import home from "../images/home.png";
import home2 from "../images/home_2.png";
import activity from "../images/bird-watching.png";
import outfit from "../images/clothes.png";
import calendar from "../images/calendar.png";
import calendar2 from "../images/calendar_2.png";

export const Navigation = () => {
  return (
    <Stack
      position="fixed"
      top="0"
      left="0"
      direction="column"
      p="5"
      backgroundColor="neutral.sheer"
      height="100%"
    >
      <Link href="/">
        <IconButton
          backgroundColor="neutral.light"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.boldSheer" }}
          aria-label="home"
          icon={<Img src={home} />}
        />
      </Link>

      <Link href="/activities">
        <IconButton
          backgroundColor="neutral.light"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.boldSheer" }}
          aria-label="activities"
          icon={<Img src={activity} />}
        />
      </Link>

      <Link href="/outfit">
        <IconButton
          backgroundColor="neutral.light"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.boldSheer" }}
          aria-label="outfit"
          icon={<Img src={outfit} />}
        />
      </Link>

      <Link href="/upcoming">
        <IconButton
          backgroundColor="neutral.light"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.boldSheer" }}
          aria-label="upcoming"
          icon={<Img src={calendar2} />}
        />
      </Link>
    </Stack>
  );
};
