import styles from "./components.module.css";

const PostCard = ({ post, user }) => {
    return(
        <div className={styles.PostCards}>
            <div className={styles.PostCardWrapper}>
                <h3>{post.title}</h3>
                <p>{post.postContent}</p>
                <img src={post.imageURL} alt="" />
            </div>
        </div>
    );
};

export default PostCard