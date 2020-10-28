import Post from '../../components/Post/Post'
import style from '../../styles/Home.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import PostNav from '../../components/PostNav/PostNav'

export default function Top({mainPosts}) {

  const onClickItem = (e) => {
    console.log(e.target.innerText)
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

export async function getStaticPaths() {
   return {
    paths: [
        { params: { id: 'latest' } },
        { params: { id: 'week' } },
        { params: { id: 'month' } },
        { params: { id: 'year' } },
        { params: { id: 'infinity' } },
      ],
      fallback: false
   }
  }

export async function getStaticProps({params}) {
  const {id} = params;

  const getId = id => {
    switch (id) {
        case 'week':
            return 7
        case 'month':
            return 30
        case 'year':
            return 365
        case 'latest':
            return 1
       case 'infinity':
            return 922
    
        default:
            break;
    }
  }

  const data = await fetch(`https://dev.to/api/articles?tag=javascript&top=${getId(id)}`)
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