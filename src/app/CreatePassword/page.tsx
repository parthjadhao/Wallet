"use client"
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../component/Button";
import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

const CreatePassword = () => {
    // Todo : store data
    const router = useRouter();
    const [createPassword, setCreatePassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if(localStorage.getItem("password")){
            router.push('/EnterPassword')
        }
        if (!localStorage.getItem("seed")) {
            router.push('/');
        }
    }, []);

    const handleCreatePassword = () => {
        if (createPassword.length < 8) {
            alert("Please enter a password of at least 8 characters");
            return;
        }
        if (createPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const fetchedSeed = localStorage.getItem("seed");
        if (!fetchedSeed) {
            alert("Seed not found.");
            return;
        }

        try {
            const seed = CryptoJS.AES.decrypt(fetchedSeed, process.env.PASSWORD_SECRET_KEY!).toString(CryptoJS.enc.Utf8);
            if (!seed) {
                alert("Failed to decrypt seed");
                return;
            }
            const encryptSeedByPassword = CryptoJS.AES.encrypt(seed, confirmPassword).toString();
            localStorage.setItem("seed", encryptSeedByPassword);
            localStorage.setItem("password", confirmPassword);
            router.push('/dashbord');
        } catch (error) {
            console.error("Error encrypting/decrypting:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="flex justify-center m-32">
            <div>
                <h1 className="flex font-bold text-6xl justify-center mb-3">Create a Password</h1>
                <h3 className="flex justify-center text-slate-500 text-2xl font-semibold">
                    It should be at least 8 characters <br /> You'll need this to unlock the wallet
                </h3>
                <div className="flex justify-center m-10">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            className="text-2xl block m-5 w-96 p-5 rounded-lg bg-slate-900"
                            type="password"
                            placeholder="Enter the password"
                            onChange={(event) => setCreatePassword(event.target.value)}
                        />
                        <input
                            className="text-2xl block m-5 w-96 p-5 rounded-lg bg-slate-900"
                            type="password"
                            placeholder="Confirm password"
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        <div className="flex justify-center">
                            <PrimaryButton onClick={handleCreatePassword}>Next</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePassword;