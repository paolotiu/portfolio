import axios from 'axios';
import { FiLoader } from 'react-icons/fi';
import { HiXCircle, HiCheckCircle } from 'react-icons/hi';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import InputWithLabel from './InputWithLabel';

const useSubscribe = () => {
  return useMutation(({ email, firstName }: FormValues) =>
    axios.post<{ error: string }>('/api/subscribe', { email, firstName })
  );
};

interface FormValues {
  firstName: string;
  email: string;
}
const Subscribe = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('Error!');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subscribe = useSubscribe();

  const onSubmit = async ({ email, firstName }: FormValues) => {
    setIsSubmitting(true);
    try {
      await subscribe.mutateAsync({ email, firstName });
      setStatus('success');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.error);
        setStatus('error');
      }
    }

    setIsSubmitting(false);
  };

  const messages: Record<typeof status, React.ReactNode> = {
    error: (
      <p className="flex items-center text-sm font-bold text-red-600 dark:text-red-500">
        <HiXCircle className="inline mr-1" />
        {errorMessage}
      </p>
    ),
    success: (
      <p className="flex items-center text-sm font-bold text-green-700 dark:text-green-400">
        <HiCheckCircle className="inline mr-1" />
        Thank you for subscribing!
      </p>
    ),
    idle: (
      <p className="text-xs text-gray-700 dark:text-gray-300">No spam. Ever.</p>
    ),
  };
  return (
    <div className="pt-16 ">
      <div className="p-6 bg-gray-100 rounded dark:bg-gray-800">
        <h3 className="text-xl font-bold">Subscribe to the newsletter</h3>
        <p className="pt-1 text-sm text-gray-700 dark:text-gray-300">
          Get emails from me about web development, tech, and cool stuff.
        </p>

        <form className="pt-4 " onSubmit={handleSubmit(onSubmit)}>
          <div className="grid  md:grid-cols-[2fr,3fr,1fr] gap-5 max-w-3xl">
            <InputWithLabel
              aria-label="First name for newsletter"
              autoComplete="first-name"
              placeholder="Paolo"
              required
              label="First Name"
              {...register('firstName', { required: true })}
            />

            <InputWithLabel
              aria-label="Email for newsletter"
              autoComplete="email"
              type="email"
              placeholder="you@email.com"
              label="Email"
              required
              {...register('email', { required: true })}
            />

            <button
              type="submit"
              className="px-4 mt-2 md:mt-[22px] py-2 font-bold text-white bg-gray-400 rounded right-1 top-1 dark:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 hover:bg-gray-300 hover:transition-colors flex justify-center items-center"
            >
              {isSubmitting ? (
                <FiLoader className="h-6 text-gray-500 animate-spin" />
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </form>

        <div className="pt-3">{messages[status]}</div>
      </div>
    </div>
  );
};

export default Subscribe;
