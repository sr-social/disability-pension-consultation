'use client';

import Link from 'next/link';

export default function OfficePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex flex-col">
              <Link href="/" className="cursor-pointer">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  <span className="font-[\\\'Pacifico\\\'] text-orange-600">障害年金相談</span>.com
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
              <Link href="/office" className="text-orange-600 font-medium cursor-pointer">
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20Japanese%20social%20insurance%20labor%20consultant%20office%20interior%20with%20clean%20desk%2C%20comfortable%20client%20seating%20area%2C%20warm%20natural%20lighting%20through%20windows%2C%20organized%20bookshelves%20with%20law%20books%2C%20professional%20certificates%20on%20wall%2C%20welcoming%20consultation%20space%20atmosphere&width=1920&height=800&seq=office-interior-001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              事務所案内
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              社会保険労務士事務所ソシアルは、障害年金申請を専門とし、<br />
              お客様一人ひとりに寄り添った丁寧なサポートを心がけています。
            </p>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">事務所概要</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-building-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">事務所名</h3>
                    <p className="text-gray-600">社会保険労務士事務所ソシアル</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-map-pin-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">住所</h3>
                    <p className="text-gray-600">〒431-0301 静岡県湖西市新居町中之郷1066-8</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-user-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">代表者名</h3>
                    <p className="text-gray-600">太田　法行</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-phone-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">電話番号</h3>
                    <p className="text-gray-600">053-522-9555</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-global-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">対応地域</h3>
                    <p className="text-gray-600">静岡県、愛知県、その他オンラインは全国対応</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-award-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">所属会</h3>
                    <p className="text-gray-600">静岡県社会保険労務士会</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Representative Image */}
            <div>
              <img 
                src="https://static.readdy.ai/image/ac1ba0bff20e21a23f4b39bb4e4b1c8c/e4785a29458a386fd9bc2961fde6db19.jfif"
                alt="代表者 太田法行"
                className="w-full h-96 object-cover object-top rounded-xl shadow-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">代表 太田　法行</h3>
                <p className="text-gray-600">社会保険労務士</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">当事務所の特徴</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              障害年金申請の専門家として、お客様の状況に応じた最適なサポートを提供いたします。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "専門知識と豊富な経験",
                description: "障害年金制度に精通した社会保険労務士が、複雑な手続きを分かりやすくサポートいたします。",
                icon: "ri-graduation-cap-line",
                image: "https://readdy.ai/api/search-image?query=Stack%20of%20Japanese%20legal%20books%20and%20documents%20about%20disability%20pension%20on%20professional%20desk%2C%20organized%20paperwork%2C%20law%20office%20setting%2C%20professional%20consultation%20materials&width=400&height=300&seq=expertise-001&orientation=landscape"
              },
              {
                title: "全国対応可能",
                description: "オンライン面談システムを活用し、全国どこからでもご相談いただけます。",
                icon: "ri-global-line",
                image: "https://readdy.ai/api/search-image?query=Modern%20laptop%20computer%20showing%20online%20video%20consultation%20with%20Japanese%20professional%20consultant%2C%20clean%20modern%20office%20desk%20setup%2C%20technology%20for%20remote%20consultation&width=400&height=300&seq=online-001&orientation=landscape"
              },
              {
                title: "初回相談無料",
                description: "まずはお気軽にご相談ください。受給できなければ手続き費用も完全無料です。",
                icon: "ri-price-tag-3-line",
                image: "https://readdy.ai/api/search-image?query=Japanese%20consultant%20warmly%20welcoming%20client%20in%20bright%20consultation%20room%2C%20friendly%20professional%20meeting%20atmosphere%2C%20comfortable%20seating%20area%20with%20warm%20lighting&width=400&height=300&seq=consultation-002&orientation=landscape"
              },
              {
                title: "丁寧なヒアリング",
                description: "お客様の状況を詳しくお聞きし、一人ひとりに最適な申請方法をご提案します。",
                icon: "ri-chat-3-line",
                image: "https://readdy.ai/api/search-image?query=Japanese%20social%20worker%20taking%20detailed%20notes%20while%20listening%20to%20client%2C%20professional%20consultation%20meeting%2C%20careful%20attention%20to%20client%20needs%2C%20supportive%20atmosphere&width=400&height=300&seq=hearing-001&orientation=landscape"
              },
              {
                title: "書類作成サポート",
                description: "複雑な申請書類の作成から提出まで、すべて代行いたします。",
                icon: "ri-file-edit-line",
                image: "https://readdy.ai/api/search-image?query=Professional%20Japanese%20consultant%20carefully%20reviewing%20and%20preparing%20disability%20pension%20application%20documents%2C%20organized%20paperwork%20on%20desk%2C%20meticulous%20document%20preparation&width=400&height=300&seq=documents-001&orientation=landscape"
              },
              {
                title: "アフターフォロー",
                description: "申請後も継続的にサポートし、更新手続きなどもお任せください。",
                icon: "ri-customer-service-2-line",
                image: "https://readdy.ai/api/search-image?query=Japanese%20professional%20providing%20ongoing%20support%20consultation%20to%20satisfied%20client%2C%20follow%20up%20meeting%20in%20comfortable%20office%20setting%2C%20long%20term%20relationship%20building&width=400&height=300&seq=aftercare-001&orientation=landscape"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <i className={`${feature.icon} text-orange-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">アクセス</h2>
            <p className="text-lg text-gray-600">
              〒431-0301 静岡県湖西市新居町中之郷1066-8
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.24587910355!2d137.55322557520597!3d34.69897778330617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b296cfc3315d7%3A0xe7a204cd70277b5a!2z56S-5Lya5L-d6Zm65Yq05YuJ5aOr5LqL6YGL5omA44K944K344Ki44Or!5e0!3m2!1sja!2sjp!4v1755530644366!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <i className="ri-video-line text-blue-600 mr-2"></i>
                オンライン相談
              </h3>
              <p className="text-gray-600">
                来所が困難な方には、Zoom等を使用したオンライン相談も承っております。全国対応可能です。
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <i className="ri-car-line text-orange-600 mr-2"></i>
                お車でお越しの場合
              </h3>
              <p className="text-gray-600 mb-2">
                JR東海道線　新居町駅より車で5分
              </p>
              <p className="text-gray-600">
                ※事務所は、ベージュの平屋です。事務所前に、駐車できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            障害年金に関するご相談は初回無料です。<br />
            お一人で悩まず、まずは専門家にご相談ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/line-consultation" className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
              <i className="ri-line-fill mr-3 text-xl"></i>
              LINEで無料相談
            </Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
              <i className="ri-mail-line mr-3 text-xl"></i>
              メールで無料相談
            </button>
          </div>

          <div className="flex items-center justify-center text-blue-600 text-xl font-semibold">
            <i className="ri-phone-line mr-2"></i>
            <a href="tel:053-522-9555" className="cursor-pointer hover:text-blue-700 transition-colors">
              053-522-9555
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="font-[\\\'Pacifico\\\'] text-orange-400">障害年金相談</span>.com
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