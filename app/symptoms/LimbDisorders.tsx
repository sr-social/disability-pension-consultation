
'use client';

export default function LimbDisorders() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-wheelchair-line text-green-600 text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">肢体の障害</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            上肢・下肢の機能障害による障害年金の認定基準について説明いたします。
          </p>
        </div>

        <div className="space-y-12">
          {/* 上肢の障害 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-hand-heart-line text-green-600 mr-3"></i>
              上肢の障害
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">欠損障害</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両上肢の手関節以上で欠くもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両上肢のおや指を欠くもの</li>
                      <li>• 一上肢の上腕又は前腕を欠くもの</li>
                      <li>• 一上肢の手関節以上で欠くもの</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">機能障害</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両上肢の機能に著しい障害を有するもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両上肢のおや指の機能に著しい障害を有するもの</li>
                      <li>• 一上肢の機能に著しい障害を有するもの</li>
                      <li>• 一上肢の肩関節、肘関節又は手関節のうち、いずれか一関節の機能に著しい障害を有するもの</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                <i className="ri-information-line text-green-600 mr-2"></i>
                機能障害の判定基準
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">著しい機能障害とは</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 関節の可動域が健側の1/2以下に制限されているもの</li>
                    <li>• 筋力が半減しているもの</li>
                    <li>• 握力が健側の1/2以下に低下しているもの</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">日常生活動作の制限</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 更衣動作の困難</li>
                    <li>• 食事動作の困難</li>
                    <li>• 整容動作の困難</li>
                    <li>• 筆記動作の困難</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 下肢の障害 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-run-line text-green-600 mr-3"></i>
              下肢の障害
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">欠損障害</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両下肢をそれぞれ足関節以上で欠くもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 一下肢を大腿の2分の1以上で欠くもの</li>
                      <li>• 一下肢を下腿の2分の1以上で欠くもの</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">機能障害</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両下肢の機能に著しい障害を有するもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 両下肢のすべての指を欠くもの</li>
                      <li>• 一下肢の機能に著しい障害を有するもの</li>
                      <li>• 一下肢の股関節又は膝関節の機能に著しい障害を有するもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-semibold text-yellow-700 mb-2">3級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 一下肢の足関節の機能に著しい障害を有するもの</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 主な対象疾患 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              <i className="ri-file-medical-line text-green-600 mr-3"></i>
              主な対象疾患
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">外傷・事故</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 交通事故による外傷</li>
                  <li>• 労災事故</li>
                  <li>• 切断事故</li>
                  <li>• 骨折後遺症</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">神経・筋疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 脳卒中後遺症</li>
                  <li>• 脊髄損傷</li>
                  <li>• 筋ジストロフィー</li>
                  <li>• 重症筋無力症</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">関節疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 関節リウマチ</li>
                  <li>• 変形性関節症</li>
                  <li>• 人工関節置換術後</li>
                  <li>• 関節拘縮</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">先天性疾患</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 先天性四肢欠損</li>
                  <li>• 二分脊椎</li>
                  <li>• 脳性麻痺</li>
                  <li>• 筋萎縮症</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">末梢神経</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 末梢神経損傷</li>
                  <li>• 腕神経叢損傷</li>
                  <li>• 正中神経麻痺</li>
                  <li>• 橈骨神経麻痺</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">その他</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 悪性腫瘍による切断</li>
                  <li>• 感染症後遺症</li>
                  <li>• 血管疾患</li>
                  <li>• 糖尿病性壊疽</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
