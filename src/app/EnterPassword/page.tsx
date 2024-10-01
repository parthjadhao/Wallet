"use client"
import { PrimaryButton } from "../component/Button"

const EnterPage = () =>{
    return <div className="flex justify-center m-40">
        <form action="">
        <input className="text-2xl block m-5 w-96 p-5 rounded-lg bg-slate-900" type="password" placeholder="Enter the password" />
        <a href="" className="flex justify-center text-slate-500 text-2xl">forgot password</a>
            <div className="flex justify-center m-10">
                <PrimaryButton onClick={()=>{}}>Unlock</PrimaryButton>
            </div>
        </form>
    </div>
}

export default EnterPage