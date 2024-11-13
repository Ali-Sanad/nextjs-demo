import { fetchFilteredCustomers } from '@/app/lib/data'
import CustomersTable from '@/app/ui/customers/table'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customers'
}

type Props = {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}

export default async function CustomersPage(props: Props) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''

  const customers = await fetchFilteredCustomers(query)

  return <CustomersTable customers={customers} />
}
