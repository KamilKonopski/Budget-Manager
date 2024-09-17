import classes from './Footer.module.scss'

const Footer = () => {
    return ( 
    <footer className={classes.footer}>
        <div className={classes["footer__app-info"]}>
            <h3>O aplikacji</h3>
            <p>Aplikacja do zarządzania miesięcznym budżetem. Monitoruj swoje wydatki i przychody.</p>
        </div>
        <div className={classes["footer__socials"]}>
            <h3>Znajdziesz mnie na:</h3>
            <a href="#"><i className={classes["icon-github"]}></i>github.com/KamilKonopski</a>
        </div>
        <div className={classes["footer__rights"]}>
            <p>© 2024 Budget Manager. Wszelkie prawa zastrzeżone.</p>
        </div>
    </footer> );
}

export default Footer;