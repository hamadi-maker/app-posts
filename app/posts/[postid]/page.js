export default async function PostDetails({ params }) {
    const postId = params.postid;

    // for better user experience if he had issue with internet
    await new Promise((resolve) =>{
        setTimeout(()=>{
            resolve();
        },2000);
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
           <h1> Post details</h1>


           <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )
}