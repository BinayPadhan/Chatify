import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast, Zoom } from "react-toastify";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        // Immediate local logout for fast UI response
        localStorage.removeItem('chat-user');
        setAuthUser(null);
        toast.info('Logging out...');

        setLoading(true);
        try {
            // Proceed with API call after UI changes
            const { data } = await axios.post("/api/auth/logout", {}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (data.error) {
                throw new Error(data.error);
            }

            toast.success('Logout !!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                });
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || 'An error occurred during logout.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
                });
            console.error("Logout Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;
