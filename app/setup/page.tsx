export default function SetupPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">
        Azure 無料アカウントの作成方法（初心者向け）
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        ここでは、IT初心者向けに Azure の無料アカウント作成手順を
        できるだけ分かりやすく解説します。
        「難しそう」「クレジットカードが不安」という人でも大丈夫です。
      </p>

      <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mt-8 mb-2">
        事前に準備するもの
      </h2>
      <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-1">
        <li>メールアドレス</li>
        <li>クレジットカード（本人確認用）</li>
        <li>SMSを受信できるスマートフォン</li>
      </ul>

      <p className="text-zinc-500 dark:text-zinc-500 mt-2 text-sm">
        ※ 無料枠の範囲内で使う限り、料金は発生しません。
      </p>

      <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mt-8 mb-2">
        アカウント作成の流れ
      </h2>
      <ol className="list-decimal pl-6 text-zinc-600 dark:text-zinc-400 space-y-2">
        <li>Azure公式サイトにアクセス</li>
        <li>「無料で始める」をクリック</li>
        <li>Microsoftアカウントでサインイン</li>
        <li>個人情報・支払い情報を入力</li>
        <li>SMS認証を行う</li>
      </ol>

      <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mt-8 mb-2">
        初心者がつまずきやすいポイント
      </h2>
      <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-1">
        <li>クレジットカード登録で不安になる</li>
        <li>英語表記が出て焦る</li>
        <li>「課金されるのでは？」と心配になる</li>
      </ul>

      <p className="text-zinc-500 dark:text-zinc-500 mt-2 text-sm">
        これらはよくある不安ですが、無料枠を超えなければ問題ありません。
      </p>

      <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mt-8 mb-2">
        アカウント作成後にやること
      </h2>
      <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-400 space-y-1">
        <li>Azureポータルにログインできるか確認</li>
        <li>無料枠の内容をざっくり把握</li>
        <li>最初は触らず、画面に慣れる</li>
      </ul>

      <p className="text-zinc-600 dark:text-zinc-400 mt-8">
        次は、Azureで「何ができるのか」「初心者は何から触ればいいか」を
        解説していきます。
      </p>
    </main>
  );
}
