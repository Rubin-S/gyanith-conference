// src/components/NoPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch, MdHome, MdArrowBack } from "react-icons/md";

const NoPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would route to a search results page
    console.log("Searching for:", query);
  };

  return (
    <main
      role="main"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12 bg-neutral-50 text-center"
    >
      
      {/* ---------------------------------------------------------------------------
          VISUAL / 404 TEXT
      --------------------------------------------------------------------------- */}
      <div className="relative mb-8">
        <h1 className="text-[150px] font-heading font-black text-primary-100 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 py-1 rounded-full text-secondary-600 font-bold border border-secondary-200 shadow-sm uppercase tracking-widest text-sm">
            Page Not Found
          </span>
        </div>
      </div>

      <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
        Lost in the Cloud?
      </h2>
      <p className="text-gray-600 max-w-md mx-auto mb-10 text-lg leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* ---------------------------------------------------------------------------
          SEARCH BAR
      --------------------------------------------------------------------------- */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-md flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden mb-10 shadow-sm focus-within:ring-2 focus-within:ring-primary-500 transition-all"
      >
        <div className="pl-4 text-gray-400">
          <MdSearch className="text-xl" />
        </div>
        <input
          type="text"
          placeholder="Search the conference site..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 text-gray-700 bg-transparent outline-none placeholder-gray-400"
        />
      </form>

      {/* ---------------------------------------------------------------------------
          ACTION BUTTONS
      --------------------------------------------------------------------------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
        >
          <MdArrowBack /> Go Back
        </button>
        
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
        >
          <MdHome /> Back to Home
        </Link>
      </div>

    </main>
  );
};

export default NoPage;