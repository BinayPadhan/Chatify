import React from "react";
import { LuSend } from "react-icons/lu";

function SendMessage() {
  return (
    <div>
      <label className="input rounded-none input-bordered flex items-center gap-2 absolute bottom-0  w-[70%]">
        <input type="text" className="grow " placeholder="Type a message" />
        <LuSend className="w-6 h-6"/>
      </label>
    </div>
  );
}

export default SendMessage;
