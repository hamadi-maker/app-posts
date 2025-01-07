import Link from "next/link";
import styles from "./page.module.css";
export default async function PostsPage() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            next: {
                revalidate: 120
            }
        });
        const posts = await response.json();
        console.log(posts);

        const postJSX = posts.map((post)=>{
            return (
                
                    <div className={styles.container}>     
                        <Link href={`/posts/${post.id}`}>                  
                                <div className={styles.card}>
                                    <div className={styles.data}>   
                                        <h2>{post.title}</h2>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                        </Link>
                    </div>
                
            )
        })
        

        return(
            <div>
                <h1 className={styles.title}>Posts Page</h1>
                {/* POSTS */}
                
                <div className={styles.container}>{postJSX}</div>
                
                {/* ------POSTS */}
            </div>
        )
}