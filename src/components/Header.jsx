import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg'
export function Header(){
    return(
        <header className={styles.header}>
        <a href="#" title="Home"><img src={igniteLogo} alt="Logo Ignite" /></a>
        </header>
    )
}