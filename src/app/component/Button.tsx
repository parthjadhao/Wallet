export const PrimaryButton = ({children,onClick}:{
    children: React.ReactNode,
    onClick: ()=> void
}) =>{
    return <><button onClick={()=>{onClick()}} className="m-5 bg-slate-50 text-slate-600 font-bold w-52 h-10 rounded-lg hover:bg-slate-100 text-2xl">
        {children}
    </button></>
}