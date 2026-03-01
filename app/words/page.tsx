import { getTerms, type Term } from "@/app/data/terms";

export default async function WordsPage() {
  // ↑ async をつけると「データを取ってくるまで待てる」関数になる

  const terms = await getTerms();
  // ↑ GistのJSONを取ってきて terms という変数に入れる
  //   await = 「取ってくるまで待って」という意味

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-8">
        用語解説
      </h1>

      {terms.map((term: Term) => (
        // ↑ terms の中身を1つずつ取り出してHTMLを作る
        //   map = 「リストの全員に同じ処理をする」関数

        <section key={term.id} className="mb-10">
          {/* key={term.id} = Reactが「どれがどれか」区別するためのID */}

          <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-3">
            {term.t}
            {/* ↑ 用語名（例：「クラウド」） */}
          </h2>

          {term.p.map((paragraph: string, i: number) => (
            // ↑ 説明文の段落を1つずつ取り出す
            <p key={i} className="text-zinc-600 dark:text-zinc-400 mb-2">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}