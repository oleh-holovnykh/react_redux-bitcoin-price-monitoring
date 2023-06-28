import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { actions as scanActions } from 'features/scanSlice';
import { actions as sortActions } from 'features/sortSlice';
import { actions as paginationsActions } from 'features/paginationSlice';
import { SortField } from 'types/SortField';
import '@fortawesome/fontawesome-free/css/all.css';
import { getDisplayItems } from 'helpers/getDisplayItemsHelper';
import Pagination from '@mui/material/Pagination';
import { CustomSelect } from 'components/select/customSelect';
import intervalsSelector from 'api/intervals.json';
import itemsPerPageSelector from 'api/itemsPerPage.json';
import { CurrencyTable } from 'components/table/currencyTable';
import { getNumberOfPages } from 'helpers/paginationHelpers';
import { useLoadBtc } from 'hooks/useLoadBtc';
import styles from './App.module.scss';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const { btc } = useAppSelector((state) => state.currency);
  const { sortBy, isReversed } = useAppSelector((state) => state.sort);
  const { interval } = useAppSelector((state) => state.scan);
  const { itemsPerPage, currentPage } = useAppSelector(
    (state) => state.pagination,
  );

  useLoadBtc();

  const handleIntervalChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newInterval = parseInt(event.target.value, 10);

    dispatch(scanActions.applyInterval(newInterval));
  };

  const handleSortTypeChange = (sortType: SortField) => {
    if (sortType === sortBy) {
      dispatch(sortActions.changeReverse(!isReversed));

      return;
    }

    if (sortType === SortField.Price) {
      dispatch(sortActions.changeReverse(false));
    }

    if (sortBy === SortField.None && sortType === SortField.Time) {
      dispatch(sortActions.changeReverse(true));
    }

    dispatch(sortActions.changeSortType(sortType));
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const quantity = parseInt(event.target.value, 10);

    dispatch(paginationsActions.setItemsPerPage(quantity));
  };

  const handlePageChange = (event: any, pageNumber: number) => {
    dispatch(paginationsActions.setCurrentPage(pageNumber));
  };

  const numberOfPages = getNumberOfPages(btc.length, itemsPerPage);

  const displayRecords = getDisplayItems(
    btc,
    currentPage,
    itemsPerPage,
    sortBy,
    isReversed,
  );

  return (
    <div className={styles.container}>
      <div className={styles['selects-container']}>
        <CustomSelect
          onChange={handleIntervalChange}
          values={intervalsSelector}
          controlParam={interval}
          title="Интервал сканирования"
          htmlFor="interval-select"
          name="interval"
        />
        <CustomSelect
          onChange={handleItemsPerPageChange}
          values={itemsPerPageSelector}
          controlParam={itemsPerPage}
          title="Показывать по"
          htmlFor="items-per-page"
          name="itemsPerPage"
        />
      </div>

      <CurrencyTable
        displayItems={displayRecords}
        onSortTypeChange={handleSortTypeChange}
      />

      <div className={styles.pagination}>
        {numberOfPages > 1 && (
          <Pagination
            size="small"
            count={numberOfPages}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default App;
