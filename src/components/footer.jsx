export default function Footer() {
  return (
    <div className="container mx-auto space-y-4">
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
        <div className="text-center py-2">
          <p className="space-x-1">
            <span> &copy; {new Date().getFullYear()}</span>
            <span className="font-DancingScript">Designed &amp; Developed by</span>
            <a className="text-red-500 font-bold font-DancingScript" href="http://khanshifaul.github.io">KhanShifaul</a>
          </p>
        </div>
      </div>
    </div>
  );
}
