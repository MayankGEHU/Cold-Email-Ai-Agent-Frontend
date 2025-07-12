"use client";

import React, { useState } from "react";
import { auth, googleProvider } from "../../../firebaseConfig ";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";

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

const SignUpPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectPath = searchParams.get("redirect") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let userCredential;

      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
          displayName: name,
        });
      }

      setUser(userCredential.user);
      router.push(redirectPath);

    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      router.push(redirectPath);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent text-white px-4">
      <div className="w-full max-w-sm space-y-6">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              You are logged in!
            </h2>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-3 rounded-full hover:bg-red-700 transition-colors duration-200"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-center text-2xl font-semibold text-white">
              {isLogin ? "Sign In" : "Create your account"}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Full name"
                  className="block w-full rounded-full border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
                className="block w-full rounded-full border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="block w-full rounded-full border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-400">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-400 hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>

            <div className="flex items-center justify-center my-4">
              <span className="h-px w-full bg-gray-700" />
              <span className="px-3 text-gray-400 text-sm">OR</span>
              <span className="h-px w-full bg-gray-700" />
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full border border-gray-600 rounded-full py-3 flex items-center justify-center bg-transparent text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <GoogleIcon />
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
