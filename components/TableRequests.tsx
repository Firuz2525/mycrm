"use client";

import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { Check, Forward, Settings, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// Types

type TableRequestsProps = {
  selectedStatus: string | null;
};

type Request = {
  id: string;
  date: string;
  company: string;
  person: string;
  tel: string;
  lavozim: string;
  location: string;
  product: string;
  summa: string;
  status: string;
  process: string;
  staff: string;
};

const TableRequests: React.FC<TableRequestsProps> = ({ selectedStatus }) => {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditingRow, setIsEditingRow] = useState<{ [id: string]: boolean }>(
    {}
  );
  const [updatingRowId, setUpdatingRowId] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "clients"), orderBy("date", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Request[] = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          ...docData,
          id: doc.id,
          date: docData.date.toDate().toLocaleString(),
        } as Request;
      });

      setRequests(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleEdit = (id: string) => {
    setIsEditingRow((prev) => ({ ...prev, [id]: true }));
  };

  const handleCancel = (id: string) => {
    setIsEditingRow((prev) => ({ ...prev, [id]: false }));
  };

  const handleCheck = async (row: Request) => {
    setUpdatingRowId(row.id);
    const docRef = doc(db, "clients", row.id);

    try {
      if (row.status === "Thinking" || row.status === "Reject") {
        await updateDoc(docRef, { status: "Purchased" });
        toast.success("Status updated to Purchased");
      } else if (row.status === "Purchased" && row.process === "pending") {
        await updateDoc(docRef, { process: "finished" });
        toast.success("Process updated to Finished");
      } else if (row.status === "Purchased" && row.process === "finished") {
        // Prepare data to move
        const newDocData = {
          ...row,
          process: "paid",
          date: new Date(), // optional: reassign new server date
        };

        const paymentsRef = collection(db, "payments");

        // Add to "payments" collection
        await addDoc(paymentsRef, newDocData);

        // Remove from "clients" collection
        await deleteDoc(docRef);

        toast.success("Data moved to Payments");
      }
    } catch (err) {
      console.error("❌ Update failed:", err);
      toast.error("Update failed");
    } finally {
      setUpdatingRowId(null);
      setIsEditingRow((prev) => ({ ...prev, [row.id]: false }));
    }
  };

  const filteredRequests = selectedStatus
    ? requests.filter((r) => r.status === selectedStatus)
    : requests;

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
          <tr>
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">Company</th>
            <th className="px-3 py-2">Person</th>
            <th className="px-3 py-2">Lavozim</th>
            <th className="px-3 py-2">Tel</th>
            <th className="px-3 py-2">Location</th>
            <th className="px-3 py-2">Product</th>
            <th className="px-3 py-2">Summa</th>
            <th className="px-3 py-2">Status</th>
            <th className="px-3 py-2">Staff</th>
            <th className="px-3 py-2">Process</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((row) => (
            <tr
              key={row.id}
              className={`bg-white dark:bg-gray-800 border-b dark:border-gray-700 ${
                row.process === "finished"
                  ? "dark:bg-green-900"
                  : "dark:bg-gray-800"
              }`}
            >
              <td className="px-1 py-2 dark:text-gray-600 italic">
                {row.id.slice(0, 4)}
              </td>
              <td className="px-1 py-2">{row.date.toLocaleString()}</td>
              <td className="px-3 py-2">{row.company}</td>
              <td className="px-3 py-2">{row.person}</td>
              <td className="px-3 py-2">{row.lavozim}</td>
              <td className="px-3 py-2">{row.tel}</td>
              <td className="px-3 py-2">{row.location}</td>
              <td className="px-3 py-2">{row.product}</td>
              <td className="px-3 py-2">{row.summa}</td>
              <td className="px-3 py-2">{row.status}</td>
              <td className="px-3 py-2">{row.staff}</td>
              <td className="px-3 py-2 flex justify-between items-center">
                {row.process}
                {updatingRowId === row.id ? (
                  <Settings className="w-5 h-5 text-blue-500 animate-spin ml-2" />
                ) : isEditingRow[row.id] ? (
                  <div className="flex gap-1 ml-2">
                    <X
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleCancel(row.id)}
                    />
                    <Check
                      className="text-green-500 cursor-pointer"
                      onClick={() => handleCheck(row)}
                    />
                  </div>
                ) : (
                  <Forward
                    className="text-green-500 animate-pulse ml-2 cursor-pointer"
                    onClick={() => handleEdit(row.id)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRequests;
