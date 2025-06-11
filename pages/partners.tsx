import Container from "../components/container";

export default function Partners() {
  return (
    <div className="min-h-screen py-20 pb-32">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-4">Our Partners</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We are proud to collaborate with these amazing organizations and businesses that share our passion for promoting Iranian culture and heritage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Ali Dindar */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="w-24 h-24 bg-iran-green rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-iran-red transition-colors">
              <span className="text-white text-2xl font-bold">AD</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-iran-green group-hover:text-iran-red transition-colors">Ali Dindar</h3>
            <p className="text-gray-600 text-center">Founder</p>
          </div>

          {/* Reza Tabesh */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="w-24 h-24 bg-iran-red rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-iran-green transition-colors">
              <span className="text-white text-2xl font-bold">RT</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-iran-red group-hover:text-iran-green transition-colors">Reza Tabesh</h3>
            <p className="text-gray-600 text-center">Content Creator</p>
          </div>

          {/* Asma */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="w-24 h-24 bg-iran-green rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-iran-red transition-colors">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-iran-green group-hover:text-iran-red transition-colors">Asma</h3>
            <p className="text-gray-600 text-center">English Teacher & Writer</p>
          </div>

          {/* Nasser */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
            <div className="w-24 h-24 bg-iran-red rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-iran-green transition-colors">
              <span className="text-white text-2xl font-bold">N</span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-iran-red group-hover:text-iran-green transition-colors">Nasser</h3>
            <p className="text-gray-600 text-center">Designer</p>
          </div>
        </div>
      </Container>
    </div>
  );
} 