import React from "react";
import useConversation from "../zustand/useConversation";

function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex rounded-full bg-base-100 w-100 h-[50px] my-2 hover:bg-blue-400 cursor-pointer
      ${isSelected ? "bg-blue-400" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar">
          <div className="w-10 h-10 my-auto ml-2 rounded-full">
            <img src={conversation.profilepic} />
          </div>
        </div>
        <div className="flex justify-center ">
          <p className="my-auto font-bold font-mono ml-4">
            {conversation.fullName}
          </p>
        </div>
      </div>
    </>
  );
}

export default Conversation;
