export default function About() {
  return (
    <div className="container mx-auto">
      <div className="p-5">
        <div className="my-3">
          <h3 className="font-semibold">What is LogView?</h3>
          <p>
            LogView is a React application that visualizes system-generated logs
            in a user-friendly table format.
          </p>
        </div>
        <div className="my-3">
          <h3 className="font-semibold">Key Features</h3>
          <ul className="list-disc list-inside">
            <li>
              Data Fetching: It fetches log data from a file called
              &quot;daily_log.log&quot;.
            </li>
            <li>
              Data Parsing: It parses the log entries, extracting relevant
              information such as date, time, device, user, source IP/port, NAT
              IP/port, and destination IP/port.
            </li>
            <li>
              Table Creation: It generates an interactive table to display the
              parsed log data.
            </li>
            <li>
              Data Display: The table presents columns for each data field,
              making it easy to read and analyze the log entries.
            </li>
            <li>
              Refresh Button: It offers a &quot;Refresh&quot; button to manually
              fetch and display the latest log data.
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h3 className="font-semibold">Upcoming Features</h3>
          <ul className="list-disc list-inside">
            <li>Filtering logs based on specific criteria</li>
            <li>Sorting logs by different fields</li>
            <li>Highlighting important events or patterns</li>
            <li>Exporting logs to other formats</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-fit fixed top-[80%] left-[30%]">
        <img
          className="absolute animate-anticlockwise"
          src="/src/assets/Asset 2.png"
          alt=""
          height="420"
          width="420"
        />
        <img
          className="absolute animate-clockwise"
          src="/src/assets/Asset 1.png"
          alt=""
          height="350"
          width="350"
        />
        <img
          className="absolute animate-anticlockwise"
          src="/src/assets/Asset 2.png"
          alt=""
          height="300"
          width="300"
        />
      </div>
    </div>
  );
}
