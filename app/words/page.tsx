import { getTerms } from "@/app/data/terms";
import TermsExplorer from "@/app/components/TermsExplorer";

export default async function WordsPage() {
  const terms = await getTerms({ limit: 200 });

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-3">初心者向けIT用語200個（説明つき）</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        ローカル雛形200件 + 外部データ取得（API経由）に対応したサンプルです。カテゴリフィルターと出典リンク付きで表示します。
      </p>
      <TermsExplorer initialTerms={terms} />
    </main>
  );
}
