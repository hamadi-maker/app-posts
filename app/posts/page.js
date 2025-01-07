import Link from "next/link";

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
                <Link href={`/posts/${post.id}`}>
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                </Link>
            )
        })
        

        return(
            <div>
                <h1>Posts Page</h1>
                {/* POSTS */}
                
                <div>{postJSX}</div>
                
                {/* ------POSTS */}
            </div>
        )
}