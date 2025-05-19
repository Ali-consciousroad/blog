import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/persian-mosque-hero.jpg"
            alt="Nasir al-Mulk Mosque (Pink Mosque) of Shiraz - A masterpiece of Persian architecture featuring intricate stained glass and colorful tilework"
            fill
            priority
            className="brightness-75 object-cover"
          />
          {/* Geometric Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #239F40 0px, #239F40 1px, transparent 1px, transparent 10px),
                               repeating-linear-gradient(-45deg, #239F40 0px, #239F40 1px, transparent 1px, transparent 10px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <Container>
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-5xl font-medium leading-tight">
                Discover the Rich Heritage of Iran
              </h1>
              <p className="text-xl leading-relaxed text-gray-100">
                Explore the intersection of ancient wisdom and modern innovation through our curated stories about Iran's culture, architecture, and business landscape.
              </p>
              <div className="pt-4">
                <a 
                  href="/posts" 
                  className="inline-block px-8 py-3 bg-iran-green hover:bg-iran-red transition-colors duration-300 rounded-md text-white font-medium"
                >
                  Explore Articles
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-iran-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <Container>
        <div className="py-20 space-y-12">
          {/* Featured Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-iran-green/20 rounded-lg hover:border-iran-red/40 transition-colors">
              <h3 className="text-xl font-medium text-iran-green mb-3">Culture & Heritage</h3>
              <p className="text-gray-600">Discover the rich cultural tapestry that makes Iran unique.</p>
            </div>
            <div className="p-6 border border-iran-green/20 rounded-lg hover:border-iran-red/40 transition-colors">
              <h3 className="text-xl font-medium text-iran-green mb-3">Architecture</h3>
              <p className="text-gray-600">Explore the stunning architectural wonders of ancient and modern Iran.</p>
            </div>
            <div className="p-6 border border-iran-green/20 rounded-lg hover:border-iran-red/40 transition-colors">
              <h3 className="text-xl font-medium text-iran-green mb-3">Business & Innovation</h3>
              <p className="text-gray-600">Learn about Iran's growing business landscape and opportunities.</p>
            </div>
          </div>

          {/* Latest Articles Preview */}
          <div className="pt-12">
            <h2 className="text-3xl font-medium text-iran-green mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/persian-garden.jpg"
                    alt="Persian Garden"
                    fill
                    className="group-hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-iran-green group-hover:text-iran-red transition-colors">
                  The Timeless Beauty of Persian Gardens
                </h3>
                <p className="mt-2 text-gray-600">
                  Exploring the philosophy and design principles behind Iran's famous gardens.
                </p>
              </div>
              <div className="group">
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/persian-crafts.jpg"
                    alt="Persian Crafts"
                    fill
                    className="group-hover:scale-105 transition-transform duration-500 object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-iran-green group-hover:text-iran-red transition-colors">
                  Traditional Crafts in Modern Iran
                </h3>
                <p className="mt-2 text-gray-600">
                  How ancient craftsmanship continues to thrive in contemporary Iran.
                </p>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="pt-12">
            <h2 className="text-3xl font-medium text-iran-green mb-8">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Partner 1 */}
              <div className="p-6 border border-iran-green/20 rounded-lg hover:border-iran-red/40 transition-colors bg-white/50 backdrop-blur-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/images/partner1.jpg"
                    alt="Partner 1"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-lg font-medium text-iran-green text-center">Persian Heritage Tours</h3>
              </div>

              {/* Partner 2 */}
              <div className="p-6 border border-iran-green/20 rounded-lg hover:border-iran-red/40 transition-colors bg-white/50 backdrop-blur-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/images/partner2.jpg"
                    alt="Partner 2"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-lg font-medium text-iran-green text-center">Iranian Art Gallery</h3>
              </div>

              {/* Partner 3 */}
              <div className="p-6 border border-iran-green/20 rounded-lg hover:border-iran-red/40 transition-colors bg-white/50 backdrop-blur-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/images/partner3.jpg"
                    alt="Partner 3"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-lg font-medium text-iran-green text-center">Persian Cuisine</h3>
              </div>

              {/* Partner 4 */}
              <div className="p-6 border border-iran-green/20 rounded-lg hover:border-iran-red/40 transition-colors bg-white/50 backdrop-blur-sm">
                <div className="aspect-square relative mb-4">
                  <Image
                    src="/images/partner4.jpg"
                    alt="Partner 4"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="text-lg font-medium text-iran-green text-center">Iranian Crafts</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;
