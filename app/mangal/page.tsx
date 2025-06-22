"use client";
import { useState } from "react";
export default function MangalPage() {
  const [staffList, setStaffList] = useState([
    "Aliyev Jamshid",
    "Karimova Nargiza",
    "Rustamov Diyor",
    "Islomov Shoxrux",
    "Sattorova Dilnoza",
  ]);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">CRM: Izzat</h1>
      {/* inputs */}
      <div className="flex flex-col md:flex-row justify-start gap-6 px-4 py-6">
        <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   // handle left form submit
          // }}
          className="w-full md:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
        >
          <h1 className="text-xl font-bold text-white">Login</h1>

          {/* Person */}
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          {/* Password */}
          <input
            type="text"
            placeholder="Password"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 
                 dark:hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>
        <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   // handle left form submit
          // }}
          className="w-full md:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
        >
          <h1 className="text-xl font-bold text-white">New Client</h1>
          {/* Company */}
          <input
            type="text"
            placeholder="Company"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          {/* Person */}
          <input
            type="text"
            placeholder="Person Name"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          {/* Tel */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          {/* Lavozim */}
          <select className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            <option>Lavozim</option>
            <option>CEO</option>
            <option>Manager</option>
            <option>Staff</option>
            <option>Other</option>
          </select>

          {/* Location */}
          <select className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            <option>Location</option>
            <option>Tashkent</option>
            <option>Samarkand</option>
            <option>Bukhara</option>
            <option>Andijan</option>
            <option>Namangan</option>
            <option>Fergana</option>
            <option>Jizzakh</option>
            <option>Nukus</option>
            <option>Khiva</option>
            <option>Kokand</option>
          </select>

          {/* Product */}
          <input
            type="text"
            placeholder="Product"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          {/* Summa */}
          <input
            type="number"
            placeholder="Summa"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          {/* Status $ */}
          <select className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full">
            <option>Status</option>
            <option>Purchased</option>
            <option>Thinking</option>
            <option>Reject</option>
          </select>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded 
                 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 
                 dark:hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <form
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   // handle left form submit
          // }}
          className="w-full md:w-1/3 space-y-4 p-6 mb-3 bg-white dark:bg-gray-800 rounded-xl shadow"
        >
          <h1 className="text-xl font-bold text-white">New Staff</h1>
          <input
            type="text"
            placeholder="New Staff Name"
            className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded 
                 focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-green-700 
                 dark:hover:bg-green-800"
          >
            Add Staff
          </button>
          {/* Staff List */}
          <ul className="pt-4 space-y-2 text-m text-white list-decimal list-inside">
            {staffList.map((name, index) => (
              <li key={index}>
                {name} <i className="text-gray-600 cursor-pointer">delete</i>
              </li>
            ))}
          </ul>
        </form>
      </div>
      <div>
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 mb-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 ml-2 cursor-pointer bg-yellow-800 hover:bg-yellow-900 text-white rounded shadow 
             transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Purchased
        </button>
      </div>

      {/* table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-300">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-3 py-2">
                ID
              </th>
              <th scope="col" className="px-3 py-2">
                Date
              </th>
              <th scope="col" className="px-3 py-2">
                Company
              </th>
              <th scope="col" className="px-3 py-2">
                Person
              </th>
              <th scope="col" className="px-3 py-2">
                Lavozim
              </th>
              <th scope="col" className="px-3 py-2">
                Tel
              </th>
              <th scope="col" className="px-3 py-2">
                Location
              </th>
              <th scope="col" className="px-3 py-2">
                Product
              </th>
              <th scope="col" className="px-3 py-2">
                Summa
              </th>
              <th scope="col" className="px-3 py-2">
                $tatus
              </th>
              <th scope="col" className="px-3 py-2">
                Staff (assigned)
              </th>
              <th scope="col" className="px-3 py-2">
                Process
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "001",
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
                company: "NanoSoft",
                person: "Dilnoza Rakhimova",
                tel: "+998 91 765 43 21",
                lavozim: "Manager",
                location: "Samarkand",
                product: "iPhone 14 Pro",
                summa: "$1300",
                status: "Thinking",
                process: "Pending",
                staff: "Madina",
              },
              {
                id: "003",
                company: "GreenPower LLC",
                person: "Jasur Islomov",
                tel: "+998 93 333 44 55",
                lavozim: "Staff",
                location: "Andijan",
                product: "Solar Panel Kit",
                summa: "$2500",
                status: "Purchased",
                process: "Paid",
                staff: "Ulugbek",
              },
              {
                id: "004",
                company: "AutoX",
                person: "Murod Sa’dullaev",
                tel: "+998 97 888 11 22",
                lavozim: "Other",
                location: "Namangan",
                product: "GPS Tracker",
                summa: "$110",
                status: "Reject",
                process: "Pending",
                staff: "Farrukh",
              },
              {
                id: "005",
                company: "SkyCom",
                person: "Gulbahor Yusupova",
                tel: "+998 95 777 00 99",
                lavozim: "Manager",
                location: "Bukhara",
                product: "Fiber Router",
                summa: "$320",
                status: "Purchased",
                process: "Paid",
                staff: "Shahlo",
              },
              {
                id: "006",
                company: "MedExpress",
                person: "Abdurahmon Tursunov",
                tel: "+998 91 222 33 44",
                lavozim: "CEO",
                location: "Fergana",
                product: "Barcode Scanner",
                summa: "$250",
                status: "Thinking",
                process: "Pending",
                staff: "Jamshid",
              },
              {
                id: "007",
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
                company: "AgroTech",
                person: "Ibrohim Toshpulatov",
                tel: "+998 93 999 55 11",
                lavozim: "Manager",
                location: "Jizzakh",
                product: "Drone (Agro)",
                summa: "$3100",
                status: "Reject",
                process: "Pending",
                staff: "Rustam",
              },
              {
                id: "009",
                company: "Edutools",
                person: "Malika Rahmatova",
                tel: "+998 94 222 11 77",
                lavozim: "Other",
                location: "Kokand",
                product: "Projector",
                summa: "$750",
                status: "Thinking",
                process: "Paid",
                staff: "Azamat",
              },
              {
                id: "010",
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
            ].map((row, i) => (
              <tr
                key={row.id}
                className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-1 py-1">{row.id}</td>
                <td className="px-1 py-1">{row.company}</td>
                <td className="px-1 py-1">{row.company}</td>
                <td className="px-1 py-1">{row.person}</td>
                <td className="px-1 py-1">{row.lavozim}</td>
                <td className="px-1 py-1">{row.tel}</td>
                <td className="px-1 py-1">{row.location}</td>
                <td className="px-1 py-1">{row.product}</td>
                <td className="px-1 py-1">{row.summa}</td>
                <td className="px-1 py-1">{row.status}</td>
                <td className="px-1 py-1">{row.staff}</td>
                <td className="px-1 py-1">{row.process}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-300">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-800 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-3 py-2">
                ID
              </th>
              <th scope="col" className="px-3 py-2">
                Date
              </th>
              <th scope="col" className="px-3 py-2">
                Company
              </th>
              <th scope="col" className="px-3 py-2">
                Person
              </th>
              <th scope="col" className="px-3 py-2">
                Lavozim
              </th>
              <th scope="col" className="px-3 py-2">
                Tel
              </th>
              <th scope="col" className="px-3 py-2">
                Location
              </th>
              <th scope="col" className="px-3 py-2">
                Product
              </th>
              <th scope="col" className="px-3 py-2">
                Summa
              </th>
              <th scope="col" className="px-3 py-2">
                $tatus
              </th>
              <th scope="col" className="px-3 py-2">
                Staff (assigned)
              </th>
              <th scope="col" className="px-3 py-2">
                Process
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "005",
                company: "SkyCom",
                person: "Gulbahor Yusupova",
                tel: "+998 95 777 00 99",
                lavozim: "Manager",
                location: "Bukhara",
                product: "Fiber Router",
                summa: "$320",
                status: "Purchased",
                process: "Paid",
                staff: "Shahlo",
              },
              {
                id: "006",
                company: "MedExpress",
                person: "Abdurahmon Tursunov",
                tel: "+998 91 222 33 44",
                lavozim: "CEO",
                location: "Fergana",
                product: "Barcode Scanner",
                summa: "$250",
                status: "Thinking",
                process: "Paid",
                staff: "Jamshid",
              },
              {
                id: "007",
                company: "SmartWare",
                person: "Sevinch Mamatova",
                tel: "+998 90 444 66 88",
                lavozim: "Staff",
                location: "Nukus",
                product: "POS Terminal",
                summa: "$890",
                status: "Purchased",
                process: "Paid",
                staff: "Lola",
              },
              {
                id: "008",
                company: "AgroTech",
                person: "Ibrohim Toshpulatov",
                tel: "+998 93 999 55 11",
                lavozim: "Manager",
                location: "Jizzakh",
                product: "Drone (Agro)",
                summa: "$3100",
                status: "Reject",
                process: "Paid",
                staff: "Rustam",
              },
              {
                id: "009",
                company: "Edutools",
                person: "Malika Rahmatova",
                tel: "+998 94 222 11 77",
                lavozim: "Other",
                location: "Kokand",
                product: "Projector",
                summa: "$750",
                status: "Thinking",
                process: "Paid",
                staff: "Azamat",
              },
              {
                id: "010",
                company: "FastPrint",
                person: "Oybek Qodirov",
                tel: "+998 90 888 77 66",
                lavozim: "CEO",
                location: "Khiva",
                product: "HP LaserJet Pro",
                summa: "$470",
                status: "Purchased",
                process: "Paid",
                staff: "Dilshod",
              },
            ].map((row, i) => (
              <tr
                key={row.id}
                className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700"
              >
                <td className="px-1 py-1">{row.id}</td>
                <td className="px-1 py-1">{row.company}</td>
                <td className="px-1 py-1">{row.company}</td>
                <td className="px-1 py-1">{row.person}</td>
                <td className="px-1 py-1">{row.lavozim}</td>
                <td className="px-1 py-1">{row.tel}</td>
                <td className="px-1 py-1">{row.location}</td>
                <td className="px-1 py-1">{row.product}</td>
                <td className="px-1 py-1">{row.summa}</td>
                <td className="px-1 py-1">{row.status}</td>
                <td className="px-1 py-1">{row.staff}</td>
                <td className="px-1 py-1">{row.process}</td>
              </tr>
            ))}
            <tr
              key="apg"
              className="bg-gray-100 dark:bg-gray-900 border-b dark:border-gray-700"
            >
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1">900,000</td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
              <td className="px-1 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="px-4 py-2 mt-3 cursor-pointer bg-blue-700 hover:bg-blue-800 text-white rounded shadow 
             transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Download
      </button>
    </div>
  );
}
