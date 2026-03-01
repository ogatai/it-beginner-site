# IT初心者向けサイト

IT・クラウドの基礎を初心者向けに解説する Next.js 製のウェブサイトです。

## プロジェクト構成（サイト最優先）

```
it-beginner-site/
├── app/                    # サイト本体（Next.js App Router）
│   ├── components/         # 共通コンポーネント（Nav など）
│   ├── setup/              # /setup ページ
│   ├── tools/              # /tools ページ
│   ├── words/              # /words ページ
│   ├── layout.tsx
│   ├── page.tsx            # トップ
│   └── globals.css
├── public/                 # 静的ファイル（画像など）
├── scripts/                # サイト外の補助スクリプト
│   ├── extract_a1.py
│   ├── requirements.txt
│   └── README.md
├── next.config.mjs
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

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

サイトとは別の用途のスクリプトは `scripts/` にまとめています。使い方は `scripts/README.md` を参照。

## ビルド・Lint

```bash
npm run build
npm run lint
```
