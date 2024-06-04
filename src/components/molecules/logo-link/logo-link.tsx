import { Link, Logo } from '@atoms';

interface LogoLinkProps {
  src: string;
  alt: string;
  href: string;
  height: number;
  width: number;
  className?: string;
}

export const LogoLink: React.FC<LogoLinkProps> = ({
  src,
  alt,
  href,
  height,
  width,
  ...props
}) => {
  return (
    <Link href={href} {...props}>
      <Logo src={src} alt={alt} height={height} width={width} />
    </Link>
  );
};
