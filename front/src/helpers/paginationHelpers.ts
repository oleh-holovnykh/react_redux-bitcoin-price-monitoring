import { BtcRecord } from 'types/BtcRecord';

export const getPaginated = (
  data: BtcRecord[],
  currentPage: number,
  itemsPerPage: number,
) => {
  const firstElement = itemsPerPage * (currentPage - 1);
  const lastElement = firstElement + itemsPerPage;

  const paginatedData = data.slice(firstElement, lastElement);

  return paginatedData;
};

export const getNumberOfPages = (total: number, numberPerPage: number) => (
  Math.ceil(total / numberPerPage)
);
