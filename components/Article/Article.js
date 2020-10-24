import style from './Article.module.scss'
import ReactMarkdown from 'react-markdown'

export default function Article({articulo}) {
    return (
        <div className={style.Article}>
        <img className={style.Article__cover_img} src={articulo.cover_image} alt=""/>

        <div className={style.Article__body}>
            <h1 className={style.Article__title}>{articulo.title}</h1>
            <div className={style.Article__userInfo}>
                <img className={style.Article__user__img} src={articulo.user.profile_image} alt=""/>
                <h3 className={style.Article__username}>{articulo.user.name}</h3>
                <p className={style.Article__date}>{articulo.readable_publish_date}</p>
            </div>
            <div className={style.Article__body_html} dangerouslySetInnerHTML={{__html: articulo.body_html}} />
        </div>       
      </div>
    )
}
