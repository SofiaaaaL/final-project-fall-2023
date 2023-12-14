import styles from "../app/components/components.module.css";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm";
import { getFirestore, collection, addDoc, snapshotEqual } from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

export default function CreatePost({ isLoggedIn, userInformation }) {
    const router = useRouter();
    useEffect(() => {
        if (!isLoggedIn) router.push("/")
    }, [isLoggedIn])

    const createPostFunction = useCallback(async(e, imageUpload) => {
        e.preventDefault(); 
        const storage = getStorage();
        const db = getFirestore();
        const title = e.currentTarget.title.value;
        const postContent = e.currentTarget.postContent.value;

        let imageURL;
        const storageRef = ref(storage, imageUpload.name);
        
        await uploadBytes(storageRef, imageUpload)
            .then(async (snapshot) => {
                await getDownloadURL(snapshot.ref).then((url) => {
                    imageURL = url; 
                });
            })
            .catch((error) => {
                console.warn(error);
            });

        const userId = userInformation.uid
        const data = await addDoc(collection(db, "posts"), {
            postContent: postContent,
            userId: postContent,
            imageURL: imageURL, 
            title: title,
        });
        if(data) {
            router.push("/");
        }
    }, [addDoc, collection, getFirestore, router, userInformation]);

    return(
        <main>
            <div className={styles.CreatePostFormWrapper}>
                <CreatePostForm createPostFunction={createPostFunction} />
            </div>
        </main>
    );
}