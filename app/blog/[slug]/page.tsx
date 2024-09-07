import { fetchBlogPostData } from '@/lib/contentful';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPostData(params.slug);

  return (
    <article className="container mx-auto p-4">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
