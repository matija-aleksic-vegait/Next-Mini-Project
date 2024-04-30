function EmptyStateComponent({ entitiesName }: { entitiesName: string }) {
  return (
    <p className="loading-status text-align-center">
      No {entitiesName} found...
    </p>
  );
}

export default EmptyStateComponent;
