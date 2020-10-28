import style from './NavBar.module.scss'
import {hands, microphone, tags, paper, videorecorder} from '../../assets/svgFiles'


export default function NavBar() {

    return (
        <div className={style.NavBar}>
            <a className={style.NavBar__item}>{hands} Sign In/Up</a>
            <a className={style.NavBar__item}>{paper} Listings</a>
            <a className={style.NavBar__item}>{microphone}Podcasts</a>
            <a className={style.NavBar__item}>{videorecorder}Videos</a>
            <a className={style.NavBar__item}>{tags}Tags</a>
            <a className={style.NavBar__item}>More...</a>
        </div>
    )
}
