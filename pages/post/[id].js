
import style from './article.module.scss';
import Article from '../../components/Article/Article'

export default function Post({articulo}) {

    return (
      <div className={style.Article}>
        <Article articulo={articulo}/>
      </div>
      
    )
  }

  export async function getServerSideProps(context) {
      const {id} = context.params
      const data = await fetch(`https://dev.to/api/articles/${id}`)
      const datajson = await data.json()
    return {
      props: {
          articulo: datajson
      }, // will be passed to the page component as props
    }
  }