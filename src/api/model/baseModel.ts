export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T extends any> {
  items: T[];
  total: number;
}

export interface PaginationResult {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
