'use client';

export default function BasicHero() {
  return (
    <section 
      className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Japanese%20office%20worker%20reading%20legal%20documents%20and%20guidebooks%20on%20clean%20desk%2C%20studying%20disability%20pension%20system%20materials%2C%20modern%20office%20environment%20with%20natural%20lighting%2C%20professional%20consultation%20atmosphere%2C%20organized%20paperwork%20and%20reference%20books%2C%20calm%20studying%20environment&width=1920&height=1080&seq=basics-hero-001&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            障害年金の基礎知識
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            障害年金制度の仕組みから受給要件まで、<br />
            専門家がわかりやすく解説いたします。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/90 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-gray-800">制度の仕組み</span>
            </div>
            <div className="bg-white/90 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-gray-800">受給要件</span>
            </div>
            <div className="bg-white/90 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-gray-800">申請の流れ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}