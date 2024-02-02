import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Dropzone from "/src/components/dropzone";

function ToolPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileData, setFileData] = useState(null);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setIsClicked(true);
    setLoading(true);

    handleShowData();
    setTimeout(() => {
      setLoading(false);
      setIsClicked(false);
    }, 1000); // Adjust duration as needed
  };

  useEffect(() => {
    localStorage.removeItem("fileData");

    const handleStorageChange = () => {
      setFileData(localStorage.getItem("fileData"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleShowData = () => {
    const base64Data = localStorage.getItem("fileData");
    if (base64Data) {
      const textData = atob(base64Data.split(",")[1]); // Extract text from base64
      try {
        const lines = textData.split("\n");
        const parsedData = lines.map((line) => {
          const log = line.split(" ");
          const parsedLog = {
            Date: log[0] + " " + log[1],
            Time: log[2],
            Device: log[3],
            User: log[5].slice(4, -1), // Remove prefix and suffix
            SrcIPPort: log[12].split("->")[0],
            NATIPPort: log[14].split("->")[2].slice(0, -1), // Remove comma
            DstIPPort: log[12].split("->")[1].slice(0, -1), // Remove comma
          };
          return parsedLog;
        });
        setData(parsedData);
      } catch (error) {
        alert("Something Went Wrong!!! Check your file & Try Again.");
      }
    }
  };

  return (
    <>
      <main className="container mx-auto">
        <div className="flex w-full justify-between items-center space-x-1  border rounded-lg shadow-md bg-white hover:bg-gray-100 cursor-pointer">
          <Dropzone className="w-full" />
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-4 px-4 rounded"
          >
            <FaArrowRight 
              className={`transition-all duration-300 font-bold text-2xl ${
                isClicked ? "animate" : ""
              }`}
            />
          </button>
        </div>
        <div className="md:w-full overflow-x-visible">
          <div className="scrollbar-hide overflow-x-scroll md:overflow-x-hidden">
            <table className="table-auto w-full text-center m-2">
              <thead className="bg-gray-200">
                <tr className="py-2">
                  <th className="px-1">Id</th>
                  <th className="px-1">Date</th>
                  <th className="px-1">Time</th>
                  <th className="px-1">Device</th>
                  <th className="px-1">User</th>
                  <th className="px-1">SrcIP:Port</th>
                  <th className="px-1">NATIP:Port</th>
                  <th className="px-1">DstIP:Port</th>
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  data.map((item, index) => (
                    <tr key={index} className="py-2 hover:bg-gray-100">
                      <td className="px-1">{index + 1}</td>
                      <td className="px-1">{item.Date}</td>
                      <td className="px-1">{item.Time}</td>
                      <td className="px-1">{item.Device}</td>
                      <td className="px-1">{item.User}</td>
                      <td className="px-1">{item.SrcIPPort}</td>
                      <td className="px-1">{item.NATIPPort}</td>
                      <td className="px-1">{item.DstIPPort}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {loading && (
            <div className="flex justify-center">
              <div
                className={`bg-red-200 h-12 w-12 m-4 ${
                  isClicked ? "animate-spin" : ""
                }`}
              ></div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default ToolPage;
