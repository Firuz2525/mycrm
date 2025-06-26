"use client";

import React, { useState } from "react";
import { toast } from "sonner";

// Import Firebase Authentication functions
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const FormLogin = () => {
  const [email, setEmail] = useState(""); // Changed 'name' to 'email'
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize Firebase Auth instance
  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use Firebase's signInWithEmailAndPassword function
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      toast.success(`✅ Welcome, ${user.email}!`);
      setEmail("");
      setPassword("");
    } catch (error: unknown) {
      // Default error message
      let errorMessage = "❌ Login failed. Please try again.";

      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        typeof (error as { code: unknown }).code === "string"
      ) {
        const errorCode = (error as { code: string }).code;

        if (
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/wrong-password"
        ) {
          errorMessage = "❌ Invalid email or password.";
        } else if (errorCode === "auth/invalid-email") {
          errorMessage = "❌ The email address is not valid.";
        }
      }

      if (error instanceof Error) {
        console.error("Firebase Auth Error:", error.message);
      } else {
        console.error("Unknown error during sign-in:", error);
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-2xl w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
    >
      <h1 className="text-xl font-bold text-white">Login</h1>

      {/* Email Input */}
      <input
        type="email" // Changed type to email for better UX
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full px-4 py-2 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600`}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
};

export default FormLogin;
