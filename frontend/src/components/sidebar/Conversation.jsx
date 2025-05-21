import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex rounded-full bg-base-100 w-100 h-[50px] my-2 hover:bg-blue-400 cursor-pointer
      ${isSelected ? "bg-blue-400" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar relative">
          <div className="w-10 h-10 my-auto ml-2 rounded-full">
            <img src={conversation.profilepic} />
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <p className="my-auto font-bold font-mono ml-4 text-white">
            {conversation.fullName}
          </p>
          {isOnline && (
            <span className="badge badge-sm badge-success ml-2">online</span>
          )}
        </div>
      </div>
    </>
  );
};
export default Conversation;


