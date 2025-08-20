'use client';

import Link from 'next/link';

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex flex-col">
              <Link href="/" className="cursor-pointer">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  <span className="font-['Pacifico'] text-orange-600">障害年金相談</span>.com
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
              <Link href="/cases" className="text-orange-600 font-medium cursor-pointer">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            受給事例のご紹介
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            実際に障害年金を受給されたお客様の事例をご紹介いたします。<br />
            あなたのケースと照らし合わせてご参考ください。
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">受給成功率</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">サポート実績</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">15年</div>
              <div className="text-gray-600">経験年数</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Case 1 - うつ病 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Simple%20minimalist%20illustration%20of%20young%20Japanese%20woman%20in%20quiet%20contemplative%20pose%2C%20clean%20vector%20art%20style%2C%20gentle%20pastel%20blue%20and%20soft%20colors%2C%20mental%20health%20awareness%20concept%2C%20flat%20design%20illustration%20with%20calming%20elements%2C%20supportive%20atmosphere%20visual%2C%20soft%20blue%20color%20palette%2C%20peaceful%20environment&width=600&height=300&seq=case-depression-001&orientation=landscape"
                alt="うつ病事例"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">うつ病</span>
                  <span className="ml-3 text-sm text-gray-600">30代女性・元会社員</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">職場でのストレスからうつ病を発症、障害厚生年金2級を受給</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>状況：</strong>職場での過重労働とパワハラによりうつ病を発症。休職を経て退職に至る。</p>
                  <p><strong>課題：</strong>初診日の証明が困難で、病院のカルテが廃棄されていた。</p>
                  <p><strong>サポート：</strong>受診状況等証明書や同僚の証言書を収集し、初診日を特定。</p>
                  <p><strong>結果：</strong>障害厚生年金2級（月額約130,000円）を受給開始。</p>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <i className="ri-lightbulb-line mr-2"></i>
                    <strong>ポイント：</strong>初診日の証明が困難なケースでも、様々な方法で立証可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* Case 2 - 統合失調症 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Simple%20minimalist%20illustration%20of%20Japanese%20family%20support%20scene%2C%20clean%20vector%20art%20style%2C%20gentle%20pastel%20pink%20and%20warm%20colors%2C%20family%20care%20concept%2C%20flat%20design%20illustration%20with%20supportive%20elements%2C%20home%20environment%20visual%2C%20soft%20pink%20color%20palette%2C%20caring%20atmosphere&width=600&height=300&seq=case-schizophrenia-001&orientation=landscape"
                alt="統合失調症事例"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">統合失調症</span>
                  <span className="ml-3 text-sm text-gray-600">20代男性・学生</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">大学在学中に統合失調症を発症、障害基礎年金1級を受給</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>状況：</strong>大学2年時に幻聴や妄想が現れ、統合失調症と診断される。</p>
                  <p><strong>課題：</strong>20歳前に初診があり、所得要件の確認が必要だった。</p>
                  <p><strong>サポート：</strong>20歳前の障害認定日請求として申請書類を準備。</p>
                  <p><strong>結果：</strong>障害基礎年金1級（月額約81,000円）を受給開始。</p>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <i className="ri-lightbulb-line mr-2"></i>
                    <strong>ポイント：</strong>20歳前に初診がある場合でも、適切な手続きで受給可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* Case 3 - 発達障害 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Simple%20minimalist%20illustration%20of%20inclusive%20workplace%20environment%2C%20clean%20vector%20art%20style%2C%20gentle%20pastel%20green%20colors%2C%20diversity%20and%20inclusion%20concept%2C%20flat%20design%20illustration%20with%20supportive%20work%20elements%2C%20accommodating%20office%20visual%2C%20soft%20green%20color%20palette%2C%20understanding%20atmosphere&width=600&height=300&seq=case-developmental-001&orientation=landscape"
                alt="発達障害事例"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">発達障害</span>
                  <span className="ml-3 text-sm text-gray-600">40代男性・会社員</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">成人後に発達障害と診断、障害厚生年金3級を受給</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>状況：</strong>職場での対人関係やコミュニケーションに困難を感じ、40代で発達障害と診断。</p>
                  <p><strong>課題：</strong>幼少期の症状を証明する資料が不足していた。</p>
                  <p><strong>サポート：</strong>学校の成績表や家族の証言を集め、幼少期からの継続性を立証。</p>
                  <p><strong>結果：</strong>障害厚生年金3級（月額約58,000円）を受給開始。</p>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <i className="ri-lightbulb-line mr-2"></i>
                    <strong>ポイント：</strong>成人後の診断でも、幼少期からの症状が証明できれば受給可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* Case 4 - 人工関節 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Simple%20minimalist%20illustration%20of%20middle-aged%20Japanese%20businessman%20walking%20with%20a%20cane%2C%20clean%20vector%20art%20style%2C%20gentle%20pastel%20colors%2C%20mobility%20assistance%20concept%2C%20flat%20design%20illustration%20with%20professional%20elements%2C%20workplace%20accessibility%20visual%2C%20soft%20purple%20and%20lavender%20color%20palette%2C%2040s%20male%20office%20worker%20using%20walking%20stick%20for%20support&width=600&height=300&seq=case-joint-male-cane-001&orientation=landscape"
                alt="人工関節事例"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">人工関節</span>
                  <span className="ml-3 text-sm text-gray-600">40代男性・会社員</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">両膝人工関節置換術後、障害厚生年金3級を受給</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>状況：</strong>変形性膝関節症が悪化し、両膝に人工関節を装着。長時間の立ち仕事が困難に。</p>
                  <p><strong>課題：</strong>人工関節装着後の等級認定基準が複雑で理解が困難だった。</p>
                  <p><strong>サポート：</strong>人工関節の認定基準を詳しく説明し、医師に適切な診断書作成を依頼。</p>
                  <p><strong>結果：</strong>障害厚生年金3級（月額約58,000円）を受給開始。</p>
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <i className="ri-lightbulb-line mr-2"></i>
                    <strong>ポイント：</strong>人工関節を装着した場合、原則として3級以上に該当します。
                  </p>
                </div>
              </div>
            </div>

            {/* Case 5 - 糖尿病性腎症 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Simple%20minimalist%20illustration%20of%20modern%20medical%20facility%20interior%2C%20clean%20vector%20art%20style%2C%20gentle%20pastel%20teal%20colors%2C%20healthcare%20environment%20concept%2C%20flat%20design%20illustration%20with%20medical%20equipment%2C%20dialysis%20treatment%20visual%2C%20soft%20teal%20color%20palette%2C%20medical%20care%20atmosphere&width=600&height=300&seq=case-diabetes-001&orientation=landscape"
                alt="糖尿病性腎症事例"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">糖尿病性腎症</span>
                  <span className="ml-3 text-sm text-gray-600">50代男性・自営業</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">糖尿病性腎症により人工透析導入、障害基礎年金2級を受給</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>状況：</strong>糖尿病の合併症として腎症が悪化し、週3回の人工透析が必要に。</p>
                  <p><strong>課題：</strong>自営業のため厚生年金の加入期間が短く、基礎年金での申請となった。</p>
                  <p><strong>サポート：</strong>透析導入時期を正確に把握し、認定日請求として申請。</p>
                  <p><strong>結果：</strong>障害基礎年金2級（月額約66,000円）を受給開始。</p>
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                  <p className="text-sm text-teal-800">
                    <i className="ri-lightbulb-line mr-2"></i>
                    <strong>ポイント：</strong>人工透析を受けている場合、原則として2級に該当します。
                  </p>
                </div>
              </div>
            </div>

            {/* Case 6 - 再申請 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Simple%20minimalist%20illustration%20of%20hopeful%20consultation%20scene%2C%20clean%20vector%20art%20style%2C%20gentle%20pastel%20yellow%20and%20warm%20colors%2C%20renewed%20hope%20concept%2C%20flat%20design%20illustration%20with%20encouraging%20elements%2C%20positive%20consultation%20visual%2C%20soft%20yellow%20color%20palette%2C%20supportive%20atmosphere&width=600&height=300&seq=case-reapplication-001&orientation=landscape"
                alt="再申請事例"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">再申請</span>
                  <span className="ml-3 text-sm text-gray-600">60代女性・主婦</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">一度は不支給となったが、再申請で障害基礎年金2級を受給</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>状況：</strong>線維筋痛症でご本人が申請したが、不支給決定を受けていた。</p>
                  <p><strong>課題：</strong>前回申請時の診断書や申立書の内容が不十分だった。</p>
                  <p><strong>サポート：</strong>医師と連携して詳細な診断書を作成し、日常生活の困難さを具体的に記載。</p>
                  <p><strong>結果：</strong>障害基礎年金2級（月額約66,000円）を受給開始。</p>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <i className="ri-lightbulb-line mr-2"></i>
                    <strong>ポイント：</strong>一度不支給になっても、適切な準備で再申請が可能です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">対応可能な疾患・障害</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              当事務所では、様々な疾患・障害による障害年金申請をサポートしております。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "精神・神経系",
                conditions: ["うつ病", "統合失調症", "双極性障害", "発達障害", "認知症", "てんかん"],
                icon: "ri-brain-line",
                color: "blue"
              },
              {
                title: "循環器系",
                conditions: ["心疾患", "高血圧性心疾患", "心筋梗塞", "狭心症", "心筋症"],
                icon: "ri-heart-pulse-line",
                color: "red"
              },
              {
                title: "呼吸器・腎臓",
                conditions: ["慢性腎疾患", "人工透析", "肺疾患", "呼吸不全", "気管支喘息"],
                icon: "ri-lungs-line",
                color: "teal"
              },
              {
                title: "肢体不自由",
                conditions: ["人工関節", "切断", "脳卒中", "パーキンソン病", "筋疾患"],
                icon: "ri-wheelchair-line",
                color: "orange"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className={`w-12 h-12 bg-${category.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <i className={`${category.icon} text-${category.color}-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.conditions.map((condition, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              上記以外の疾患・障害についてもお気軽にご相談ください。
            </p>
            <Link href="/symptoms" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer">
              病名・症状別ページを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            あなたも障害年金を受給できる可能性があります
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            事例を参考に、まずはお気軽にご相談ください。<br />
            専門の社会保険労務士が詳しくお話をお聞きします。
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
                <span className="font-['Pacifico'] text-orange-400">障害年金相談</span>.com
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
            <p>© 2025 社会保険労務士事務所ソシアル All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}