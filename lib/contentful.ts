import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export const fetchLandingPageData = async () => {
  const entry = await client.getEntry('<YOUR_LANDING_PAGE_ENTRY_ID>');
  return {
    title: entry.fields.title,
    subtitle: entry.fields.subtitle,
    image: {
      url: entry.fields.heroImage.fields.file.url,
    },
  };
};

// export const fetchBlogPostData = async (slug: string) => {
//   const entries = await client.getEntries({
//     content_type: 'blogPost',
//     'fields.slug': slug,
//   });
//   const post = entries.items[0];
//   return {
//     title: post.fields.title,
//     content: post.fields.content,
//   };
// };

export const fetchBlogPostData = async (slug: string) => {
    const entries = await client.getEntries({ content_type: 'blogPost', 'fields.slug': slug });
    const post = entries.items[0];
    return {
      title: post.fields.title,
      content: post.fields.content,
    };
  };
  