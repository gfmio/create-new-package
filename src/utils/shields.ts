const link = (href: string, text: string, title?: string) =>
  title ? `[${text}](${href} "${title}")` : `[${text}](${href})`;
const image = (src: string, alt: string, title?: string) =>
  title ? `![${alt}](${src} "${title}")` : `[${alt}](${src})`;

export interface Shield {
  href?: string;
  src: string;
  alt: string;
  title?: string;
}

const shield = ({ src, alt, href, title = alt }: Shield) => {
  const img = image(src, alt, title);
  return href ? link(href, img, title) : img;
};

export default shield;
