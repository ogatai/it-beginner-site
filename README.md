# IT初心者向けサイト

IT・クラウドの基礎を初心者向けに解説する Next.js 製のウェブサイトです。

## 技術スタック

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## 開発の進め方

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

## 主なページ

- **/** … ホーム（用語・ツール・Azure設定へのリンク）
- **/words** … 用語解説（クラウドなど）
- **/tools** … おすすめツール（VS Code、Cursor、Azure など）
- **/setup** … Azure 無料アカウントの作成手順

## 用語データの自動更新

用語解説（/words）の元データは `app/data/terms.ts` の `termsRaw` にあります。1行で1用語を追加する形式です。

外部の JSON から自動で最新データを反映したい場合は、`.env.local` に次を設定してください。

```env
TERMS_JSON_URL=https://example.com/terms.json
```

JSON は `[{"id":"cloud","t":"クラウド","p":["段落1","段落2",...]}, ...]` の配列、または `{"terms": [...]}` 形式。1時間ごとに再取得されます。

## 補足スクリプト

- **extract_a1.py** … `data` フォルダ内の全 xlsx の A1 セルを抽出し `result.xlsx` に出力する Python スクリプト。利用時はプロジェクト直下に `data` フォルダを作成し、`pip install -r requirements.txt` で依存関係を入れてから実行する。

## ビルド・Lint

```bash
npm run build
npm run lint
```
