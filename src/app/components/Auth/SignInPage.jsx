import React from "react";

const GoogleIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285f4"
      d="M533.5 278.4c0-18.5-1.5-37.3-4.7-55.3H272v104.7h147.4c-6.3 33.9-25 62.4-53.3 81.6l85.9 66.9c50.3-46.4 81.5-114.8 81.5-197.9z"
    />
    <path
      fill="#34a853"
      d="M272 544.3c72.8 0 133.9-24.1 178.5-65.4l-85.9-66.9c-23.8 16-54.5 25.4-92.6 25.4-71.2 0-131.6-48-153.3-112.3l-90.4 69.7c45.4 90 138.7 149.5 243.7 149.5z"
    />
    <path
      fill="#fbbc04"
      d="M118.7 325.1c-10.5-30.8-10.5-64.1 0-94.9l-90.4-69.7c-39.1 77.5-39.1 168.9 0 246.3l90.4-69.7z"
    />
    <path
      fill="#ea4335"
      d="M272 107.7c39.5 0 75 13.6 102.9 40.2l77.1-77.1C405.9 24.3 344.8 0 272 0 167 0 73.7 59.5 28.3 149.5l90.4 69.7C140.4 155.7 200.8 107.7 272 107.7z"
    />
  </svg>
);

const MicrosoftIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 23 23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="10" height="10" x="1" y="1" fill="#f35325" />
    <rect width="10" height="10" x="12" y="1" fill="#81bc06" />
    <rect width="10" height="10" x="1" y="12" fill="#05a6f0" />
    <rect width="10" height="10" x="12" y="12" fill="#ffba08" />
  </svg>
);

const AppleIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.365 1.43c.01 1.18-.455 2.292-1.28 3.116-.816.816-1.96 1.292-3.11 1.204-.11-1.23.433-2.473 1.265-3.31C13.97 1.48 15.17 1 16.365 1v.43zM20.758 17.03c-.386.89-.84 1.73-1.37 2.52-.736 1.08-1.354 1.824-2.28 1.824-.874 0-1.28-.57-2.51-.57s-1.715.556-2.547.556c-.91 0-1.568-.842-2.297-1.914-.627-.95-1.136-2.13-1.62-3.343-.54-1.336-1.06-2.778-1.06-4.375 0-2.404 1.243-4.28 3.113-4.28.968 0 1.697.462 2.46.462.73 0 1.53-.482 2.54-.482 1.193 0 2.276.664 3.003 1.735-.61.412-1.547 1.24-1.547 2.644 0 1.98 1.643 2.79 1.73 2.83z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="white"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.25 21 3 13.75 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
  </svg>
);

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-center text-2xl font-semibold text-white">
          Welcome back
        </h1>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded-full border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
          />
        </div>
        <button className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-200 transition-colors duration-200">
          Continue
        </button>

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>

        <div className="flex items-center justify-center my-4">
          <span className="h-px w-full bg-gray-700" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <span className="h-px w-full bg-gray-700" />
        </div>

        <div className="space-y-3">
          <button className="w-full border border-gray-600 rounded-full py-3 flex items-center justify-center bg-transparent text-white hover:bg-gray-800 transition-colors duration-200">
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 space-x-2">
          <a href="#" className="hover:underline text-gray-400">
            Terms of Use
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:underline text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
