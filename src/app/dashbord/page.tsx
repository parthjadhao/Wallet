"use client"
import { useEffect, useState } from "react";
import { PrimaryButton } from "../component/Button";
import { useRouter } from "next/navigation";

const Dashbord = () => {
    const router = useRouter()
    useEffect(()=>{
        // fetch account
        // 1. see if there is any account in accunt array
        // 2. false - route to createAccount
    },[])


    return <div className=" grid grid-cols-12 h-screen w-full">
        <div className="flex flex-col justify-between col-span-2 bg-slate-950 m-2">
            <div>
                <Account accountLogo="A1" accountName="Account-1"></Account>
                <Account accountLogo="A2" accountName="Account-2"></Account>
                <Account accountLogo="A3" accountName="Account-3"></Account>
                <Account accountLogo="A4" accountName="Account-4"></Account>
                <Account accountLogo="A5" accountName="Account-5"></Account>
            </div>
            <div className="mb-12">
                <div className="flex justify-center">
                    <button className=" bg-slate-500 font-semibold p-4 w-full text-2xl" onClick={()=>{router.push('/createAccount')}}>Create Account</button>
                </div>
                <div>
                    <button className="bg-slate-600 font-semibold p-4 w-full text-2xl">Setting</button>
                </div>
            </div>
        </div>
        <div className="col-span-10">
            <div className="flex justify-center">
                <AccountDetail></AccountDetail>
            </div>
        </div>
    </div>
}

export default Dashbord

const publicKey = "klsdfjlsdfj"

const AccountDetail = () => {
    const [copied, setCopeid] = useState(false)
    useEffect(() => {
        if (copied) {
            let timeout = setTimeout(() => {
                setCopeid(false)
            }, 3000)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [copied])


    return <div className="m-20 w-1/2  rounded-xl">
        <div className="flex w-full justify-between">
            <div className="bg-slate-700 p-5 m-5 rounded-full ">
                <img src="/coins/solana.png" alt="hello" width={70} height={70} />
            </div>
            <h1 className="flex items-center font-bold text-6xl ">Solana</h1>
            <button className="flex items-center bg-red-600 mt-14 mb-14 mr-6 rounded-lg p-2 hover:bg-red-700 font-medium">Delete Account</button>
        </div>
        <div className="flex justify-between  w-full">
            <div className="text-7xl mt-2">$0.0 <span className="text-slate-500 text-3xl font-semibold">USD</span></div>
            <button className="bg-slate-700 p-3  m-10 rounded-xl text-xl w-52" onClick={() => {
                setCopeid(true)
                navigator.clipboard.writeText(publicKey)
            }}>{copied ? "copied" : "your wallet address"}
            </button>
        </div>
        <div className="flex justify-between">
            <PrimaryButton onClick={() => { }}>Send</PrimaryButton>
            <PrimaryButton onClick={() => { }}>Swap</PrimaryButton>
            <PrimaryButton onClick={() => { }}>Recieve</PrimaryButton>
        </div>
    </div>
}

const Account = ({ accountName, accountLogo }: {
    accountName: string,
    accountLogo: string
}) => {
    return <div className="flex justify-center bg-slate-800 m-2 p-2 rounded-2xl">
        <div className="m-2 rounded-full bg-slate-500 w-9 h-9 flex justify-center items-center">
            {accountLogo}
        </div>
        <div className="m-2 flex items-center">{accountName}</div>
    </div>
}