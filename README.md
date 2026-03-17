# jcfs-all
[README.md](https://github.com/user-attachments/files/26040666/README.md)
# photos フォルダ — 画像配置ガイド

このフォルダにサイト用の画像を配置してください。
HTML内では `photos/ファイル名` で参照します。

## 推奨画像リスト

| ファイル名       | 使用箇所         | 推奨サイズ        | 内容イメージ                         |
|-----------------|-----------------|------------------|-------------------------------------|
| hero.jpg        | ヒーローセクション | 1920×1080px以上  | 日本の漁港の朝日 or カンボジア漁師の笑顔 |
| japan-port.jpg  | WHYセクション（日本）| 800×600px       | 日本の港に並ぶFRP漁船               |
| cambodia-sea.jpg| WHYセクション（KH）| 800×600px        | カンボジアの海・漁師の作業風景      |
| fisherman.jpg   | VALUEセクション  | 800×600px        | 現地漁師の生き生きとした表情        |
| boat-detail.jpg | ASSETSセクション | 800×600px        | FRP漁船の品質・造りを示す写真       |

## 画像を追加する手順

1. この `photos/` フォルダに画像を配置する
2. `index.html` の該当セクションに以下のように追加：

```html
<!-- hero画像の例 -->
<div class="hero-photo"></div>  ← すでにHTMLに記述済み

<!-- 写真を有効化するにはcss/style.css内の -->
<!-- .hero-photo { opacity: 0; } を opacity: 0.18; に変更 -->
```

## 画像形式・最適化

- 形式：`.jpg`（写真）/ `.webp`（推奨・軽量）/ `.png`（透過が必要な場合）
- 容量：1枚あたり300KB以下を目標に圧縮する
- 圧縮ツール：[Squoosh](https://squoosh.app/) / [TinyPNG](https://tinypng.com/)
