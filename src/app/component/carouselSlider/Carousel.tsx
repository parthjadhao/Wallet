"use client"
// import {
//     BsFillArrowRightCircleFill,
//     BsFillArrowLeftCircleFill,
//   } from "react-icons/bs";
const ArrowLeftDoubleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#FFFFFF"} fill={"none"} {...props}>
        <path d="M11.5 18C11.5 18 5.50001 13.5811 5.5 12C5.49999 10.4188 11.5 6 11.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 18C18.5 18 12.5 13.5811 12.5 12C12.5 10.4188 18.5 6 18.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const ArrowRightDoubleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"} {...props}>
        <path d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const Carousel = ({ slides }: {
    slides: String[]
}) => {
    return <div className="rounded-md overflow-hidden relative xl:w-1/3">
        <div>
            <div><Slides></Slides></div>
            <div className="flex justify-center">
                <div className="h-5 w-5 m-1 rounded-full bg-slate-300"></div>
                <div className="h-5 w-5 m-1 rounded-full bg-slate-600"></div>
                <div className="h-5 w-5 m-1 rounded-full bg-slate-600"></div>
            </div>
            
        </div>
        
    </div>
}

// {heading,imgPath,subheading}:{
//     // heading:String,
//     // imgPath:String,
//      subheading:String
// }
const Slides = () => {
    return <div className="p-2">
        <h1 className="text-5xl font-extrabold text-center m-2">Let's get started </h1>
        <p className="text-2xl font-bold text-center">Trusted by millions, walletX is secure making world of web 3 secure for all.</p>
        <div className="flex justify-center m-10">
            <img src="/logo.svg" alt="" />
        </div>
        <div className=" absolute top-0 w-full h-full flex justify-between">
            <button className="ml-5">
                <ArrowLeftDoubleIcon></ArrowLeftDoubleIcon>
            </button>
            <button className="mr-5">
                <ArrowRightDoubleIcon></ArrowRightDoubleIcon>
            </button>
        </div>
    </div>
}


export default Carousel
