import { QueryClient } from "@tanstack/react-query";

interface ErrorWithStatus extends Error {
  status?: number;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const err = error as ErrorWithStatus;
        if (err?.status && String(err.status).startsWith("4")) return false;
        return failureCount < 2;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
    },
  },
});
