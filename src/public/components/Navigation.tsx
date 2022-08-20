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
    <Stack direction="column">
      <Link href="/">
        <IconButton
          aria-label="home"
          icon={<Image src={home} boxSize="100px" objectFit="cover" />}
        />
      </Link>

      <Link href="/activities">
        <IconButton aria-label="activities" icon={<Img src={activity} />} />
      </Link>

      <Link href="/outfit">
        <IconButton aria-label="outfit" icon={<Img src={outfit} />} />
      </Link>

      <Link href="/upcoming">
        <IconButton aria-label="upcoming" icon={<Img src={calendar2} />} />
      </Link>
    </Stack>
  );
};
