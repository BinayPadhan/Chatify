import React from "react";
import { MdLogout } from "react-icons/md";
import useLogout from "../hooks/useLogout";

function LogoutBtn() {
  const { loading, logout } = useLogout();
  return (
    <div className="absolute bottom-6 left-6">
      {!loading ? (
        <MdLogout className="w-6 h-6 cursor-pointer " onClick={logout} />
      ) : (
        <span className="loading loading-spinner loading-md"></span>
      )}
    </div>
  );
}

export default LogoutBtn;
