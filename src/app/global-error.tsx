"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <h1 className="text-2xl font-bold text-destructive">
            Something went wrong
          </h1>

          <p className="text-muted-foreground">
            An unexpected error occurred. Please try again.
          </p>

          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
          >
            Try again
          </button>

          {process.env.NODE_ENV === "development" && (
            <pre className="mt-4 text-left text-xs bg-muted p-3 rounded overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          )}
        </div>
      </body>
    </html>
  );
}
