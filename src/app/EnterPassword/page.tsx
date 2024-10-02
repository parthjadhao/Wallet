"use client"
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../component/Button";
import { useEffect, useState } from "react";

const EnterPage = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");

    useEffect(() => {
        const storedPassword = localStorage.getItem("password");
        if (!storedPassword) {
            router.push('/');
        }
    }, []);

    const unlockWallet = () => {
        const storedPassword = localStorage.getItem("password");
        if (storedPassword !== password.trim()) { 
            alert("Entered wrong password, please try again.");
            return;
        }
        router.push('/dashbord');
    };

    return (
        <div className="flex justify-center m-40">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    className="text-2xl block m-5 w-96 p-5 rounded-lg bg-slate-900"
                    type="password"
                    placeholder="Enter the password"
                />
                <a href="" className="flex justify-center text-slate-500 text-2xl">Forgot password?</a>
                <div className="flex justify-center m-10">
                    <PrimaryButton onClick={unlockWallet}>Unlock</PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default EnterPage;
