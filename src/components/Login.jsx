import React from 'react';
import { useForm } from 'react-hook-form';
import data from './data.json';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
  const claim = data.find(item => item.claimID === formData.claimID);

  if (claim) {
    // alert('login successful');
    navigate(`/home/${formData.claimID}`); 
  } else {
    alert('invalid claim ID');
  }
};

  return (
    <div className='flex flex-col text-white self-center py-10 mt-40 mb-10 bg-blue-500 w-[50%] rounded-lg shadow-lg'>
      <h1 className='font-bold text-4xl text-center'>Claim Portal</h1>
      <p className='mt-10 text-xl text-center'>
        Enter claim ID below to check your claim status
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className='flex mt-5 gap-5 justify-center '>
        <input
          className='border border-white rounded-lg p-2 w-[60%]'
          type='text'
          placeholder='Claim ID'
          {...register('claimID', { required: 'Claim ID is required' })}
        />

       

        <button
          className='bg-blue-700 hover:bg-blue-800 px-5 rounded-lg font-semibold'
          type='submit'
        >
          View Claim
        </button>
      </form>
       {errors.claimID && <span className='bg-red-500 w-[60%] ml-15 mt-5 py-2 text-sm'>{errors.claimID.message}</span>}
    </div>
  );
}

export default Login;
