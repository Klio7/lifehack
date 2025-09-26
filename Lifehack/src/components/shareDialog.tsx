import { Button, Dialog, HStack, Link, Icon } from "@chakra-ui/react";
import { FaVk, FaInstagram, FaFacebook, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import CardButton from "./cardButton";

const shareLinks = {
  vk: (url, title) =>
    `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  instagram: (url) => `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
  facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  whatsapp: (url, title) => `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
  telegram: (url, title) =>
    `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
};

export function ShareDialog() {
  const url = window.location.href;
  const title = document.title;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CardButton bg="transparent" variant="surface" buttonTitle="Share" />
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>Поделиться</Dialog.Header>
        <Dialog.Body>
          <HStack spacing={6} justify="center" mt={4} mb={4}>
            <Link href={shareLinks.vk(url, title)} isExternal>
              <Icon as={FaVk} boxSize={8} />
            </Link>
            <Link href={shareLinks.instagram(url)} isExternal>
              <Icon as={FaInstagram} boxSize={8} />
            </Link>
            <Link href={shareLinks.facebook(url)} isExternal>
              <Icon as={FaFacebook} boxSize={8} />
            </Link>
            <Link href={shareLinks.whatsapp(url, title)} isExternal>
              <Icon as={FaWhatsapp} boxSize={8} />
            </Link>
            <Link href={shareLinks.telegram(url, title)} isExternal>
              <Icon as={FaTelegramPlane} boxSize={8} />
            </Link>
          </HStack>
        </Dialog.Body>
        <Dialog.Footer>
          <Button>Закрыть</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
