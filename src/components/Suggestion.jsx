export default function Suggestion (){
    return(
     <div className="something sm:grid grid-cols-3 gap-2 px-3 max-md:grid-cols-2 font-Jost">
      
          <div className="relative bg-red-800 group overflow-hidden ">
              <div className="w-full">
                <img 
                src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-1.jpg" 
                alt="Image"
                className="group-hover:scale-125 transition ease-in duration-300  w-full" />
              </div>
              <div className="absolute top-0 bg-zinc-800 w-full h-full opacity-25">
                
              </div>
              <div className="px-10 absolute top-10 ">
                      <p className="text-slate-800 text-base max-sm:text-xs md:max-lg:text-xs">2021 Fashoin</p>
                      <h1 className="text-3xl max-sm:text-base md:max-lg:text-base whitespace-nowrap">Just Launched <br /> Desk THe Hals</h1>
                      <p className="font-semibold text-black max-sm:text-xs ">See More</p>
                </div>
          </div>
          <div className="relative bg-red-800 group overflow-hidden max-sm:hidden">
              <div className="">
                <img 
                src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-2.jpg" 
                alt="Image"
                className="group-hover:scale-125 transition ease-in duration-300" />
              </div>
              <div className="absolute top-0 bg-zinc-800 w-full h-full opacity-25">
                
              </div>
              <div className="px-10 absolute top-10">
                      <p className="text-slate-800 text-base md:max-lg:text-xs">Flat discount</p>
                      <h1 className="text-3xl md:max-lg:text-base whitespace-nowrap">Necklaces & <br /> Body jewels</h1>
                      <p className="font-semibold text-black ">See More</p>
                </div>
          </div>
          <div className="relative  group overflow-hidden max-md:hidden">
              <div className="">
                <img 
                src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/home-default-banner-3.jpg" 
                alt="Image"
                className="group-hover:scale-125 transition ease-in duration-300 object-fit" />
              </div>
              <div className="absolute top-0 bg-zinc-800 w-full h-full opacity-25">
                
              </div>
              <div className="px-10 absolute top-10 ">
                      <p className="text-white text-base md:max-lg:text-xs">New Collection</p>
                      <h1 className="text-3xl text-white md:max-lg:text-base">Jewelary & <br /> Charm Rings</h1>
                      <p className="font-semibold text-white">Shop now</p>
                </div>
          </div>
          
       </div>
    )
}