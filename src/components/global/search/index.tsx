import { useSearch } from '@/hooks/useSearch'
import React from 'react'

type Props = {
    workspaceId: string
}

const Search = ({ workspaceId}: Props) => {
  const { query, onSearchQuery, isFetching, onUsers } = useSearch(
    'get-users',
    'USERS'
  )

  const {} = useMutationData()

  return (
    <div>Search</div>
  )
}

export default Search