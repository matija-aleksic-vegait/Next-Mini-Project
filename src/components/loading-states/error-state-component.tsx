function ErrorStateComponent({ errorMessage }: { errorMessage: string }) {
  return <p className="loading-status text-red"> {errorMessage} </p>;
}

export default ErrorStateComponent;
