import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    console.log('API Route called with data:', { name, email, phone, subject, message });

    // 必須項目のバリデーション
    if (!name || !email || !subject || !message) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    // 現在はmailtoリンクを生成して返す（一時的な解決策）
    const emailContent = `
新しい相談が届きました

【相談者情報】
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未入力'}

【相談内容】
カテゴリ: ${subject}

【詳細内容】
${message}

---
このメールは障害年金相談.comのお問い合わせフォームから送信されました。
    `;

    const mailtoLink = `mailto:info@sr-social.com?subject=${encodeURIComponent(`【障害年金相談】${subject} - ${name}様`)}&body=${encodeURIComponent(emailContent)}`;

    console.log('Generated mailto link:', mailtoLink);

    return NextResponse.json({ 
      message: 'メールクライアントを開きます。',
      success: true,
      mailtoLink: mailtoLink
    });

  } catch (error) {
    console.error('API エラー:', error);
    return NextResponse.json(
      { 
        error: 'API処理中にエラーが発生しました。', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}