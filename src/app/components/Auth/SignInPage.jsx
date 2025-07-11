import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white-900 px-4">
  

      <div className="w-full max-w-sm space-y-6">

        <h1 className="text-center text-2xl font-semibold">Welcome back</h1>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email address"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800">
          Continue
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="h-px w-full bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <span className="h-px w-full bg-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full border border-gray-300 rounded-full py-3 flex items-center justify-center hover:bg-gray-100">
            <span className="mr-2">📞</span> Continue with phone
          </button>
          <button className="w-full border border-gray-300 rounded-full py-3 flex items-center justify-center hover:bg-gray-100">
            <span className="mr-2">🌐</span> Continue with Google
          </button>
          <button className="w-full border border-gray-300 rounded-full py-3 flex items-center justify-center hover:bg-gray-100">
            <span className="mr-2">🪟</span> Continue with Microsoft Account
          </button>
          <button className="w-full border border-gray-300 rounded-full py-3 flex items-center justify-center hover:bg-gray-100">
            <span className="mr-2"></span> Continue with Apple
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500 space-x-2">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
