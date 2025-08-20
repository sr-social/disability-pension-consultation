'use client';

import Link from 'next/link';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submission started...', formData);
    
    try {
      // EmailJSを使用して直接メール送信
      console.log('Sending email via EmailJS...');
      
      // EmailJSの設定
      const serviceID = 'service_5iez0ji';
      const templateID = 'template_yj4g2al';
      const publicKey = 'EywRJXon0IkPktjlX';

      // テンプレートパラメータ
      const templateParams = {
        to_email: 'info@sr-social.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || '未入力',
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      };

      // 実際のEmailJS送信を実行
      console.log('EmailJS template params:', templateParams);
      
      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log('EmailJS送信成功:', result);
      setSubmitStatus('success');
      
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('メール送信エラー:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSubmitStatus('idle');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setSubmitStatus('idle');
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                <span className="font-[\'Pacifico\'] text-orange-600">障害年金相談</span>.com
              </h1>
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
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Warm%20modern%20office%20consultation%20room%20interior%20without%20people%2C%20natural%20lighting%20through%20windows%2C%20wooden%20furniture%2C%20comfortable%20seating%20area%2C%20plants%20and%20books%20on%20shelves%2C%20clean%20organized%20desk%2C%20soft%20earth%20tones%2C%20welcoming%20professional%20atmosphere%2C%20cozy%20meeting%20space%2C%20bright%20and%20airy%20environment&width=1920&height=1080&seq=hero-office-001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10">
        
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)' }}>
                障害年金申請、<br />
                ひとりで悩んでいませんか？
              </h2>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                社会保険労務士が丁寧にサポート。<br />
                全国オンライン対応で気軽に相談できます。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/line-consultation" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                  <i className="ri-line-fill mr-3 text-xl"></i>
                  LINEで無料相談
                </Link>
                <button 
                  onClick={openModal}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                  <i className="ri-mail-line mr-3 text-xl"></i>
                  メールで無料相談
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/90 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-book-open-line text-orange-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">わかりやすい説明</h3>
                  <p className="text-sm text-gray-600">複雑な制度も社労士がやさしく解説</p>
                </div>

                <div className="text-center p-6 bg-white/90 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-price-tag-3-line text-orange-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">初回無料相談</h3>
                  <p className="text-sm text-gray-600">受給できなければ手続き費用も完全無料</p>
                </div>

                <div className="text-center p-6 bg-white/90 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-global-line text-orange-600 text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">全国相談OK</h3>
                  <p className="text-sm text-gray-600">オンライン面談で全国対応</p>
                </div>
              </div>
            </div>

            {/* Right Image Area - Background handled by section */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">こんなお悩みはありませんか？</h2>
            <div className="max-w-4xl mx-auto text-left bg-white rounded-xl shadow-sm p-8 mb-12">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">・</span>
                  今の状態で障害年金がもらえるか分からない。
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">・</span>
                  病気やケガで初めて病院にかかった日（初診日）がいつだったか、どう証明すればいいか分からない。
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">・</span>
                  医師に診断書をどのように依頼すれば、自分の状態が正しく伝わるのか不安だ。
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">・</span>
                  「病歴・就労状況等申立書」など書類の書き方が分からない。
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">・</span>
                  体調が優れない中、何度も年金事務所へ足を運ぶ時間も体力もない。
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">・</span>
                  以前、自分で申請してみたが、不支給の通知が届いてしまった
                </li>
              </ul>
            </div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">そのお悩み、社会保険労務士が解決します。</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: "基礎知識の解説",
                description: "障害年金制度の仕組みを分かりやすくお教えします。",
                icon: "ri-graduation-cap-line",
                image: "https://readdy.ai/api/search-image?query=Japanese%20social%20insurance%20labor%20consultant%20meeting%20with%20Japanese%20client%20in%20modern%20consultation%20room%2C%20two%20people%20sitting%20across%20desk%20discussing%20documents%2C%20professional%20consultation%20atmosphere%2C%20warm%20natural%20lighting%2C%20clean%20organized%20office%20environment%20with%20Japanese%20professionals%20having%20friendly%20discussion&width=400&height=300&seq=consultation-jp-001&orientation=landscape"
              },
              {
                title: "受給事例のご紹介",
                description: "実際の受給事例をもとに、あなたのケースを詳しくご説明します。",
                icon: "ri-file-list-3-line",
                image: "https://readdy.ai/api/search-image?query=Professional%20documents%20and%20case%20files%20on%20clean%20desk%2C%20organized%20paperwork%2C%20legal%20consultation%20materials%2C%20modern%20office%20setting%2C%20soft%20natural%20lighting%2C%20business%20professional%20atmosphere&width=400&height=300&seq=cases-001&orientation=landscape"
              },
              {
                title: "病名・症状別サポート",
                description: "うつ病、統合失調症、発達障害など、様々な疾患に対応しています。",
                icon: "ri-heart-pulse-line",
                image: "https://readdy.ai/api/search-image?query=Japanese%20doctor%20in%20white%20coat%20consulting%20with%20Japanese%20patient%20in%20clean%20modern%20clinic%2C%20medical%20charts%20on%20desk%2C%20professional%20healthcare%20consultation%2C%20warm%20natural%20lighting%2C%20reassuring%20atmosphere%2C%20modern%20medical%20office%20interior%20with%20Japanese%20medical%20professional&width=400&height=300&seq=medical-jp-001&orientation=landscape"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <i className={`${service.icon} text-orange-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="/symptoms" className="text-orange-600 hover:text-orange-700 font-medium cursor-pointer">
                    詳しく見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            障害年金の申請は複雑ですが、ひとりで悩む必要はありません。<br />
            専門家が最初から最後まで丁寧にサポートいたします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/line-consultation" className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
              <i className="ri-line-fill mr-3 text-xl"></i>
              LINEで無料相談
            </Link>
            <button 
              onClick={openModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
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
                <button 
                  onClick={openModal}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
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

      {/* Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">メール無料相談</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold">
                  ×
                </button>
              </div>
              <p className="text-gray-600 mt-2">お気軽にご相談ください。内容を確認後、24時間以内にご返信いたします。</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  相談内容 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="初回相談">初回相談について</option>
                  <option value="受給可能性">受給可能性の確認</option>
                  <option value="申請手続き">申請手続きについて</option>
                  <option value="診断書">診断書について</option>
                  <option value="審査請求">審査請求について</option>
                  <option value="料金">料金について</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  詳細内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-vertical"
                  placeholder="現在の状況や症状、お困りのことなど、お気軽にお書きください。"
                />
                <p className="text-sm text-gray-500 mt-2">
                  ※個人情報は適切に管理し、相談内容以外では使用いたしません。
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                    <p className="text-green-800">メールが正常に送信されました！24時間以内にご返信いたします。</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                    <p className="text-red-800">エラーが発生しました。もう一度お試しください。</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                  className="w-full sm:flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-line animate-spin mr-2"></i>
                      送信中...
                    </>
                  ) : (
                    <>
                      <i className="ri-mail-send-line mr-2"></i>
                      相談内容を送信
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}