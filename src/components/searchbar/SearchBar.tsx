import { SearchIcon } from "../svgIcons"

interface SearchProps {
  parentClass?: string,
  inputClass?: string,
}

const SearchBar = (props: SearchProps) => {
  return (
    <>
      <div className={`search-wrap h-fit ${props.parentClass ? props.parentClass : ''} relative`}>
        <div className="flex">
          <span className="w-5 h-5 block absolute left-5 top-1/2 -translate-y-1/2 text-black/50">
            <SearchIcon className="w-full h-full" />
          </span>
          <input type="text" name="" className={`bg-lightGray block rounded-lg leading-6 pl-12 pr-2 py-2 text-sm/18px font-medium  transition-all duration-300  focus:ring-2 focus:ring-customGray/30 focus:ring-offset-2 ${props.inputClass ? props.inputClass : ''}`} placeholder="Search" id="" />
        </div>
      </div>
    </>
  )
}

export default SearchBar