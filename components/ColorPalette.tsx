
'use client';

export default function ColorPalette() {
  const colors = [
    {
      name: 'Primary Orange',
      value: '#E67E22',
      description: 'メインアクセントカラー'
    },
    {
      name: 'Light Orange',
      value: '#F5B041',
      description: 'セカンダリオレンジ'
    },
    {
      name: 'Light Gray',
      value: '#F2F3F4',
      description: '背景・補助色'
    },
    {
      name: 'Light Yellow',
      value: '#FCF3CF',
      description: 'ハイライト・注意喚起'
    },
    {
      name: 'White',
      value: '#FFFFFF',
      description: 'ベース背景色'
    },
    {
      name: 'Dark Gray',
      value: '#2C3E50',
      description: 'テキスト・見出し'
    },
    {
      name: 'Medium Gray',
      value: '#7F8C8D',
      description: '補足テキスト'
    },
    {
      name: 'Green (LINE)',
      value: '#00B900',
      description: 'LINEボタン専用'
    }
  ];

  const typography = [
    {
      name: 'ヒーロー見出し',
      className: 'text-4xl md:text-5xl font-bold',
      sample: '障害年金申請、ひとりで悩んでいませんか？'
    },
    {
      name: 'セクション見出し',
      className: 'text-3xl font-bold',
      sample: '障害年金のお悩み、解決します'
    },
    {
      name: 'カード見出し',
      className: 'text-xl font-semibold',
      sample: 'わかりやすい説明'
    },
    {
      name: '本文テキスト',
      className: 'text-base',
      sample: '社会保険労務士がやさしくサポート。全国オンライン対応で安心です。'
    },
    {
      name: '小見出し',
      className: 'text-sm font-medium',
      sample: 'プライバシーを守ります'
    }
  ];

  const buttons = [
    {
      name: 'Primary (LINE)',
      className: 'bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium',
      text: 'LINEで無料相談'
    },
    {
      name: 'Secondary (Email)',
      className: 'bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium',
      text: 'メールで相談'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Color Palette */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">カラーパレット</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map((color, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-full h-20 rounded-lg border border-gray-200 mb-2"
                style={{ backgroundColor: color.value }}
              ></div>
              <h3 className="font-medium text-sm text-gray-800">{color.name}</h3>
              <p className="text-xs text-gray-600 font-mono">{color.value}</p>
              <p className="text-xs text-gray-500 mt-1">{color.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">タイポグラフィ</h2>
        <div className="space-y-6">
          {typography.map((type, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                <span className="text-sm font-medium text-gray-600 min-w-[120px]">{type.name}</span>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{type.className}</code>
              </div>
              <div className={`${type.className} text-gray-800`}>
                {type.sample}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Button Styles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">ボタンスタイル</h2>
        <div className="space-y-4">
          {buttons.map((button, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="text-sm font-medium text-gray-600 min-w-[120px]">{button.name}</span>
              <button className={`${button.className} whitespace-nowrap cursor-pointer transition-colors`}>
                {button.text}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Icon Examples */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">アイコンスタイル</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-book-open-line text-orange-600 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">わかりやすい説明</h3>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-time-line text-orange-600 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">迅速対応</h3>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-shield-check-line text-orange-600 text-xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">匿名相談OK</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
