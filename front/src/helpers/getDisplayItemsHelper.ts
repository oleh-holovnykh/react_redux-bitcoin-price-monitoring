import { BtcRecord } from 'types/BtcRecord';
import { SortField } from 'types/SortField';
import { getPaginated } from './paginationHelpers';
import { getSorted } from './sortHelper';

export const getDisplayItems = (
  data: BtcRecord[],
  currentPage: number,
  itemsPerPage: number,
  sortBy: SortField,
  isReversed: boolean,
) => {
  const sortedData = getSorted(data, sortBy, isReversed);
  const sortedAndPaginatedData = getPaginated(sortedData, currentPage, itemsPerPage);

  return sortedAndPaginatedData;
};
