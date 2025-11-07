import Image, { StaticImageData } from "next/image";
import { AiOutlineDislike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { LuScissors } from "react-icons/lu";

interface IData{
  
  title:string,
  channel:string,
  thumbnail:StaticImageData,
  like:string,
  subscriber:string
}

export default function Videodisplay({ title, channel,like, subscriber, thumbnail}:IData){
    return (<div>
        <div className="  flex flex-col gap-y-2">
            {/* 1st div titile */}
            <div className=" font-bold xl:text-2xl xl:mt-3 xl:pl-2">
             {title}
            </div>
            {/* second div for channle name subscitbe button like dislike */}
             
             <div className=" xl:flex xl:justify-between py-2 px-3">
              {/*2nd div for channel name and subscriobe button */}
                {/* for channle logo and channel name */}
               <div className=" flex items-center gap-5">
                <div ><Image className="  w-11 h-10 rounded-full"  src={thumbnail} alt="logo"></Image></div> 
                 <div className=" flex flex-col ">
                   <div>{channel} </div> 
                    <div>{subscriber} subscribers</div>
                 </div>
                 <div>
                    <button className=" bg-amber-50  text-black px-3.5 rounded-full py-2">Subscribe</button>
                 </div>
               </div>
               {/*3rd div for like, dislike, share  */}
              <div className=" mr-3.5">
                <div className=" flex gap-2 ">
                <div className=" flex items-center justify-center gap-4.5 bg-zinc-600 px-3 rounded-4xl">
                <div className=" flex items-center justify-center gap-1.5">
                    <div><BiLike /></div> 
                    <div>{like}</div> 
                </div>
                <div><AiOutlineDislike /></div>
              </div>
              <div >
                 <div className=" flex items-center justify-center gap-2 bg-zinc-600 rounded-4xl px-2 py-1.5"><PiShareFat  />  Share</div>
              </div>
              <div>
               <div className=" flex items-center justify-center gap-2 bg-zinc-600 rounded-4xl px-2 py-1.5"><LuScissors /> Clip</div>
              </div>
              <div >
                <div className=" bg-zinc-600 rounded-4xl px-2 flex items-center justify-center py-1.5">...</div>
              </div>
              </div>
              </div>

              
             </div>
              
              
              
            
        </div>
    </div>)
}