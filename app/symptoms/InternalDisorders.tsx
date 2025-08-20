
'use client';

export default function InternalDisorders() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-heart-pulse-line text-gray-600 text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">内部障害</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            心疾患、腎疾患、肝疾患、糖尿病などの内部障害による障害年金の認定基準について説明いたします。
          </p>
        </div>

        <div className="space-y-12">
          {/* 心疾患 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-heart-line text-red-500 mr-3"></i>
              心疾患による障害
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">等級別基準</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 安静時でも心不全症状、狭心痛がある</li>
                      <li>• 身の回りの処理も困難</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 軽い家事・事務などは可能</li>
                      <li>• 歩行や階段昇降で心悸亢進、呼吸困難</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-semibold text-yellow-700 mb-2">3級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 平地歩行には支障なし</li>
                      <li>• 階段昇降、坂道歩行で心悸亢進、呼吸困難</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">検査所見</h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li>
                      <strong>心電図：</strong><br />
                      心房細動、心室性不整脈など
                    </li>
                    <li>
                      <strong>心エコー：</strong><br />
                      左室駆出率（EF値）30%未満など
                    </li>
                    <li>
                      <strong>心臓カテーテル：</strong><br />
                      冠動脈狭窄率、心機能評価
                    </li>
                    <li>
                      <strong>運動負荷試験：</strong><br />
                      運動耐容能の評価
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 腎疾患 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-drop-line text-blue-500 mr-3"></i>
              腎疾患による障害
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">等級別基準</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 血清クレアチニン値8.0mg/dl以上</li>
                      <li>• 透析療法を行っているもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 血清クレアチニン値5.0mg/dl以上8.0mg/dl未満</li>
                      <li>• 透析療法を行っているもの</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-semibold text-yellow-700 mb-2">3級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 血清クレアチニン値3.0mg/dl以上5.0mg/dl未満</li>
                      <li>• 透析療法を行っているもの</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">透析療法</h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li>
                      <strong>人工透析開始：</strong><br />
                      透析導入から3月経過で障害認定日
                    </li>
                    <li>
                      <strong>原則2級：</strong><br />
                      継続的な透析療法を必要とする場合
                    </li>
                    <li>
                      <strong>腎移植：</strong><br />
                      移植術を受けた場合の評価
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 肝疾患 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-capsule-line text-green-500 mr-3"></i>
              肝疾患による障害
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">等級別基準</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-700 mb-2">1級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Child-Pugh分類C（10～15点）</li>
                      <li>• 肝性脳症、腹水、食道静脈瘤</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h5 className="font-semibold text-orange-700 mb-2">2級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Child-Pugh分類B（7～9点）</li>
                      <li>• 軽度の肝性脳症</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h5 className="font-semibold text-yellow-700 mb-2">3級</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Child-Pugh分類A（5～6点）</li>
                      <li>• 軽度の肝機能障害</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">検査項目</h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li>
                      <strong>血液検査：</strong><br />
                      AST、ALT、γ-GTP、ビリルビン
                    </li>
                    <li>
                      <strong>蛋白代謝：</strong><br />
                      アルブミン、プロトロンビン時間
                    </li>
                    <li>
                      <strong>画像検査：</strong><br />
                      CT、MRI、腹部エコー
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 糖尿病 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-capsule-line text-yellow-500 mr-3"></i>
              糖尿病による障害
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">認定の考え方</h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    糖尿病そのものではなく、糖尿病性の合併症により認定されます。
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 糖尿病性網膜症（眼の障害）</li>
                    <li>• 糖尿病性腎症（腎疾患による障害）</li>
                    <li>• 糖尿病性神経障害（肢体の障害）</li>
                    <li>• 糖尿病性壊疽（肢体の障害）</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">主な合併症</h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li>
                      <strong>網膜症：</strong><br />
                      視力障害として認定
                    </li>
                    <li>
                      <strong>腎症：</strong><br />
                      透析療法が必要な場合
                    </li>
                    <li>
                      <strong>神経障害：</strong><br />
                      手足のしびれ、運動障害
                    </li>
                    <li>
                      <strong>壊疽：</strong><br />
                      下肢切断に至った場合
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* まとめ */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-lightbulb-line text-yellow-600 mr-3"></i>
              内部障害認定の重要なポイント
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">
                  <i className="ri-file-chart-line text-gray-600 mr-2"></i>
                  客観的な検査データ
                </h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-2">
                    <li>• 血液検査の数値</li>
                    <li>• 画像診断結果</li>
                    <li>• 心電図・心エコー所見</li>
                    <li>• 透析の導入時期と状況</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">
                  <i className="ri-user-heart-line text-gray-600 mr-2"></i>
                  日常生活制限の程度
                </h4>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-2">
                    <li>• 運動制限の程度</li>
                    <li>• 就労への影響</li>
                    <li>• 治療のための通院頻度</li>
                    <li>• 薬物療法の状況</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
