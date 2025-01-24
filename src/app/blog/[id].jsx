// src/pages/blog/[id].jsx
import { fetchBlogPost } from '../../utils/api';

const BlogDetails = ({ blog }) => {
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.body}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const blog = await fetchBlogPost(id);

  return {
    props: { blog }, // Pass blog data to the page via props
  };
}

export default BlogDetails;
