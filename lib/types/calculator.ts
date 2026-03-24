export type CategoryId =
  | 'tax'
  | 'salary'
  | 'credit'
  | 'deposit'
  | 'currency'
  | 'auto'
  | 'utilities'
  | 'realestate'
  | 'business'
  | 'health'
  | 'education'
  | 'religion'
  | 'tools'
  | 'unique'

export interface CalculatorMeta {
  slug: string
  titleRu: string
  titleUz: string
  descriptionRu: string
  descriptionUz: string
  category: CategoryId
  icon: string // lucide icon name
  keywords: string[] // SEO keywords
  priority: number // 1-3, 1 = highest
}

export interface Category {
  id: CategoryId
  nameRu: string
  nameUz: string
  icon: string
  color: string // tailwind bg color
  iconColor: string // tailwind text color
}
