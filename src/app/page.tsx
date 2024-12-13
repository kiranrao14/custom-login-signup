
'use client'; // This marks the component as client-side


import Image from 'next/image';

import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();
 
  
  const handleLoginClick = () => {
    router.push('/user'); // Navigate to the login page
  };

  const handleSignupClick = () => {
    router.push('/user'); // Navigate to the signup page
  };

  return (
    <div className="min-h-screen bg-slate-700 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-5xl">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-8">
          <Image
            src="/image/79c61a3267df43df92a9bc190fa09859.webp"
            height={300}
            width={300}
            alt="logo-img"
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-white text-center sm:text-left">
          <h1 className="font-extrabold text-3xl sm:text-4xl mb-4">Welcome to My Website</h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover a seamless experience with our login and signup platform.
            Join us today to access exclusive content and personalized services.
          </p>
          <div className="mt-6 space-x-4 flex justify-center sm:justify-start">
            {/* Login Button */}
            <button
              onClick={handleLoginClick}
              className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
            {/* Signup Button */}
            <button
              onClick={handleSignupClick}
              className="px-6 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700 transition duration-300"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;


