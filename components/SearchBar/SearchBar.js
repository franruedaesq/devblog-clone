import style from './SearchBar.module.scss'
export default function SearchBar() {
    return (
        <div className={style.SearchBar}>
            <input type="text" placeholder="Searh..." className={style.SearchBar__input}/>
        </div>
    )
}
