# ボードゲームパラダイス 会員システム 紹介資料

## GitHub Pagesでの公開手順

1. GitHubで新しいリポジトリを作成（Public・例：`boardgame-paradise-intro`）
2. この中のファイルを全てアップロード（ドラッグ&ドロップでOK）
3. リポジトリの **Settings → Pages** を開く
4. 「Source」で **Deploy from a branch** を選択
5. Branch を `main` / root (`/`) に設定して **Save**
6. 1〜2分待つと以下のURLで公開されます：
   `https://<あなたのユーザー名>.github.io/boardgame-paradise-intro/`

## 操作方法
- 矢印キー（←/→）、スペース、ページ送りキー
- 画面左右の「‹ ›」ボタン
- 下部のドットをクリック

## ファイル構成
- `index.html` — メインファイル
- `slides/shared.jsx` — 共通コンポーネント
- `slides/deckA.jsx` — スライド本体（9枚）

※ React・Babel・フォントは外部CDN読み込みなので、インターネット接続が必要です。
