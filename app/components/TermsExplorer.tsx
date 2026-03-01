"use client";

import { useState } from "react";
import type { Term } from "@/app/data/terms";
import TermsList from "@/app/components/TermsList";

export default function TermsExplorer({ initialTerms }: { initialTerms: Term[] }) {
  const [terms, setTerms] = useState<Term[]>(initialTerms);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadExternalDescriptions = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/terms?external=1&limit=200");
      if (!response.ok) {
        throw new Error("外部データの取得に失敗しました。");
      }

      const data = (await response.json()) as { terms: Term[] };
      setTerms(data.terms);
    } catch {
      setError("外部データの取得に失敗しました。時間をおいて再実行してください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50 dark:bg-zinc-900/40">
        <h2 className="font-semibold text-zinc-950 dark:text-zinc-50 mb-2">データ取得方法（JS/TS 実装済み）</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          初期表示はローカルの200件雛形です。ボタンを押すと <code>/api/terms?external=1</code> を呼び出し、外部データ（Wikipedia要約）で説明文を置き換えます。
        </p>
        <button
          onClick={loadExternalDescriptions}
          disabled={loading}
          className="px-4 py-2 rounded-md bg-zinc-950 text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {loading ? "外部データ取得中..." : "外部データで説明を更新"}
        </button>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>

      <TermsList terms={terms} />
    </div>
  );
}
