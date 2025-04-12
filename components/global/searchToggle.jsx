import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

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
        <div className="flex items-center px-1 py-1 rounded-full bg-white bg-opacity-40 text-white border border-white shadow-sm transition-all duration-300 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-full p-2 mr-2">
            <FaSearch className="w-2 h-2 text-black" />
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
          className="flex items-center w-full px-1 py-1 rounded-full bg-white bg-opacity-40 text-white border border-white shadow-sm hover:opacity-90 transition-all duration-300"
        >
          <div className="bg-white rounded-full p-2 mr-2">
            <FaSearch className="w-2 h-2 text-black" />
          </div>
          <span className="font-bold text-[11px]">SEARCH</span>
        </button>
      )}
    </div>
  );
}
