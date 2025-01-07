import styles from "./page.module.css";


export default async function PostDetails({ params }) {
    const postId =  params.postid;

    // for better user experience if he had issue with internet
    await new Promise((resolve) =>{
        setTimeout(()=>{
            resolve();
        },1500);
    });

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 120
            }
        });
        const post = await response.json();
        
    return (
        <div> 
           <h1 className={styles.title}> Post details</h1>


           <div className={`${styles.ecard} ${styles.playing}`}>
                <div className={styles.image}></div>
                
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>

                <div className={styles.infotop}>
                    {post.title}
                    <div className={styles.name}>{post.body}</div>
                </div>
            </div>
        </div>
    )
}