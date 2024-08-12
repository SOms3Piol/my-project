import Banner from "../components/Banner";
import Suggestion from "../components/Suggestion";
import PopularCategory from "../components/PopularCategory";
import Collection from "../components/TrendyCollection";
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
        <Collection title={"TrendyCollection"} desc={'Collect your loves with our newest arrivals. '}/>
        <div className="bg-[#f9ebfa] opcacity-5 w-full min-h-[50px] flex justify-center items-center py-7 mt-10 font-Jost ">
            <h1 className="flex  items-center gap-5 text-2xl max-md:flex-col text-center"> <span><IoMdHome /> </span> Find Jewelry Shops Near You <span className="border-2 border-black px-10 text-base text-center py-1 font-semibold hover:bg-black hover:text-white transition ease-linear cursor-pointer hover:font-semibold ">Find Store</span></h1>
        </div>
        <Collection title={'Autumn Collection'} desc={'Collect your loves with our autumn arrivals.'}/>
        <div className="flex items-center justify-center w-full py-5">
            <div className="w-1/2 py-[1px] bg-slate-400"></div>
        </div>
         <TwoBlocks />
         <Reviews />
         <Blogs />
         <NewsLatter /> 
      </>
   )
}

