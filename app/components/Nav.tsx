import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap gap-4 text-sm">
        <Link
          href="/"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          ホーム
        </Link>
        <Link
          href="/words"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          用語
        </Link>
        <Link
          href="/tools"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          ツール
        </Link>
        <Link
          href="/setup"
          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          Azure設定
        </Link>
      </div>
    </nav>
  );
}
