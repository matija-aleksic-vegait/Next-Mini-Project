import { Link } from "@/components/atoms/link/link";
import { Logo, altType } from "@/components/atoms/logo/logo";

interface LogoLinkProps {
  src: string;
  alt: altType;
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
