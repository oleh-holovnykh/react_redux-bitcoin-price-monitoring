import { BtcRecord } from 'types/BtcRecord';
import { SortField } from 'types/SortField';

export const getSorted = (
  dataArray: BtcRecord[],
  sortType: SortField,
  isReversed: boolean,
): BtcRecord[] => {
  let sortedData = [...dataArray];

  if (sortType === SortField.Price) {
    sortedData = sortedData.sort((a, b) => a.price - b.price);
  }

  if (sortType === SortField.Time) {
    sortedData = sortedData.sort((a, b) => +a.id - +b.id);
  }

  if (isReversed) {
    sortedData = sortedData.reverse();
  }

  return sortedData;
};
