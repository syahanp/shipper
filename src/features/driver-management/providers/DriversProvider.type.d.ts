export interface DriversState {
  inputValue: string;
  currentPage: number;
  totalPage: number;
  drivers: any[],
  isLoading: boolean
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export interface DriversFunc {
  handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextPage: () => void;
  prevPage: () => void;
}
