import React from 'react';
import { SortField } from 'types/SortField';
import { BtcRecord } from 'types/BtcRecord';
import { TableHeader } from '../tableHeader';
import { TableList } from '../tableList';
import 'bootstrap/dist/css/bootstrap.css';

interface Props {
  displayItems: BtcRecord[];
  onSortTypeChange: (sortType: SortField) => void;
}

export const CurrencyTable: React.FC<Props> = ({
  displayItems,
  onSortTypeChange,
}) => (
  <table className='table'>
    <TableHeader
      onSortTypeChange={onSortTypeChange}
    />
    <TableList
      displayItems={displayItems}
    />
  </table>
);
