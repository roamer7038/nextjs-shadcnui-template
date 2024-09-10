# Next.js shadcn/ui Template

## Storybook

Storybookを使ってコンポーネントのプレビューを確認できます．

```
npm i
npm run storybook
```

## ツール

リポジトリのコードをコピーして自分のプロジェクトに追加できます．
コード内のパスを変更するためのツールを用意しています．

```
./replace_string.sh <src> <dest> <old_path> <new_path>
```

例えば，`./components/ui`ディレクトリ配下にあるコンポーネントのエイリアスパスを，相対パスに変更する場合は以下のように実行します．

```
./replace_string.sh ./components/ui ./dist "@/components/ui" "."
# ファイルを上書きする場合
./replace_string.sh ./components/ui overwrite "@/components/ui" "."
```

## 開発

### コンポーネントの追加

公式のコマンドで shadcn/ui コンポーネントを追加します．

```
npx shadcn@latest add
```

### ストーリージェネレータ

plopを使って指定したコンポーネントのストーリーファイルを生成します．
`<component-name>`にはコンポーネントの名前を指定します（拡張子は不要）．

```
npm run plop storybook --name <component-name>
```

以下のコマンドは，`components/ui`ディレクトリ内の全てのtsxファイルに対して，`plop storybook`コマンドを実行しstoriesファイルを生成します．既に存在するファイルは上書きされません．

```
for file in components/ui/*.tsx; do name=$(basename "$file" .tsx); npm run plop storybook --name "$name"; done
```