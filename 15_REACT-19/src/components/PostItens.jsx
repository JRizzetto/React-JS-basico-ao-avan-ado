import { use, Suspense } from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostItens = () => {
  const posts = use(fetchPosts());

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const Posts = () => {
    return (
        <Suspense fallback="Carregando posts ...">
            <PostItens />
        </Suspense>
    )
  }

export default Posts;
