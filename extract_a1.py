"""
dataフォルダ内の全xlsxファイルのA1セルを抽出し、
result.xlsx に一覧として出力するスクリプト
"""
import pandas as pd
from pathlib import Path


def main():
    data_dir = Path("data")
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

    result_df = pd.DataFrame(rows)
    result_df.to_excel("result.xlsx", index=False, engine="openpyxl")
    print(f"{len(rows)} 件のファイルを処理し、result.xlsx に保存しました。")


if __name__ == "__main__":
    main()
