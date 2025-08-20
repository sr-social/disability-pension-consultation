'use client';

export default function PensionTypes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">障害年金の種類</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            加入している年金制度により、受給できる障害年金の種類が異なります。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* 障害基礎年金 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <i className="ri-shield-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">障害基礎年金</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">対象者</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 国民年金加入者</li>
                  <li>• 20歳前に障害を負った方</li>
                  <li>• 60～65歳の日本国内居住者</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">支給額（令和7年度）</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 1級：約103万円/年</li>
                  <li>• 2級：約83万円/年</li>
                  <li>• 子の加算：各約23万円/年</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <i className="ri-information-line mr-2"></i>
                自営業者、学生、専業主婦（夫）の方が主な対象です
              </p>
            </div>
          </div>

          {/* 障害厚生年金 */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <i className="ri-building-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">障害厚生年金</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">対象者</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 厚生年金加入者</li>
                  <li>• 会社員・公務員など</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">支給額（令和7年度）</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 1級：基礎年金＋厚生年金×1.25</li>
                  <li>• 2級：基礎年金＋厚生年金</li>
                  <li>• 3級：最低保障額約62万円/年</li>
                  <li>• 配偶者加給年金：約23万円/年</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-800">
                <i className="ri-information-line mr-2"></i>
                障害基礎年金に上乗せして受給できるため、金額が多くなります
              </p>
            </div>
          </div>
        </div>

        {/* 等級の説明 */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">障害等級の目安</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-xl">1級</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">重度の障害</h4>
              <p className="text-gray-600 text-sm">
                日常生活において他人の介助を受けなければできない程度
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">2級</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">中等度の障害</h4>
              <p className="text-gray-600 text-sm">
                日常生活が著しい制限を受ける程度
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">3級</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-3">軽度の障害</h4>
              <p className="text-gray-600 text-sm">
                労働が著しい制限を受ける程度<br />
                （厚生年金のみ）
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}