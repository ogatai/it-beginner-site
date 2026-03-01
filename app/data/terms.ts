export type Term = { id: string; t: string; p: string[] };

const staticTerms: Term[] = [
  {
    id: "cloud",
    t: "クラウド",
    p: [
      "クラウドとは、インターネットを通して自分のパソコン以外の場所にあるサービスを使う仕組みのことです。",
      "最初は全部理解しなくて大丈夫です。「そんな仕組みがあるんだ」くらいでOKです。",
    ],
  },
];

export async function getTerms(): Promise<Term[]> {
  const url = process.env.TERMS_JSON_URL;
  if (url) {
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (res.ok) {
        const data = (await res.json()) as Term[] | { terms: Term[] };
        return Array.isArray(data) ? data : data.terms ?? staticTerms;
      }
    } catch {
      // 取得失敗時は静的データにフォールバック
    }
  }
  return staticTerms;
}