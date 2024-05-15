import Link from "next/link";

interface RouterLinkProps {
  href: string;
  label: string;
  className?: string;
}

export const RouterLink: React.FC<RouterLinkProps> = ({
  href,
  label,
  className,
  ...props
}) => {
  return (
    <Link href={href} className={className} {...props}>
      {label}
    </Link>
  );
};
