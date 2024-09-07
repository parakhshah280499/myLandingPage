import Image from 'next/image';
import { fetchLandingPageData } from '@/lib/contentful';

export default async function Home() {
  const data = await fetchLandingPageData();

  return (
    <main className="container mx-auto p-4">
      <section className="hero">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <Image src={data.image.url} alt="Hero Image" width={600} height={400} />
      </section>
      {/* Additional sections */}
    </main>
  );
}
