import {BiSearch} from "react-icons/bi"

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto px-4 py-2 rounded-full shadow-sm hover:shadow-sm transition cursor-pointer">
      <div className=" flex flex-row items-center justify-between">
   
       
        <div className=" items-center text-sm pl-6 pr-2 taxt-gray-600 flex flex-row  gap-3">
           
            <div className=" p-2 bg-rose-500 rounded-full text-white"> <BiSearch size= {18}/> </div>
        </div>
      </div>
    </div>
  )
}

export default Search