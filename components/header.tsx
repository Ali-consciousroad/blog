import Link from "next/link";
import Image from "next/image";
import Container from "../components/container";

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/iran-logo-transparent.png"
              alt="Iran Blog Logo"
              width={75}
              height={75}
              className="rounded-full"
              priority
            />
          </Link>
          <div className="flex items-center space-x-12 ml-auto">
            <Link href="/" className="text-gray-600 hover:text-iran-red transition-colors">
              About
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-iran-red transition-colors">
              Articles
            </Link>
            <Link href="/partners" className="text-gray-600 hover:text-iran-red transition-colors">
              Partners
            </Link>
            <Link 
              href="/shop" 
              className="px-4 py-2 bg-iran-green text-white rounded-md hover:bg-iran-red transition-colors duration-300"
            >
              Shop
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
