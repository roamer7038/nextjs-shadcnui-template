
以下のコマンドは，`components/ui`ディレクトリ内の全てのtsxファイルに対して，`plop storybook`コマンドを実行しstoriesファイルを生成します．既に存在するファイルは上書きされません．

```
for file in components/ui/*.tsx; do name=$(basename "$file" .tsx); npm run plop storybook --name "$name"; done
```

