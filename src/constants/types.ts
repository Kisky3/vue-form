export interface Category {
  id: number | ''
  title: string
  option?: Category[]
}

export interface FieldItem {
  category_id: number | ''
  field_name: string
  field_key: string
  type: string
  hint: string
  required: boolean
  rules: string
  options: SelectOption[] | string[]
  sort: number
  format_id: number
}

export interface CategoryValue {
  key: string
  value: {
    cat0: number | null
    cat1: number | null
    cat2: number | null
    category: string
  }
}

export interface SelectOption {
  value: string | boolean | number
  label: string
}

export interface PrefectureOption {
  prefCode: string
  prefName: string
}
