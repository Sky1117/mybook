import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, user: null });
      localStorage.removeItem("User");
      toast.success("Logout Successfull");
      setTimeout(() => {
        window.location.reload();
        localStorage.removeItem("User");
      }, 2000);
    } catch (error) {
      toast.error("Error:" + error.message);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
