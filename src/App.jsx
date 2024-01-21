import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('daily_log.log');
      const text = await response.text();
      const lines = text.split('\n');

      const parsedData = lines.map(line => {
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
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <main className='container mx-auto'>
        <div className='flex justify-between items-center border-b-2 py-2 my-3'>
          <h1 className='font-bold text-3xl'>LogView</h1>
          <button onClick={fetchData} className='btn rounded bg-gray-200 p-2'>Refresh</button>
        </div>

        <div className='container mx-auto'>
          <table className="table-auto w-full text-center">
            <thead className='bg-gray-200'>
              <tr className='border-b-2'>
                <th className='px-3'>Date</th>
                <th className='px-3'>Time</th>
                <th className='px-3'>Device</th>
                <th className='px-3'>User</th>
                <th className='px-3'>SrcIP:Port</th>
                <th className='px-3'>NATIP:Port</th>
                <th className='px-3'>DstIP:Port</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className='border-b-2 my-2'>
                  <td className='px-3'>{item.Date}</td>
                  <td className='px-3'>{item.Time}</td>
                  <td className='px-3'>{item.Device}</td>
                  <td className='px-3'>{item.User}</td>
                  <td className='px-3'>{item.SrcIPPort}</td>
                  <td className='px-3'>{item.NATIPPort}</td>
                  <td className='px-3'>{item.DstIPPort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default App
