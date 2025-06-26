"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

const FormStaff = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [staffList, setStaffList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteId, setShowDeleteId] = useState<string | null>(null);

  const auth = getAuth();
  const currentUser = auth.currentUser;

  // 🔒 Only Firuz can register staff
  const isFiruz = currentUser?.displayName?.toLowerCase().includes("firuz");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "staff"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStaffList(data);
    });

    return () => unsubscribe();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFiruz) {
      toast.error("❌ You do not have permission to add staff.");
      return;
    }
    if (!email || !password || !displayName) {
      toast.error("❌ Fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      await updateProfile(newUser, { displayName });

      // Save staff info in Firestore
      await addDoc(collection(db, "staff"), {
        uid: newUser.uid,
        email,
        password,
        displayName,
        createdAt: serverTimestamp(),
      });

      toast.success(`✅ ${displayName} registered successfully!`);
      setEmail("");
      setPassword("");
      setDisplayName("");
    } catch (error: any) {
      console.error("Error adding staff:", error);
      toast.error("❌ Failed to register staff: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRightClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setShowDeleteId(id);
    setTimeout(() => setShowDeleteId(null), 3000);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "staff", id));
      toast.success("🗑️ Staff deleted from Firestore");
    } catch (error) {
      console.error("Error deleting staff:", error);
      toast.error("❌ Failed to delete staff");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full lg:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
    >
      <h1 className="text-xl font-bold text-white">Register Staff</h1>

      <input
        type="text"
        placeholder="Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className={`w-full px-4 py-2 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"
        } text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-700 dark:hover:bg-green-800`}
      >
        {loading ? "Registering..." : "Register Staff"}
      </button>

      <ul className="pt-4 space-y-2 text-m text-white list-decimal list-inside">
        {staffList.map((staff) => (
          <li
            key={staff.id}
            onContextMenu={(e) => handleRightClick(e, staff.id)}
            className="relative"
          >
            {staff.displayName} - {staff.email} - {staff.password}
            {showDeleteId === staff.id && (
              <span
                onClick={() => handleDelete(staff.id)}
                className="ml-2 cursor-pointer text-red-400 font-semibold animate-pulse"
              >
                DELETE
              </span>
            )}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default FormStaff;
