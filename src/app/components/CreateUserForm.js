import styles from './components.module.css';

const CreateUserForm = ({ createUser }) => {
    return(
        <div className={styles.Create}>
            <h2>First time using VioletHub?</h2>
            <h2>Create your account!</h2>
            <form className={styles.CreateUserForm} onSubmit={(e) => createUser(e)}>
                <div className={styles.Name}>
                    <input type="text" name="name" id="name" placeholder="Your name"/>
                </div>

                <div className={styles.Email}>
                    <input type="email" name="email" placeholder="Enter your NYU Email"/>
                </div>
            
                <div className={styles.Pass}>
                    <input type="password" name="password" placeholder="Create your password"/>
                </div>

                <button type="submit">Create User</button>
            </form>
        </div>
    )
}

export default CreateUserForm;