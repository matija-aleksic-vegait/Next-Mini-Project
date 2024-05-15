interface ParagraphProps {
  label: string;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <p className={className} {...props}>
      {label}
    </p>
  );
};
