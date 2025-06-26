"use client";

import React, { useState } from "react";
import { toast } from "sonner";

// Import Firebase Authentication functions
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword, // <-- New: for creating new users
  updateProfile, // <-- New: for setting display name
} from "firebase/auth";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // <-- New: for user's name during sign-up
  const [loading, setLoading] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false); // <-- New: to toggle between login/signup

  // Initialize Firebase Auth instance
  // Remember: For production, it's best to initialize Firebase
  // in a separate file (e.g., firebaseConfig.ts) and import
  // the 'auth' instance from there.
  const auth = getAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUpMode) {
        // --- SIGN UP LOGIC ---
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Set the display name immediately after user creation
        if (user) {
          await updateProfile(user, {
            displayName: displayName, // Use the name from the input field
          });
        }

        toast.success(
          `🎉 Welcome, ${
            displayName || user.email
          }! Your account has been created.`
        );
        // Clear form fields
        setEmail("");
        setPassword("");
        setDisplayName("");
        // Optionally switch back to login mode after successful signup
        setIsSignUpMode(false);
      } else {
        // --- LOGIN LOGIC (Existing from before) ---
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        toast.success(`✅ Welcome back, ${user.displayName || user.email}!`);
        // Clear form fields
        setEmail("");
        setPassword("");
      }
    } catch (error: any) {
      let errorMessage = "❌ An unexpected error occurred. Please try again.";
      console.error("Firebase Auth Error:", error); // Log the full error for debugging

      if (isSignUpMode) {
        // Specific error handling for SIGN UP
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage =
              "❌ This email is already registered. Try logging in!";
            break;
          case "auth/weak-password":
            errorMessage =
              "❌ Password is too weak. Please choose a stronger one.";
            break;
          case "auth/invalid-email":
            errorMessage = "❌ The email address is not valid.";
            break;
          case "auth/operation-not-allowed":
            errorMessage =
              "❌ Email/Password sign-up is not enabled. Contact support.";
            break;
          default:
            errorMessage = `❌ Sign-up failed: ${error.message}`;
        }
      } else {
        // Specific error handling for LOGIN
        switch (error.code) {
          case "auth/user-not-found":
          case "auth/wrong-password":
            errorMessage = "❌ Invalid email or password.";
            break;
          case "auth/invalid-email":
            errorMessage = "❌ The email address is not valid.";
            break;
          case "auth/user-disabled":
            errorMessage =
              "❌ Your account has been disabled. Please contact support.";
            break;
          default:
            errorMessage = `❌ Login failed: ${error.message}`;
        }
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Always turn off loading state
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
    >
      <h1 className="text-xl font-bold text-white">
        {isSignUpMode ? "Create Account" : "Login"}
      </h1>

      {/* Display Name Input (Only for Sign Up) */}
      {isSignUpMode && (
        <input
          type="text"
          placeholder="Your Name (Optional)"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      )}

      {/* Email Input */}
      <input
        type="email"
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
        {loading
          ? isSignUpMode
            ? "Creating account..."
            : "Signing in..."
          : isSignUpMode
          ? "Sign Up"
          : "Sign In"}
      </button>

      {/* Toggle between Login and Sign Up */}
      <button
        type="button" // Important: Prevent this button from submitting the form
        onClick={() => setIsSignUpMode(!isSignUpMode)}
        className="w-full text-sm text-blue-500 hover:underline mt-2"
      >
        {isSignUpMode
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </button>
    </form>
  );
};

export default FormLogin;
