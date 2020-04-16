import { CategoryValue } from './types'

/* 最後Form送信用のデータを取得する */
const categoryValueList: CategoryValue[] = [
  {
    key: '冷蔵庫・冷凍庫',
    value: { cat0: 3, cat1: 9, cat2: 10901, category: '家電' }
  },
  {
    key: 'ガスコンロ',
    value: { cat0: 3, cat1: 9, cat2: 10903, category: '家電' }
  },
  {
    key: '電子レンジ',
    value: { cat0: 3, cat1: 9, cat2: 10909, category: '家電' }
  },
  { key: '炊飯器', value: { cat0: 3, cat1: 9, cat2: 10913, category: '家電' } },
  {
    key: '食器洗い機',
    value: { cat0: 3, cat1: 9, cat2: 10916, category: '家電' }
  },
  {
    key: 'その他 キッチン家電',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '家電' }
  },
  { key: '洗濯機', value: { cat0: 3, cat1: 9, cat2: 10910, category: '家電' } },
  { key: '掃除機', value: { cat0: 3, cat1: 9, cat2: 10904, category: '家電' } },
  {
    key: '照明・ライト',
    value: { cat0: 3, cat1: 9, cat2: 10917, category: '家電' }
  },
  {
    key: 'その他 生活家電',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '家電' }
  },
  {
    key: '液晶テレビ',
    value: { cat0: 3, cat1: 9, cat2: 10930, category: 'テレビ' }
  },
  {
    key: 'ブルーレイレコーダー',
    value: { cat0: 3, cat1: 12, cat2: 11230, category: '家電' }
  },
  {
    key: 'プロジェクター',
    value: { cat0: 3, cat1: 12, cat2: 11216, category: '家電' }
  },
  {
    key: 'その他 AV家電',
    value: { cat0: 3, cat1: 12, cat2: 10919, category: '家電' }
  },
  {
    key: 'エアコン',
    value: { cat0: 3, cat1: 9, cat2: 10911, category: '家電' }
  },
  {
    key: 'ファンヒーター',
    value: { cat0: 3, cat1: 9, cat2: 10902, category: '家電' }
  },
  {
    key: 'その他 季節家電',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '家電' }
  },
  {
    key: 'マッサージチェア',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '家電' }
  },
  { key: '美顔器', value: { cat0: 3, cat1: 9, cat2: 10919, category: '美容' } },
  {
    key: '脱毛機器',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '美容' }
  },
  {
    key: 'エステ機器',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '美容' }
  },
  {
    key: 'ダイエット器具',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '美容' }
  },
  {
    key: 'その他 健康・美容',
    value: { cat0: 3, cat1: 9, cat2: 10919, category: '美容' }
  },
  {
    key: 'ゲーム本体',
    value: { cat0: 7, cat1: 14, cat2: 11498, category: '家電' }
  },
  {
    key: 'ゲームソフト',
    value: { cat0: 7, cat1: 14, cat2: 11499, category: '家電' }
  },
  {
    key: 'ゲーム周辺機器',
    value: { cat0: 7, cat1: 14, cat2: 11490, category: '家電' }
  },
  {
    key: 'ギター',
    value: { cat0: 11, cat1: 21, cat2: 12102, category: 'ギター' }
  },
  {
    key: 'ベース',
    value: { cat0: 11, cat1: 21, cat2: 12102, category: 'ギター' }
  },
  {
    key: 'バイオリン',
    value: { cat0: 11, cat1: 21, cat2: 12102, category: '楽器' }
  },
  {
    key: 'その他 弦楽器',
    value: { cat0: 11, cat1: 21, cat2: 12102, category: '楽器' }
  },
  {
    key: 'サックス',
    value: { cat0: 11, cat1: 21, cat2: 12101, category: '楽器' }
  },
  {
    key: 'フルート',
    value: { cat0: 11, cat1: 21, cat2: 12101, category: '楽器' }
  },
  {
    key: 'トランペット',
    value: { cat0: 11, cat1: 21, cat2: 12101, category: '楽器' }
  },
  {
    key: 'その他 管楽器',
    value: { cat0: 11, cat1: 21, cat2: 12101, category: '楽器' }
  },
  {
    key: '電子ピアノ',
    value: { cat0: 11, cat1: 21, cat2: 12107, category: '楽器' }
  },
  {
    key: 'エレクトーン',
    value: { cat0: 11, cat1: 21, cat2: 12108, category: '楽器' }
  },
  {
    key: 'キーボード',
    value: { cat0: 11, cat1: 21, cat2: 12103, category: '楽器' }
  },
  {
    key: 'シンセサイザー',
    value: { cat0: 11, cat1: 21, cat2: 12103, category: '楽器' }
  },
  {
    key: 'その他 鍵盤楽器',
    value: { cat0: 11, cat1: 21, cat2: 12103, category: '楽器' }
  },
  {
    key: 'ドラムセット',
    value: { cat0: 11, cat1: 21, cat2: 12104, category: '楽器' }
  },
  {
    key: 'その他 打楽器',
    value: { cat0: 11, cat1: 21, cat2: 12104, category: '楽器' }
  },
  {
    key: 'ギターアンプ',
    value: { cat0: 11, cat1: 21, cat2: 12105, category: '楽器' }
  },
  {
    key: 'エフェクター',
    value: { cat0: 11, cat1: 21, cat2: 12105, category: '楽器' }
  },
  {
    key: 'DJ機器',
    value: { cat0: 11, cat1: 21, cat2: 12105, category: '楽器' }
  },
  {
    key: 'DTM-DAW',
    value: { cat0: 11, cat1: 21, cat2: 12105, category: '楽器' }
  },
  {
    key: 'サイレント楽器',
    value: { cat0: 11, cat1: 21, cat2: 12105, category: '楽器' }
  },
  {
    key: 'その他 楽器',
    value: { cat0: 11, cat1: 21, cat2: 12105, category: '楽器' }
  },
  {
    key: 'ノートパソコン',
    value: { cat0: 4, cat1: 56, cat2: 56020, category: 'パソコン' }
  },
  {
    key: 'デスクトップパソコン',
    value: { cat0: 4, cat1: 56, cat2: 56010, category: 'パソコン' }
  },
  {
    key: 'スマホ・携帯',
    value: { cat0: 8, cat1: 40, cat2: 4099, category: 'スマホ・携帯' }
  },
  {
    key: 'タブレット',
    value: { cat0: 4, cat1: 56, cat2: 56030, category: 'タブレット' }
  },
  {
    key: 'プリンター',
    value: { cat0: 4, cat1: 57, cat2: 57020, category: '家電' }
  },
  {
    key: 'PCモニター・ディスプレイ',
    value: { cat0: 4, cat1: 57, cat2: 57010, category: '家電' }
  },
  {
    key: '外部記憶装置',
    value: { cat0: 4, cat1: 57, cat2: 57050, category: '家電' }
  },
  {
    key: 'パソコンパーツ',
    value: { cat0: 4, cat1: 57, cat2: 57040, category: 'パソコン' }
  },
  {
    key: 'デジタルカメラ',
    value: { cat0: 3, cat1: 24, cat2: 12410, category: 'カメラ' }
  },
  {
    key: 'ビデオカメラ',
    value: { cat0: 3, cat1: 24, cat2: 12411, category: 'カメラ' }
  },
  {
    key: 'コンパクトカメラ・デジカメ',
    value: { cat0: 3, cat1: 24, cat2: 12401, category: 'カメラ' }
  },
  {
    key: '一眼レフ',
    value: { cat0: 3, cat1: 24, cat2: 12402, category: 'カメラ' }
  },
  {
    key: '中判カメラ',
    value: { cat0: 3, cat1: 24, cat2: 12403, category: 'カメラ' }
  },
  {
    key: '大判カメラ',
    value: { cat0: 3, cat1: 24, cat2: 12404, category: 'カメラ' }
  },
  {
    key: 'クラシックカメラ',
    value: { cat0: 3, cat1: 24, cat2: 12405, category: 'カメラ' }
  },
  {
    key: '双眼鏡・望遠鏡',
    value: { cat0: 3, cat1: 24, cat2: 12408, category: 'カメラ' }
  },
  {
    key: 'カメラレンズ',
    value: { cat0: 3, cat1: 24, cat2: 12406, category: 'カメラ周辺機器' }
  },
  {
    key: 'カメラ機材',
    value: { cat0: 3, cat1: 24, cat2: 12409, category: 'カメラ周辺機器' }
  },
  {
    key: 'その他 光学機器',
    value: { cat0: 3, cat1: 24, cat2: 12407, category: 'カメラ周辺機器' }
  },
  {
    key: 'スピーカー',
    value: { cat0: 3, cat1: 12, cat2: 11201, category: '音響機材' }
  },
  {
    key: 'アンプ',
    value: { cat0: 3, cat1: 12, cat2: 11209, category: '音響機材' }
  },
  {
    key: 'ホームシアターシステム',
    value: { cat0: 3, cat1: 12, cat2: 11240, category: '音響機材' }
  },
  {
    key: 'コンポ',
    value: { cat0: 3, cat1: 12, cat2: 11210, category: '音響機材' }
  },
  {
    key: 'ターンテーブル',
    value: { cat0: 3, cat1: 12, cat2: 11212, category: '音響機材' }
  },
  {
    key: 'LDプレーヤー',
    value: { cat0: 3, cat1: 12, cat2: 11205, category: '音響機材' }
  },
  {
    key: 'デジタルオーディオプレーヤー',
    value: { cat0: 3, cat1: 12, cat2: 11255, category: '音響機材' }
  },
  {
    key: 'その他 オーディオ',
    value: { cat0: 3, cat1: 12, cat2: 11213, category: '音響機材' }
  },
  {
    key: 'フィギュア',
    value: { cat0: 10, cat1: 20, cat2: 12002, category: 'フィギュア' }
  },
  {
    key: 'ドール',
    value: { cat0: 10, cat1: 20, cat2: 12010, category: 'フィギュア' }
  },
  {
    key: 'ドローン',
    value: { cat0: 10, cat1: 20, cat2: 12004, category: 'フィギュア' }
  },
  {
    key: 'ラジコン',
    value: { cat0: 10, cat1: 20, cat2: 12004, category: 'フィギュア' }
  },
  {
    key: 'ミニカー・モデルカー',
    value: { cat0: 10, cat1: 20, cat2: 12004, category: 'フィギュア' }
  },
  {
    key: 'おもちゃ・模型',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: 'フィギュア' }
  },
  {
    key: 'ロボット',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: 'フィギュア' }
  },
  {
    key: 'Nゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'HOゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'Oゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'OJゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'OOゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'Sゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'TTゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'Zゲージ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'ジオラマ',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'その他 鉄道模型',
    value: { cat0: 10, cat1: 20, cat2: 12005, category: '鉄道模型' }
  },
  {
    key: 'ブランド品',
    value: { cat0: 1, cat1: 7, cat2: 10718, category: 'ブランド' }
  },
  { key: '時計', value: { cat0: 1, cat1: 35, cat2: 13599, category: '時計' } },
  {
    key: 'リング',
    value: { cat0: 2, cat1: 34, cat2: 13403, category: 'ブランド' }
  },
  {
    key: 'ピアス・イヤリング',
    value: { cat0: 2, cat1: 34, cat2: 13404, category: 'ブランド' }
  },
  {
    key: 'ブレスレット',
    value: { cat0: 2, cat1: 34, cat2: 13405, category: 'ブランド' }
  },
  {
    key: 'ネックレス',
    value: { cat0: 2, cat1: 34, cat2: 13406, category: 'ブランド' }
  },
  { key: '金', value: { cat0: 2, cat1: 55, cat2: 5501, category: 'ブランド' } },
  {
    key: 'プラチナ',
    value: { cat0: 2, cat1: 55, cat2: 5510, category: 'ブランド' }
  },
  {
    key: 'ダイヤモンド',
    value: { cat0: 2, cat1: 55, cat2: 5520, category: 'ブランド' }
  },
  {
    key: 'その他 宝石・真珠',
    value: { cat0: 2, cat1: 55, cat2: 5530, category: 'ブランド' }
  },
  {
    key: 'カーオーディオ',
    value: { cat0: 14, cat1: 28, cat2: 12801, category: '音響機材' }
  },
  {
    key: 'カーナビ',
    value: { cat0: 14, cat1: 28, cat2: 12802, category: 'ナビ' }
  },
  {
    key: 'レーダー探知機',
    value: { cat0: 14, cat1: 28, cat2: 12807, category: 'ナビ' }
  },
  {
    key: 'レーダー探知機',
    value: { cat0: 14, cat1: 28, cat2: 12807, category: 'ナビ' }
  },
  {
    key: 'ドライブレコーダー',
    value: { cat0: 14, cat1: 28, cat2: 12804, category: 'ナビ' }
  },
  {
    key: '車載カメラ',
    value: { cat0: 14, cat1: 28, cat2: 12804, category: 'ナビ' }
  },
  {
    key: 'ETC車載器',
    value: { cat0: 14, cat1: 28, cat2: 12804, category: 'ナビ' }
  },
  {
    key: 'カーパーツ',
    value: { cat0: 14, cat1: 28, cat2: 12803, category: 'その他' }
  },
  {
    key: 'タイヤ・ホイール',
    value: { cat0: 14, cat1: 28, cat2: 12805, category: 'その他' }
  },
  {
    key: 'チャイルドシート',
    value: { cat0: 6, cat1: 23, cat2: 12305, category: 'その他' }
  },
  {
    key: 'ヘルメット',
    value: { cat0: 14, cat1: 37, cat2: 3702, category: 'その他' }
  },
  {
    key: 'バイクパーツ',
    value: { cat0: 14, cat1: 37, cat2: 3702, category: 'その他' }
  },
  {
    key: 'ディズニー英語システム',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'イングリッシュアドベンチャー',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'スーパーエルマー',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'ヒアリングマラソン',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'ミミテック',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'その他 英語教材',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: '中央出版',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'いずみ書房',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: '七田式',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'その他 幼児教材',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: '苫米地英人',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'SSI',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'ナポレオン・ヒル',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'ダイナマイトモチベーション',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'その他 自己啓発',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'フォーサイト教材',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'TAC教材',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'ユーキャン',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'その他 資格教材',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'デアゴスティーニ',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: '速聴機',
    value: { cat0: 7, cat1: 15, cat2: 11507, category: '教材' }
  },
  {
    key: 'ロードバイク',
    value: { cat0: 15, cat1: 39, cat2: 3901, category: '自転車' }
  },
  {
    key: 'クロスバイク',
    value: { cat0: 15, cat1: 39, cat2: 3901, category: '自転車' }
  },
  {
    key: 'マウンテンバイク',
    value: { cat0: 15, cat1: 39, cat2: 3901, category: '自転車' }
  },
  {
    key: '電動自転車',
    value: { cat0: 15, cat1: 39, cat2: 3901, category: '自転車' }
  },
  {
    key: '折りたたみ自転車',
    value: { cat0: 15, cat1: 39, cat2: 3901, category: '自転車' }
  },
  { key: 'BMX', value: { cat0: 15, cat1: 39, cat2: 3901, category: '自転車' } },
  {
    key: 'その他 自転車',
    value: { cat0: 15, cat1: 39, cat2: 3901, category: '自転車' }
  },
  {
    key: '自転車パーツ',
    value: { cat0: 15, cat1: 39, cat2: 3902, category: '自転車' }
  },
  {
    key: '自転車ウェア',
    value: { cat0: 15, cat1: 39, cat2: 3903, category: '自転車' }
  },
  {
    key: 'アクセサリ',
    value: { cat0: 15, cat1: 39, cat2: 3904, category: '自転車' }
  },
  {
    key: 'ゴルフドライバー',
    value: { cat0: 15, cat1: 29, cat2: 12901, category: 'ゴルフ' }
  },
  {
    key: 'フェアウェイウッド',
    value: { cat0: 15, cat1: 29, cat2: 12902, category: 'ゴルフ' }
  },
  {
    key: 'ユーティリティクラブ',
    value: { cat0: 15, cat1: 29, cat2: 12903, category: 'ゴルフ' }
  },
  {
    key: 'アイアンセット',
    value: { cat0: 15, cat1: 29, cat2: 12904, category: 'ゴルフ' }
  },
  {
    key: '単品アイアン・ウェッジ',
    value: { cat0: 15, cat1: 29, cat2: 12905, category: 'ゴルフ' }
  },
  {
    key: 'パター',
    value: { cat0: 15, cat1: 29, cat2: 12906, category: 'ゴルフ' }
  },
  {
    key: 'その他 ゴルフ用品',
    value: { cat0: 15, cat1: 29, cat2: 12907, category: 'ゴルフ' }
  },
  {
    key: '釣り竿',
    value: { cat0: 15, cat1: 30, cat2: 13001, category: '釣具' }
  },
  {
    key: 'リール',
    value: { cat0: 15, cat1: 30, cat2: 13002, category: '釣具' }
  },
  {
    key: '魚群探知機',
    value: { cat0: 15, cat1: 30, cat2: 13003, category: '釣具' }
  },
  {
    key: 'その他 釣り具',
    value: { cat0: 15, cat1: 30, cat2: 13003, category: '釣具' }
  },
  {
    key: '電動ガン',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'エアガン' }
  },
  {
    key: 'エアガン',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'エアガン' }
  },
  {
    key: 'ガスガン',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'エアガン' }
  },
  {
    key: 'サバイバルグッズ',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'エアガン' }
  },
  {
    key: 'カスタムパーツ',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'エアガン' }
  },
  {
    key: 'スコープ',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'エアガン' }
  },
  {
    key: 'その他  ミリタリーグッズ',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'エアガン' }
  },
  {
    key: 'ダイビング用品',
    value: { cat0: 15, cat1: 31, cat2: 13101, category: 'その他' }
  },
  {
    key: 'サーフィン用品',
    value: { cat0: 15, cat1: 31, cat2: 13102, category: 'その他' }
  },
  {
    key: 'カヌー・カヤック',
    value: { cat0: 15, cat1: 31, cat2: 13304, category: 'その他' }
  },
  {
    key: 'スキー',
    value: { cat0: 15, cat1: 32, cat2: 13201, category: 'その他' }
  },
  {
    key: 'スノーボード',
    value: { cat0: 15, cat1: 32, cat2: 13202, category: 'その他' }
  },
  {
    key: 'その他 スポーツ',
    value: { cat0: 15, cat1: 33, cat2: 13304, category: 'その他' }
  },
  {
    key: 'キャンプ・アウトドア用品',
    value: { cat0: 15, cat1: 33, cat2: 13302, category: 'その他' }
  },
  {
    key: 'トレーニング・健康器具',
    value: { cat0: 15, cat1: 33, cat2: 13303, category: 'その他' }
  },
  {
    key: '発電機',
    value: { cat0: 12, cat1: 52, cat2: 5202, category: '電動工具' }
  },
  {
    key: 'エンジン工具',
    value: { cat0: 12, cat1: 52, cat2: 5202, category: '電動工具' }
  },
  {
    key: 'ハンマードリル',
    value: { cat0: 12, cat1: 52, cat2: 5204, category: '電動工具' }
  },
  {
    key: '釘打ち機',
    value: { cat0: 12, cat1: 52, cat2: 5249, category: '電動工具' }
  },
  {
    key: '電動丸ノコ',
    value: { cat0: 12, cat1: 52, cat2: 5249, category: '電動工具' }
  },
  {
    key: 'レーザー墨出し器',
    value: { cat0: 12, cat1: 52, cat2: 5249, category: '電動工具' }
  },
  {
    key: '溶接機',
    value: { cat0: 12, cat1: 52, cat2: 5202, category: '電動工具' }
  },
  {
    key: '高圧洗浄機',
    value: { cat0: 12, cat1: 52, cat2: 5249, category: '電動工具' }
  },
  {
    key: 'その他 工具',
    value: { cat0: 12, cat1: 52, cat2: 5249, category: '電動工具' }
  },
  {
    key: 'トラクター',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: 'コンバイン',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: '管理機',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: '耕運機',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: '播種機',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: 'その他 農機具',
    value: { cat0: 12, cat1: 52, cat2: 5269, category: '農機具' }
  },
  {
    key: 'フォークリフト',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: '油圧ショベル',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'ユンボ',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'ホイルローダー',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'ブルドーザー',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'ロードローラー',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'ダンプ',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'コンプレッサ',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'アタッチメント',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: 'その他 建機',
    value: { cat0: 12, cat1: 52, cat2: 5206, category: '建機' }
  },
  {
    key: '除雪機',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: '芝刈り機',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: 'その他 機械',
    value: { cat0: 12, cat1: 52, cat2: 5250, category: '農機具' }
  },
  {
    key: 'ソファー',
    value: { cat0: 5, cat1: 1, cat2: 10110, category: 'ブランド家具' }
  },
  {
    key: 'テーブル',
    value: { cat0: 5, cat1: 1, cat2: 10102, category: 'ブランド家具' }
  },
  {
    key: 'イス・チェア',
    value: { cat0: 5, cat1: 1, cat2: 10103, category: 'ブランド家具' }
  },
  {
    key: 'タンス',
    value: { cat0: 5, cat1: 1, cat2: 10101, category: 'ブランド家具' }
  },
  {
    key: '食器棚・キッチンボード',
    value: { cat0: 5, cat1: 1, cat2: 10108, category: 'ブランド家具' }
  },
  {
    key: 'テレビ台・AVボード',
    value: { cat0: 5, cat1: 1, cat2: 10111, category: 'ブランド家具' }
  },
  {
    key: 'キッチンカウンター',
    value: { cat0: 5, cat1: 1, cat2: 10114, category: 'ブランド家具' }
  },
  {
    key: 'ドレッサー',
    value: { cat0: 5, cat1: 1, cat2: 10112, category: 'ブランド家具' }
  },
  {
    key: '引出し・チェスト',
    value: { cat0: 5, cat1: 1, cat2: 10113, category: 'ブランド家具' }
  },
  {
    key: 'その他 ブランド家具',
    value: { cat0: 5, cat1: 1, cat2: 10117, category: 'ブランド家具' }
  },
  {
    key: 'オフィスチェア',
    value: { cat0: 9, cat1: 2, cat2: 10203, category: 'その他' }
  },
  {
    key: '業務用冷蔵庫',
    value: { cat0: 9, cat1: 3, cat2: 10303, category: '家電' }
  },
  { key: '製氷機', value: { cat0: 9, cat1: 3, cat2: 10302, category: '家電' } },
  {
    key: 'ショーケース',
    value: { cat0: 9, cat1: 3, cat2: 10304, category: '家電' }
  },
  {
    key: 'ショーケース型冷蔵庫',
    value: { cat0: 9, cat1: 3, cat2: 10305, category: '家電' }
  },
  {
    key: 'レジスター',
    value: { cat0: 9, cat1: 3, cat2: 10310, category: '家電' }
  },
  { key: '複合機', value: { cat0: 9, cat1: 54, cat2: 5401, category: '家電' } },
  {
    key: 'ビジネスフォン',
    value: { cat0: 9, cat1: 54, cat2: 5402, category: '家電' }
  },
  {
    key: 'シュレッダー',
    value: { cat0: 9, cat1: 54, cat2: 5403, category: '家電' }
  },
  {
    key: 'レディースファッション',
    value: { cat0: 6, cat1: 4, cat2: 10402, category: 'ファッション' }
  },
  {
    key: 'メンズファッション',
    value: { cat0: 6, cat1: 5, cat2: 10502, category: 'ファッション' }
  },
  {
    key: '車椅子',
    value: { cat0: 6, cat1: 22, cat2: 12201, category: 'その他' }
  },
  {
    key: '介護ベッド',
    value: { cat0: 6, cat1: 22, cat2: 12201, category: 'その他' }
  },
  {
    key: 'セニアカー',
    value: { cat0: 6, cat1: 22, cat2: 12201, category: 'その他' }
  },
  {
    key: 'その他 介護用品',
    value: { cat0: 6, cat1: 22, cat2: 12201, category: 'その他' }
  },
  {
    key: 'ベビーカー',
    value: { cat0: 6, cat1: 23, cat2: 12301, category: 'その他' }
  },
  {
    key: 'その他 ベビー用品',
    value: { cat0: 6, cat1: 23, cat2: 12302, category: 'その他' }
  },
  {
    key: '骨董品',
    value: { cat0: 10, cat1: 17, cat2: 11701, category: 'その他' }
  },
  {
    key: '絵画',
    value: { cat0: 10, cat1: 36, cat2: 13601, category: 'その他' }
  }
]

export default categoryValueList
