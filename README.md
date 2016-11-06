# wakayamarb.org

[![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org) [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org)

和歌山Rubyのウェブサイトです。

- [http://wakayamarb.org](http://wakayamarb.org)
- [https://wakayamarb.github.io/wakayamarb.org/](https://wakayamarb.github.io/wakayamarb.org/)

## 開発環境のセットアップ
OK >=Node.js: 4

```
$ git clone https://github.com/wakayamarb/wakayamarb.org.git
$ npm install
$ npm run start
```

### 開発用スクリプトとCI環境

- `npm run build` プロジェクトをビルドします。
- `npm start` プロジェクトのファイルをライブコンパイルし、ライブリロードを備えた開発用サーバを起動します。
- `npm run lint` JavaScriptとSASSのコーディングスタイルをチェックします。
- `npm test` テストを実行します。
- `npm run keygen` デプロイ用の鍵ペアをリセットします。プロジェクトのデプロイ担当者以外はこのコマンドを実行しないでください。秘密鍵(デプロイ担当者以外には`.gitignore`ファイルによってでぷりロイ担当者以外にはアクセスできないポリシーにしています)を漏洩してしまった場合、このコマンドで鍵ペアをリセットしてください。また、[GitHub](https://github.com/wakayamarb/wakayamarb.org/settings/keys)で公開鍵を交換することを忘れないようにしてください。
- `npm run screenshot` スクリーンショットを作成し`./screenshots/`フォルダに保存します。
- **CircleCI** [![CircleCI](https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg?style=shield)](https://circleci.com/gh/wakayamarb/wakayamarb.org) はコードのスタイルチェックとテストを担当し、すべての**プルリクエスト**と**プッシュ** (`gh-pages`へのプッシュは除きます) をトリガーとして動作します。
- **Travis CI** [![Build Status](https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master)](https://travis-ci.org/wakayamarb/wakayamarb.org) は`gh-pages`ブランチとプロダクションサーバーに対するウェブサイトのデプロイを担当し、`master`ブランチへの**push**をトリガーとして動作します。

### CIサービス利用のポリシー

このプロジェクトでは**CircleCI**と**Travis CI**の2つのCIサービスを利用しています。

スタイルチェックやテストの実行を担当しているCircleCIは、プルリクエストをトリガーに動作する設定としているため、プルリクエストを介して全ての人がコンテナ内で任意のコードを実行できます。従って、デプロイ用の秘密鍵を含む全てのセキュアな情報をこのCIサービスに渡すべきではありません。

プロジェクトのデプロイを担当しているTravis CI、は`master`ブランチへのプッシュのみをトリガーにして動作する設定としているため、コンテナ内部で実行されるコードはすべてコミッターの管理下にあります。プルリクエストを受け入れる際は、秘密鍵などのセキュアな情報が露出するような変更が含まれないことを確認して下さい。


### コミットの方法

1. 新しいブランチを**チェックアウト**します。
1. 修正をコミットしてプッシュします。
1. `master`ブランチに対する**プルリクエスト**を作成します。
1. **Circle CIのステータス**を[プルリクエストのページ](https://github.com/wakayamarb/wakayamarb.org/pulls)で確認します。
1. ビルドが成功していた場合、これを**マージ**します。
1. ビルドが失敗していた場合、成功するまで修正とコミットを行います。

### コントリビューションの方法

1. リポジトリを**フォーク**します。
1. 修正をコミットしてプッシュします。
1. `base:master`ブランチに対する**プルリクエスト**を作成します。
1. **Circle CIのステータス**を[プルリクエストのページ](https://github.com/wakayamarb/wakayamarb.org/pulls)で確認します。
1. ビルドが成功していた場合、コメントの投稿やマージされるのを待ちます。
1. ビルドが失敗していた場合、成功するまで修正とコミットを行います。
