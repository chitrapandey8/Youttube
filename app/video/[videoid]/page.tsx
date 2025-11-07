import Navbar from "@/app/Components/Navbar"
import Videodisplay from "@/app/Components/Videopage"
import { youtubeData } from "@/app/db/data"


export default async function videoo({params}:{
    params:Promise<{videoid:string}>
}){
   const {videoid} = await params
   const id = parseInt(videoid)

   const iterateYoutube = youtubeData.filter((i)=>i.id===id)
 function converttolinktoplay(videoLink:string){

    if(videoLink.includes('youtu.be/')){
       const videoId = videoLink.split('youtu.be/')[1]
       return `https://www.youtube.com/embed/${videoId}`
    }
    if(videoLink.includes('"watch?v="')){
       const videoId = videoLink.split('watch?v=')[1]
       return `https://www.youtube.com/embed/${videoId}`
    }
    return videoLink
 }
    return (<div>
         <div>
           <Navbar></Navbar>
         </div>
         <div>
          {iterateYoutube.map((i)=>{
              return  <div key={i.id}>
                    <iframe 
                    className=" w-96 h-60 xl:w-[100vw] xl:h-[30vw] "
                    title="video player"
                    src={converttolinktoplay(i.videoLink)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                    </iframe>
                </div>})}
         </div>
         <div>
            {
            iterateYoutube.map(({id, title, channel, like, subscriber,thumbnail})=>(
                <div key={id}>
                  <Videodisplay key={id} title={title}  channel={channel} like={like} subscriber={subscriber} thumbnail={thumbnail}></Videodisplay>
               </div>
            ))
        }
         </div>
    </div>)
}

