
'use client';

export default function HearingDisorders() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-ear-line text-purple-600 text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">聴覚の障害</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            聴力障害による障害年金の認定基準について説明いたします。
          </p>
        </div>

        <div className="space-y-12">
          {/* 聴力障害 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-volume-down-line text-purple-600 mr-3"></i>
              聴力障害の認定基準
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-red-400">
                <h5 className="font-semibold text-red-700 mb-2">2級</h5>
                <ul className="text-gray-700 space-y-2">
                  <li>• 両耳の聴力レベルが100デシベル以上のもの</li>
                  <li>• 身体障害者手帳2級相当</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h5 className="font-semibold text-yellow-700 mb-2">3級</h5>
                <ul className="text-gray-700 space-y-2">
                  <li>• 両耳の聴力レベルが90デシベル以上のもの</li>
                  <li>• 身体障害者手帳3級相当</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 語音明瞭度 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-speak-line text-purple-600 mr-3"></i>
              語音明瞭度による認定
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-red-400">
                <h5 className="font-semibold text-red-700 mb-2">2級</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• 最良語音明瞭度が30%以下</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h5 className="font-semibold text-yellow-700 mb-2">3級</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• 最良語音明瞭度が50%以下</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 主な対象疾患 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              <i className="ri-file-medical-line text-purple-600 mr-3"></i>
              主な対象疾患
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">先天性疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 先天性難聴</li>
                  <li>• 遺伝性難聴</li>
                  <li>• 内耳奇形</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">感染性疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 髄膜炎後遺症</li>
                  <li>• 中耳炎後遺症</li>
                  <li>• ウイルス性内耳炎</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">外傷性疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 頭部外傷後遺症</li>
                  <li>• 音響外傷</li>
                  <li>• 鼓膜穿孔</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">腫瘍性疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 聴神経腫瘍</li>
                  <li>• 脳腫瘍後遺症</li>
                  <li>• 中耳がん</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">その他</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• メニエール病</li>
                  <li>• 突発性難聴</li>
                  <li>• 老人性難聴</li>
                  <li>• 薬剤性難聴</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">職業性疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 騒音性難聴</li>
                  <li>• 振動病</li>
                  <li>• 職業性聴覚障害</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
