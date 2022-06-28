import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import {Avatar} from './Avatar'
export function Sidebar(){
return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className={styles.profile}>
            <Avatar src="https:www.github.com/brunoguimar.png"/>
            <strong>Bruno Guimaraes</strong>
            <span>Student</span>
        </div>
        <footer>
            
            <a href="#"><PencilLine size="20"/>Editar seu perfil</a>
        </footer>
    </aside>
)
}