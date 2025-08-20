
'use client';

import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex flex-col">
              <Link href="/" className="cursor-pointer">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  <span className="font-[\'Pacifico\'] text-orange-600">障害年金相談</span>.com
                </h1>
              </Link>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">運営：社会保険労務士事務所ソシアル</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                トップ
              </Link>
              <Link href="/basics" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                基礎知識
              </Link>
              <Link href="/cases" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                受給事例
              </Link>
              <Link href="/symptoms" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                病名・症状別
              </Link>
              <Link href="/qa" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                Q&A
              </Link>
              <Link href="/pricing" className="text-orange-600 font-medium cursor-pointer">
                料金
              </Link>
              <Link href="/office" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
                事務所案内
              </Link>
            </nav>

            {/* Contact Buttons & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <a href="tel:053-522-9555" className="bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-phone-line mr-1 sm:mr-2"></i>
                <span className="hidden sm:inline">053-522-9555</span>
                <span className="sm:hidden">電話</span>
              </a>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-menu-line text-xl"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20Japanese%20consultant%20calculating%20costs%20and%20fees%20on%20calculator%20with%20legal%20documents%2C%20transparent%20pricing%20consultation%2C%20organized%20desk%20with%20paperwork%2C%20warm%20office%20lighting%2C%20trustworthy%20financial%20consultation%20atmosphere&width=1920&height=800&seq=pricing-hero-001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              料金について
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              明確で安心な料金体系。成功報酬制により、<br />
              受給できなければ手続き費用は一切いただきません。
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">料金プラン</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              当事務所では成功報酬制を採用しており、障害年金が支給されなかった場合は手続き費用をいただきません。
            </p>
          </div>

          {/* Success Fee Structure */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                <i className="ri-award-line text-orange-600 mr-3"></i>
                成功報酬制
              </h3>
              <p className="text-lg text-gray-700">
                障害年金が受給決定した場合のみお支払いいただく安心システム
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-money-dollar-circle-line text-blue-600 text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">成功報酬</h4>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">初回支給額の15%</div>
                  <p className="text-sm text-gray-600 mb-4">（税別・上限：25万円）</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      例：初回支給額が100万円の場合<br />
                      成功報酬：15万円（税別）
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-green-600 text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">完全成功報酬</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-green-600">
                    <i className="ri-check-line mr-2"></i>
                    <span>受給決定まで費用0円</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <i className="ri-check-line mr-2"></i>
                    <span>不支給の場合は費用なし</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <i className="ri-check-line mr-2"></i>
                    <span>初回相談完全無料</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <i className="ri-check-line mr-2"></i>
                    <span>着手金・相談料なし</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Comparison */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">サービス比較</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-600"></th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">ご自身で申請</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">一般的な事務所</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-orange-600 bg-orange-50">当事務所</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">初回相談料</td>
                    <td className="px-6 py-4 text-center text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-gray-600">5,000円〜</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">無料</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">着手金</td>
                    <td className="px-6 py-4 text-center text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-gray-600">3〜10万円</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">無料</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">成功報酬</td>
                    <td className="px-6 py-4 text-center text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-gray-600">20〜30%</td>
                    <td className="px-6 py-4 text-center font-bold text-orange-600">15%（上限25万円）</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">不支給時の費用</td>
                    <td className="px-6 py-4 text-center text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-red-600">着手金は返金なし</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">完全無料</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-800">専門サポート</td>
                    <td className="px-6 py-4 text-center text-red-600">×</td>
                    <td className="px-6 py-4 text-center text-green-600">○</td>
                    <td className="px-6 py-4 text-center font-bold text-green-600">◎</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                <i className="ri-file-list-3-line text-gray-600 mr-2"></i>
                審査請求・再審査請求
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">審査請求</span>
                  <span className="font-semibold text-gray-800">10万円（税別）</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">再審査請求</span>
                  <span className="font-semibold text-gray-800">15万円（税別）</span>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  ※不支給決定に不服がある場合の手続き
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                <i className="ri-refresh-line text-gray-600 mr-2"></i>
                更新手続き
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">診断書作成サポート</span>
                  <span className="font-semibold text-gray-800">3万円（税別）</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">更新手続き代行</span>
                  <span className="font-semibold text-gray-800">5万円（税別）</span>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  ※1〜5年ごとの更新手続きをサポート
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">料金に関するよくある質問</h3>
          <div className="space-y-6">
            {[
              {
                question: "成功報酬はいつ支払うのですか？",
                answer: "障害年金の初回支給があった時点でお支払いいただきます。支給決定通知書が届いた段階では、まだお支払いの必要はありません。"
              },
              {
                question: "上限25万円とはどういう意味ですか？",
                answer: "初回支給額がいくら高額でも、成功報酬は最大25万円（税別）となります。例えば、初回支給額が300万円でも、成功報酬は25万円です。"
              },
              {
                question: "不支給になった場合、本当に費用はかからないのですか？",
                answer: "はい、完全に無料です。相談料、着手金、手続き費用など、一切いただきません。リスクなくご依頼いただけます。"
              },
              {
                question: "分割払いは可能ですか？",
                answer: "ご事情に応じて分割払いのご相談も承ります。お気軽にご相談ください。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3">
                  <i className="ri-question-line text-orange-600 mr-2"></i>
                  {faq.question}
                </h4>
                <p className="text-gray-600 pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            まずは無料相談からお気軽に
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            料金や手続きについて詳しくご説明いたします。<br />
            不明な点があれば、遠慮なくお聞きください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/line-consultation" className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
              <i className="ri-line-fill mr-3 text-xl"></i>
              LINEで無料相談
            </Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
              <i className="ri-mail-line mr-3 text-xl"></i>
              メールで無料相談
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="font-[\'Pacifico\'] text-orange-400">障害年金相談</span>.com
              </h3>
              <p className="text-gray-300 mb-4">
                社会保険労務士による障害年金申請の専門サポート
              </p>
              <p className="text-sm text-gray-400 mb-2">
                社会保険労務士事務所ソシアル
              </p>
              <p className="text-sm text-gray-400">
                〒431-0301 静岡県湖西市新居町中之郷1066-8
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">サイトマップ</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-orange-400 transition-colors cursor-pointer">トップ</Link></li>
                <li><Link href="/basics" className="hover:text-orange-400 transition-colors cursor-pointer">障害年金の基礎知識</Link></li>
                <li><Link href="/cases" className="hover:text-orange-400 transition-colors cursor-pointer">受給事例</Link></li>
                <li><Link href="/symptoms" className="hover:text-orange-400 transition-colors cursor-pointer">病名・症状別</Link></li>
                <li><Link href="/qa" className="hover:text-orange-400 transition-colors cursor-pointer">Q&A</Link></li>
                <li><Link href="/pricing" className="hover:text-orange-400 transition-colors cursor-pointer">料金</Link></li>
                <li><Link href="/office" className="hover:text-orange-400 transition-colors cursor-pointer">事務所案内</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <div className="space-y-3">
                <Link href="/line-consultation" className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                  <i className="ri-line-fill mr-2"></i>
                  LINE公式アカウント
                </Link>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                  <i className="ri-mail-line mr-2"></i>
                  メールで無料相談
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors cursor-pointer mr-4">
                プライバシーポリシー
              </Link>
              <Link href="/disclaimer" className="hover:text-orange-400 transition-colors cursor-pointer">
                免責事項
              </Link>
            </div>
            <p> 2025 社会保険労務士事務所ソシアル All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
