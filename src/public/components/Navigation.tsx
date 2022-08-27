import Link from "next/link";
import { Stack, IconButton, Img, Image } from "@chakra-ui/react";

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
          icon={<Img maxW="9" src="/images/home.png" />}
        />
      </Link>

      <Link href="/activities">
        <IconButton
          backgroundColor="neutral.light"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.boldSheer" }}
          aria-label="activities"
          icon={<Img maxW="9" src="/images/bird-watching.png" />}
        />
      </Link>

      <Link href="/outfit">
        <IconButton
          backgroundColor="neutral.light"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.boldSheer" }}
          aria-label="outfit"
          icon={<Img maxW="9" src="/images/clothes.png" />}
        />
      </Link>

      <Link href="/upcoming">
        <IconButton
          backgroundColor="neutral.light"
          transition="all .3s"
          _hover={{ backgroundColor: "neutral.boldSheer" }}
          aria-label="upcoming"
          icon={<Img maxW="9" src="/images/calendar_2.png" />}
        />
      </Link>
    </Stack>
  );
};
