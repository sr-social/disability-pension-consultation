'use client';

export default function Requirements() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">受給要件</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            障害年金を受給するためには、以下の3つの要件をすべて満たす必要があります。
          </p>
        </div>

        <div className="space-y-12">
          {/* 初診日要件 */}
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6 mt-2">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">初診日要件</h3>
                <p className="text-lg text-gray-700 mb-6">
                  障害の原因となった病気やケガについて、初めて医師の診療を受けた日（初診日）に、国民年金または厚生年金に加入していること
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      <i className="ri-calendar-line text-blue-600 mr-2"></i>
                      初診日とは
                    </h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• 症状について初めて医師の診療を受けた日</li>
                      <li>• 同一疾病で転院した場合は最初の病院の受診日</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      <i className="ri-alert-line text-orange-600 mr-2"></i>
                      注意点
                    </h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• 初診日の証明が重要</li>
                      <li>• カルテの保存期間は原則5年</li>
                      <li>• 証明書類の準備が困難な場合もある</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 保険料納付要件 */}
          <div className="bg-green-50 rounded-xl p-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6 mt-2">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">保険料納付要件</h3>
                <p className="text-lg text-gray-700 mb-6">
                  初診日の前日において、保険料の納付要件を満たしていること
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                      原則的要件
                    </h4>
                    <p className="text-gray-600 mb-3">
                      初診日の前日において、初診日の属する月の前々月までの被保険者期間のうち、
                    </p>
                    <p className="text-green-700 font-medium">
                      保険料納付済期間＋免除期間が3分の2以上
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      <i className="ri-time-line text-green-600 mr-2"></i>
                      特例要件
                    </h4>
                    <p className="text-gray-600 mb-3">
                      初診日が令和8年4月1日前にある場合で、初診日において65歳未満の場合
                    </p>
                    <p className="text-green-700 font-medium">
                      初診日の属する月の前々月までの1年間に保険料の滞納がない
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 障害認定日要件 */}
          <div className="bg-orange-50 rounded-xl p-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-6 mt-2">
                <span className="text-orange-600 font-bold text-xl">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">障害状態要件</h3>
                <p className="text-lg text-gray-700 mb-6">
                  障害認定日において、障害等級表に定める1級～3級の障害状態にあること
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      <i className="ri-calendar-check-line text-orange-600 mr-2"></i>
                      障害認定日とは
                    </h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• 原則：初诊日から1年6月経過した日</li>
                      <li>• 人工透析：開始から3月経過した日</li>
                      <li>• 人工関節：挿入置換した日</li>
                      <li>• 切断：切断した日　など例外あり</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      <i className="ri-file-medical-line text-orange-600 mr-2"></i>
                      事後重症請求
                    </h4>
                    <p className="text-gray-600 mb-3">
                      障害認定日に障害状態に該当しなかった場合でも、
                    </p>
                    <p className="text-orange-700 font-medium">
                      65歳の誕生日の前々日までに症状が悪化した場合は請求可能
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 重要なポイント */}
        <div className="mt-16 bg-gray-100 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            <i className="ri-lightbulb-line text-yellow-600 mr-2"></i>
            重要なポイント
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <i className="ri-file-text-line text-blue-600 mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">書類の準備</h4>
                <p className="text-gray-600 mb-4">障害年金を申請するには、以下のような書類を、不備なく用意する必要があります。</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• 病歴・就労状況等申立書</li>
                  <li>• 受診状況等証明書</li>
                  <li>• 診断書</li>
                  <li>• 障害年金裁定請求書などの必要書類</li>
                </ul>
                <p className="text-gray-600 mt-2">これらの書類を、不備なくスムーズに準備できるよう、お手伝いさせて頂きます。</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-time-line text-orange-600 mr-3 mt-1"></i>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">「遡及」について</h4>
                <p className="text-gray-600 mb-4">「遡及（そきゅう）」とは、障害認定日において受給要件を満たていたにも関わらず、何らかの理由で障害年金を請求しなかった方が、障害認定日から１年以上経過してから障害年金を請求することを指します。</p>
                <p className="text-gray-600 mb-2">遡及できる期間は、５年間までとされています。</p>
                <p className="text-gray-600">つまり、「これまでもらえていなかった５年間分を、まとめて受給できる場合もある」ということです。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
