import axios from "axios";
import { useContext, useState } from "react";
import { toast, Zoom } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {  // renamed to "useSignup" to follow React hooks naming conventions
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleinputError({ fullName, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await axios.post("/api/auth/signup", {
                fullName, username, password, confirmPassword, gender
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            // Assuming the server returns JSON automatically, no need to call res.json()
            const data = await res.data;
            console.log(data);

            //localstorage.setItem
            localStorage.setItem('chat-user',JSON.stringify(data ));
            setAuthUser(data); // update the auth context with the new user data
            
            toast.success('Signup successfully', {
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
            toast.error(error.response?.data?.message || error.message, {
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
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
}

export default useSignup;

const handleinputError = ({ fullName, username, password, confirmPassword, gender }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all required fields');
        return false;
    }
    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long');
        return false;
    }
    return true;
};
