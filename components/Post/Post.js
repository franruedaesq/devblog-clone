import Link from 'next/link';
import Button from '../Button/Button'
import style from './Post.module.scss'
import moment from 'moment'

export default function Post({title, id, user, hashtags, positive_reaction, date, comments_count}) {

    const hash = function() {
        const hashArray = hashtags.split(', ')
        // const hashted = hashArray.toString().replaceAll(',', ' #')

        const items = hashArray.map(item => <a className={style.Post_hash}>#{item}</a>)

        return items
        // return `#${hashted}`
    }
    
    return (
        <div className={style.Post}>
            <img className={style.Post__user__img} src={user.profile_image} alt=""/>
            <p className={style.Post__user}>{user.name}</p>
            <p className={style.Post__date}>{moment(new Date(date)).format('DD MMM')}</p>
            <Link href={`/post/${id}`}><h2 className={style.Post__title}>{title}</h2></Link>
            <p className={style.Post__hashtag}>{hash()}</p>
            <div className={style.Post__buttons}>
                <Button type="reactions" positive_reactions={positive_reaction}/>
                <Button type="comments" comments_count={comments_count}/>
            </div>
                <Button type="save"/>
        </div>
    )
}
