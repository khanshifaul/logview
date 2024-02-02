import { MdOutlineWarningAmber } from "react-icons/md";

const NotFound = () => {
  return (
    <>
      <div className="container mx-auto text-center my-12">
        <div className="flex flex-col items-center">
          <MdOutlineWarningAmber className="text-9xl text-red-700"/>
          <h1 className="font-bold text-xl">404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for could not be found.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
