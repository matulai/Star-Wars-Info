import { GenericModel, Paginate } from "./";

interface PaginatedElement {
  list: GenericModel[];
  pagination: Paginate;
}

export default PaginatedElement;
