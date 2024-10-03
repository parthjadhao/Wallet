"use client"
import { Keypair } from "@solana/web3.js";
import { useRouter } from "next/navigation";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { mnemonicToSeedSync } from "bip39";

const CreateAccount = () => {
    const router = useRouter();
    const [seed, setSeed] = useState("");
    useEffect(() => {
        const storedSeed = localStorage.getItem("seed");
        const password = localStorage.getItem("password");
        
        if (!storedSeed) {
            router.push("/");
            return;
        }
        if (!password) {
            router.push("/CreatePassword");
            return;
        }
        setSeed(storedSeed);
    }, [router]);
    
    const createSolWallet = () => {
        let solWalletID=0;
        if (!seed) return;
        alert("code execution reached here")
        const password = localStorage.getItem("password");
        try {
            const decryptedSeed = CryptoJS.AES.decrypt(seed, password!).toString(CryptoJS.enc.Utf8);
            const seedPhrase = mnemonicToSeedSync(decryptedSeed);
            const solanaPath = `m/44'/501'/${solWalletID}'/0'`;
            const derivedSeed = derivePath(solanaPath, seedPhrase.toString("hex")).key;
            const secretKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const publicKey = Keypair.fromSecretKey(secretKey).publicKey.toBase58();
            const storedAccounts = localStorage.getItem('accounts');
            const accountsArray = storedAccounts ? JSON.parse(storedAccounts) : [];
            const newWalletID = accountsArray.length;
            const account = {
                solWalletID: newWalletID,
                privateKey: Array.from(secretKey),
                publicKey,
                derivePath: solanaPath
            };
            accountsArray.push(account);
            localStorage.setItem('accounts', JSON.stringify(accountsArray));
            console.log("Created Solana account:", account);
            router.push("/dashbord")
        } catch (error) {
            console.error("Error creating Solana wallet:", error);
        }
    };

    const createEthWallet = () => {
        // Todo: Create Ethereum accounts
        if (!seed) return;
        alert('Ethereum wallet creation is not available at the moment');
    };

    return (
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
    );
};

export default CreateAccount;