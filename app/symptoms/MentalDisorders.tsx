
'use client';

export default function MentalDisorders() {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-heart-pulse-line text-red-600 text-3xl"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">精神の障害</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            精神疾患による障害年金の認定基準について説明いたします。
          </p>
        </div>

        <div className="space-y-12">
          {/* 認定基準の概要 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-brain-line text-red-600 mr-3"></i>
              精神障害の認定基準
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">等級判定の要素</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-red-700 mb-3">判定に用いる要素</h5>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 現在の病状または状態像</li>
                      <li>• 療養状況</li>
                      <li>• 生活環境</li>
                      <li>• 就労状況</li>
                      <li>• その他日常生活全般</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">総合的な判定</h4>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    精神の障害については、具体的な数値での判定が困難なため、以下の観点から総合的に判定されます。
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 日常生活能力の程度</li>
                    <li>• 日常生活能力の判定</li>
                    <li>• 現在の病状または状態像</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 等級別認定基準 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">等級別認定基準</h3>
            
            <div className="space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <h4 className="text-xl font-semibold text-red-700 mb-4">1級（重度）</h4>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    <strong>日常生活の用を弁ずることを不能ならしめる程度のもの</strong>
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 他人の助けを借りなければほとんど自分の用を弁ずることができない状態</li>
                    <li>• 身辺の処理、会話、歩行、着脱衣、食事、大小便の始末などに他人の介助を要する</li>
                    <li>• 在宅でも、外出時だけでなく、日中でも閉じこもりきりの状態</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-semibold text-orange-700 mb-4">2級（中等度）</h4>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    <strong>日常生活が著しい制限を受けるか、又は日常生活に著しい制限を加えることを必要とする程度のもの</strong>
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 必ずしも他人の助けを借りる必要はないが、日常生活は困難で労働により収入を得ることができない状態</li>
                    <li>• 家庭内での単純な日常生活はできるが、時に応じて援助が必要</li>
                    <li>• 外出などには、付き添いが必要</li>
                  </ul>
                </div>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-semibold text-yellow-700 mb-4">3級（軽度）</h4>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    <strong>労働が著しい制限を受けるか、又は労働に著しい制限を加えることを必要とする程度のもの</strong>
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 労働が制限を受けるか、労働に制限を加えることを必要とする状態</li>
                    <li>• 日常生活にはほとんど支障はないが、労働については制限がある</li>
                    <li>• 普通の労働に従事することはできないが、労働の種類・内容を大幅に制限すれば、軽労働は可能</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 主な対象疾患 */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              <i className="ri-file-medical-line text-red-600 mr-3"></i>
              主な対象疾患
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">気分障害</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• うつ病</li>
                  <li>• 躁うつ病</li>
                  <li>• 反復性うつ病性障害</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">統合失調症</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 統合失調症</li>
                  <li>• 妄想性障害</li>
                  <li>• 急性一過性精神病性障害</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">発達障害</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 自閉症スペクトラム障害</li>
                  <li>• ADHD</li>
                  <li>• 学習障害</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">知的障害</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 軽度知的障害</li>
                  <li>• 中等度知的障害</li>
                  <li>• 重度知的障害</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">その他</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• てんかん</li>
                  <li>• 高次脳機能障害</li>
                  <li>• 認知症</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-3">※不安障害・神経症について</h4>
                <p className="text-gray-600">
                  不安障害、いわゆる神経症は原則対象となりません。詳細はご相談ください。
                </p>
              </div>
            </div>
          </div>

          {/* 重要なポイント */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-lightbulb-line text-yellow-600 mr-3"></i>
              精神障害認定の重要なポイント
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">
                  <i className="ri-calendar-line text-red-600 mr-2"></i>
                  初診日の特定
                </h4>
                <div className="bg-red-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-2">
                    <li>• 精神科以外の科での初診も含む</li>
                    <li>• 症状について最初に医師にかかった日</li>
                    <li>• 相談やカウンセリングは含まない</li>
                    <li>• 健康診断での指摘も初診日になる場合あり</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">
                  <i className="ri-file-text-line text-red-600 mr-2"></i>
                  診断書の重要性
                </h4>
                <div className="bg-red-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-2">
                    <li>• 日常生活能力の程度・判定が重要</li>
                    <li>• 現在の病状の具体的な記載</li>
                    <li>• 治療・療養の状況</li>
                    <li>• 就労状況や能力</li>
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
