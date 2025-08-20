
'use client';

export default function EyeDisorders() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-eye-line text-blue-600 text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">眼の障害</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            視力障害、視野障害などによる障害年金の認定基準について説明いたします。
          </p>
        </div>

        <div className="space-y-12">
          {/* 視力障害 */}
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-focus-3-line text-blue-600 mr-3"></i>
              視力障害
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">認定基準</h4>
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級（重度）</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両眼の視力の和が0.04以下のもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級（中等度）</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両眼の視力の和が0.05以上0.08以下のもの</li>
                      <li>• 両眼の視野がそれぞれ10度以内のもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-semibold text-yellow-700 mb-2">3級（軽度）</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両眼の視力が0.1以下に減じたもの</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    <i className="ri-information-line text-blue-600 mr-2"></i>
                    主な対象疾患
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-gray-600 space-y-2">
                      <li>• 白内障</li>
                      <li>• 緑内障</li>
                      <li>• 糖尿病網膜症</li>
                      <li>• 加齢黄斑変性症</li>
                    </ul>
                    <ul className="text-gray-600 space-y-2">
                      <li>• 網膜色素変性症</li>
                      <li>• 視神経萎縮</li>
                      <li>• 先天性疾患</li>
                      <li>• 外傷性視力障害</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 視野障害 */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-scan-line text-gray-600 mr-3"></i>
              視野障害
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-orange-400">
                <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                <ul className="text-gray-700 space-y-2">
                  <li>• 両眼の視野がそれぞれ10度以内のもの</li>
                  <li>• 両眼による視野の1/2以上が欠損しているもの</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-400">
                <h5 className="font-semibold text-yellow-700 mb-2">3級</h5>
                <ul className="text-gray-700 space-y-2">
                  <li>• 両眼による視野が2分の1以上欠損したもの</li>
                  <li>• 両眼の視野がそれぞれ20度以内のもの</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
