import Link from "next/link";
import Container from "../components/container";

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-medium text-iran-green hover:text-iran-red transition-colors">
            Iran Blog
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-iran-red transition-colors">
              About
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-iran-red transition-colors">
              Articles
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
