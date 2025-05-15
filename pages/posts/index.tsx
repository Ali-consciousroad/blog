import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <h1 className="text-2xl font-medium text-iran-green mb-10">Articles</h1>
      {allPosts.length ? (
        <div className="space-y-12">
          {allPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link
                as={`/posts/${post.slug}`}
                href="/posts/[slug]"
                className="block"
              >
                <h2 className="text-xl font-medium text-iran-green group-hover:text-iran-red transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed">{post.excerpt}</p>
                <div className="mt-2 text-gray-400">
                  <time>{distanceToNow(new Date(post.date))}</time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No articles published yet.</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "date"]);

  return {
    props: { allPosts },
  };
}
