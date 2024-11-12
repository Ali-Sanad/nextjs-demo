'use client'

type Props = {
  id: string
  errors?: string[]
  message?: string | null
}

export default function FormFieldError({ id, errors, message }: Props) {
  return (
    <div id={id} aria-live='polite' aria-atomic='true'>
      {errors?.map((error: string) => (
        <p className='mt-2 text-sm text-red-500' key={error}>
          {error}
        </p>
      ))}

      {message && <p className='mt-2 text-sm text-red-500'>{message}</p>}
    </div>
  )
}
