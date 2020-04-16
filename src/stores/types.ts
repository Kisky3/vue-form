/**
 * 商品情報
 */
export interface ItemData extends StringKeyObject {
  images: string[]
  cat_lvl0: string | null
  cat_lvl1: string | null
  cat_lvl2: string | null
  condition: string //'中古'
  item_comment: string
  format_id?: Option | null
  opon_mode?: Option | null
  graph_length?: Option | null
  shaft_flex?: Option | null
  reshaft?: Option | null
  type?: Option | null
  parts_type?: Option | null
  manufacturer?: Option | null
  manufacturer_name?: Option | null
  remote_controller?: Option | null
  loft?: Option | null
  movable?: Option | null
  dryer?: Option | null
  model_name?: Option | null
  product_id?: Option | null
  purchase_time?: Option | null
  usable_period?: Option | null
  usable_distance?: Option | null
  usable_space?: Option | null
  bicycle_type?: Option | null
  gold_type?: Option | null
  damage?: Option | null
  title?: Option | null
  quantity?: Option | null
  manufacturing_years?: Option | null
  operation?: Option | null
  model_year?: Option | null
  case?: Option | null
  publication_year?: Option | null
  warranty?: Option | null
  capacity?: Option | null
}

export interface ImageItem {
  thumnail: string | ArrayBuffer | null
  uploadFile: File | null
  name: string
}

/*追加項目 */
export interface Option {
  value: string | number | null
  sort: number | null
  fomart_id: number | null
}

/**
 * ユーザ情報
 */
export interface UserData extends StringKeyObject {
  name?: string | null
  kana?: string | null
  phone_number?: string | null
  email?: string | null
  pref?: string | null
  city?: string | null
  address?: string | null
  stair?: string | null
  elevator?: string | null
  personal_info_confirm?: string | null
}

/**
 * Root
 */
export interface RootState {
  itemData: ItemData
  itemList: ItemData[]
  imageData: ImageItem[]
  imageList: ImageItem[]
  userData: UserData
}
