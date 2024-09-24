import React from 'react';
import banner from '../../public/banner.jpg';

function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-10 md:mt-3'>
        <div className='w-full md:w-1/2 mt-12 md:mt-30 md:mr-10'>
          <h1 className='text-3xl font-bold'>Welcome to our!!</h1>

          <h1 className='text-3xl font-bold'>
            MENTAL HEALTH COUNSELING CENTER
          </h1>

          <div className='space-y-6'>
            <h1>
              <span className='text-pink-500'>
                Unlock Inner Peace with Expert Guidance.
              </span>
            </h1>
            <p>
              We believe that mental health is just as important as physical
              health, and everyone deserves the support they need to thrive.{' '}
              <span className='text-yellow-400'>
                Whether you're feeling overwhelmed, anxious, or simply seeking
                guidance, our dedicated team of counselors is here to help you
                on your journey towards healing and growth.
              </span>{' '}
              No matter where you are in life, we're here to listen, guide, and
              support you every step of the way. Take the first step towards a
              healthier, happier you. Reach out today and discover the path to
              well-being.
            </p>
            <h1>
              <span className='text-red-700'>We’re here for you – always.</span>
            </h1>

            <label className='input input-bordered flex items-center gap-2'>
              Email
              <input
                type='text'
                className='grow'
                placeholder='Write your e-mail to start !!!..'
              />
            </label>
          </div>
          <button className='btn btn-active mt-6 btn-secondary hover:bg-transparent hover:text-white duration-300'>GO</button>
        </div>

        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <img
            src={banner}
            className='w-full h-auto max-w-md object-cover rounded-lg shadow-lg'
            alt='Mental Health Counseling'
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
