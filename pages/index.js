import Post from '../components/Post/Post'
import style from '../styles/Home.module.scss'
import NavBar from '../components/NavBar/NavBar'
import PostNav from '../components/PostNav/PostNav'
import TopBar from '../components/TopBar/TopBar'

export default function Home({mainPosts}) {

  const onClickItem = (e) => {
    // console.log(e.target.innerText)
    router.re('/hola')
    // tabSelected = e.target.innerText
}


  const posts = mainPosts.map(item => {
    return <Post key={item.id} title={item.title} id={item.id} user={item.user} comments_count={item.comments_count} profile_image={item.profile_image} date={item.published_at} positive_reaction={item.positive_reactions_count} hashtags={item.tags}/>
  })
  return (
    <div className={style.Home}>
      <NavBar/>
      <div className={style.Home__postContainer}>
        <PostNav onClickItem={onClickItem}/>
        {posts}
      </div>
    </div>
  );
}

export async function getStaticProps({params}) {
  // console.log(params)
  const data = await fetch('https://dev.to/api/articles?tag=javascript&top=1')
  let datajson = await data.json()
  datajson = datajson.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

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