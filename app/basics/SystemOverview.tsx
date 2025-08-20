
'use client';

export default function SystemOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">障害年金とは</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            病気やケガによって日常生活や仕事に支障が生じた場合に、国から支給される年金制度です。<br />
            現役世代の方も含めて受け取ることができます。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">制度の意義</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-heart-line text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">生活保障</h4>
                  <p className="text-gray-600">病気やケガで働けなくなった場合の生活を支える</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-shield-check-line text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">社会復帰支援</h4>
                  <p className="text-gray-600">治療に専念し、社会復帰を目指すための経済的支援</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <i className="ri-group-line text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">家族の生活安定</h4>
                  <p className="text-gray-600">本人だけでなく、ご家族の生活も守る</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Japanese%20family%20sitting%20together%20in%20comfortable%20living%20room%2C%20showing%20support%20and%20care%2C%20warm%20natural%20lighting%2C%20modern%20Japanese%20home%20interior%2C%20peaceful%20atmosphere%2C%20family%20bonds%20and%20mutual%20support%2C%20clean%20organized%20space&width=600&height=400&seq=family-support-001&orientation=landscape"
              alt="家族の支え合い"
              className="w-full rounded-xl shadow-sm object-cover object-top"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">障害年金の特徴</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-orange-600 text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">受給期間</h4>
              <p className="text-gray-600">障害が続く限り、継続的に受給可能</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-price-tag-2-line text-orange-600 text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">税金の扱い</h4>
              <p className="text-gray-600">障害年金は非課税所得です</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-orange-600 text-2xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">申請時期</h4>
              <p className="text-gray-600">原則20歳から64歳まで申請可能</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
