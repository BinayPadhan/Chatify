import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversation from "../hooks/useGetConversation.js";
import "../App.css";

function SearchList() {
  const { loading, conversation } = useGetConversation();

  return (
    <div
      className="bg-gray-800 text-white w-full mt-4 max-h-[500px] overflow-y-auto custom-scrollbar
"
    >
      {conversation.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
      {loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : null}
    </div>
  );
}

export default SearchList;
