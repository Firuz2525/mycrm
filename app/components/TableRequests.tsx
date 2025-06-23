"use client";

import { Forward } from "lucide-react";
import React from "react";

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
  const requests: Request[] = [
    {
      id: "001",
      date: "2025-06-20",
      company: "TechZone",
      person: "Ali Karimov",
      tel: "+998 90 123 45 67",
      lavozim: "CEO",
      location: "Tashkent",
      product: "Laptop Dell XPS 13",
      summa: "$1200",
      status: "Purchased",
      process: "Finished",
      staff: "Shahzod",
    },
    {
      id: "002",
      date: "2025-06-19",
      company: "NanoSoft",
      person: "Dilnoza Rakhimova",
      tel: "+998 91 765 43 21",
      lavozim: "Manager",
      location: "Samarkand",
      product: "iPhone 14 Pro",
      summa: "$1300",
      status: "Thinking",
      process: "None",
      staff: "Madina",
    },
    {
      id: "003",
      date: "2025-06-19",
      company: "GreenPower LLC",
      person: "Jasur Islomov",
      tel: "+998 93 333 44 55",
      lavozim: "Staff",
      location: "Andijan",
      product: "Solar Panel Kit",
      summa: "$2500",
      status: "Purchased",
      process: "Pending",
      staff: "Ulugbek",
    },
    {
      id: "004",
      date: "2025-06-18",
      company: "AutoX",
      person: "Murod Sa’dullaev",
      tel: "+998 97 888 11 22",
      lavozim: "Other",
      location: "Namangan",
      product: "GPS Tracker",
      summa: "$110",
      status: "Reject",
      process: "None",
      staff: "Farrukh",
    },
    {
      id: "005",
      date: "2025-06-18",
      company: "SkyCom",
      person: "Gulbahor Yusupova",
      tel: "+998 95 777 00 99",
      lavozim: "Manager",
      location: "Bukhara",
      product: "Fiber Router",
      summa: "$320",
      status: "Purchased",
      process: "Pending",
      staff: "Shahlo",
    },
    {
      id: "006",
      date: "2025-06-17",
      company: "MedExpress",
      person: "Abdurahmon Tursunov",
      tel: "+998 91 222 33 44",
      lavozim: "CEO",
      location: "Fergana",
      product: "Barcode Scanner",
      summa: "$250",
      status: "Thinking",
      process: "None",
      staff: "Jamshid",
    },
    {
      id: "007",
      date: "2025-06-16",
      company: "SmartWare",
      person: "Sevinch Mamatova",
      tel: "+998 90 444 66 88",
      lavozim: "Staff",
      location: "Nukus",
      product: "POS Terminal",
      summa: "$890",
      status: "Purchased",
      process: "Finished",
      staff: "Lola",
    },
    {
      id: "008",
      date: "2025-06-15",
      company: "AgroTech",
      person: "Ibrohim Toshpulatov",
      tel: "+998 93 999 55 11",
      lavozim: "Manager",
      location: "Jizzakh",
      product: "Drone (Agro)",
      summa: "$3100",
      status: "Reject",
      process: "None",
      staff: "Rustam",
    },
    {
      id: "009",
      date: "2025-06-14",
      company: "Edutools",
      person: "Malika Rahmatova",
      tel: "+998 94 222 11 77",
      lavozim: "Other",
      location: "Kokand",
      product: "Projector",
      summa: "$750",
      status: "Thinking",
      process: "None",
      staff: "Azamat",
    },
    {
      id: "010",
      date: "2025-06-13",
      company: "FastPrint",
      person: "Oybek Qodirov",
      tel: "+998 90 888 77 66",
      lavozim: "CEO",
      location: "Khiva",
      product: "HP LaserJet Pro",
      summa: "$470",
      status: "Purchased",
      process: "Finished",
      staff: "Dilshod",
    },
  ];

  const filteredRequests = selectedStatus
    ? requests.filter((r) => r.status === selectedStatus)
    : requests;

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
                row.process === "Finished"
                  ? "dark:bg-green-900"
                  : row.process === "Pending"
                  ? "dark:bg-yellow-900"
                  : "dark:bg-gray-800"
              }`}
            >
              <td className="px-3 py-2">{row.id}</td>
              <td className="px-3 py-2">{row.date}</td>
              <td className="px-3 py-2">{row.company}</td>
              <td className="px-3 py-2">{row.person}</td>
              <td className="px-3 py-2">{row.lavozim}</td>
              <td className="px-3 py-2">{row.tel}</td>
              <td className="px-3 py-2">{row.location}</td>
              <td className="px-3 py-2">{row.product}</td>
              <td className="px-3 py-2">{row.summa}</td>
              <td className="px-3 py-2">{row.status}</td>
              <td className="px-3 py-2">{row.staff}</td>
              <td className="px-3 py-2 flex justify-between">
                {row.process}
                <Forward className="text-green-500 animate-pulse ml-2 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRequests;
