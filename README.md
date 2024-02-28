# wakayamarb.org

[<img src="https://circleci.com/gh/wakayamarb/wakayamarb.org/tree/master.svg" height="20" alt="Build Status">](https://circleci.com/gh/wakayamarb/wakayamarb.org) [<img src="https://travis-ci.org/wakayamarb/wakayamarb.org.svg?branch=master" height="20" alt="Build Status">](https://travis-ci.org/wakayamarb/wakayamarb.org)

和歌山県の地域Rubyコミュニティである和歌山Rubyのウェブサイトです。このウェブサイトは以下のURLでアクセスできます。

-   [http://wakayamarb.org](http://wakayamarb.org)
-   [https://wakayamarb.github.io/wakayamarb.org/](https://wakayamarb.github.io/wakayamarb.org/)

## 開発環境

Ok = Node.js: v18.19.0

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

### 開発用スクリプトとCI環境

- `npm run build` プロジェクトをビルドし、デプロイ可能な状態にします。
- `npm start` プロジェクトのファイルをライブコンパイルします。また、コンパイルに応じてライブリロードする開発用サーバーをローカル環境で起動します。
- `npm run lint` JavaScriptとSASSのコーディングスタイルをチェックします。
- `npm test` テストを実行します。
- `npm run generate-favicons` ファビコンを生成します。Mac x Sketch環境のみで実行できます。
- `npm run screenshot` スクリーンショットを作成し`./screenshots/`フォルダに保存します。

### コントリビューションの方法 (主にコントリビューター向け)

1.  リポジトリを**フォーク**します。
1.  修正をコミットしてプッシュします。
1.  `base:master`ブランチに対する**プルリクエスト**を作成します。
1.  ビルドが成功していた場合、コメントの投稿やマージされるのを待ちます。
1.  ビルドが失敗していた場合、成功するまで修正とコミットを行います。
