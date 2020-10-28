import style from './PostNav.module.scss'
import Link from 'next/Link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../Button/Button'


export default function PostNav() {
    const [selectedRoute, setSelectedRoute] = useState(style.PostNav__item) 
    const router = useRouter()

    const getSelectedRoute = () => {
       
        console.log(router)
    }
    return (
        <div className={style.PostNav}>
            <h2 className={style.PostNav__title}>Post</h2>
            <div className={style.PostNav__Links}>
                <Button href="/" type="tab"  innerText="Feed"/>
                <Button href="/top/week" type="tab" onclick={getSelectedRoute} innerText="Week"/>
                <Button href="/top/month" type="tab" innerText="Month"/>
                <Button href="/top/year" type="tab" innerText="Year"/>
                <Button href="/top/infinity" type="tab" innerText="Infinity"/>
                <Button href="/top/latest" type="tab" innerText="Latest"/>
            </div>
        </div>
    )
}
