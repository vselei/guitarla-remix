import { Link } from '@remix-run/react';
import { dateFormatter } from '~/utils/helpers.js';

const Post = ({ post }) => {
  const { content, image, title, url, publishedAt } = post;

  return (
    <article className="post">
      <img
        className="image"
        src={image.data.attributes.formats.small.url}
        alt={`blog ${title}`}
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{dateFormatter(publishedAt)}</p>
        <p className="summary">{content}</p>
        <Link className="link" to={`/posts/${url}`}>
          Ler Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
