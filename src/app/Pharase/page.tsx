import { generateMnemonic, mnemonicToSeedSync } from "bip39"
import React, { Children, ReactNode, useEffect, useState } from "react";
import { PrimaryButton } from "../component/Button";

const Words = ({ children }: {
    children: React.ReactNode
}) => {
    return <div className="p-2 flex justify-center iteam-align h-16 text-white rounded-lg text-1xl m-2">
        {children}
    </div>
}

const Phrase = () => {
    const mnemonic = generateMnemonic();
    const mnemonicArray = mnemonic.split(" ")
    console.log(mnemonicArray)
    function createSeed() {
        
    }

    return <>
        <div className="flex justify-center mt-32">
            <div className="grid grid-cols-12">
                <div className="col-span-12 text-6xl m-2 font-extrabold">
                    Secret Recovery Phase
                </div>
                <div className="col-span-12 text-2xl m-2 text-slate-400">
                    <div className="flex justify-center">
                        Save this words in safe place
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="grid grid-cols-3">
                        {mnemonicArray.map((iteam)=><Words>{iteam}</Words>)}
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="flex justify-center">
                        <PrimaryButton onClick={()=>{createSeed()}}>Next</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default Phrase