import React from 'react'

import { useForm, ValidationError } from '@formspree/react'

import './index.scss'

export default function Form() {
  const [state, handleSubmit] = useForm('mgerppra')

  return (
    <div className='Form'>
      {!state.succeeded && <h2>We need the following contact data</h2>}
      {!state.succeeded ? (
        <form onSubmit={handleSubmit}>
          <div className='FormItem'>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              type='firstName'
              name='firstName'
              autoComplete='off'
            />
            <ValidationError
              prefix='FirstName'
              field='firstName'
              errors={state.errors}
            />
          </div>

          <div className='FormItem'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              type='lastName'
              name='lastName'
              autoComplete='off'
            />
            <ValidationError
              prefix='LastName'
              field='lastName'
              errors={state.errors}
            />
          </div>

          <div className='FormItem'>
            <label htmlFor='telephone'>Phone Number</label>
            <input
              id='telephone'
              type='telephone'
              name='telephone'
              autoComplete='off'
            />
            <ValidationError
              prefix='Telephone'
              field='telephone'
              errors={state.errors}
            />
          </div>

          <div className='FormItem'>
            <label htmlFor='email'>Email Address</label>
            <input id='email' type='email' name='email' autoComplete='off' />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>

          <div className='FormItem'>
            <label htmlFor='email'>Tier</label>
            <select id='tier' name='tier'>
              <option value='tier1'>Tier 1</option>
              <option value='tier2'>Tier 2</option>
              <option value='tier3'>Tier 3</option>
            </select>
            <ValidationError prefix='Tier' field='tier' errors={state.errors} />
          </div>

          <div className='FormItem'>
            <label htmlFor='alternate'>Alternative Text</label>
            <input
              id='alternate'
              type='alternate'
              name='alternate'
              autoComplete='off'
            />
            <ValidationError
              prefix='alternate'
              field='alternate'
              errors={state.errors}
            />
          </div>

          <button type='submit' disabled={state.submitting} className='Button'>
            Send
          </button>
        </form>
      ) : (
        <h2>Mulțumim! Vei fi contectat în cel mai scurt timp.</h2>
      )}
    </div>
  )
}
