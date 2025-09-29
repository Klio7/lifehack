import { Portal, Dialog, HStack, Link, Icon } from "@chakra-ui/react";
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
    <Dialog.Root size="sm" placement="center">
      <Dialog.Trigger asChild>
        <CardButton bg="transparent" variant="surface" buttonTitle="Share" />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body bg="rgb(250, 247, 242)">
              <HStack justify="center" mt={4} mb={4} gap="1.5rem">
                <Link href={shareLinks.vk(url, title)} isExternal>
                  <Icon as={FaVk} boxSize={10} color="#27272a" />
                </Link>
                <Link href={shareLinks.instagram(url)} isExternal>
                  <Icon as={FaInstagram} boxSize={10} color="#27272a" />
                </Link>
                <Link href={shareLinks.facebook(url)} isExternal>
                  <Icon as={FaFacebook} boxSize={10} color="#27272a" />
                </Link>
                <Link href={shareLinks.whatsapp(url, title)} isExternal>
                  <Icon as={FaWhatsapp} boxSize={10} color="#27272a" />
                </Link>
                <Link href={shareLinks.telegram(url, title)} isExternal>
                  <Icon as={FaTelegramPlane} boxSize={10} color="#27272a" />
                </Link>
              </HStack>
            </Dialog.Body>
            <Dialog.Footer justifyContent="center" bg="rgb(250, 247, 242)">
              <CardButton bg="transparent" variant="surface" buttonTitle="Close" />
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
