import styles from './components.module.css'

const LoginForm = ({ loginUser }) => {

    return (
        <div className={styles.Login}>
            <h2>Already an user?</h2>
            <form className={styles.LoginForm} onSubmit={(e) => loginUser(e)}>
                <div className={styles.Email}>
                    <input type="email" name="email" placeholder="Enter your NYU Email"/>
                </div>

                <div className={styles.Pass}>
                    <input type="password" name="password" placeholder="Enter your password"/>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;