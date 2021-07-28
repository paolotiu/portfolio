import React from 'react';

const Subscribe = () => {
  return (
    <div className="pt-16 ">
      <div className="p-6 bg-gray-100 rounded dark:bg-gray-800">
        <h3 className="text-xl font-bold">Subscribe to the newsletter</h3>
        <p className="pt-1 text-sm text-gray-700 dark:text-gray-300">
          Get emails from me about web development, tech, and cool stuff. No
          spam.
        </p>
        <form className="pt-4 ">
          <div className="relative max-w-lg">
            <input
              aria-label="Email for newsletter"
              autoComplete="email"
              type="email"
              placeholder="you@email.com"
              className="block w-full px-4 py-2 mt-1 text-gray-900 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 "
            />
            <button
              type="submit"
              className="absolute flex items-center justify-center h-8 px-4 font-bold text-gray-900 bg-gray-100 rounded right-1 top-1 dark:bg-gray-700 dark:text-gray-100 w-28"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
