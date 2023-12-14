import styles from './components.module.css';

const UserProfileCard = ({ user, userInformation }) => {
    return(
        <div className={styles.Profile}>
            <div className={styles.UserProfileWrapper}>
                <h1>Profile Information</h1>
                <div className={styles.UserProfile}>
                    <p>Name: {user?.name}</p>
                    <p>Email: {userInformation?.email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard;