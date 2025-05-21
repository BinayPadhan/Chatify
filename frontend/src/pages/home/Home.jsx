import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { IoMenuOutline } from "react-icons/io5";

const Home = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className='flex h-screen w-screen bg-slate-900 relative'>
			{/* Sidebar */}
			<div className={`fixed md:static inset-y-0 left-0 z-40 w-[300px] md:w-[400px] transform transition-transform duration-300 ease-in-out ${
				isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
			}`}>
				<Sidebar />
			</div>

			{/* Overlay for mobile */}
			{isSidebarOpen && (
				<div 
					className='fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden'
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}

			{/* Message Container */}
			<div className='flex-1 h-full relative'>
				{/* Mobile Menu Button */}
				<button 
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='md:hidden absolute top-0 right-2 z-50 p-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors shadow-lg'
				>
					<IoMenuOutline size={24} />
				</button>
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
