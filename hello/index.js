// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// ルート(http://localhost)にアクセスしてきた時にhelloを返す
app.get('/', (req, res) => res.send('Hello'));

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('listening on port 3000'));
