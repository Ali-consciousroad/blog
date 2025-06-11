import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Comment from "../../components/comment";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts, getPostBySlug } from "../../lib/getPost";
import markdownToHtml from "../../lib/markdownToHtml";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Mock article data - in a real app, this would come from a database
const articles = {
  "persian-carpets": {
    title: "The Rich History of Persian Carpets",
    content: `
      Persian carpets are more than just floor coverings; they are woven stories of Iran's rich cultural heritage. Dating back over 2,500 years, these masterpieces combine intricate designs with traditional techniques passed down through generations.

      The art of Persian carpet weaving reached its zenith during the Safavid dynasty (1501-1736), when royal workshops produced some of the most magnificent carpets ever created. Today, cities like Kashan, Tabriz, and Kerman continue this proud tradition, each with their own distinctive styles and patterns.

      What makes Persian carpets truly special is their attention to detail. Each knot is tied by hand, with some carpets containing over 1,000 knots per square inch. The natural dyes used in traditional carpets create colors that become more beautiful with age, while the wool and silk materials ensure durability and a luxurious feel.

      The designs often tell stories or represent elements of nature, with common motifs including:
      • Garden patterns symbolizing paradise
      • Tree of life designs representing growth and renewal
      • Geometric patterns reflecting mathematical precision
      • Floral motifs celebrating nature's beauty

      Modern Persian carpets continue to evolve while maintaining their traditional roots. Contemporary weavers are experimenting with new designs and materials while preserving the ancient techniques that make these carpets so special.
    `,
    image: "/images/article1.jpg",
    date: "March 15, 2024",
    author: "Ali Dindar"
  },
  "iranian-architecture": {
    title: "Modern Iranian Architecture",
    content: `
      Iranian architecture is experiencing a renaissance, with contemporary architects creating stunning structures that honor traditional Persian design while embracing modern innovation.

      The fusion of old and new is evident in projects across the country, from the innovative Milad Tower in Tehran to the contemporary Tabiat Bridge. These structures demonstrate how Iranian architects are reinterpreting traditional elements like:
      • Wind catchers (badgirs) for natural ventilation
      • Traditional courtyard layouts
      • Geometric patterns and arabesques
      • Natural light management techniques

      Modern materials and construction methods are being combined with age-old design principles to create buildings that are both functional and beautiful. The result is a unique architectural language that speaks to Iran's rich heritage while looking confidently toward the future.

      Sustainability is also playing a key role in contemporary Iranian architecture, with many new buildings incorporating traditional passive cooling techniques and modern green technologies. This approach not only reduces environmental impact but also creates more comfortable living spaces.

      The future of Iranian architecture looks bright, with young architects pushing boundaries while maintaining a deep respect for their cultural heritage.
    `,
    image: "/images/article2.jpg",
    date: "March 10, 2024",
    author: "Reza Tabesh"
  },
  "iranian-cuisine": {
    title: "Iranian Cuisine: A Culinary Journey",
    content: `
      Iranian cuisine is a celebration of flavors, aromas, and traditions that have evolved over thousands of years. From the aromatic rice dishes to the succulent kebabs, Persian food offers a unique culinary experience that has influenced cooking traditions around the world.

      At the heart of Iranian cooking is the concept of balance - between sweet and sour, hot and cold, fresh and dried ingredients. This philosophy is evident in signature dishes like:
      • Chelo Kebab: Perfectly grilled meat served with saffron rice
      • Fesenjan: A rich stew of chicken or duck in a pomegranate and walnut sauce
      • Ghormeh Sabzi: A fragrant herb stew with meat and dried limes
      • Tahchin: A layered rice cake with saffron and yogurt

      Herbs and spices play a crucial role in Persian cooking, with ingredients like saffron, turmeric, and dried limes adding depth and complexity to dishes. Fresh herbs like mint, parsley, and cilantro are used liberally, creating bright, fresh flavors.

      The traditional Persian meal is a social event, with dishes served family-style and shared among diners. This communal aspect of dining reflects the importance of hospitality in Iranian culture.

      Modern Iranian chefs are now putting their own spin on traditional dishes, creating innovative fusion cuisine while maintaining the essence of Persian cooking.
    `,
    image: "/images/article3.jpg",
    date: "March 5, 2024",
    author: "Asma"
  }
};

export default function Article({ slug }: { slug: string }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/posts" className="text-iran-red hover:text-iran-green transition-colors">
            ← Back to Articles
          </Link>
        </div>
      </Container>
    );
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen py-20 pb-32">
      <Container>
        <Link href="/posts" className="text-iran-red hover:text-iran-green transition-colors mb-8 inline-block">
          ← Back to Articles
        </Link>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-iran-green">{article.title}</h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>By {article.author}</span>
            </div>
            
            <div className="prose max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          
          <form onSubmit={handleSubmitComment} className="mb-8">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-iran-green focus:border-transparent"
              rows={4}
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-iran-green text-white rounded-lg hover:bg-iran-red transition-colors"
            >
              Post Comment
            </button>
          </form>

          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-700">{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(articles).map(slug => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {
      slug: params.slug
    }
  };
}
