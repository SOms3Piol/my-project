import { useEffect, useState } from "react"

export default function ImageText(){

    return(
        <div className="grid grid-cols-2  gap-5 mt-3 max-sm:flex max-sm:flex-col px-3">
            <div className="flex  max-lg:flex max-lg:flex-col-reverse  py-3">
                <div className="flex gap-3 px-1  max-md:justify-center  lg:flex-col">
                    <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-150x150.jpg" alt="" 
                     className="h-[70px] w-[70px] visited:border rounded"
                    />
                    <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-150x150.jpg" alt=""
                    className="h-[70px] w-[70px] rounded"
                     />
                    <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-150x150.jpg" alt=""
                    className="h-[70px] w-[70px] rounded"
                    />
                    <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1-150x150.jpg" alt="" 
                    className="h-[70px] w-[70px] rounded"
                    />
                </div>
                <div>
                    <img src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/Echoes-Swing-word-Bracelet-1.jpg" alt="" />
                </div>
            </div>
           <div className="flex flex-col gap-3 py-2">
              <h1 className="text-3xl font-normal">Echoes Swing word Bracelet</h1>
              <p className="text-2xl">Rated 3.00 out of 5 based on 1 customer rating(1 customer review)</p>
              <p className=" text-2xl ">$139.00 – $199.00</p>
              <p className="text-slate-400">This regulator has a rolled diaphragm and high flow rate with reduced pressure drop.It has an excellent degree of condensation.</p>
              <p>Availability: In Stock </p>
              <div>
                 <p className="text-xl">Color:</p>
                  <button className="h-[35px] rounded-full w-[35px] bg-amber-500 mr-1 border-2"></button>
                  <button className="h-[35px] rounded-full w-[35px] bg-black  border-2"></button>
              </div>
              <div>
                 <p className="text-xl">Sizes: </p>
                 <div className="flex gap-3">
                    <button className="h-[40px] w-[40px] border">S</button>
                    <button className="h-[40px] w-[40px] border">M</button>
                    <button className="h-[40px] w-[40px] border">L</button>
                 </div>
              </div>
              <div className="flex gap-5">
                 <button className="bg-black text-white font-medium py-3 px-10">Add to Cart</button>
                 <button className="bg-zinc-800 text-white font-normal py-3 px-10">Buy it Now</button>
              </div>
           </div>
        </div>
    )
}