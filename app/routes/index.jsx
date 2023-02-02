import { useLoaderData } from '@remix-run/react';

import { getGuitars } from '~/models/guitars.server';
import { getPosts } from '~/models/posts.server';
import { getCourse } from '~/models/course.server';

import GuitarsList from '~/components/guitars-list';
import PostsList from '~/components/posts-list';
import Course from '../components/course';

import stylesGuitars from '~/styles/guitars.css';
import stylesBlog from '~/styles/blog.css';
import stylesCourse from '~/styles/course.css';

export const meta = () => {};

export const links = () => [
  {
    rel: 'stylesheet',
    href: stylesGuitars
  },
  {
    rel: 'stylesheet',
    href: stylesBlog
  },
  {
    rel: 'stylesheet',
    href: stylesCourse
  }
];

export const loader = async () => {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ]);

  return [guitars.data, posts.data, course.data];
};

const Index = () => {
  const [guitars, posts, course] = useLoaderData();

  return (
    <>
      <main className="container">
        <GuitarsList guitars={guitars} />
      </main>
      <Course course={course.attributes} />
      <section className="container">
        <PostsList posts={posts} />
      </section>
    </>
  );
};

export default Index;
