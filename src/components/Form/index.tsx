import React from 'react'

import { useForm, ValidationError } from '@formspree/react'

import './index.scss'

export interface IFormProps {
  onClick: () => void
}

export default function Form(props: IFormProps) {
  const [state, handleSubmit] = useForm('mgerppra')

  return (
    <div className='Form'>
      <div className='FormTitle'>
        <h1>Gravează-ți numele pe experimentul ECRIDA</h1>
      </div>
      {!state.succeeded && <h2>Avem nevoie de următoarele date de contact:</h2>}
      {!state.succeeded ?(
      <form onSubmit={handleSubmit}>
        <div className='FormItem'>
          <label htmlFor='firstName'>Prenume</label>
          <input id='firstName' type='firstName' name='firstName' autoComplete='off' />
          <ValidationError prefix='FirstName' field='firstName' errors={state.errors} />
        </div>
        
        <div className='FormItem'>
          <label htmlFor='lastName'>Nume</label>
          <input id='lastName' type='lastName' name='lastName' autoComplete='off' />
          <ValidationError prefix='LastName' field='lastName' errors={state.errors} />
        </div>

        <div className='FormItem'>
          <label htmlFor='telephone'>Număr de telefon</label>
          <input id='telephone' type='telephone' name='telephone' autoComplete='off' />
          <ValidationError prefix='Telephone' field='telephone' errors={state.errors} />
        </div>

        <div className='FormItem'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' autoComplete='off' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>

        <div className='FormItem'>
          <label htmlFor='alternate'>Text Alternativ</label>
          <input id='alternate' type='alternate' name='alternate' autoComplete='off' />
          <ValidationError prefix='alternate' field='alternate' errors={state.errors} />
        </div>

        <button type='submit' disabled={state.submitting} className='Button'>
          Mai departe
        </button>
      </form>
      ) : <h2>Mulțumim! Vei fi contectat în cel mai scurt timp.</h2>}
    </div>
  )
}
