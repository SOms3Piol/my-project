export default function NewsLatter(){
    return(
        <div className="bg-[#F5F5F5] h-[250px] flex justify-center items-center mt-10">
            <div className="flex flex-col gap-3 text-center">
            <h1 className="text-3xl  ">Subscribe NewsLatter</h1>
            <p className="text-base text-slate-400 ">Sing up to our Newsletter and get the discount code.</p>
            <div className="gap-2 ">
                <input type="text" name="" id=""  className=" border-2 border-black w-[350px] bg-transparent px-1 py-3 text-slate-400 outline-none" placeholder="Email Address"/>
                <button className="px-7 py-2 bg-[#222222] text-white hover:bg-black transition ease-in">Subscribe</button>
            </div>
            </div>
        </div>
    )
}