import Item from "../components/Item";
function Collection({title , desc}){
    return(
        <div className="w-full overflow-x-scroll font-Jost">
             <div className="w-full  flex justify-center">
                <div className="text text-center py-10 text-3xl relative w-1/2">
                  <div className="flex justify-between max-sm:py-3">
                    <h1 className="before:content-[''] before:block before:absolute before:top-1/2 before:-translate-y-[50%] before:w-[10vw] before:max-md:w-[10vw] before:py-[1px] before: before:bg-slate-200 relative w-full before:max-sm:w-[0px] max-sm:border-b max-sm:border-b-slate-700
                        after:content-[''] after:block after:absolute after:top-1/2 after:right-0 after:-translate-y-[50%] after:w-[10vw] after:max-md:w-[10vw] after:py-[1px] after:bg-slate-200 relative w-full px-3 after:max-sm:w-[0px]
                    sm:max-md:text-xl max-sm:text-base  ">{title}</h1>
                  </div>
                  <p className="text-base max-sm:text-xs">{desc}</p>
                </div>
             </div>
           
            <div className=" grid grid-cols-5 sm:max-md:grid-cols-3 transition ease-in overflow-x-scroll px-5 gap-5 max-sm:grid  max-sm:grid-cols-2 scrollbar-hidden">
                <Item 
                    src1={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-1-325x325.jpg"} 
                    src2={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Blue-Stripes-Stone-Earrings-2-325x325.jpg"}
                    category={"Earnings"}
                    title={"Blue Stripes & Stone Earrings"}
                    price={"371"}
                 />
                 <Item 
                    src1={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-1-325x325.jpg"} 
                    src2={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Circle-of-Light-Heart-Earrings-2-325x325.jpg"}
                    category={"Earnings"}
                    title={"Circle of Light Heart Earrings"}
                    price={"371"}
                 />
                  <Item 
                    src1={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-1-325x325.jpg"} 
                    src2={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Birds-of-Paradise-Pendant-2-325x325.jpg"}
                    category={"Necklaces"}
                    title={"Birds of Paradise Pendant"}
                    price={"371"}
                 />
                 <Item 
                    src1={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Kalvesna-Diamond-Twig-Ring-1-325x325.jpg"} 
                    src2={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Kalvesna-Diamond-Twig-Ring-2-325x325.jpg"}
                    category={"Rings"}
                    title={"Kalvesna Diamond Twig Ring"}
                    price={"371"}
                 />
                 <Item 
                    src1={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-Stripes-Stone-Bracelet-1-325x325.jpg"} 
                    src2={"https://alukas.presslayouts.com/wp-content/uploads/2023/02/Cross-Stripes-Stone-Bracelet-2-325x325.jpg"}
                    category={"Braclets"}
                    title={"Cross Stripes & Stone Bracelet"}
                    price={"371"}
                 />
            </div>
           

        </div>
    )
}
export default Collection;