import Banner from "../components/Banner";
import Suggestion from "../components/Suggestion";
import PopularCategory from "../components/PopularCategory";

import TrendyCollection from "../components/TrendyCollection";
import { IoMdHome } from "react-icons/io";
import TwoBlocks from "../components/TwoBlocks";
import Blogs from "../components/Blogs";
import Reviews from "../components/Reviews";
export default function Home (){
  
    return (
      <>
        <Banner />
        <Suggestion />
        <PopularCategory />
        <TrendyCollection title={"TrendyCollection"} desc={'Collect your loves with our newest arrivals. '}/>
        <div className="bg-[#f9ebfa] opcacity-5 w-full min-h-[50px] flex justify-center items-center py-7 mt-10 font-Jost ">
            <h1 className="flex  items-center gap-5 text-2xl max-md:flex-col text-center"> <span><IoMdHome /> </span> Find Jewelry Shops Near You <span className="border-2 border-black px-10 text-base text-center py-1 font-semibold hover:bg-black hover:text-white transition ease-linear cursor-pointer hover:font-semibold ">Find Store</span></h1>
        </div>
        <TrendyCollection title={'Autumn Collection'} desc={'Collect your loves with our autumn arrivals.'}/>
        <div className="flex items-center justify-center w-full py-5">
            <div className="w-1/2 py-[1px] bg-slate-400"></div>
        </div>
         <TwoBlocks />
         <Reviews />
         <Blogs />

         <div className="bg-[#F5F5F5] h-[250px] flex justify-center items-center">
              <div className="flex flex-col gap-3 text-center">
                 <h1 className="text-3xl  ">Subscribe NewsLatter</h1>
                 <p className="text-base text-slate-400 ">Sing up to our Newsletter and get the discount code.</p>
                 <div className="gap-2 flex">
                    <input type="text" name="" id=""  className="border-2 border-black w-[350px] bg-transparent px-1 py-3 text-slate-400 outline-none" placeholder="Email Address"/>
                    <button className="px-7 py-2 bg-[#222222] text-white hover:bg-black transition ease-in">Subscribe</button>
                 </div>
              </div>
         </div>
      </>
   )
}

