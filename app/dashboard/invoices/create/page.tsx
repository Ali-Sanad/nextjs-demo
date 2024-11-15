import Form from '@/app/ui/invoices/create-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomers } from '@/app/lib/data'
import type { Metadata } from 'next'
import { ROUTE_PATHS } from '@/app/lib/constants'

export const metadata: Metadata = {
  title: 'Create Invoice'
}

export default async function CreateInvoicePage() {
  const customers = await fetchCustomers()

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: ROUTE_PATHS.invoices },
          {
            label: 'Create Invoice',
            href: `${ROUTE_PATHS.invoices}/create`,
            active: true
          }
        ]}
      />

      <Form customers={customers} />
    </main>
  )
}
