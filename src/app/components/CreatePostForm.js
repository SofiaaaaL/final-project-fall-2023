import { useState } from 'react';
import styles from './components.module.css';

const CreatePostForm = ({ createPostFunction }) => {
    const [imageUpload, setImageUpload] =  useState()
    return(
        <div>
            <form 
            className={styles.Form} 
            onSubmit={(e) => createPostFunction(e, imageUpload)}
            >
                <div className={styles.PostTitle}>
                    <input type="text" 
                    id="title" 
                    name="title" 
                    placeholder="Post Title"/>
                </div>

                <div className={styles.PostContent}>
                    <input type="text" 
                    id="postContent" 
                    name="postContent" 
                    placeholder="Anything you want to share..."/>
                </div>

                <div className={styles.PostImage}>
                    <label htmlFor="image">Upload Image</label>
                    <input 
                    type="file" 
                    id="image" 
                    name="image" 
                    placeholder="Upload Image" 
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={(e) => {
                        setImageUpload(e.target.files[0]);
                    }}
                    />
                </div>
                <button type="submit">Create Post</button>

            </form>
        </div>
    )
}

export default CreatePostForm;