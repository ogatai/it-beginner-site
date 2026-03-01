import Link from "next/link";

export default function ToolsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-6">
        IT初心者におすすめのツール
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        IT初心者が最初に使うと「楽になる」「迷わなくなる」ツールを、
        実体験ベースで紹介します。
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-2">VS Code</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          プログラミングや設定ファイル編集に使う定番エディタです。
          無料で使えて、初心者からプロまで幅広く利用されています。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-2">Cursor</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          AIがコード作成や修正を手伝ってくれるエディタです。
          「何を書けばいいか分からない」初心者の強い味方になります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-2">Excel</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          データ整理・管理の基本ツールです。
          ITの仕事では今でも使われる場面が多く、基礎力になります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-2">Azure</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-2">
          Microsoftが提供するクラウドサービスです。
          無料枠があり、サーバーやWebアプリの仕組みを学ぶのに最適です。
        </p>
        <Link href="/setup" className="text-zinc-600 dark:text-zinc-400 underline hover:text-zinc-950 dark:hover:text-zinc-50 text-sm">
          → Azure無料アカウントの作成方法はこちら
        </Link>
      </section>

      <p className="text-zinc-500 dark:text-zinc-500 mt-10 text-sm">
        まずは「全部理解しよう」とせず、触りながら慣れていきましょう。
      </p>
    </main>
  );
}
