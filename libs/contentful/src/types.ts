export interface ContentfulItem<T> {
  sys: object;
  fields: T;
}

export interface ContentfulListResponse<T> {
  items: ContentfulItem<T>[];
}
