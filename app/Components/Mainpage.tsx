import React from 'react'
import { youtubeData } from '../db/data'
import Link from 'next/link'
import { Card } from './Card'
import { useStore } from '../store/store'


const Mainpage = () => {
  const {expanded, expand, collapse } = useStore()
  return (
    <div className={expanded?` sm:grid md:grid-cols-2 gap-2 2xl:grid-cols-3 `:`sm:grid md:grid-cols-2 2xl:grid-cols-3 gap-2`}>
      {
        youtubeData.map(({id, channel, views, title, thumbnail, age})=>{
           return (<div  className={ expanded? ` ` : ``} key={id}>
            <Link key={id} href={`/video/${id}`}>
              <Card id={id} channel={channel} views={views} title={title} thumbnail={thumbnail} age={age}></Card>
            </Link>
           </div>)
        })
      }
    </div>
  )
}

export default Mainpage