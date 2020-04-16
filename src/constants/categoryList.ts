import { Category } from './types'
const categoryList: Category[] = [
  {
    id: 3,
    title: '家電',
    option: [
      {
        id: 9,
        title: 'キッチン家電',
        option: [
          {
            id: 10901,
            title: '冷蔵庫・冷凍庫'
          },
          {
            id: 10903,
            title: 'ガスコンロ'
          },
          {
            id: 10909,
            title: '電子レンジ'
          },
          {
            id: 10913,
            title: '炊飯器'
          },
          {
            id: 10916,
            title: '食器洗い機'
          },
          {
            id: 10919,
            title: 'その他 キッチン家電'
          }
        ]
      },
      {
        id: 12,
        title: '生活家電',
        option: [
          {
            id: 10910,
            title: '洗濯機'
          },
          {
            id: 10904,
            title: '掃除機'
          },
          {
            id: 10917,
            title: '照明・ライト'
          },
          {
            id: 10919,
            title: 'その他 生活家電'
          }
        ]
      },
      {
        id: 24,
        title: 'AV家電',
        option: [
          {
            id: 10930,
            title: '液晶テレビ'
          },
          {
            id: 11230,
            title: 'ブルーレイレコーダー'
          },
          {
            id: 11216,
            title: 'プロジェクター'
          },
          {
            id: 10919,
            title: 'その他 AV家電'
          }
        ]
      },
      {
        id: 25,
        title: '季節家電',
        option: [
          {
            id: 10911,
            title: 'エアコン'
          },
          {
            id: 10902,
            title: 'ファンヒーター'
          },
          {
            id: 10919,
            title: 'その他 季節家電'
          }
        ]
      },
      {
        id: 26,
        title: '健康・美容',
        option: [
          {
            id: 10919,
            title: 'マッサージチェア'
          },
          {
            id: 10919,
            title: '美顔器'
          },
          {
            id: 10919,
            title: '脱毛機器'
          },
          {
            id: 10919,
            title: 'エステ機器'
          },
          {
            id: 10919,
            title: 'ダイエット器具'
          },
          {
            id: 10919,
            title: 'その他 健康・美容'
          }
        ]
      },
      {
        id: 27,
        title: 'ゲーム',
        option: [
          {
            id: 11498,
            title: 'ゲーム本体'
          },
          {
            id: 11499,
            title: 'ゲームソフト'
          },
          {
            id: 11490,
            title: 'ゲーム周辺機器'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: '楽器',
    option: [
      {
        id: 1,
        title: '弦楽器',
        option: [
          {
            id: 12102,
            title: 'ギター'
          },
          {
            id: 12102,
            title: 'ベース'
          },
          {
            id: 12102,
            title: 'バイオリン'
          },
          {
            id: 12102,
            title: 'その他 弦楽器'
          }
        ]
      },
      {
        id: 51,
        title: '管楽器',
        option: [
          {
            id: 12101,
            title: 'サックス'
          },
          {
            id: 12101,
            title: 'フルート'
          },
          {
            id: 12101,
            title: 'トランペット'
          },
          {
            id: 12101,
            title: 'その他 管楽器'
          }
        ]
      },
      {
        id: 52,
        title: '鍵盤楽器',
        option: [
          {
            id: 12107,
            title: '電子ピアノ'
          },
          {
            id: 12108,
            title: 'エレクトーン'
          },
          {
            id: 12103,
            title: 'キーボード'
          },
          {
            id: 12103,
            title: 'シンセサイザー'
          },
          {
            id: 12103,
            title: 'その他 鍵盤楽器'
          }
        ]
      },
      {
        id: 54,
        title: '打楽器',
        option: [
          {
            id: 12104,
            title: 'ドラムセット'
          },
          {
            id: 12104,
            title: 'その他 打楽器'
          }
        ]
      },
      {
        id: 55,
        title: 'その他',
        option: [
          {
            id: 12105,
            title: 'ギターアンプ'
          },
          {
            id: 12105,
            title: 'エフェクター'
          },
          {
            id: 12105,
            title: 'DJ機器'
          },
          {
            id: 12105,
            title: 'DTM-DAW'
          },
          {
            id: 12105,
            title: 'サイレント楽器'
          },
          {
            id: 12105,
            title: 'その他 楽器'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'パソコン・カメラ・オーディオ',
    option: [
      {
        id: 56,
        title: 'パソコン・スマホ',
        option: [
          {
            id: 56020,
            title: 'ノートパソコン'
          },
          {
            id: 56010,
            title: 'デスクトップパソコン'
          },
          {
            id: 4099,
            title: 'スマホ・携帯'
          },
          {
            id: 56030,
            title: 'タブレット'
          },
          {
            id: 57020,
            title: 'プリンター'
          },
          {
            id: 57010,
            title: 'PCモニター・ディスプレイ'
          },
          {
            id: 56050,
            title: '外部記憶装置'
          },
          {
            id: 56040,
            title: 'パソコンパーツ'
          }
        ]
      },
      {
        id: 57,
        title: 'カメラ',
        option: [
          {
            id: 12410,
            title: 'デジタルカメラ'
          },
          {
            id: 12411,
            title: 'ビデオカメラ'
          },
          {
            id: 12401,
            title: 'コンパクトカメラ・デジカメ'
          },
          {
            id: 12402,
            title: '一眼レフ'
          },
          {
            id: 12403,
            title: '中判カメラ'
          },
          {
            id: 12404,
            title: '大判カメラ'
          },
          {
            id: 12405,
            title: 'クラシックカメラ'
          },
          {
            id: 12408,
            title: '双眼鏡・望遠鏡'
          },
          {
            id: 12406,
            title: 'カメラレンズ'
          },
          {
            id: 12409,
            title: 'カメラ機材'
          },
          {
            id: 12407,
            title: 'その他 光学機器'
          }
        ]
      },
      {
        id: 58,
        title: 'オーディオ',
        option: [
          {
            id: 11201,
            title: 'スピーカー'
          },
          {
            id: 11209,
            title: 'アンプ'
          },
          {
            id: 11240,
            title: 'ホームシアターシステム'
          },
          {
            id: 11210,
            title: 'コンポ'
          },
          {
            id: 11212,
            title: 'ターンテーブル'
          },
          {
            id: 11205,
            title: 'LDプレーヤー'
          },
          {
            id: 11255,
            title: 'デジタルオーディオプレーヤー'
          },
          {
            id: 11213,
            title: 'その他 オーディオ'
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: '鉄道模型・ホビー',
    option: [
      {
        id: 2,
        title: 'ホビー',
        option: [
          {
            id: 12002,
            title: 'フィギュア'
          },
          {
            id: 12010,
            title: 'ドール'
          },
          {
            id: 12004,
            title: 'ドローン'
          },
          {
            id: 12004,
            title: 'ラジコン'
          },
          {
            id: 12004,
            title: 'ミニカー・モデルカー'
          },
          {
            id: 12005,
            title: 'おもちゃ・模型'
          },
          {
            id: 12005,
            title: 'ロボット'
          }
        ]
      },
      {
        id: 3,
        title: '鉄道模型',
        option: [
          {
            id: 12005,
            title: 'Nゲージ'
          },
          {
            id: 12005,
            title: 'HOゲージ'
          },
          {
            id: 12005,
            title: 'Oゲージ'
          },
          {
            id: 12005,
            title: 'OJゲージ'
          },
          {
            id: 12005,
            title: 'OOゲージ'
          },
          {
            id: 12005,
            title: 'Sゲージ'
          },
          {
            id: 12005,
            title: 'TTゲージ'
          },
          {
            id: 12005,
            title: 'Zゲージ'
          },
          {
            id: 12005,
            title: 'ジオラマ'
          },
          {
            id: 12005,
            title: 'その他 鉄道模型'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: 'ブランド・時計・貴金属',
    option: [
      {
        id: 7,
        title: 'ブランド・時計',
        option: [
          {
            id: 10718,
            title: 'ブランド品'
          },
          {
            id: 13599,
            title: '時計'
          }
        ]
      },
      {
        id: 35,
        title: '貴金属',
        option: [
          {
            id: 13403,
            title: 'リング'
          },
          {
            id: 13404,
            title: 'ピアス・イヤリング'
          },
          {
            id: 13405,
            title: 'ブレスレット'
          },
          {
            id: 13406,
            title: 'ネックレス'
          },
          {
            id: 5501,
            title: '金'
          },
          {
            id: 5510,
            title: 'プラチナ'
          },
          {
            id: 5520,
            title: 'ダイヤモンド'
          },
          {
            id: 5530,
            title: 'その他 宝石・真珠'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'カー・バイク用品',
    option: [
      {
        id: 4,
        title: 'カー用品',
        option: [
          {
            id: 12801,
            title: 'カーオーディオ'
          },
          {
            id: 12802,
            title: 'カーナビ'
          },
          {
            id: 12807,
            title: 'レーダー探知機'
          },
          {
            id: 12804,
            title: 'ドライブレコーダー'
          },
          {
            id: 12804,
            title: '車載カメラ'
          },
          {
            id: 12804,
            title: 'ETC車載器'
          },
          {
            id: 12803,
            title: 'カーパーツ'
          },
          {
            id: 12805,
            title: 'タイヤ・ホイール'
          },
          {
            id: 12305,
            title: 'チャイルドシート'
          }
        ]
      },
      {
        id: 5,
        title: 'バイク用品',
        option: [
          {
            id: 3702,
            title: 'ヘルメット'
          },
          {
            id: 3702,
            title: 'バイクパーツ'
          }
        ]
      }
    ]
  },
  {
    id: 16,
    title: '教材',
    option: [
      {
        id: 18,
        title: '英語教材',
        option: [
          {
            id: 11507,
            title: 'ディズニー英語システム'
          },
          {
            id: 11507,
            title: 'イングリッシュアドベンチャー'
          },
          {
            id: 11507,
            title: 'スーパーエルマー'
          },
          {
            id: 11507,
            title: 'ヒアリングマラソン'
          },
          {
            id: 11507,
            title: 'ミミテック'
          },
          {
            id: 11507,
            title: 'その他 英語教材'
          }
        ]
      },
      {
        id: 19,
        title: '幼児教材',
        option: [
          {
            id: 11507,
            title: '中央出版'
          },
          {
            id: 11507,
            title: 'いずみ書房'
          },
          {
            id: 11507,
            title: '七田式'
          },
          {
            id: 11507,
            title: 'その他 幼児教材'
          }
        ]
      },
      {
        id: 20,
        title: '自己啓発',
        option: [
          {
            id: 11507,
            title: '苫米地英人'
          },
          {
            id: 11507,
            title: 'SSI'
          },
          {
            id: 11507,
            title: 'ナポレオン・ヒル'
          },
          {
            id: 11507,
            title: 'ダイナマイトモチベーション'
          },
          {
            id: 11507,
            title: 'その他 自己啓発'
          }
        ]
      },
      {
        id: 21,
        title: '資格教材',
        option: [
          {
            id: 11507,
            title: 'フォーサイト教材'
          },
          {
            id: 11507,
            title: 'TAC教材'
          },
          {
            id: 11507,
            title: 'ユーキャン'
          },
          {
            id: 11507,
            title: 'その他 資格教材'
          }
        ]
      },
      {
        id: 22,
        title: 'その他',
        option: [
          {
            id: 11507,
            title: 'デアゴスティーニ'
          },
          {
            id: 11507,
            title: '速聴機'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'スポーツ',
    option: [
      {
        id: 14,
        title: '自転車',
        option: [
          {
            id: 3901,
            title: 'ロードバイク'
          },
          {
            id: 3901,
            title: 'クロスバイク'
          },
          {
            id: 3901,
            title: 'マウンテンバイク'
          },
          {
            id: 3901,
            title: '電動自転車'
          },
          {
            id: 3901,
            title: '折りたたみ自転車'
          },
          {
            id: 3901,
            title: 'BMX'
          },
          {
            id: 3901,
            title: 'その他 自転車'
          },
          {
            id: 3902,
            title: '自転車パーツ'
          },
          {
            id: 3903,
            title: '自転車ウェア'
          },
          {
            id: 3904,
            title: 'アクセサリ'
          }
        ]
      },
      {
        id: 15,
        title: 'ゴルフ',
        option: [
          {
            id: 12901,
            title: 'ゴルフドライバー'
          },
          {
            id: 12902,
            title: 'フェアウェイウッド'
          },
          {
            id: 12903,
            title: 'ユーティリティクラブ'
          },
          {
            id: 12904,
            title: 'アイアンセット'
          },
          {
            id: 12905,
            title: '単品アイアン・ウェッジ'
          },
          {
            id: 12906,
            title: 'パター'
          },
          {
            id: 12907,
            title: 'その他 ゴルフ用品'
          }
        ]
      },
      {
        id: 58,
        title: '釣具',
        option: [
          {
            id: 13001,
            title: '釣り竿'
          },
          {
            id: 13002,
            title: 'リール'
          },
          {
            id: 13003,
            title: '魚群探知機'
          },
          {
            id: 13003,
            title: 'その他 釣り具'
          }
        ]
      },
      {
        id: 55,
        title: 'ミリタリーグッズ',
        option: [
          {
            id: 13304,
            title: '電動ガン'
          },
          {
            id: 13304,
            title: 'エアガン'
          },
          {
            id: 13304,
            title: 'ガスガン'
          },
          {
            id: 13304,
            title: 'サバイバルグッズ'
          },
          {
            id: 13304,
            title: 'カスタムパーツ'
          },
          {
            id: 13304,
            title: 'スコープ'
          },
          {
            id: 13304,
            title: 'その他  ミリタリーグッズ'
          }
        ]
      },
      {
        id: 56,
        title: 'マリンスポーツ',
        option: [
          {
            id: 13101,
            title: 'ダイビング用品'
          },
          {
            id: 13102,
            title: 'サーフィン用品'
          },
          {
            id: 13304,
            title: 'カヌー・カヤック'
          }
        ]
      },
      {
        id: 57,
        title: 'ウィンタースポーツ',
        option: [
          {
            id: 13201,
            title: 'スキー'
          },
          {
            id: 13202,
            title: 'スノーボード'
          }
        ]
      },
      {
        id: 58,
        title: 'その他',
        option: [
          {
            id: 13304,
            title: 'その他 スポーツ'
          },
          {
            id: 13302,
            title: 'キャンプ・アウトドア用品'
          },
          {
            id: 13303,
            title: 'トレーニング・健康器具'
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: '工具・農機具・その他機械',
    option: [
      {
        id: 29,
        title: '工具',
        option: [
          {
            id: 5202,
            title: '発電機'
          },
          {
            id: 5202,
            title: 'エンジン工具'
          },
          {
            id: 5204,
            title: 'ハンマードリル'
          },
          {
            id: 5249,
            title: '釘打ち機'
          },
          {
            id: 5249,
            title: '電動丸ノコ'
          },
          {
            id: 5249,
            title: 'レーザー墨出し器'
          },
          {
            id: 5202,
            title: '溶接機'
          },
          {
            id: 5249,
            title: '高圧洗浄機'
          },
          {
            id: 5249,
            title: 'その他 工具'
          }
        ]
      },
      {
        id: 30,
        title: '農機具',
        option: [
          {
            id: 5250,
            title: 'トラクター'
          },
          {
            id: 5250,
            title: 'コンバイン'
          },
          {
            id: 5250,
            title: '管理機'
          },
          {
            id: 5250,
            title: '耕運機'
          },
          {
            id: 5250,
            title: '播種機'
          },
          {
            id: 5269,
            title: 'その他 農機具'
          }
        ]
      },
      {
        id: 32,
        title: '建機',
        option: [
          {
            id: 5206,
            title: 'フォークリフト'
          },
          {
            id: 5206,
            title: '油圧ショベル'
          },
          {
            id: 5206,
            title: 'ユンボ'
          },
          {
            id: 5206,
            title: 'ホイルローダー'
          },
          {
            id: 5206,
            title: 'ブルドーザー'
          },
          {
            id: 5206,
            title: 'ロードローラー'
          },
          {
            id: 5206,
            title: 'ダンプ'
          },
          {
            id: 5206,
            title: 'コンプレッサ'
          },
          {
            id: 5206,
            title: 'アタッチメント'
          },
          {
            id: 5206,
            title: 'その他 建機'
          }
        ]
      },
      {
        id: 33,
        title: 'その他機械',
        option: [
          {
            id: 5250,
            title: '除雪機'
          },
          {
            id: 5250,
            title: '芝刈り機'
          },
          {
            id: 5250,
            title: 'その他 機械'
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'ブランド家具・業務用機器',
    option: [
      {
        id: 40,
        title: 'ブランド家具',
        option: [
          {
            id: 10110,
            title: 'ソファー'
          },
          {
            id: 10102,
            title: 'テーブル'
          },
          {
            id: 10103,
            title: 'イス・チェア'
          },
          {
            id: 10101,
            title: 'タンス'
          },
          {
            id: 10108,
            title: '食器棚・キッチンボード'
          },
          {
            id: 10111,
            title: 'テレビ台・AVボード'
          },
          {
            id: 10114,
            title: 'キッチンカウンター'
          },
          {
            id: 10112,
            title: 'ドレッサー'
          },
          {
            id: 10113,
            title: '引出し・チェスト'
          },
          {
            id: 10117,
            title: 'その他 ブランド家具'
          }
        ]
      },
      {
        id: 40,
        title: '業務用機器',
        option: [
          {
            id: 10203,
            title: 'オフィスチェア'
          },
          {
            id: 10303,
            title: '業務用冷蔵庫'
          },
          {
            id: 10302,
            title: '製氷機'
          },
          {
            id: 10304,
            title: 'ショーケース'
          },
          {
            id: 10305,
            title: 'ショーケース型冷蔵庫'
          },
          {
            id: 10310,
            title: 'レジスター'
          },
          {
            id: 5401,
            title: '複合機'
          },
          {
            id: 5402,
            title: 'ビジネスフォン'
          },
          {
            id: 5403,
            title: 'シュレッダー'
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: 'その他',
    option: [
      {
        id: 21,
        title: 'ファッション',
        option: [
          {
            id: 10402,
            title: 'レディースファッション'
          },
          {
            id: 10502,
            title: 'メンズファッション'
          }
        ]
      },
      {
        id: 22,
        title: '介護用品',
        option: [
          {
            id: 12201,
            title: '車椅子'
          },
          {
            id: 12201,
            title: '介護ベッド'
          },
          {
            id: 12201,
            title: 'セニアカー'
          },
          {
            id: 12201,
            title: 'その他 介護用品'
          }
        ]
      },
      {
        id: 22,
        title: 'ベビー用品',
        option: [
          {
            id: 12301,
            title: 'ベビーカー'
          },
          {
            id: 12302,
            title: 'その他 ベビー用品'
          }
        ]
      },
      {
        id: 22,
        title: '骨董品・絵画',
        option: [
          {
            id: 11701,
            title: '骨董品'
          },
          {
            id: 13601,
            title: '絵画'
          }
        ]
      }
    ]
  }
]

export default categoryList
