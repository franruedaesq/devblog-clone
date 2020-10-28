import { useState } from "react";
import Link from "next/link";
import Post from '../components/Post/Post'
import style from '../styles/Home.module.scss'
import TopBar from '../components/TopBar/TopBar'

export default function Home({mainPosts}) {


  const posts = mainPosts.map(item => {
    return <Post title={item.title} id={item.id} user={item.user} comments_count={item.comments_count} profile_image={item.profile_image} date={item.edited_at} positive_reaction={item.positive_reactions_count} hashtags={item.tags}/>
  })
  return (
    <div className={style.Home}>
      
      {posts}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://dev.to/api/articles?tag=javascript&top=1')
  const datajson = await data.json()
  return {
    props: {
      mainPosts: datajson
    }, 
    revalidate: 3600
  }
}

// getStaticProps --> Static render 
// getServerSideProps --> Server Side render 
// useEffect --> client side render 

// / -->static 
// /:id --> server side 