import type { UseQueryOptions } from "@tanstack/react-query";

export const queryOptionsMutator = <
  TData = unknown,
  TError = void,
  TQueryFnData = unknown,
>(
  queryOptions: Partial<UseQueryOptions<TQueryFnData, TError, TData>>,
): Partial<UseQueryOptions<TQueryFnData, TError, TData>> => {
  return {
    ...queryOptions,
    queryKey: ["search", ...(queryOptions.queryKey || [])],
  };
};
