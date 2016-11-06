# wakayamarb.org

[![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org) [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org)

和歌山Rubyのウェブサイトです。

- [http://wakayamarb.org](http://wakayamarb.org)
- [https://wakayamarb.github.io/wakayamarb.org/](https://wakayamarb.github.io/wakayamarb.org/)

## 開発環境のセットアップ
OK >=Node.js: 4

```
$ git clone https://github.com/wakayamarb/wakayamarb.org.git
$ cd wakayamarb.org
$ npm install
$ npm run start
```

鍵管理をする人

```
$ gem install travis
```

### 開発用スクリプトとCI環境

- `npm run build` プロジェクトをビルドします。
- `npm start` プロジェクトのファイルをライブコンパイルし、ライブリロードを備えた開発用サーバを起動します。
- `npm run lint` JavaScriptとSASSのコーディングスタイルをチェックします。
- `npm test` テストを実行します。
- `npm run keygen` デプロイ用の鍵ペアをリセットします。プロジェクトのデプロイ担当者以外はこのコマンドを実行しないでください。秘密鍵を漏洩してしまった場合、このコマンドで鍵ペアをリセットしてください。また、[GitHubの設定ページ](https://github.com/wakayamarb/wakayamarb.org/settings/keys)やプロダクションサーバーに登録されている公開鍵を交換することを忘れないようにしてください。
- `npm run screenshot` スクリーンショットを作成し`./screenshots/`フォルダに保存します。
- **CircleCI** [![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org) はコードのスタイルチェックとテストを担当し、すべての**プルリクエスト**と**プッシュ** (`gh-pages`へのプッシュは除きます) をトリガーとして動作します。
- **Travis CI** [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org) は`gh-pages`ブランチとプロダクションサーバーに対するウェブサイトのデプロイを担当し、`master`ブランチへの**プッシュ**をトリガーとして動作します。

### CIサービス利用のポリシー

このプロジェクトでは**CircleCI**と**Travis CI**の2つのCIサービスを利用しています。

**CircleCI**はプルリクエストをトリガーに動作する設定としているため、プルリクエストを介して任意のコードが実行されます。従って、このプロジェクトについては、デプロイ用の秘密鍵を含むすべてのセキュアな情報をCircle CIに渡すべきではありません。

**Travis CI**は`master`ブランチへのプッシュのみをトリガーにして動作する設定としているため、実行されるコードはすべてコミッターの管理下にあることになっています。コミッターがプルリクエストを受け入れる際は、秘密鍵などのセキュアな情報が外部に露出したり、CircleCIに渡されるような変更が含まれないことを確認して下さい。特にビルドスクリプトの標準出力・標準エラー出力は、すべてTravis CIの[ビルドログ](https://travis-ci.org/wakayamarb/wakayamarb.org)として公開されますので、適宜`/dev/null`に捨てるなどの処理を行って下さい。

### コミットの方法 (主にコミッター向け)

1. 新しいブランチを**チェックアウト**します。
1. 修正をコミットしてプッシュします。
1. `master`ブランチに対する**プルリクエスト**を作成します。
1. **Circle CIのステータス**を[プルリクエストのページ](https://github.com/wakayamarb/wakayamarb.org/pulls)で確認します。
1. ビルドが成功していた場合、これを**マージ**します。
1. ビルドが失敗していた場合、成功するまで修正とコミットを行います。

### コントリビューションの方法 (主にコントリビューター向け)

1. リポジトリを**フォーク**します。
1. 修正をコミットしてプッシュします。
1. `base:master`ブランチに対する**プルリクエスト**を作成します。
1. **Circle CIのステータス**を[プルリクエストのページ](https://github.com/wakayamarb/wakayamarb.org/pulls)で確認します。
1. ビルドが成功していた場合、コメントの投稿やマージされるのを待ちます。
1. ビルドが失敗していた場合、成功するまで修正とコミットを行います。
