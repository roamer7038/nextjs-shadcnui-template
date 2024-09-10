#!/bin/bash

# エイリアス変換スクリプト
# ex. ./replace_string.sh ./src ./dist "@/lib/utils" "../lib/utils"
# ex. ./replace_string.sh ./dist overwrite "@/components/ui/" "./"

SRC_DIR=$1   # 変更するファイルがあるディレクトリ
OUT_DIR=$2   # 変更後のファイルを保存するディレクトリ（"overwrite"で上書き）
OLD_ALIAS=$3 # 置き換え前のエイリアス (例: "@/lib/utils")
NEW_PATH=$4  # 置き換え後の相対パス (例: "../lib/utils")

# 上書きフラグの設定
OVERWRITE=false
if [ "$OUT_DIR" == "overwrite" ]; then
  OVERWRITE=true
fi

# SRC_DIRディレクトリのすべての.tsxと.stories.tsxファイルを処理
find "$SRC_DIR" -name "*.tsx" -o -name "*.stories.tsx" -o -name "*.ts" | while read -r FILE; do
  # 相対パスを保持
  RELATIVE_PATH="${FILE#$SRC_DIR/}"

  # 上書きモードの場合、出力ファイルは元のファイルに設定
  if $OVERWRITE; then
    OUT_FILE="$FILE"
    TEMP_FILE=$(mktemp) # 一時ファイルを作成
    sed "s|from '${OLD_ALIAS}|from '${NEW_PATH}|g" "$FILE" >"$TEMP_FILE"

    # 一時ファイルを元のファイルに上書き
    mv "$TEMP_FILE" "$OUT_FILE"
    echo "Overwritten: $FILE"
  else
    # 出力ディレクトリと出力ファイル名を作成
    OUT_FILE="$OUT_DIR/$RELATIVE_PATH"
    OUT_FILE_DIR=$(dirname "$OUT_FILE")

    # 出力ディレクトリを作成（存在しない場合）
    mkdir -p "$OUT_FILE_DIR"

    # エイリアスを相対パスに置き換えてファイルを出力
    sed "s|from '${OLD_ALIAS}|from '${NEW_PATH}|g" "$FILE" >"$OUT_FILE"
    echo "Processed: $FILE -> $OUT_FILE"
  fi
done

if $OVERWRITE; then
  echo "All files overwritten."
else
  echo "All files processed. Output saved to $OUT_DIR"
fi
