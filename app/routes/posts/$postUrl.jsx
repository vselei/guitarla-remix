import { useLoaderData } from '@remix-run/react';

import { dateFormatter } from '~/utils/helpers.js';

import { getPost } from '~/models/posts.server';

import styles from '~/styles/blog.css';

export const meta = ({ data }) => {
  if (!data) {
    return {
      title: `GuitarLA Remix | Post Não Encontrado`,
      description: 'Blog de música. Post não encontrado'
    };
  }
  return {
    title: `GuitarLA Remix | ${data.data[0].attributes.title}`,
    description: `Blog de música e venda de guitarras. Post ${data.data[0].attributes.title}`
  };
};

export const links = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
];

export const loader = async ({ params }) => {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Post não encontrado'
    });
  }

  return post;
};

const Post = () => {
  const post = useLoaderData();
  const { title, content, image, publishedAt } = post?.data[0]?.attributes;

  return (
    <article className="container post mt-3">
      <img
        className="image"
        src={image.data.attributes.formats.medium.url}
        alt={`blog ${title}`}
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{dateFormatter(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
};

export default Post;
