"use client"
import { useRouter } from "next/navigation"


export const Hero = () => {
    const router = useRouter();

    return <div className="flex justify-center m-40">
        <div >
            <h1 className="text-6xl font-bold">Create a web based crypto wallet</h1>
            <h3 className="text-3xl flex justify-center text-slate-400">store solana and ethereum securely with secureity of wallet</h3>
            <div className="flex justify-center">
                <button className="mt-14 mr-2 bg-slate-50 text-slate-600 font-bold w-52 h-10 rounded-lg hover:bg-slate-100 text-2xl" onClick={()=>{router.push("/Pharase")}}>Create Wallet</button>
                <button className="mt-14 ml-2 bg-slate-600 font-bold w-52 h-10 rounded-lg hover:bg-slate-700 text-2xl">Import Wallet</button>
            </div>
        </div>
    </div>
}