"use client"
import { useRouter } from "next/navigation";
import { PrimaryButton } from "../component/Button";

const CreatePassword = () => {
    const router = useRouter();

    return <div className="flex justify-center m-32">
        <div>
            <h1 className="flex font-bold text-6xl justify-center mb-3">Create a Passowrd</h1>
            <h3 className="flex justify-center text-slate-500 text-2xl font-semibold">It should be at least 8 characters <br /> You'll need this to unlock wallet</h3>
            <div className="flex justify-center m-10">
                <form action="">
                    <input className="text-2xl block m-5 w-96 p-5 rounded-lg bg-slate-900" type="password" placeholder="Enter the password" />
                    <input className="text-2xl block m-5 w-96 p-5 rounded-lg bg-slate-900" type="password" placeholder="confirm password" />
                    <div className="flex justify-center">
                        <PrimaryButton onClick={() => {
                            router.push('/dashbord')
                        }}>Next</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </div>

}

export default CreatePassword;