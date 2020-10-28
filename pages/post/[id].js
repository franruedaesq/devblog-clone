
import style from './article.module.scss';
import Article from '../../components/Article/Article'
import NavBar from '../../components/NavBar/NavBar'

export default function Post({articulo}) {

    return (
      <div className={style.Article}>
        <NavBar/>
        <Article articulo={articulo}/>
      </div>
      
    )
  }

  export async function getStaticPaths() {
    const data = await fetch('https://dev.to/api/articles?tag=javascript&top=1');
    const json = await data.json();

    const paths = json.map((path) => {
      return `/post/${path.id}`
    })

    return {
      paths: paths,
      fallback: false
    }
  }

  export async function getStaticProps({params}) {
      const {id} = params
      const data = await fetch(`https://dev.to/api/articles/${id}`)
      const datajson = await data.json()
    return {
      props: {
          articulo: datajson
      }, // will be passed to the page component as props
    }
  }