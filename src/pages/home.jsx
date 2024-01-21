import { useEffect, useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";

function Home() {
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setLoading(true);
    fetchData();
    setTimeout(() => {
      setLoading(false);
      setIsClicked(false);
    }, 1000); // Adjust duration as needed
  };

  const file = "daily_log.log";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(file);
      const text = await response.text();
      const lines = text.split("\n");

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
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <main className="container mx-auto">
        <div className="flex justify-end space-x-1 m-2">
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <MdOutlineRefresh
              className={`transition-all duration-300 ${
                isClicked ? "animate-spin" : ""
              }`}
            />
          </button>
        </div>

        <div className="md:w-full overflow-x-visible">
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
                    <td className="px-1">{index+1}</td>
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

export default Home;
