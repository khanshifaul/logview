import { useEffect, useState } from "react";

function Dropzone() {
  const [file, setFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault(); // Allow dropping
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    // Validate file type
    if (file) {
      setFile(file);
    }
  };

  const handleFileChange = (event) => {
    const input = document.querySelector('input[type="file"]');
    input.click();
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem("fileData", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <>
      <div className={`w-full`} onDragOver={handleDragOver} onDrop={handleDrop}>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept=".txt,.log"
        />
        {file && (
          <div
            onClick={handleFileChange}
            className="flex items-center bg-opacity-75 text-2xl font-bold w-full"
          >
            <h2>{file.name}</h2>
          </div>
        )}
        {!file && (
          <div className="flex items-center h-full text-gray-600">
            <p className="font-medium">
              Drag and drop a .txt or .log file here, or
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded ml-4"
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
