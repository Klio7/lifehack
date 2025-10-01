import { Portal, Dialog, HStack, Link, Icon } from "@chakra-ui/react";
import { FaVk, FaInstagram, FaFacebook, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import CardButton from "./cardButton";

type ShareLinkFn = (url: string, title?: string) => string;

const shareLinks: {
  vk: ShareLinkFn;
  instagram: (url: string) => string;
  facebook: (url: string) => string;
  whatsapp: ShareLinkFn;
  telegram: ShareLinkFn;
} = {
  vk: (url, title) =>
    `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(
      title ?? ""
    )}`,
  instagram: (url) => `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
  facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  whatsapp: (url, title) => `https://wa.me/?text=${encodeURIComponent((title ?? "") + " " + url)}`,
  telegram: (url, title) =>
    `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title ?? "")}`,
};

export function ShareDialog() {
  const url = window.location.href;
  const title = document.title;

  return (
    <Dialog.Root size="sm" placement="center">
      <Dialog.Trigger asChild>
        <CardButton bg="transparent" variant="surface" buttonTitle="Поделиться" />
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body bg="rgb(250, 247, 242)">
              <Dialog.Header fontSize="24px" fontWeight="400" justifyContent="center">
                Выберите соцсеть
              </Dialog.Header>
              <HStack justify="center" mt={4} mb={4} gap="1.5rem">
                <Link href={shareLinks.vk(url, title)} target="_blank" rel="noopener noreferrer">
                  <Icon as={FaVk} boxSize={10} color="#27272a" />
                </Link>
                <Link href={shareLinks.instagram(url)} target="_blank" rel="noopener noreferrer">
                  <Icon as={FaInstagram} boxSize={10} color="#27272a" />
                </Link>
                <Link href={shareLinks.facebook(url)} target="_blank" rel="noopener noreferrer">
                  <Icon as={FaFacebook} boxSize={10} color="#27272a" />
                </Link>
                <Link
                  href={shareLinks.whatsapp(url, title)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaWhatsapp} boxSize={10} color="#27272a" />
                </Link>
                <Link
                  href={shareLinks.telegram(url, title)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaTelegramPlane} boxSize={10} color="#27272a" />
                </Link>
              </HStack>
            </Dialog.Body>
            <Dialog.Footer justifyContent="center" bg="rgb(250, 247, 242)">
              <Dialog.CloseTrigger asChild>
                <CardButton bg="transparent" variant="surface" buttonTitle="Закрыть" />
              </Dialog.CloseTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
