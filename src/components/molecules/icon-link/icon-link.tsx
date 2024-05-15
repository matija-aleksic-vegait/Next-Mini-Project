import { Icon, altType } from "@/components/atoms/icon/icon";
import { Link } from "@/components/atoms/link/link";

interface IconLinkProps {
  src: string;
  alt: altType;
  className?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  return (
    <Link className={className} {...props}>
      <Icon src={src} alt={alt} />
    </Link>
  );
};
