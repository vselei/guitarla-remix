import { useLoaderData } from '@remix-run/react';
import { getPosts } from '~/models/posts.server';
import Post from '../components/post';

export const loader = async () => {
  const posts = await getPosts();
  return posts.data;
};

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="container">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
