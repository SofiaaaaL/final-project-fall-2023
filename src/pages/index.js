import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import PostCard from "../app/components/PostCard";

export default function Dashboard({ isLoggedIn }) {
    const router = useRouter();
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        if(!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);
    
    useEffect(() => {
        async function getAllPosts() {
            const postsArray = [];
            const db = getFirestore();
            const postsQuery = await getDocs(collection(db, "posts"));
    
            postsQuery.forEach((post) => {
                postsArray.push({ id: post.id, ...post.data() });
            });
            setAllPosts(postsArray);
        }
        getAllPosts();
    }, []);
    
    return (
        <main>
            <div>
                {allPosts.map((post, i) => (
                    <PostCard post={post} key={i} />
                ))}
            </div>
        </main>
    );
}
