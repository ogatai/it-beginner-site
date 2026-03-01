// ✅ 直したコード
import Link from "next/link";

// ナビのリンク一覧をまとめる（ページ追加時はここに1行足すだけ）
const navLinks = [
  { href: "/",      label: "ホーム" },
  { href: "/words", label: "用語" },
  { href: "/tools", label: "ツール" },
  { href: "/setup", label: "Azure設定" },
];

export default function Nav() {
  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-3xl mx-auto px-4 py-3 flex flex-wrap gap-4 text-sm">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}