import React from 'react'
import {FaMagnifyingGlass} from "react-icons/fa6"
import {IomdClose} from "react-icons/io"

const SearchBar = ({value,onChange,handleSearch,onClearSearch}) => {

  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
      type="text"
      placeholder="search notes"
      className="w-full text-x5 bg-transparent py-[11px] outline-none"
      value={value}
      onChange={onChange}
      />

    {value && ( <IomdClose className="text-xl text-slate-500 cursor-pointer-hover:text-black mr-3" onClick={onClearSearch}/>  
)}
   
    <FaMagnifyingGlass className="text-slate-400 cursor-pointer-hover:text-black" onClick={handleSearch}/>

    </div>
  )
}

export default SearchBar
