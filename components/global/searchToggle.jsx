import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchToggle() {
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearching]);

  return (
    <div className="relative w-40">
      {/* Fixed width container */}
      {isSearching ? (
        <div className="flex items-center px-1 py-1 rounded-full bg-white  duration-300 bg-opacity-40 text-white hover:text-[#FFF32B] border border-white shadow-sm transition-all  backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-full p-1 mr-2">
            <FiSearch className="w-4 h-4 text-black" />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="bg-transparent text-black focus:outline-none text-sm placeholder-white w-full"
            onBlur={() => setIsSearching(false)}
          />
        </div>
      ) : (
        <button
          onClick={() => setIsSearching(true)}
          className="flex items-center w-full px-1 py-1 rounded-full bg-white hover:bg-[#FFF32B] hover:bg-opacity-40 bg-opacity-40 text-white border border-white shadow-sm hover:opacity-90 transition-all duration-300 group"
        >
          <div className="bg-white group-hover:bg-[#FFF32B]  duration-300 rounded-full p-1 mr-2">
            <FiSearch className="w-4 h-4 text-black" />
          </div>
          <span className="font-bold text-[11px]">SEARCH</span>
        </button>
      )}
    </div>
  );
}
