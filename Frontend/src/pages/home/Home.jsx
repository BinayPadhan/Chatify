import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../components/MessageContainer";

function Home() {
  return (
    <>
      <div class="flex h-screen">
        {/* <!-- Sidebar (30% width) --> */}
        <div class="w-[30%]">
          <Sidebar />
        </div>

        {/* <!-- Main Content (70% width) --> */}
        <div class="w-[70%] ">
          <MessageContainer />
        </div>
      </div>
    </>
  );
}

export default Home;
