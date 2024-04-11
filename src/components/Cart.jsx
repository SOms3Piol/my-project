import { Link } from "react-router-dom";
import { IoIosArrowForward , IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Cart(){
    const [shown, setShown] = useState(false);

    return(
        <div>
             <div className="flex  items-center p-5">
                 <Link to={'/'}>Home </Link>
                 <IoIosArrowForward className="text-slate-400" />
                 <Link to={'/shop'}>Shop </Link>
                 <IoIosArrowForward className="text-slate-400" />
                <h1 className="text-slate-400">Cart</h1>
             </div>
            <h1 className="text-5xl text-center">Cart </h1>
            <div className="w-full flex ">
                <div className="w-full mr-3 ml-3 px-3">
                    <table className="border-collapse table-auto  text-left m-3 w-full">
                        <thead>
                            <th><div className="product-remove w-[43px] h-[43px]"></div></th>
                            <th><div className="product-thumnail bg-zinc-800 min-w-[32px] max-w-[80px]"></div></th>
                            <th className="py-[15px] px-[12px]">Product </th>
                            <th className="py-[15px] px-[12px]">Price</th>
                            <th className="py-[15px] px-[12px]">Subtotal</th>
                        </thead>
                        <tbody>
                            <tr className="py-5 border-t border-t-slate-400  border-b border-b-slate-400 ">
                                <td><button className="p-3">X</button></td>
                                <td><div className="product-thumnail bg-zinc-800 min-w-[32px] max-w-[80px]"><img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-1-325x325.jpg" alt="" /></div></td>
                                <td className="py-[12px] px-[15px]">Blue Stripes & Stone Earrings</td>
                                <td className="py-[12px] px-[15px]">$249</td>
                                <td className="py-[12px] px-[15px]">$249</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-5 py-7 px-3 w-1/2 border border-black ">
                    <h1 className="tracking-normal px-3">Cart Total</h1>
                    <div className="flex justify-between  items-center  text-base tracking-tighter  px-3">
                        <h1>Subtotal</h1>
                        <p>$249</p>
                    </div>
                    <div className="tracking-tighter flex gap-9 py-3 px-3 items-center border-t border-t-slate-400">
                        <h1>Shipping To</h1>
                        <div>
                            <h1>Flate Rate</h1>
                            <p className="text-slate-400">California to CA</p>
                            <p className="flex items-center gap-1 font-medium text-[17px]">change Addreas <button onClick={()=>{
                                setShown(!shown)
                            }}><IoIosArrowDown/></button></p>
                            {
                                shown && (
                                    <motion.div 
                                     initial={ { height:0 , opacity:1 } }
                                     animate = { { height:'100%' , opacity:1 , transition: {
                                             ease: 'easeIn',
                                             duration: .5
                                         }  } }
                                    className="flex gap-3 flex-col overflow-hidden">
                                        <input className="border p-3" type="text" name="contry" id="" placeholder="Contary Name" />
                                        <input className="border p-3" type="text" name="city" id="" placeholder="City" />
                                        <input className="border p-3" type="text" name="zipcode" id="" placeholder="Zip Code" />
                                       <div>
                                            <button className="py-2 px-8 bg-zinc-800 hover:bg-black transition ease-in duration text-white">Update</button>
                                       </div>
                                    </motion.div>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex justify-between px-3 border-t border-t-slate-400 py-3">
                        <h1>Total</h1>
                        <p>$249</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}