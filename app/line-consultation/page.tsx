'use client';

import Link from 'next/link';

export default function LineConsultationPage() {
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
              <Link href="/pricing" className="text-gray-700 hover:text-orange-600 transition-colors cursor-pointer">
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
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Japanese%20professional%20consultant%20using%20smartphone%20LINE%20messaging%20app%20for%20client%20consultation%2C%20modern%20office%20setting%2C%20friendly%20communication%20atmosphere%2C%20green%20LINE%20interface%20visible%20on%20phone%20screen%2C%20professional%20yet%20approachable%20consultation%20environment&width=1920&height=1080&seq=line-consultation-001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              LINE無料相談
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              LINEで気軽に障害年金についてご相談いただけます。<br />
              専門の社会保険労務士が丁寧にお答えいたします。
            </p>
          </div>
        </div>
      </section>

      {/* LINE Consultation Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">LINE相談の流れ</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              簡単3ステップで専門家に相談できます。お忙しい方でも空いた時間にご利用いただけます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-qr-code-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">STEP 1</h3>
              <h4 className="text-lg font-medium text-gray-800 mb-2">友だち追加</h4>
              <p className="text-gray-600">下のQRコードまたはボタンから友だち追加してください。</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-chat-3-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">STEP 2</h3>
              <h4 className="text-lg font-medium text-gray-800 mb-2">メッセージ送信</h4>
              <p className="text-gray-600">お困りのことやご質問をメッセージでお送りください。</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">STEP 3</h3>
              <h4 className="text-lg font-medium text-gray-800 mb-2">専門家が回答</h4>
              <p className="text-gray-600">社会保険労務士が丁寧にお答えいたします。</p>
            </div>
          </div>

          {/* QR Code and Add Friend Button */}
          <div className="bg-green-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              <i className="ri-line-fill text-green-600 mr-3"></i>
              LINE公式アカウント
            </h3>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-48 h-48 mx-auto rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://qr-official.line.me/gs/M_015xwyfh_GW.png?oat_content=qr" 
                    alt="LINE公式アカウントQRコード"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  スマートフォンでこのQRコードを読み取って友だち追加
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://line.me/R/ti/p/@YOUR_LINE_ID" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-line-fill mr-3 text-xl"></i>
                友だち追加する
              </a>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                <i className="ri-smartphone-line mr-3 text-xl"></i>
                LINEアプリで開く
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">LINE相談の特徴</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">24時間受付</h3>
              <p className="text-gray-600">いつでもメッセージを送信できます。営業時間内に順次回答いたします。</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-message-3-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">気軽に相談</h3>
              <p className="text-gray-600">電話が苦手な方でも、文字でのやり取りで安心してご相談いただけます。</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">秘密厳守</h3>
              <p className="text-gray-600">お客様の個人情報やご相談内容は厳格に管理し、秘密を守ります。</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-star-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">専門家対応</h3>
              <p className="text-gray-600">社会保険労務士が直接お答えするため、正確で信頼できる情報を提供します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">LINE相談についてよくある質問</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "本当に無料で相談できますか？",
                answer: "はい、LINE相談は完全無料です。相談料はいただきません。お気軽にご利用ください。"
              },
              {
                question: "どのような相談ができますか？",
                answer: "障害年金の受給要件、申請手続き、必要書類、現在の状況での見込みなど、障害年金に関することであれば何でもご相談いただけます。"
              },
              {
                question: "返信はどのくらいで来ますか？",
                answer: "営業時間内（平日9:00-18:00）であれば、通常1時間以内に返信いたします。営業時間外は翌営業日に返信いたします。"
              },
              {
                question: "個人情報は大丈夫ですか？",
                answer: "お客様の個人情報は厳格に管理し、社会保険労務士の守秘義務により保護されます。第三者に開示することはございません。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  <i className="ri-question-line text-green-600 mr-2"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Contact Methods */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">その他のお問い合わせ方法</h2>
            <p className="text-lg text-gray-600">
              LINEが使えない方は、お電話またはメールでもご相談いただけます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">お電話での相談</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">053-522-9555</p>
              <p className="text-gray-600 mb-4">平日 9:00-18:00</p>
              <a 
                href="tel:053-522-9555" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
              >
                <i className="ri-phone-line mr-2"></i>
                電話をかける
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">メールでの相談</h3>
              <p className="text-gray-600 mb-6">24時間受付<br />翌営業日までに返信</p>
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
              >
                <i className="ri-mail-line mr-2"></i>
                メールで相談
              </Link>
            </div>
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
