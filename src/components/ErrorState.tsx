

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export const ErrorState = (props: ErrorStateProps) => {

  return (
    <div>

      <h2>Error</h2>

      <p>{props.message}</p>

      <button onClick={props.onRetry}>
        Retry
      </button>

    </div>
  );
};