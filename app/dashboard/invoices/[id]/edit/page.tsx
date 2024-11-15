import Form from '@/app/ui/invoices/edit-form'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ROUTE_PATHS } from '@/app/lib/constants'

export const metadata: Metadata = {
  title: 'Edit Invoice'
}

type Props = {
  params: Promise<{ id: string }>
}

export default async function EditInvoicePage(props: Props) {
  const params = await props.params
  const invoiceId = params.id

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(invoiceId),
    fetchCustomers()
  ])

  if (!invoice) {
    notFound()
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: ROUTE_PATHS.invoices },
          {
            label: 'Edit Invoice',
            href: `${ROUTE_PATHS.invoices}/${invoiceId}/edit`,
            active: true
          }
        ]}
      />

      <Form invoice={invoice} customers={customers} />
    </main>
  )
}
