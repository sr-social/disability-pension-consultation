'use client';

export default function SymptomsHero() {
  return (
    <section 
      className="relative min-h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Medical%20examination%20room%20with%20various%20medical%20equipment%20and%20diagnostic%20tools%2C%20stethoscope%2C%20eye%20chart%2C%20medical%20documents%20on%20desk%2C%20professional%20healthcare%20setting%2C%20clean%20organized%20medical%20office%2C%20modern%20medical%20facility%20environment&width=1920&height=800&seq=symptoms-hero-001&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            病名・症状別<br />
            障害年金認定基準
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            日本年金機構の障害認定基準に基づき、<br />
            各症状における障害年金の認定基準を詳しくご説明いたします。
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                <i className="ri-eye-line text-blue-600 mr-2"></i>
                眼の障害
              </h3>
              <p className="text-sm text-gray-600">視力障害、視野障害など</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                <i className="ri-heart-pulse-line text-red-600 mr-2"></i>
                精神の障害
              </h3>
              <p className="text-sm text-gray-600">うつ病、統合失調症など</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                <i className="ri-wheelchair-line text-green-600 mr-2"></i>
                肢体の障害
              </h3>
              <p className="text-sm text-gray-600">上肢、下肢の機能障害など</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}