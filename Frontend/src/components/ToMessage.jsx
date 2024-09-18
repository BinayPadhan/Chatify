import React from "react";
import useConversation from "../zustand/useConversation";

function ToMessage() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className="navbar bg-slate-700">
      <div className="flex-1 ">
        <img
          className="w-9 h-9 my-auto ml-2 rounded-full"
          src={selectedConversation.profilepic}
        />{" "}
        <p className="text-xl text-white mx-2">{selectedConversation.fullName}</p>
      </div>
    </div>
  );
}

export default ToMessage;
