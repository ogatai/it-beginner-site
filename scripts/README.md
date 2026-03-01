# 補助スクリプト

サイト本体とは別の、開発・運用用のスクリプトを置くフォルダです。

## extract_a1.py

プロジェクト直下の `data/` 内の全 xlsx の A1 セルを抽出し、直下に `result.xlsx` を出力します。

```bash
# プロジェクト直下で実行
pip install -r scripts/requirements.txt
python scripts/extract_a1.py
```

事前にプロジェクト直下に `data` フォルダを作成し、対象の .xlsx を置いてください。
