import { useState, useEffect } from "react";
import Server from "./../Server.tsx";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "./utils/motion.ts";
export default function Jobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Server.post("/index.php", { Key: "LoadJobInformation" }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
    console.log(data);
  }, []);

  return (
    <section className="flex flex-col items-center w-full mt-2 min-h-[600px]">
      <h4 className="text-lg font-semibold">We will find your dream job</h4>
      <motion.div className="overflow-x-auto w-full table-responsive">
        <table className="min-w-[80%] bg-white mx-auto mt-[60px]">
          <thead className="bg-gray-200 text-center">
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data != null &&
              data.map((item) => (
                <tr key={item.Id} className="hover:bg-gray-100 text-center">
                  <td className="py-2 px-4 border-b">{item.Title}</td>
                  <td className="py-2 px-4 border-b">{item.Description}</td>
                  <td className="py-2 px-4 border-b">{item.Location}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        window.location = "JobInformation/" + item.Id;
                      }}
                    >
                      Learn More...
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
