import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Comment from "../../components/comment";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Head>
        <title>{post.title} | Iran Blog</title>
      </Head>

      {router.isFallback ? (
        <div className="text-center py-10 text-gray-600">Loading...</div>
      ) : (
        <div>
          <article>
            <header className="mb-10">
              <h1 className="text-3xl font-medium text-iran-green mb-4">{post.title}</h1>
              {post.excerpt ? (
                <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
              ) : null}
              <time className="flex mt-4 text-gray-400">
                {distanceToNow(new Date(post.date))}
              </time>
            </header>

            <div
              className="prose prose-lg max-w-none prose-headings:text-iran-green prose-a:text-iran-green hover:prose-a:text-iran-red"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          <Comment />
        </div>
      )}
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "excerpt",
    "date",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
