import React from 'react'
import { Form, Link } from 'react-router-dom'
import { FormInput, SubmitBtn } from '../components'

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-7  bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-3xl text-center font-bold'>Register</h4>
        <FormInput type="text" label={"username"} name="username" />
        <FormInput type="email" label={"email"} name="email" />
        <FormInput type="password" label={"password"} name="password" />
        <div className='mt-4'>
          <SubmitBtn text="Register" />
        </div>
        <p>Already a member ? 
            <Link to="/login" className='ml-2 link link-hover link-primary capitalize' >login</Link>
          </p>

      </Form>
    </section>
  )
}

export default Register