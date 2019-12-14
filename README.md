# hotoke.js

## jQuery Plugins

## 使い方

```html
<link rel="stylesheet" href="hotoke.css">
<script src="jquery-2.2.4.js"></script>
<script src="hotoke.js"></script>
```

```javascript
$(function(){
  $('body').hotoke();
});
```

## options
```javascript
$(function(){
  $('body').hotoke({
    timeStart : 3000,
    hotokeImgPath : '../../hotoke.png'
  });
});
```

## demo
- demo
<a href="http://webdrawer.net/sample/js/hotoke/index.html" target="_blank">demo</a>


## セリフ変更
hotoke.js内を変更

```javascript
//最初の呼び出し文言
var hotokeShout = [
  'ヨ○ヒコー',
  'ヨ○ヒコよー'
];
//ほとけ降臨後の文言
var hotokeWords = [
  'ここにセリフを入れることができます。',
  'セリフ2',
  'セリフ3'
];
```

## 見た目の変更
hotoke.cssを編集