import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Item from "../components/Item";
import {  FiMenu } from "react-icons/fi";
import { CiBoxList } from "react-icons/ci";
import { TfiLayoutGrid2 , TfiLayoutGrid4 } from "react-icons/tfi"
import { BsGrid3X3Gap } from "react-icons/bs";
import { useState } from "react";
import Grid from "../components/ShopComponent";
export default function Shop(){
    const [column ,setColumn] = useState(3);
    const [list, setlist] = useState(false)
    return(
        <div>
             <div className="bg-[url('https://alukas.presslayouts.com/wp-content/uploads/2023/03/shop-page-title-bg.png')]
             bg-no-repeat bg-center  
             bg-cover h-[300px] w-full p-3
             flex justify-center items-center">
                    <div>
                         <h1 className="text-5xl font-normal">Shop</h1>
                        <div className="flex  items-center">
                            <Link to={'/'}>Home </Link>
                            <IoIosArrowForward className="text-slate-400" />
                            <h1 className="text-slate-400">Shop</h1>
                        </div>
                    </div>
             </div>
             {/* product Gallery teor Grid */}
             <div className="flex justify-between items-center py-4">
                <h1 className="flex items-center gap-1 text-xl px-3 py-5"><FiMenu /> Filter</h1>
                <div className="flex gap-3 items-center text-xl px-3">
                    Sort By
                    <button className="relative group" onClick={()=>{
                        setlist(true);
                    }} ><CiBoxList /><span className="hidden absolute text-xs  group-hover:flex">List</span></button>
                    <button className="relative" onClick={()=>{
                        setColumn(2)
                    }}><TfiLayoutGrid2 /> <span className="hidden">2 Columns</span></button>
                    <button className="relative max-md:hidden" onClick={()=>{
                        setColumn(3)
                    }}><BsGrid3X3Gap /> <span className="hidden">3 Columns</span></button>
                    <button className="relative max-md:hidden" onClick={()=>{
                        setColumn(4)
                    }}><TfiLayoutGrid4 /> <span className="hidden">4 Columns</span></button>
                </div>
             </div>
        {!list ? <Grid  cols={column} /> : <List /> }

        <div className="bg-[#F5F5F5] h-[250px] flex justify-center items-center mt-[150px]">
              <div className="flex flex-col gap-3 text-center">
                 <h1 className="text-3xl  ">Subscribe NewsLatter</h1>
                 <p className="text-base text-slate-400 ">Sing up to our Newsletter and get the discount code.</p>
                 <div className="gap-2 flex">
                    <input type="text" name="" id=""  className="border-2 border-black w-[350px] bg-transparent px-1 py-3 text-slate-400 outline-none" placeholder="Email Address"/>
                    <button className="px-7 py-2 bg-[#222222] text-white hover:bg-black transition ease-in">Subscribe</button>
                 </div>
              </div>
         </div>
        </div>
    )
}

function List(){
    return(
        <div>
            
        </div>
    )
}