"use client";

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

const LoginModal = ({ onClose }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLoginClick = () => {
    router.push(`/signup?redirect=${encodeURIComponent(pathname)}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-sm w-full text-white">
        <h2 className="text-xl font-bold mb-4">Login Required</h2>
        <p className="mb-4">
          You’ve reached the free limit. Please login or sign up to continue.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleLoginClick}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700"
          >
            Login / Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
