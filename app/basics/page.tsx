
'use client';

import Link from 'next/link';
import BasicHero from './BasicHero';
import SystemOverview from './SystemOverview';
import Requirements from './Requirements';
import PensionTypes from './PensionTypes';
import ApplicationFlow from './ApplicationFlow';

export default function BasicsPage() {
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
              <Link href="/basics" className="text-orange-600 font-medium cursor-pointer">
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

      <BasicHero />
      <SystemOverview />
      <PensionTypes />
      <Requirements />
      {/* ApplicationFlow component does not need children here */}
      <ApplicationFlow />

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            障害年金について詳しく相談したい方へ
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            制度の詳細やあなたの状況に合わせた申請方法について、<br />
            専門の社会保険労務士が丁寧にご説明いたします。
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
