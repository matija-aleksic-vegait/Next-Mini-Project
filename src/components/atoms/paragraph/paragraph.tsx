interface ParagraphProps {
  label: string;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ label, className }) => {
  return <p className={className}>{label}</p>;
};
