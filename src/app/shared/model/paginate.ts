interface Paginate {
  totalPages: number,
  actualPage: number,
  hasNext: boolean,
  hasPrev: boolean,
  size: number,
}

export default Paginate;
