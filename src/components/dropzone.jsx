import { useEffect, useState } from "react";

function Dropzone() {
  const [file, setFile] = useState(null);

  const handleFileChange = () => {
    const input = document.querySelector('input[type="file"]');
    input.click();
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (file && ["text/plain", "text/x-log"].includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem("fileData", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <>
      <div className="w-full">
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".txt,.log"
        />
        {file && (
          <div className="flex items-center justify-center bg-opacity-75 text-2xl font-bold w-full">
            <h2>{file.name}</h2>
          </div>
        )}
        {!file && (
          <div className="flex items-center justify-center h-full text-gray-600">
            <p className="font-medium">
              Drag and drop a .txt or .log file here, or
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
              onClick={() => handleFileChange()}
            >
              Select File
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropzone;
