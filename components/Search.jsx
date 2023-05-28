"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch("");

    router.push(`/${search}/`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-l outline-none"
        required
      />

      <button type="submit" className="p-2 bg-gray-800 text-white rounded-r">
        🚀
      </button>
    </form>
  );
}
