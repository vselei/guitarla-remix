import Post from '~/components/post';

const PostsList = ({ posts }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default PostsList;
