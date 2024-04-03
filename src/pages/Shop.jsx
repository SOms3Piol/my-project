import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import {  FiMenu } from "react-icons/fi";
import { CiBoxList } from "react-icons/ci";
import { TfiLayoutGrid2 , TfiLayoutGrid4 } from "react-icons/tfi"
import { BsGrid3X3Gap } from "react-icons/bs";
import { useState } from "react";
import Grid from "../components/ShopComponent";
import NewsLatter from '../components/NewLatter'
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

         <NewsLatter />
        </div>
    )
}

function List(){
    return(
        <div>
            
        </div>
    )
}