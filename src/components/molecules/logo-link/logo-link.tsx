import { Link, Logo } from "@atoms";

interface LogoLinkProps {
  src: string;
  alt: string;
  href: string;
  label?: string;
  className?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({
  src,
  alt,
  href,
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      <Logo src={src} alt={alt}></Logo>
    </Link>
  );
};
