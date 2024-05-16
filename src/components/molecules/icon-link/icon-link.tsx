import { Icon, altType } from "@/components/atoms/icon/icon";
import { Link } from "@/components/atoms/link/link";

interface IconLinkProps {
  src: string;
  alt: altType;
  className?: string;
  onClick?: () => void;
}

export const IconLink: React.FC<IconLinkProps> = ({
  src,
  alt,
  className,
  onClick,
  ...props
}) => {
  return (
    <Link className={className} onClick={onClick} {...props}>
      <Icon src={src} alt={alt} />
    </Link>
  );
};
