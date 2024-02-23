import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({text}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button type='submit' className='items-center  btn btn-primary btn-block' disabled={isSubmitting}>
      {
        isSubmitting ?
        <>
        <span className='loading loading-spinner'></span>
        Sending
        </> : text || "submit"
      }
    
    </button>
  )
}

export default SubmitBtn