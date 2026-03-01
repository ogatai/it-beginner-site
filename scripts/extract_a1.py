"""
data フォルダ内の全 xlsx の A1 セルを抽出し、result.xlsx に一覧出力するスクリプト。

使い方（プロジェクト直下で実行）:
  pip install -r scripts/requirements.txt
  python scripts/extract_a1.py
"""
import pandas as pd
from pathlib import Path

# プロジェクト直下を基準にする（scripts/ から見て一つ上）
PROJECT_ROOT = Path(__file__).resolve().parent.parent


def main():
    data_dir = PROJECT_ROOT / "data"
    if not data_dir.exists():
        raise FileNotFoundError(f"フォルダ '{data_dir}' が存在しません。")

    xlsx_files = sorted(data_dir.glob("*.xlsx"))
    if not xlsx_files:
        raise FileNotFoundError(f"'{data_dir}' 内に xlsx ファイルがありません。")

    rows = []
    for path in xlsx_files:
        try:
            df = pd.read_excel(path, header=None, engine="openpyxl")
            a1_value = df.iloc[0, 0] if df.shape[0] > 0 and df.shape[1] > 0 else ""
            rows.append({"ファイル名": path.name, "A1の値": a1_value})
        except Exception as e:
            rows.append({"ファイル名": path.name, "A1の値": f"(読み取りエラー: {e})"})

    result_path = PROJECT_ROOT / "result.xlsx"
    result_df = pd.DataFrame(rows)
    result_df.to_excel(result_path, index=False, engine="openpyxl")
    print(f"{len(rows)} 件のファイルを処理し、{result_path} に保存しました。")


if __name__ == "__main__":
    main()
