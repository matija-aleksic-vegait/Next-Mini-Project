import { Icon, altType } from "@/components/atoms/icon/icon";
import { Link } from "@/components/atoms/link/link";

interface IconLinkProps {
  src: string;
  alt: altType;
  ariaLabel?: string;
  className?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
  src,
  alt,
  ariaLabel,
  className,
}) => {
  return (
    <Link className={className} ariaLabel={ariaLabel}>
      <Icon src={src} alt={alt} />
    </Link>
  );
};
