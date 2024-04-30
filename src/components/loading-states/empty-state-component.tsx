function EmptyStateComponent({ entitiesName }: { entitiesName: string }) {
  return <p className="loading-status">No {entitiesName} found...</p>;
}

export default EmptyStateComponent;
