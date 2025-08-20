
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CommonQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "働きながらでも障害年金は受給できますか？",
      answer: "はい、働きながらでも障害年金を受給することは可能です。ただし、障害の種類や程度によっては労働に制限がある状態でなければなりません。具体的にはお気軽にご相談ください。"
    },
    {
      question: "うつ病でも障害年金はもらえますか？",
      answer: "うつ病をはじめとした精神疾患でも障害年金の対象となります。症状の程度、治療状況、日常生活への影響などを総合的に判断されます。多くの受給実績がありますので、まずはご相談ください。"
    },
    {
      question: "初診日がわからない場合はどうすればよいですか？",
      answer: "初診日の証明は障害年金申請で最も重要な要素の一つです。カルテが残っていない場合でも、受診状況等証明書、診察券、お薬手帳、家族の証言などから初診日を特定する方法があります。"
    },
    {
      question: "20歳前から障害がある場合の取り扱いは？",
      answer: "20歳前に初診日がある場合は、保険料納付要件は問われません。ただし、所得制限があり、一定額以上の所得がある場合は支給停止となる場合があります。"
    },
    {
      question: "障害年金の申請にはどのくらい費用がかかりますか？",
      answer: "当事務所では初回相談は無料です。申請を依頼される場合の報酬は、受給が決定してからの報酬となっており、着手金はいただいておりません。"
    },
    {
      question: "申請が却下された場合はどうすればよいですか？",
      answer: "不支給決定に納得がいかない場合は、審査請求や再審査請求などの不服申立て手続きがあります。決定通知書を受け取ってから3ヶ月以内に手続きが必要ですので、お早めにご相談ください。"
    },
    {
      question: "家族が代理で相談することはできますか？",
      answer: "はい、ご家族による代理相談も承っております。ご本人の状態によっては、ご家族がサポートすることで、よりスムーズに手続きを進めることができます。"
    },
    {
      question: "他の社労士に依頼して不支給になった場合でも相談できますか？",
      answer: "もちろん可能です。不支給の理由を詳しく検討し、再申請や不服申立ての可能性について検討いたします。"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">よくあるご質問</h2>
          <p className="text-lg text-gray-600">
            障害年金についてよく寄せられるご質問をまとめました。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    Q. {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <i className={`ri-arrow-${openIndex === index ? 'up' : 'down'}-s-line text-gray-600 text-xl transition-transform`}></i>
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      A. {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-orange-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              他にもご不明な点がございましたら
            </h3>
            <p className="text-gray-600 mb-6">
              お一人お一人の状況に合わせて、詳しくご説明いたします。<br />
              どんな小さなことでもお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/line-consultation" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                <i className="ri-line-fill mr-2"></i>
                LINEで質問する
              </Link>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center">
                <i className="ri-mail-line mr-2"></i>
                メールで質問する
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
