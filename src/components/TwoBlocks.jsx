export default function TwoBlocks(){
    return(
        <div className="grid grid-cols-2 gap-10 px-3 font-Jost mt-10 sm:max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="relative group">
             <div className="overflow-hidden">
                <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-4.jpg" 
                alt="" 
                className="group-hover:scale-110 transition ease-linear duration-300"/>
             </div>
             <div className="absolute top-0 w-full h-full px-10 py-10">
                <h1 className="text-3xl py-1"> New Bangles <br /> Collection</h1>
                <p className="text-base text-slate-700 py-1"> catch the highlights on the roof</p>
                <span className="text-base font-semibold relative group/text overflow-hidden">Shop more
                     <div className="w-full py-[1px] bg-zinc-800 absolute bottom-0 group-hover/text:scale-0 transition origin-right rounded "></div>
                     <div className="w-full py-[1px] bg-black absolute bottom-0 delay-100 transition origin-left group-hover/text:scale-100 scale-0 delay-300 rounded"></div>
                 </span>
             </div>
        </div>
        <div className="relative group max-sm:hidden">
             <div className="overflow-hidden ">
                <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-5.jpg" 
                alt=""
                className="group-hover:scale-110 transition ease-linear duration-300"  />
             </div>
             <div className="absolute top-0  h-full px-10 py-10">
                 <h1 className="text-3xl py-1">Culture of <br /> Ring Design</h1>
                 <p className="text-base text-slate-700 py-1">Pasha de carteir collection</p>
                 <span className="text-base font-semibold relative group/text overflow-hidden">Shop more
                     <div className="w-full py-[1px] bg-zinc-800 absolute bottom-0 group-hover/text:scale-0 transition origin-right rounded "></div>
                     <div className="w-full py-[1px] bg-black absolute bottom-0 delay-100 transition origin-left group-hover/text:scale-100 scale-0 delay-300 rounded"></div>
                 </span>
             </div>
        </div>
     </div>
    )
}