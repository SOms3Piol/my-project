import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { FaQuoteLeft } from "react-icons/fa";
import NewsLatter from '../components/NewLatter'
export default function BlogPage(){
    return(
        <div className="">
            <div className="flex  items-center px-9 py-5">
                    <Link to={'/'}>Home </Link>
                    <IoIosArrowForward className="text-slate-400" />
                    <Link to={'/shop'}>Trends </Link>
                    <IoIosArrowForward className="text-slate-400" />
                    <h1 className="text-slate-400">How to Style Quif</h1>
            </div>
            <div>
                <div className='blog'>
                    <div className='flex flex-col gap-5 px-9 py-3'>
                        <p><span className='bg-black text-white px-1  py-1'>Trends</span></p>
                        <h1 className='text-5xl'>How to Style Quiff</h1>
                        <p className='text-slate-400'><span className='text-black'>Alukas -</span> Febauray 17,2024</p>
                    </div>
                    <div className='px-9 border-box py-9'>
                        <img className='object-cover w-full' src="https://alukas.presslayouts.com/wp-content/uploads/2023/02/How-to-Style-a-Quiff.jpg" alt="" />
                            <div className='w-full flex flex-col gap-[30px] mt-[70px]'>
                                <p className='text-black font-medium '>
                                Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize taking seamless key performance indicators offline.
                                </p>
                                <p className='text-slate-400'>
                                Oneself endless holiest society philosophy dept valuation Contradicts gains nobless end lose preju dice battle hope the battle philosophy Gains endless capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.Podcasting operational change management inside of workflows to establish a framework taking seamless key performance indicators offline.
                                </p>
                                <p className='text-slate-400'>
                                Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.Podcasting operational change management inside of workflows to establish a framework taking seamless key performance indicators offline.
                                </p>
                                <div className='flex items-center gap-6'>
                                    <span><FaQuoteLeft size={44}/></span>
                                    <p className='font-semibold flex flex-col text-xl'>Moving into a new year is always excited and a perfect opportunity to reflect on the year we are leaving behind and the new year we are being. <span className='text-slate-400 text-base'> - Vape semiotics</span></p>
                                </div>
                                <p className='text-slate-400'>
                                Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.Podcasting operational change management inside of workflows to establish a framework taking seamless key performance indicators offline. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <hr />
                            </div>
                            
                    </div>
                   <div className='px-9 flex flex-col gap-8 py-8 w-full'>
                        <h1 className='text-3xl font-medium'>You might Also like</h1>
                        <div className='grid grid-cols-2 gap-5 md:max-lg:grid md:max-lg:grid-cols-2  max-sm:grid-cols-1'>
                            <Block  
                                src={'https://alukas.presslayouts.com/wp-content/uploads/2023/02/Must-Have-Skater-Girl-Items-480x270.jpg'}
                                title={'Must-have skater Girl Items'}
                            />
                            <Block  
                                src={'https://alukas.presslayouts.com/wp-content/uploads/2023/02/The-North-Earrings-Bronze-480x270.jpg'}
                                title={'The North Earning Bronze'}
                            />
                            
                        </div>
                        <hr />
                   </div>
                   <div className='px-9 '>
                     <h1 className='text-xl font-medium py-3'>Comments (1)</h1>
                     <div className='flex gap-3 py-3 px-9 w-full border-2'>
                        <span className=''><img className='rounded-full ' src="https://secure.gravatar.com/avatar/93970e7c5f5eb39a6858a169a6742799?s=75&d=mm&r=g" alt="" /></span>
                        <div className='flex flex-col'>
                            <p className='flex flex-col gap-1'><span>Borack Obama</span><span className='text-slate-400'>March 14,2031</span></p>
                            <p className='py-3 text-slate-400'>Congratulations on launching your web development project! That's a fantastic accomplishment – all those lines of code and late nights debugging have come together into something real. You should be incredibly proud of yourself for seeing this through from concept to completion.  Here's to a successful website and all the exciting possibilities it brings!</p>
                        </div>
                     </div>
                   </div>
                </div>
            </div>
            <NewsLatter />
        </div>
    )
}
function Block({src , title }){
    return(
        <div className='flex flex-col gap-5'>
            <div className='overflow-hidden relative group'>
                <div>
                     <img className='group-hover:scale-110 transition ease-in duration-300' src={src} alt="img" />
                </div>
                 <div className='group-hover:absolute z-60 bg-black top-0  opacity-0  transition ease-linear duration-500 group-hover:opacity-50 h-full w-[480px]'></div>
                <span className='absolute px-2 font-medium uppercase tracking-tighter py-2 text-xs top-4 left-4 bg-black text-white'>Jewellary</span>
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-slate-400'><span className='text-black'>Alukas</span> - Feburary 18,2015</span>
                <p className='text-[24px]'>{title}</p>
            </div>
        </div>
    )
}
