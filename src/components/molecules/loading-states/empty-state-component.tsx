import { Paragraph } from "@/components/atoms/paragraph/paragraph";

function EmptyStateComponent({ entitiesName }: { entitiesName: string }) {
  return (
    <Paragraph
      className="loading-status text-align-center"
      label={`No ${entitiesName} found...`}
    />
  );
}

export default EmptyStateComponent;
