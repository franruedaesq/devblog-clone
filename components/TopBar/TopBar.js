import style from './TopBar.module.scss'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar'
import {DEVLogo} from '../../assets/svgFiles'

export default function TopBar() {
    return (
        <nav className={style.TopBar}>
            <div className={style.TopBar__search}>
            {DEVLogo}
            <SearchBar/>
            </div>

            <div className={style.TopBar__accessButtons}>
                <Button type='transparent' innerText="Log in"/>
                <Button type='blue' innerText="Create account"/>
            </div>
        </nav>
    )
}
