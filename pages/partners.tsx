import Container from "../components/container";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-4">Our Partners</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We are proud to collaborate with these amazing organizations and businesses that share our passion for promoting Iranian culture and heritage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partner 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center mb-2">Partner 1</h3>
            <p className="text-gray-600 text-center">
              Dedicated to preserving and promoting Iranian cultural heritage through educational programs and events.
            </p>
          </div>
          {/* Partner 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center mb-2">Partner 2</h3>
            <p className="text-gray-600 text-center">
              Showcasing contemporary and traditional Persian art, connecting artists with global audiences.
            </p>
          </div>
          {/* Partner 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-center mb-2">Partner 3</h3>
            <p className="text-gray-600 text-center">
              Promoting travel to Iran's historic sites and natural wonders, sharing the beauty of our country with the world.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
} 