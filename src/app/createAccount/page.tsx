"use client"
import { Keypair } from "@solana/web3.js";
import { useRouter } from "next/navigation";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { mnemonicToSeed, mnemonicToSeedSync } from "bip39";

const CreateAccount = () => {
    const router = useRouter();
    const [seed, setSeed] = useState("");
    

    useEffect(() => {
        const storedSeed = localStorage.getItem("seed");
        const password = localStorage.getItem("password")
        if (storedSeed === null) {
            router.push("/");
        } else {
            setSeed(storedSeed);
        }
        if (password===null) {
            router.push("/CreatePassword")
        }
    
    }, [router]);

    let solwalletID = 0;
    let ethwalletID = 0;

    const createSolWallet =  () => {
        if (!seed) return;
        const password = localStorage.getItem("password");
        const decryptSeed = CryptoJS.AES.decrypt(seed, password!).toString(CryptoJS.enc.Utf8);
        const seedphrase = mnemonicToSeedSync(decryptSeed);
        const solanaPath = `m/44'/501'/${solwalletID}'/0'`
        const derivedseed = derivePath(solanaPath,seedphrase.toString("hex")).key
        const secretkey = nacl.sign.keyPair.fromSeed(derivedseed).secretKey;
        const publickey = Keypair.fromSecretKey(secretkey).publicKey.toBase58()
        const account = {
            solwalletID : solwalletID,
            privatekey: secretkey,
            publickey : publickey,
            derivePath : solanaPath
        }
        // Todo : store the account in localStorage array
        // 1. fetch the localstoaray account array
        // 2. convery the fetched array string into array
        // 3. add the element in existing array
        // 4. convert it into string and store it in local storage
        solwalletID = solwalletID + 1;
        console.log(account)
    };

    const createEthWallet = () => {
        // Todo crate Ethereum accounts
        if (!seed) return;
        alert('for now not avaiable')
    };

    return (
        <>
            <div className="flex justify-center m-52">
                <div>
                    <h1 className="text-6xl font-bold">Choose the blockchain</h1>
                    <div className="flex flex-col justify-center items-center bg-slate-900 h-96 rounded-lg">
                        <button
                            onClick={() => createSolWallet()}
                            className="flex justify-center items-center bg-slate-600 w-64 m-2 rounded-xl h-16 text-2xl hover:bg-slate-700"
                        >
                            <img src="/coins/solana.png" alt="solana" width={50} height={50} className="m-2" />
                            Solana
                        </button>
                        <button
                            onClick={() => createEthWallet()}
                            className="flex justify-center items-center bg-slate-600 w-64 m-2 rounded-xl h-16 text-2xl hover:bg-slate-700"
                        >
                            <img src="/coins/ethereum.png" alt="ethereum" width={50} height={50} className="m-2" />
                            Ethereum
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
