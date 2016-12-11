# wakayamarb.org

[<img src="https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg" height="20" alt="Build Status">](https://circleci.com/gh/wakayamarb/wakayamarb.org) [<img src="https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master" height="20" alt="Build Status">](https://travis-ci.org/wakayamarb/wakayamarb.org)

和歌山県の地域Rubyコミュニティである和歌山Rubyのウェブサイトです。このウェブサイトは以下のURLでアクセスできます。

-   [http://wakayamarb.org](http://wakayamarb.org)
-   [https://wakayamarb.github.io/wakayamarb.org/](https://wakayamarb.github.io/wakayamarb.org/)

## 開発環境

Ok = Node.js: 6

### プロジェクトのセットアップ

```
$ git clone https://github.com/wakayamarb/wakayamarb.org.git
$ cd wakayamarb.org
$ npm install
```

### プロジェクトのビルド

```
$ npm run build
```

### 開発用のローカルサーバーの起動

```
$ npm run start
```

### その他の依存モジュール

sketchファイルからファビコンを生成する場合は、sketch toolをインストールしてください。(Macのみ)

```
$ pushd ./node_modules/gulp-sketch/ ; npm run install-sketchtool ; popd
```

デプロイ用の鍵を管理する場合は、以下のrubygemをインストールしてください。

```
$ gem install travis
```

### 開発用スクリプトとCI環境

-   `npm run build` プロジェクトをビルドし、デプロイ可能な状態にします。
-   `npm start` プロジェクトのファイルをライブコンパイルします。また、コンパイルに応じてライブリロードする開発用サーバーをローカル環境で起動します。
-   `npm run lint` JavaScriptとSASSのコーディングスタイルをチェックします。
-   `npm test` テストを実行します。
-   `npm run keygen` デプロイ用の鍵ペアをリセットします。秘密鍵を漏洩してしまった場合、このコマンドで鍵ペアをリセットしてください。また、[GitHubの設定ページ](https://github.com/wakayamarb/wakayamarb.org/settings/keys)やプロダクションサーバーに登録されている公開鍵を交換してください。プロジェクトのデプロイ担当者のみがこのコマンドを実行するべきです。
-   `npm run generate-favicons` ファビコンを生成します。Mac x Sketch環境のみで実行できます。
-   `npm run screenshot` スクリーンショットを作成し`./screenshots/`フォルダに保存します。
-   **CircleCI** [<img src="https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg" height="14" alt="Build Status">](https://circleci.com/gh/wakayamarb/wakayamarb.org) はコードのスタイルチェックとテストを担当し、すべての**プルリクエスト**と**プッシュ** (`gh-pages`へのプッシュは除きます) をトリガーとして動作します。
-   **Travis CI** [<img src="https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master" height="14" alt="Build Status">](https://travis-ci.org/wakayamarb/wakayamarb.org) は`gh-pages`ブランチとプロダクションサーバーに対するウェブサイトのデプロイを担当し、`master`ブランチへの**プッシュ**をトリガーとして動作します。

### CIサービス利用のポリシー

このプロジェクトでは**CircleCI**と**Travis CI**の2つのCIサービスを利用しています。

**CircleCI**はプルリクエストをトリガーに動作する設定としているため、プルリクエストを介して任意のコードがコンテナ上で実行されます。従って、このプロジェクトについては、デプロイ用の秘密鍵を含むすべてのセキュアな情報をCircle CIに渡さないようにする必要があります。

一方、**Travis CI**はGitHub pagesやプロダークションサーバーへのデプロイを担当し、そのための秘密鍵が暗号化して渡されています。サービスの起動はプッシュにのみ依存するよう設定してあるため、コンテナ上で実行されるコードはすべてコミッターの管理下にあることになっています。

コミットのプッシュやプルリクエストの受け入れに際しては、秘密鍵などのセキュアな情報が外部に露出したり、CircleCIに渡されるような変更が含まれないことを確認して下さい。特にビルドスクリプトの標準出力・標準エラー出力は、すべてTravis CIの[ビルドログ](https://travis-ci.org/wakayamarb/wakayamarb.org)として公開されますので、適宜`/dev/null`に捨てるなどの処理を行って下さい。

### コミットの方法 (主にコミッター向け)

1.  新しいブランチを**チェックアウト**します。
1.  修正をコミットしてプッシュします。
1.  `master`ブランチに対する**プルリクエスト**を作成します。
1.  **Circle CIのステータス**を[プルリクエストのページ](https://github.com/wakayamarb/wakayamarb.org/pulls)で確認します。
1.  ビルドが成功していた場合、これを**マージ**します。
1.  ビルドが失敗していた場合、成功するまで修正とコミットを行います。

### コントリビューションの方法 (主にコントリビューター向け)

1.  リポジトリを**フォーク**します。
1.  修正をコミットしてプッシュします。
1.  `base:master`ブランチに対する**プルリクエスト**を作成します。
1.  **Circle CIのステータス**を[プルリクエストのページ](https://github.com/wakayamarb/wakayamarb.org/pulls)で確認します。
1.  ビルドが成功していた場合、コメントの投稿やマージされるのを待ちます。
1.  ビルドが失敗していた場合、成功するまで修正とコミットを行います。
