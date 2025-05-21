import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
	return (
		<div className='w-full h-full border-r border-slate-700 bg-slate-800 flex flex-col'>
			{/* Search */}
			<div className="p-4 bg-slate-800">
				<SearchInput />
			</div>

			{/* Divider */}
			<div className='border-t border-slate-700'></div>

			{/* Conversations list */}
			<div className='flex-1 overflow-y-auto bg-slate-800'>
				<Conversations />
			</div>

			{/* Logout at the bottom */}
			<div className="p-8 border-t border-slate-700 bg-slate-800">
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;
