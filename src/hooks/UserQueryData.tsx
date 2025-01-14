import React from 'react'
import { QueryKey, QueryFunction, useQuery } from '@tanstack/react-query'

export const userQueryData = (
queryKey: QueryKey, queryFn: QueryFunction, p0?: boolean,
) => {
    const { data, isLoading, isFetched, refetch, isFetching } = useQuery({queryKey, queryFn})

    return { data, isLoading, refetch, isFetched, isFetching}
}