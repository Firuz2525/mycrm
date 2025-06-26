"use client";

import { db } from "@/lib/firebase";
import {
  collection,
  deleteDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { toast } from "sonner";
import { Settings } from "lucide-react";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

export interface DataItem {
  staff: string;
  status: string;
  id: string;
  lavozim: string;
  company: string;
  product: string;
  date: string;
  location: string;
  phone: string;
  summa: number;
  person: string;
  process: string;
}

function groupByStaff(data: DataItem[]): DataItem[] {
  const result: DataItem[] = [];
  const visitedStaff = new Set<string>();

  while (result.length < data.length) {
    for (let i = 0; i < data.length; i++) {
      const staffName = data[i].staff;
      if (!visitedStaff.has(staffName)) {
        const group = data.filter((item) => item.staff === staffName);

        result.push(...group);

        const totalSum = group.reduce((acc, item) => acc + item.summa, 0);

        result.push({
          staff: staffName,
          status: "",
          id: uuidv4(),
          lavozim: "",
          company: "",
          product: "",
          date: "",
          location: "",
          phone: "",
          summa: totalSum,
          person: "",
          process: "",
        });

        visitedStaff.add(staffName);
        break;
      }
    }
  }

  return result;
}

const TablePaid = () => {
  const headers = [
    "ID",
    "Date",
    "Company",
    "Person",
    "Lavozim",
    "Tel",
    "Location",
    "Product",
    "Staff",
    "Summa",
    "Status",
    "Process",
  ];

  const [paidData, setPaidData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;
  const userName = user?.displayName || user?.email || "User";

  useEffect(() => {
    const q = query(collection(db, "payments"), orderBy("date", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const allData: DataItem[] = snapshot.docs.map((doc) => {
          const docData = doc.data() as Omit<DataItem, "id" | "date"> & {
            date: { toDate: () => Date };
          };
          return {
            ...docData,
            id: doc.id,
            date: docData.date.toDate().toLocaleString(),
          };
        });

        const isAdmin = userName === "Firuz" || userName === "Usto";
        const filteredData = isAdmin
          ? allData
          : allData.filter((item) => item.staff === userName);

        const groupedData = groupByStaff(filteredData);
        setPaidData(groupedData);
        setLoading(false);
      },
      (error) => {
        console.error("❌ Error listening to payments:", error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [userName]);

  const total = paidData.reduce((acc, curr) => acc + (curr.summa || 0), 0);

  const handleExportToExcel = async () => {
    const dataRows = paidData.map((row) => [
      row.id,
      row.date,
      row.company,
      row.person,
      row.lavozim,
      row.phone,
      row.location,
      row.product,
      row.staff,
      row.summa,
      row.status,
      row.process,
    ]);

    dataRows.push(["", "", "", "", "", "", "", "Total", total, "", "", ""]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "PaidClients");

    try {
      XLSX.writeFile(workbook, "paid_clients.xlsx");
      toast.success("✅ Excel file downloaded");

      const confirmDelete = confirm(
        "Do you want to delete all Payment records now?"
      );
      if (!confirmDelete) return;

      setIsDeleting(true);
      const q = query(collection(db, "payments"));
      const snapshot = await getDocs(q);

      const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      toast.success("🗑️ Payments data deleted from Firestore");
      setPaidData([]);
    } catch (error) {
      console.error("Export/Delete error:", error);
      toast.error("❌ Error during export or deletion");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="mt-5">
      <table className="w-full text-left text-gray-500 dark:text-gray-300">
        <thead className="text-xs uppercase bg-gray-500 dark:bg-gray-900 dark:text-gray-300">
          <tr>
            {headers.map((title) => (
              <th key={title} className="px-3 py-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={12} className="text-center py-4 text-yellow-400">
                <Settings className="animate-spin w-5 h-5" />
              </td>
            </tr>
          ) : (
            paidData.map((row) => (
              <tr
                key={row.id}
                className="bg-gray-100 dark:bg-black border-b dark:border-gray-700"
              >
                <td className="px-1 py-2 text-sm dark:text-gray-600 italic">
                  {row.id.slice(0, 4)}
                </td>
                <td className="px-1 py-2 text-sm dark:text-gray-600">
                  {row.date}
                </td>
                <td className="px-2 py-2">{row.company}</td>
                <td className="px-2 py-2">{row.person}</td>
                <td className="px-2 py-2">{row.lavozim}</td>
                <td className="px-2 py-2">{row.phone}</td>
                <td className="px-2 py-2">{row.location}</td>
                <td className="px-2 py-2">{row.product}</td>
                <td className="px-2 py-2">{row.staff}</td>
                <td className="px-2 py-2">
                  {row.summa?.toLocaleString() ?? 0}
                </td>
                <td className="px-2 py-2 text-sm dark:text-gray-600">
                  {row.status}
                </td>
                <td className="px-2 py-2 text-sm dark:text-gray-600">
                  {row.process}
                </td>
              </tr>
            ))
          )}

          <tr className="bg-green-100 dark:bg-gray-900 font-bold">
            <td colSpan={8}></td>
            <td className="px-2 py-2">{total.toLocaleString()}</td>
            <td colSpan={3}></td>
          </tr>
        </tbody>
      </table>

      <div className="mt-2">
        {user?.displayName === "Firuz" && (
          <button
            onClick={handleExportToExcel}
            disabled={isDeleting}
            className="px-4 py-2 bg-cyan-800 hover:bg-cyan-900 text-white rounded shadow transition duration-200 flex items-center gap-2"
          >
            {isDeleting ? (
              <>
                <Settings className="animate-spin w-5 h-5" />
                Deleting...
              </>
            ) : (
              "Export to Excel"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default TablePaid;
