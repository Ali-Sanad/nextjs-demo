'use client'

// Error boundaries must be Client Components
export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <main className='flex h-full flex-col items-center justify-center gap-2'>
          <h2 className='text-xl font-semibold'>Something went wrong!</h2>
          <button
            className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
            onClick={() => reset()}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  )
}
