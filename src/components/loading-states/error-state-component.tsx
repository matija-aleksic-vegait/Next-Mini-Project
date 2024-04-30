function ErrorStateComponent({ errorMessage }: { errorMessage: string }) {
  return (
    <p className="loading-status text-red text-align-center">
      {" "}
      {errorMessage}{" "}
    </p>
  );
}

export default ErrorStateComponent;
