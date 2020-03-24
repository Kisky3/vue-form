const categoryList = [
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
            id: '',
            title: 'その他 キッチン家電'
          }
        ]
      },
      {
        id: 12,
        title: '生活家電',
        option: [
          {
            id: 11230,
            title: '洗濯機'
          },
          {
            id: 11220,
            title: '掃除機'
          },
          {
            id: 11204,
            title: '照明・ライト'
          },
          {
            id: 11205,
            title: 'その他 生活家電'
          }
        ]
      },
      {
        id: 24,
        title: 'AV家電',
        option: [
          {
            id: 12410,
            title: '液晶テレビ'
          },
          {
            id: 12411,
            title: 'ブルーレイレコーダー'
          },
          {
            id: 12401,
            title: 'プロジェクター'
          },
          {
            id: 12402,
            title: 'その他 AV家電'
          }
        ]
      },
      {
        id: 25,
        title: '季節家電',
        option: [
          {
            id: 12410,
            title: 'エアコン'
          },
          {
            id: 12411,
            title: 'ファンヒーター'
          },
          {
            id: 12401,
            title: 'その他 季節家電'
          }
        ]
      },
      {
        id: 26,
        title: '健康・美容',
        option: [
          {
            id: 12410,
            title: 'マッサージチェア'
          },
          {
            id: 12411,
            title: '美顔器'
          },
          {
            id: 12401,
            title: '脱毛機器'
          },
          {
            id: 12401,
            title: 'エステ機器'
          },
          {
            id: 12401,
            title: 'ダイエット器具'
          },
          {
            id: 12401,
            title: 'その他 健康・美容'
          }
        ]
      },
      {
        id: 27,
        title: 'ゲーム',
        option: [
          {
            id: 12410,
            title: 'ゲーム本体'
          },
          {
            id: 12411,
            title: 'ゲームソフト'
          },
          {
            id: 12401,
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
            id: 10110,
            title: 'ギター'
          },
          {
            id: 10102,
            title: 'ベース'
          },
          {
            id: 10103,
            title: 'バイオリン'
          },
          {
            id: 10101,
            title: 'その他 弦楽器'
          }
        ]
      },
      {
        id: 51,
        title: '管楽器',
        option: [
          {
            id: 5101,
            title: 'サックス'
          },
          {
            id: 5102,
            title: 'フルート'
          },
          {
            id: 5103,
            title: 'トランペット'
          },
          {
            id: 5104,
            title: 'その他 管楽器'
          }
        ]
      },
      {
        id: 52,
        title: '鍵盤楽器',
        option: [
          {
            id: 5101,
            title: '電子ピアノ'
          },
          {
            id: 5102,
            title: 'エレクトーン'
          },
          {
            id: 5103,
            title: 'キーボード'
          },
          {
            id: 5104,
            title: 'シンセサイザー'
          },
          {
            id: 5104,
            title: 'その他 鍵盤楽器'
          }
        ]
      },
      {
        id: 54,
        title: '打楽器',
        option: [
          {
            id: 5101,
            title: 'ドラムセット'
          },
          {
            id: 5102,
            title: 'その他 打楽器'
          }
        ]
      },
      {
        id: 55,
        title: 'その他',
        option: [
          {
            id: 5101,
            title: 'ギターアンプ'
          },
          {
            id: 5102,
            title: 'エフェクター'
          },
          {
            id: 5102,
            title: 'DJ機器'
          },
          {
            id: 5102,
            title: 'DTM-DAW'
          },
          {
            id: 5102,
            title: 'サイレント楽器'
          },
          {
            id: 5102,
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
            id: 56010,
            title: 'スマホ・携帯'
          },
          {
            id: 56030,
            title: 'タブレット'
          },
          {
            id: 56050,
            title: 'プリンター'
          },
          {
            id: 56050,
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
            id: 57020,
            title: 'デジタルカメラ'
          },
          {
            id: 57010,
            title: 'ビデオカメラ'
          },
          {
            id: 57030,
            title: 'コンパクトカメラ・デジカメ'
          },
          {
            id: 57040,
            title: '一眼レフ'
          },
          {
            id: 57050,
            title: '中判カメラ'
          },
          {
            id: 57060,
            title: '大判カメラ'
          },
          {
            id: 57070,
            title: 'クラシックカメラ'
          },
          {
            id: 57900,
            title: '双眼鏡・望遠鏡'
          },
          {
            id: 57900,
            title: 'カメラレンズ'
          },
          {
            id: 57900,
            title: 'カメラ機材'
          },
          {
            id: 57900,
            title: 'その他 光学機器'
          }
        ]
      },
      {
        id: 58,
        title: 'オーディオ',
        option: [
          {
            id: 57020,
            title: 'スピーカー'
          },
          {
            id: 57010,
            title: 'アンプ'
          },
          {
            id: 57030,
            title: 'ホームシアターシステム'
          },
          {
            id: 57040,
            title: 'コンポ'
          },
          {
            id: 57050,
            title: 'ターンテーブル'
          },
          {
            id: 57060,
            title: 'LDプレーヤー'
          },
          {
            id: 57070,
            title: 'デジタルオーディオプレーヤー'
          },
          {
            id: 57900,
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
            id: 10201,
            title: 'フィギュア'
          },
          {
            id: 10202,
            title: 'ドール'
          },
          {
            id: 10203,
            title: 'ドローン'
          },
          {
            id: 10204,
            title: 'ラジコン'
          },
          {
            id: 10206,
            title: 'ミニカー・モデルカー'
          },
          {
            id: 10207,
            title: 'おもちゃ・模型'
          },
          {
            id: 10207,
            title: 'ロボット'
          }
        ]
      },
      {
        id: 3,
        title: '鉄道模型',
        option: [
          {
            id: 10303,
            title: 'Nゲージ'
          },
          {
            id: 10302,
            title: 'HOゲージ'
          },
          {
            id: 10304,
            title: 'Oゲージ'
          },
          {
            id: 10305,
            title: 'OJゲージ'
          },
          {
            id: 10306,
            title: 'OOゲージ'
          },
          {
            id: 10307,
            title: 'Sゲージ'
          },
          {
            id: 10308,
            title: 'TTゲージ'
          },
          {
            id: 10309,
            title: 'Zゲージ'
          },
          {
            id: 10301,
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
            id: 10701,
            title: 'ブランド品'
          },
          {
            id: 10702,
            title: '時計'
          }
        ]
      },
      {
        id: 35,
        title: '貴金属',
        option: [
          {
            id: 13510,
            title: 'リング'
          },
          {
            id: 13511,
            title: 'ピアス・イヤリング'
          },
          {
            id: 13512,
            title: 'ブレスレット'
          },
          {
            id: 13513,
            title: 'ネックレス'
          },
          {
            id: 13514,
            title: '金'
          },
          {
            id: 13515,
            title: 'プラチナ'
          },
          {
            id: 13516,
            title: 'ダイヤモンド'
          },
          {
            id: 13517,
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
            id: 10401,
            title: 'カーオーディオ'
          },
          {
            id: 10402,
            title: 'カーナビ'
          },
          {
            id: 10404,
            title: 'レーダー探知機'
          },
          {
            id: 10405,
            title: 'ドライブレコーダー'
          },
          {
            id: 10406,
            title: '車載カメラ'
          },
          {
            id: 10407,
            title: 'ETC車載器'
          },
          {
            id: 10408,
            title: 'カーパーツ'
          },
          {
            id: 10410,
            title: 'タイヤ・ホイール'
          },
          {
            id: 10420,
            title: 'チャイルドシート'
          }
        ]
      },
      {
        id: 5,
        title: 'バイク用品',
        option: [
          {
            id: 10501,
            title: 'ヘルメット'
          },
          {
            id: 10502,
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
            id: 11801,
            title: 'ディズニー英語システム'
          },
          {
            id: 11802,
            title: 'イングリッシュアドベンチャー'
          },
          {
            id: 11803,
            title: 'スーパーエルマー'
          },
          {
            id: 11804,
            title: 'ヒアリングマラソン'
          },
          {
            id: 11805,
            title: 'ミミテック'
          },
          {
            id: 11805,
            title: 'その他 英語教材'
          }
        ]
      },
      {
        id: 19,
        title: '幼児教材',
        option: [
          {
            id: 11801,
            title: '中央出版'
          },
          {
            id: 11802,
            title: 'いずみ書房'
          },
          {
            id: 11803,
            title: '七田式'
          },
          {
            id: 11804,
            title: 'その他 幼児教材'
          }
        ]
      },
      {
        id: 20,
        title: '自己啓発',
        option: [
          {
            id: 11801,
            title: '苫米地英人'
          },
          {
            id: 11802,
            title: 'SSI'
          },
          {
            id: 11803,
            title: 'ナポレオン・ヒル'
          },
          {
            id: 11804,
            title: 'ダイナマイトモチベーション'
          },
          {
            id: 11804,
            title: 'その他 自己啓発'
          }
        ]
      },
      {
        id: 21,
        title: '資格教材',
        option: [
          {
            id: 11801,
            title: 'フォーサイト教材'
          },
          {
            id: 11802,
            title: 'TAC教材'
          },
          {
            id: 11803,
            title: 'ユーキャン'
          },
          {
            id: 11804,
            title: 'その他 資格教材'
          }
        ]
      },
      {
        id: 22,
        title: 'その他',
        option: [
          {
            id: 11801,
            title: 'デアゴスティーニ'
          },
          {
            id: 11802,
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
            id: 1421,
            title: 'ロードバイク'
          },
          {
            id: 11452,
            title: 'クロスバイク'
          },
          {
            id: 11453,
            title: 'マウンテンバイク'
          },
          {
            id: 11437,
            title: '電動自転車'
          },
          {
            id: 11438,
            title: '折りたたみ自転車'
          },
          {
            id: 11439,
            title: 'BMX'
          },
          {
            id: 11440,
            title: 'その他 自転車'
          },
          {
            id: 1422,
            title: '自転車パーツ'
          },
          {
            id: 11460,
            title: '自転車ウェア'
          },
          {
            id: 11461,
            title: 'アクセサリ'
          }
        ]
      },
      {
        id: 15,
        title: 'ゴルフ',
        option: [
          {
            id: 11502,
            title: 'ゴルフドライバー'
          },
          {
            id: 11503,
            title: 'フェアウェイウッド'
          },
          {
            id: 11504,
            title: 'ユーティリティクラブ'
          },
          {
            id: 11505,
            title: 'アイアンセット'
          },
          {
            id: 11506,
            title: '単品アイアン・ウェッジ'
          },
          {
            id: 11507,
            title: 'パター'
          },
          {
            id: 11507,
            title: 'その他 ゴルフ用品'
          }
        ]
      },
      {
        id: 58,
        title: '釣具',
        option: [
          {
            id: 58010,
            title: '釣り竿'
          },
          {
            id: 58020,
            title: 'リール'
          },
          {
            id: 58030,
            title: '魚群探知機'
          },
          {
            id: 58040,
            title: 'その他 釣り具'
          }
        ]
      },
      {
        id: 55,
        title: 'ミリタリーグッズ',
        option: [
          {
            id: 5501,
            title: '電動ガン'
          },
          {
            id: 5510,
            title: 'エアガン'
          },
          {
            id: 5520,
            title: 'ガスガン'
          },
          {
            id: 5530,
            title: 'サバイバルグッズ'
          },
          {
            id: 5530,
            title: 'カスタムパーツ'
          },
          {
            id: 5530,
            title: 'スコープ'
          },
          {
            id: 5530,
            title: 'その他  ミリタリーグッズ'
          }
        ]
      },
      {
        id: 56,
        title: 'マリンスポーツ',
        option: [
          {
            id: 5501,
            title: 'ダイビング用品'
          },
          {
            id: 5510,
            title: 'サーフィン用品'
          },
          {
            id: 5520,
            title: 'カヌー・カヤック'
          }
        ]
      },
      {
        id: 57,
        title: 'ウィンタースポーツ',
        option: [
          {
            id: 5501,
            title: 'スキー'
          },
          {
            id: 5510,
            title: 'スノーボード'
          }
        ]
      },
      {
        id: 58,
        title: 'その他',
        option: [
          {
            id: 5501,
            title: 'その他 スポーツ'
          },
          {
            id: 5510,
            title: 'キャンプ・アウトドア用品'
          },
          {
            id: 5510,
            title: 'トレーニング・健康器具'
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: '工具・農機具・業務用機械',
    option: [
      {
        id: 29,
        title: '電動工具',
        option: [
          {
            id: 12901,
            title: '発電機'
          },
          {
            id: 12902,
            title: 'エンジン工具'
          },
          {
            id: 12903,
            title: 'ハンマードリル'
          },
          {
            id: 12904,
            title: '釘打ち機'
          },
          {
            id: 12905,
            title: '電動丸ノコ'
          },
          {
            id: 12906,
            title: 'レーザー墨出し器'
          },
          {
            id: 12907,
            title: '溶接機'
          },
          {
            id: 12907,
            title: '高圧洗浄機'
          },
          {
            id: 12907,
            title: 'その他 電動工具'
          }
        ]
      },
      {
        id: 30,
        title: '農機具',
        option: [
          {
            id: 13001,
            title: 'トラクター'
          },
          {
            id: 13002,
            title: 'コンバイン'
          },
          {
            id: 13003,
            title: '管理機'
          },
          {
            id: 13004,
            title: '耕運機'
          },
          {
            id: 13004,
            title: '播種機'
          },
          {
            id: 13004,
            title: 'その他 農機具'
          }
        ]
      },
      {
        id: 32,
        title: '建機',
        option: [
          {
            id: 13201,
            title: 'フォークリフト'
          },
          {
            id: 13202,
            title: '油圧ショベル'
          },
          {
            id: 13203,
            title: 'ユンボ'
          },
          {
            id: 13203,
            title: 'ホイルローダー'
          },
          {
            id: 13203,
            title: 'ブルドーザー'
          },
          {
            id: 13203,
            title: 'ロードローラー'
          },
          {
            id: 13203,
            title: 'ダンプ'
          },
          {
            id: 13203,
            title: 'コンプレッサ'
          },
          {
            id: 13203,
            title: 'アタッチメント'
          },
          {
            id: 13203,
            title: 'その他 建機'
          }
        ]
      },
      {
        id: 33,
        title: '業務用機械',
        option: [
          {
            id: 13302,
            title: '除雪機'
          },
          {
            id: 13303,
            title: '芝刈り機'
          },
          {
            id: 13304,
            title: 'その他 業務用機械'
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
            id: 4004,
            title: 'ソファー'
          },
          {
            id: 4005,
            title: 'テーブル'
          },
          {
            id: 4006,
            title: 'イス・チェア'
          },
          {
            id: 4007,
            title: 'タンス'
          },
          {
            id: 4008,
            title: '食器棚・キッチンボード'
          },
          {
            id: 4019,
            title: 'テレビ台・AVボード'
          },
          {
            id: 4099,
            title: 'キッチンカウンター'
          },
          {
            id: 4099,
            title: 'ドレッサー'
          },
          {
            id: 4099,
            title: '引出し・チェスト'
          },
          {
            id: 4099,
            title: 'その他 ブランド家具'
          }
        ]
      },
      {
        id: 40,
        title: '業務用機器',
        option: [
          {
            id: 4004,
            title: 'オフィスチェア'
          },
          {
            id: 4005,
            title: '業務用冷蔵庫'
          },
          {
            id: 4006,
            title: '製氷機'
          },
          {
            id: 4007,
            title: 'ショーケース'
          },
          {
            id: 4008,
            title: 'ショーケース型冷蔵庫'
          },
          {
            id: 4019,
            title: 'レジスター'
          },
          {
            id: 4099,
            title: '複合機'
          },
          {
            id: 4099,
            title: 'ビジネスフォン'
          },
          {
            id: 4099,
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
            id: 12101,
            title: 'レディースファッション'
          },
          {
            id: 12102,
            title: 'メンズファッション'
          }
        ]
      },
      {
        id: 22,
        title: '介護用品',
        option: [
          {
            id: 12101,
            title: '車椅子'
          },
          {
            id: 12102,
            title: '介護ベッド'
          },
          {
            id: 12102,
            title: 'セニアカー'
          },
          {
            id: 12102,
            title: 'その他 介護用品'
          }
        ]
      },
      {
        id: 22,
        title: 'ベビー用品',
        option: [
          {
            id: 12101,
            title: 'ベビーカー'
          },
          {
            id: 12102,
            title: 'その他 ベビー用品'
          }
        ]
      },
      {
        id: 22,
        title: '骨董品・絵画',
        option: [
          {
            id: 12101,
            title: '骨董品'
          },
          {
            id: 12102,
            title: '絵画'
          }
        ]
      }
    ]
  }
]

export default categoryList