import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">
          IT初心者向けサイト
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg">
          プログラミングやクラウドの基礎を、初心者向けに分かりやすく解説します。
        </p>

        <ul className="space-y-4">
          <li>
            <Link
              href="/words"
              className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <span className="font-semibold">用語解説</span>
              <span className="block text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                クラウドなど、よく出てくる言葉の意味を解説
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/tools"
              className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <span className="font-semibold">おすすめツール</span>
              <span className="block text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                VS Code、Cursor、Azure など
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/setup"
              className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <span className="font-semibold">Azure 無料アカウント作成</span>
              <span className="block text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                初心者向けの手順解説
              </span>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
