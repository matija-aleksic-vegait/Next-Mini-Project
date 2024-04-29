"use client";

function ErrorBoundaryTable({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button onClick={reset}> PROJECT TABLE : Try again </button>
    </div>
  );
}

export default ErrorBoundaryTable;
