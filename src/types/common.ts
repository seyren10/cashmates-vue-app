export type WithTimestamp = {
  created_at: string
  updated_at: string
}

export type Media = WithTimestamp & {
  id: number
  model_type: string
  model_id: number
  uuid: string
  collection_name: string
  name: string
  file_name: string
  mime_type: string
  disk: string
  conversions_disk: string
  size: number
  manipulations: Array<Record<string, any>>
  custom_properties: Array<Record<string, any>>
  generated_conversions: Array<Record<string, any>>
  responsive_images: Array<Record<string, any>>
  order_column: number
  original_url: string
  preview_url: string | null
}
