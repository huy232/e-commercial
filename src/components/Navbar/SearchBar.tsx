import { HiMagnifyingGlass } from "react-icons/hi2"

type SearchBarProps = {
	translation: string
}

const SearchBar = ({ translation }: SearchBarProps) => {
	return (
		<div>
			<label className="relative block w-[420px]">
				<span className="sr-only">Search</span>
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<HiMagnifyingGlass className="text-slate-500" />
				</span>
				<input
					className="placeholder:italic placeholder:text-slate-400 dark:bg-[#52525b] outline-none block w-full border border-transparent rounded-md py-1 pl-6 pr-1 shadow-sm focus:border-yellow-900 focus:ring-yellow-900 focus:ring-1 sm:text-sm duration-200"
					placeholder={`${translation}`}
					type="text"
					name="search"
				/>
			</label>
		</div>
	)
}
export default SearchBar
