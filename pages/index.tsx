import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-8">
          <h1 className="text-3xl font-medium text-iran-green">
            Welcome to Iran Blog
          </h1>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600">
              Exploring the rich culture, history, and business opportunities in Iran. 
              Join us as we discover the fascinating world of Iran.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              From educational articles to travel guides and investment opportunities, 
              we provide valuable insights about Iran.
            </p>
          </div>
        </div>
      </Container>

      <div className="container max-w-3xl m-auto px-4 mt-20">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/persian-architecture.jpg"
            alt="Persian Architecture"
            layout="fill"
            objectFit="cover"
            className="hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
