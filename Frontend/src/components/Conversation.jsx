import React from "react";

function Conversation() {
  return (
    <>
      <div className="flex rounded-full bg-base-100 w-100 h-[50px] my-2">
        <div className="avatar">
          <div className="w-10 h-10 my-auto ml-2 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex justify-center ">
            <p className="my-auto font-bold font-mono ml-4">John Doe</p>
        </div>
      </div>
    </>
  );
}

export default Conversation;
