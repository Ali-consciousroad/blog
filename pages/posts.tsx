import Container from "../components/container";
import Link from "next/link";
import Image from "next/image";

export default function Posts() {
  return (
    <div className="py-20 pb-32">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-4">Latest Articles</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our latest articles about Iranian culture, history, and more.
        </p>
        <div className="space-y-8">
          {/* Article 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-64 md:w-1/3">
                <Image
                  src="/images/article1.jpg"
                  alt="Article 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-semibold mb-3 text-iran-green group-hover:text-iran-red transition-colors">
                  The Rich History of Persian Carpets
                </h2>
                <p className="text-gray-600 mb-4">
                  Discover the ancient art of Persian carpet weaving and its cultural significance. From the intricate designs to the traditional techniques passed down through generations, explore how these masterpieces continue to captivate the world.
                </p>
                <Link href="/posts/persian-carpets" className="text-iran-red hover:text-iran-green transition-colors">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-64 md:w-1/3">
                <Image
                  src="/images/article2.jpg"
                  alt="Article 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-semibold mb-3 text-iran-green group-hover:text-iran-red transition-colors">
                  Modern Iranian Architecture
                </h2>
                <p className="text-gray-600 mb-4">
                  Exploring the blend of traditional and contemporary architectural styles in Iran. See how modern architects are incorporating ancient Persian design elements into innovative new structures that honor the past while embracing the future.
                </p>
                <Link href="/posts/iranian-architecture" className="text-iran-red hover:text-iran-green transition-colors">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-64 md:w-1/3">
                <Image
                  src="/images/article3.jpg"
                  alt="Article 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h2 className="text-2xl font-semibold mb-3 text-iran-green group-hover:text-iran-red transition-colors">
                  Iranian Cuisine: A Culinary Journey
                </h2>
                <p className="text-gray-600 mb-4">
                  A deep dive into the flavors and traditions of Iranian cooking. From aromatic rice dishes to succulent kebabs, discover the secrets of Persian cuisine and how it has influenced culinary traditions around the world.
                </p>
                <Link href="/posts/iranian-cuisine" className="text-iran-red hover:text-iran-green transition-colors">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 