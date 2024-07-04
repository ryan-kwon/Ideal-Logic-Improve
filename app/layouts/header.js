import styles from "./styles/header-footer.module.css"

function Header(){
    return(
        <div className={styles.top}>
            <h1>Welcome to OSU Student Experiences & Engagement!</h1>
            <div>
                <div className={styles.headericon}></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Header;