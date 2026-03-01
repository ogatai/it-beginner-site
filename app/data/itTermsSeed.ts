export type ITTermSeed = {
  id: string;
  term: string;
  category: string;
  description: string;
  sourceUrl: string;
};

const categories: Record<string, string[]> = {
  "ハードウェア": [
    "CPU", "GPU", "RAM", "ROM", "SSD", "HDD", "マザーボード", "電源ユニット", "冷却ファン", "ヒートシンク",
    "NIC", "ルーター", "スイッチ", "アクセスポイント", "モデム", "ディスプレイ", "キーボード", "マウス", "Webカメラ", "マイク",
    "スピーカー", "USB", "Thunderbolt", "HDMI", "Bluetooth"
  ],
  "ソフトウェア": [
    "OS", "Windows", "macOS", "Linux", "Android", "iOS", "アプリケーション", "ミドルウェア", "ファームウェア", "ドライバー",
    "ブラウザ", "拡張機能", "エディタ", "IDE", "CLI", "GUI", "ターミナル", "シェル", "パッケージ", "ライブラリ",
    "フレームワーク", "バージョン管理", "アップデート", "パッチ", "ライセンス"
  ],
  "ネットワーク": [
    "IPアドレス", "サブネット", "ゲートウェイ", "DNS", "DHCP", "NAT", "TCP", "UDP", "HTTP", "HTTPS",
    "TLS", "SSL", "FTP", "SFTP", "SSH", "SMTP", "POP3", "IMAP", "CDN", "プロキシ",
    "リバースプロキシ", "ロードバランサー", "レイテンシ", "帯域幅", "パケット"
  ],
  "セキュリティ": [
    "認証", "認可", "多要素認証", "SSO", "OAuth", "OpenID Connect", "JWT", "暗号化", "公開鍵", "秘密鍵",
    "ハッシュ", "ソルト", "ファイアウォール", "WAF", "IDS", "IPS", "ゼロトラスト", "脆弱性", "パッチ管理", "バックアップ",
    "ランサムウェア", "フィッシング", "マルウェア", "DDoS", "インシデントレスポンス"
  ],
  "開発": [
    "Git", "GitHub", "ブランチ", "マージ", "プルリクエスト", "コミット", "CI", "CD", "テスト", "ユニットテスト",
    "結合テスト", "E2Eテスト", "デバッグ", "ログ", "モニタリング", "アジャイル", "スクラム", "カンバン", "要件定義", "設計",
    "実装", "レビュー", "リファクタリング", "技術的負債", "ドキュメント"
  ],
  "クラウド": [
    "クラウド", "IaaS", "PaaS", "SaaS", "リージョン", "アベイラビリティゾーン", "仮想マシン", "コンテナ", "サーバーレス", "オートスケール",
    "ストレージ", "オブジェクトストレージ", "ブロックストレージ", "データレイク", "IAM", "VPC", "監視", "コスト最適化", "Infrastructure as Code", "Terraform",
    "CloudFormation", "Azure", "AWS", "GCP", "マネージドサービス"
  ],
  "データベース": [
    "データベース", "RDB", "NoSQL", "SQL", "テーブル", "カラム", "レコード", "インデックス", "主キー", "外部キー",
    "トランザクション", "正規化", "ER図", "ビュー", "ストアドプロシージャ", "レプリケーション", "シャーディング", "キャッシュ", "Redis", "PostgreSQL",
    "MySQL", "SQLite", "MongoDB", "データモデリング", "バックアップリストア"
  ],
  "AI・データ活用": [
    "AI", "機械学習", "深層学習", "生成AI", "LLM", "プロンプト", "RAG", "ベクトル検索", "埋め込み", "データセット",
    "特徴量", "前処理", "学習", "推論", "評価指標", "過学習", "ハイパーパラメータ", "MLOps", "データパイプライン", "ETL",
    "BI", "可視化", "ダッシュボード", "A/Bテスト", "データガバナンス"
  ]
};

function sourceUrl(term: string): string {
  return `https://ja.wikipedia.org/wiki/${encodeURIComponent(term)}`;
}

export const itTermsSeed: ITTermSeed[] = Object.entries(categories).flatMap(([category, terms]) =>
  terms.map((term, index) => ({
    id: `${category}-${index + 1}`,
    term,
    category,
    description: `${term}の基礎を初心者向けに理解するための説明テンプレートです。実運用ではあなたの文体に合わせて1〜2文で具体例を追加してください。`,
    sourceUrl: sourceUrl(term),
  })),
);

if (itTermsSeed.length !== 200) {
  throw new Error(`itTermsSeed must contain exactly 200 items. current: ${itTermsSeed.length}`);
}
