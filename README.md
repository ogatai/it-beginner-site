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

## 補足スクリプト

- **extract_a1.py** … `data` フォルダ内の全 xlsx の A1 セルを抽出し `result.xlsx` に出力する Python スクリプト。利用時はプロジェクト直下に `data` フォルダを作成し、`pip install -r requirements.txt` で依存関係を入れてから実行する。

## ビルド・Lint

```bash
npm run build
npm run lint
```
