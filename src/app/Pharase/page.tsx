"use client";
import { generateMnemonic } from "bip39";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../component/Button";
import { useRouter } from "next/navigation";
import CryptoJS from 'crypto-js';

const Phrase = () => {
    const router = useRouter();
    const [mnemonic, setMnemonic] = useState(generateMnemonic());
    const mnemonicArray = mnemonic.split(" ");

    useEffect(() => {
        if (localStorage.getItem("seed")) {
            router.push("/EnterPassword");
        }
    }, [router]);

    const createSeed = () => {
        const secret = process.env.PASSWORD_SECRET_KEY;
        if (!secret) {
            throw new Error("Missing PASSWORD_SECRET_KEY");
        }

        const encryptedSeed = CryptoJS.AES.encrypt(mnemonic, secret).toString();
        console.log(encryptedSeed);
        localStorage.setItem("seed", encryptedSeed);
        router.push("/CreatePassword");
    }

    return (
        <div className="flex justify-center mt-32">
            <div className="grid grid-cols-12">
                <div className="col-span-12 text-6xl m-2 font-extrabold">
                    Secret Recovery Phrase
                </div>
                <div className="col-span-12 text-2xl m-2 text-slate-400">
                    <div className="flex justify-center">
                        Save these words in a safe place
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="grid grid-cols-3">
                        {mnemonicArray.map((item) => (
                            <Words key={item}>{item}</Words>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 flex justify-center">
                    <PrimaryButton onClick={createSeed}>Next</PrimaryButton>
                </div>
            </div>
        </div>
    );
}

const Words = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="p-2 flex justify-center items-center h-16 text-white rounded-lg text-1xl m-2">
            {children}
        </div>
    );
}

export default Phrase;