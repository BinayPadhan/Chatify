import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex-1 h-full flex flex-col bg-slate-900'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-800 px-4 py-2 border-b border-slate-700'>
						<span className='text-slate-400'>To:</span>{" "}
						<span className='text-white font-bold'>
							{selectedConversation.fullName}
						</span>
					</div>
					{/* Messages should take available space */}
					<div className='flex-1 overflow-y-auto bg-slate-900 px-4 md:px-0'>
						<Messages />
					</div>
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full bg-slate-900 px-4'>
			<div className='text-center sm:text-lg md:text-xl text-slate-300 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome to Chatify !!👋 {authUser.fullName}</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center text-slate-400' />
			</div>
		</div>
	);
};
