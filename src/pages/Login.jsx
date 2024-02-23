import React from 'react';
import {FormInput, SubmitBtn} from '../components'
import { Form, Link } from 'react-router-dom';

const Login = () => {
  
  return (
    <section className='h-screen grid place-items-center'>
      <Form method='post'  className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'>
        <h4 className='text-3xl text-center font-bold '>Login</h4>
        <FormInput type="email" label="email" name="identifier" defaultValue="example@gmail.com" />
        <FormInput type="password" label="password" name="password" defaultValue="secret" />
        <div className="mt-4">
          <SubmitBtn text="Login" />
          
        </div>
        <button className='btn btn-secondary btn-block'>guest user</button>
          <p>Not a member yet? 
            <Link to="/register" className='ml-2 link link-hover link-primary capitalize' >register</Link>
          </p>
        
        
      </Form>
    </section>
  );
};

export default Login;
