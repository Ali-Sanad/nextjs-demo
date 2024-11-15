'use client'

import { lusitana } from '@/app/ui/fonts'
import {
  AtSymbolIcon,
  KeyIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Button } from './button'
import { useActionState } from 'react'
import { register, type RegisterFormState } from '@/app/lib/actions'
import FormFieldError from '@/app/ui/form-field-error'
import Link from 'next/link'
import { ROUTE_PATHS } from '@/app/lib/constants'

export default function LoginForm() {
  const initialState: RegisterFormState = { message: null, errors: {} }

  const [state, formAction, isPending] = useActionState(
    register,
    initialState
  )

  return (
    <form action={formAction} className='space-y-3'>
      <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please register.
        </h1>

        <div className='w-full'>
          <div>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='name'
            >
              Name
            </label>

            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='name'
                type='text'
                name='name'
                placeholder='Enter your name'
                aria-describedby='name-error'
              />

              <UserCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>

            <FormFieldError id='name-error' errors={state?.errors?.name} />
          </div>

          <div>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='email'
            >
              Email
            </label>

            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='email'
                type='email'
                name='email'
                placeholder='Enter your email address'
                aria-describedby='email-error'
              />

              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>

            <FormFieldError
              id='email-error'
              errors={state?.errors?.email}
            />
          </div>

          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='password'
            >
              Password
            </label>

            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                aria-describedby='password-error'
              />

              <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>

            <FormFieldError
              id='password-error'
              errors={state?.errors?.password}
              message={state?.message}
            />
          </div>
        </div>

        <Button className='mt-4 w-full' aria-disabled={isPending}>
          Register{' '}
          <ArrowRightIcon className='ml-auto h-5 w-5 text-gray-50' />
        </Button>

        <div className='mt-4 flex items-center gap-1'>
          <p>Already have an account ?</p>

          <Link href={ROUTE_PATHS.login} className='text-blue-500'>
            Login
          </Link>
        </div>
      </div>
    </form>
  )
}
