import Link from "next/link";
import styles from './components.module.css';

const Header = ({isLoggedIn, logoutUser} ) => {
    return(
        <header className={styles.Header}>
            <div className={styles.Branding}>
                <img src="https://logos-world.net/wp-content/uploads/2021/09/NYU-Symbol.png" alt="NYU logo"></img>
                <h1>VioletHub</h1>
            </div>
            <nav className={styles.HeaderNav}>
                {isLoggedIn && (
                    <>
                        <Link href="/">Discussion</Link>
                        <Link href="/createPost">Create Post</Link>
                        <Link href="/profile">Profile</Link>
                        <a onClick={logoutUser}>Logout</a>
                    </>
                )}
                {!isLoggedIn && (
                    <>
                        <Link href="/login">Login</Link>
                        <Link href="/createUser">Create User</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;