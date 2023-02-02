import { getPost } from '~/models/posts.server';

export const loader = async ({ params }) => {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post não encontrado'
    });
  }

  return {};
};

const Post = () => {
  return <h1>Post URL</h1>;
};

export default Post;
