import NewsLatter from "../components/NewLatter";

export default function About(){
    return(
        <>
        <div className=" relative flex flex-wrap sm:flex-row ">
            <div className="gap-3 grid max-sm:grid-cols-2 grid-cols-2 place-items-center">
                <div className="flex flex-col gap-9 p-3 leading-7 ">
                    <h1 className="text-5xl max-sm:text-3xl leading-none">About Our <br /> Online Store</h1>
                    <p className="text-slate-400 max-sm:text-base ">With all his cruel ferocity and coldness there was an under of something in Tars Tarkas which he seemed ever battling to subdue. Could it be a of some human instinct come back </p>
                    <button className=" py-3 transition ease-in duration bg-zinc-800 hover:bg-black text-white w-[130px]">contact us</button>
                </div>
                <div className="bg-red-800">
                    <img className="" src="https://alukas.presslayouts.com/wp-content/uploads/2023/03/about-us-2-image-1.jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-3 max-sm:flex-row  justify-between w-full">
                 <div className="w-full">
                    <h3 className="text-3xl px-3">Our Mission</h3>
                    <p className="text-slate-400 mt-3 max-sm:text-base px-3">By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready. </p>
                 </div>
                 <div className="w-full">
                    <h3 className="text-3xl px-3">Our Vision</h3>
                    <p className="text-slate-400 mt-3 max-sm:text-base px-3">By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready. </p>
                 </div>
            </div>
        </div>
        <NewsLatter />
      </>
    )
}
