/** @type {import('prettier').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  printWidth: 120, // 120字で折り返す
  tabWidth: 2, // インデントは2スペース
  useTabs: false, // インデントにスペースを使う
  semi: true, // セミコロンをつける
  singleQuote: true, // シングルクォートを使う
  trailingComma: 'none', // 末尾のカンマを削除
  bracketSpacing: true, // オブジェクトのブラケット前後にスペースを入れる
  arrowParens: 'always', // アロー関数の引数に常にカッコをつける
  proseWrap: 'preserve' // マークダウンのテキストの折り返しを維持する
};
