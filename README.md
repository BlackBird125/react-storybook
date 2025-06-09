# React + Storybook サンプルプロジェクト

このプロジェクトは、React コンポーネントを Storybook を使用して開発・ドキュメント化するためのサンプルです。

## 技術スタック

- React 18
- Storybook 7
- TailwindCSS
- PropTypes

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start

# Storybookの起動
npm run storybook
```

## プロジェクト構造

```
src/
  ├── components/          # コンポーネントディレクトリ
  │   └── Button/         # Buttonコンポーネント
  │       ├── Button.js   # コンポーネント本体
  │       └── Button.stories.js  # Storybookのストーリー
  └── App.tsx             # メインアプリケーション
```

## コンポーネントの開発フロー

1. `src/components/` 配下に新しいコンポーネントディレクトリを作成
2. コンポーネントファイル（`.js`）とストーリーファイル（`.stories.js`）を作成
3. Storybook で動作確認しながら開発

## Storybook の活用方法

### 1. コンポーネントのドキュメント化

- `stories.js`ファイルにコンポーネントの使用例を記載
- PropTypes を使用して型情報とドキュメントを提供
- タグ（autodocs）を使用して自動ドキュメント生成

### 2. インタラクティブな開発

- Controls アドオンでプロパティをリアルタイムに変更
- Actions アドオンでイベントハンドラーの動作確認
- Viewport アドオンでレスポンシブデザインのテスト

### 3. バリエーションの管理

- 異なるプロパティセットで複数のストーリーを作成
- エッジケースや特殊なケースもストーリーとして管理
- デザインシステムの一貫性を確保

## Button コンポーネントの例

### 基本的な使用方法

```jsx
import { Button } from './components/Button/Button';

// プライマリーボタン
<Button
  label="Click me"
  variant="primary"
  onClick={() => console.log('Clicked!')}
/>

// セカンダリーボタン
<Button
  label="Cancel"
  variant="secondary"
  onClick={() => console.log('Cancelled')}
/>
```

### プロパティ

| プロパティ名 | 型                       | 必須 | デフォルト値 | 説明                           |
| ------------ | ------------------------ | ---- | ------------ | ------------------------------ |
| label        | string                   | ✓    | -            | ボタンに表示するテキスト       |
| variant      | 'primary' \| 'secondary' | -    | 'primary'    | ボタンのスタイルバリエーション |
| onClick      | function                 | -    | -            | クリック時のコールバック関数   |

## ベストプラクティス

1. **コンポーネントの分離**

   - 各コンポーネントは独立して動作するように設計
   - 必要最小限のプロパティで制御可能に

2. **ストーリーの作成**

   - 基本的なユースケースを必ずストーリー化
   - エッジケースや特殊なケースもカバー
   - 適切な名前とドキュメントを付与

3. **型の定義**

   - PropTypes で型情報を明確に定義
   - 必須プロパティを明示
   - プロパティの制約を適切に設定

4. **テスト**
   - Storybook のテスト機能を活用
   - インタラクションテストの実装
   - アクセシビリティテストの実施

## 参考リンク

- [Storybook 公式ドキュメント](https://storybook.js.org/)
- [React 公式ドキュメント](https://reactjs.org/)
- [TailwindCSS 公式ドキュメント](https://tailwindcss.com/)
