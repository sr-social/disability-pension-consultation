'use client';

export default function ApplicationFlow() {
  const steps = [
    {
      number: 1,
      title: "初回相談",
      description: "現在の状況や病歴について詳しくお聞かせください",
      details: ["病気やケガの経緯", "現在の症状", "治療状況", "生活への影響"],
      icon: "ri-chat-1-line",
      color: "blue"
    },
    {
      number: 2,
      title: "要件確認",
      description: "受給要件を満たしているかを詳しく確認します",
      details: ["初診日の特定", "保険料納付状況", "障害状態の程度", "必要書類の整理"],
      icon: "ri-file-search-line",
      color: "green"
    },
    {
      number: 3,
      title: "書類準備",
      description: "申請に必要な書類を準備・作成いたします",
      details: ["診断書の依頼", "病歴・就労状況等申立書", "初診日証明書", "各種添付書類"],
      icon: "ri-file-edit-line",
      color: "orange"
    },
    {
      number: 4,
      title: "申請手続き",
      description: "年金事務所への申請手続きを代行いたします",
      details: ["書類の最終確認", "年金事務所への提出", "受付確認", "進捗状況の報告"],
      icon: "ri-send-plane-line",
      color: "purple"
    },
    {
      number: 5,
      title: "審査・決定",
      description: "審査結果が出るまでサポートいたします",
      details: ["審査期間中のフォロー", "結果通知の確認", "不服申立ての検討", "受給開始手続き"],
      icon: "ri-award-line",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600"
    };
    return colors[color as keyof typeof colors] || "bg-gray-100 text-gray-600";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">申請の流れ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            障害年金の申請から受給開始まで、社会保険労務士が全面的にサポートいたします。
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start">
              {steps.map((step, index) => (
                <div key={step.number} className="flex-1 max-w-xs">
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-20 h-20 ${getColorClasses(step.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <i className={`${step.icon} text-2xl`}></i>
                    </div>
                    
                    {/* Step Number */}
                    <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-1/2 transform translate-x-1/2 w-16 flex justify-center" style={{ left: `${((index + 1) / steps.length) * 100}%` }}>
                      <i className="ri-arrow-right-line text-gray-400 text-xl"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  <div className={`w-16 h-16 ${getColorClasses(step.color)} rounded-full flex items-center justify-center`}>
                    <i className={`${step.icon} text-xl`}></i>
                  </div>
                  <div className="bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center mt-2 text-sm font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-16 bg-gray-300 mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Info */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            <i className="ri-time-line text-blue-600 mr-2"></i>
            審査期間の目安
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3-4</div>
              <div className="text-sm text-gray-600">申請準備期間<br />（ヶ月）</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3-6</div>
              <div className="text-sm text-gray-600">審査期間<br />（ヶ月）</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1-2</div>
              <div className="text-sm text-gray-600">受給開始<br />（ヶ月）</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <i className="ri-information-line mr-2"></i>
              期間は状況により前後する場合があります
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}