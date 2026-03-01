export type Term = {
  id: string;
  t: string;
  p: string[];
  c?: string;
};

const termsData: Term[] = [
  {
    id: "cloud",
    t: "クラウド",
    p: [
      "ITの勉強をしていると「クラウド」という言葉をよく見かけます。最初は意味が分からなくて当たり前です。",
      "クラウドとは、インターネットを通して自分のパソコン以外の場所にあるサービスを使う仕組みのことです。",
      "例えば、データをUSBに保存する代わりに、ネット上に保存してどこからでも使えるようにするイメージです。",
      "最初は全部理解しなくて大丈夫です。「そんな仕組みがあるんだ」くらいでOKです。",
    ],
  },
];

export async function getTerms(): Promise<Term[]> {
  return termsData;
}
