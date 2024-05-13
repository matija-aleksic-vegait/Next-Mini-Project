import { Link } from "@/components/atoms/link/link";
import { Logo, altType } from "@/components/atoms/logo/logo";

interface LogoLinkProps {
  src: string;
  alt: altType;

  href: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({
  src,
  alt,
  href,
  ariaLabel,
}) => {
  return (
    <Link href={href} ariaLabel={ariaLabel}>
      <Logo src={src} alt={alt}></Logo>
    </Link>
  );
};
