import { Icon, Link } from '@atoms';

interface IconLinkProps {
  src: string;
  alt: string;
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
