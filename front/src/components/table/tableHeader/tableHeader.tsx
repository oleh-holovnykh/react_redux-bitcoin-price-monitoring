import React from 'react';
import { SortField } from 'types/SortField';
import { TableLabel } from '../tableLabel';

interface Props {
  onSortTypeChange: (sortType: SortField) => void;
}

export const TableHeader: React.FC<Props> = ({ onSortTypeChange }) => (
  <thead>
    <tr>
      <th>
        <TableLabel
          title="Дата / Время"
          field={SortField.Time}
          onSortTypeChange={onSortTypeChange}
        />
      </th>
      <th>
        <TableLabel
          title="Цена"
          field={SortField.Price}
          onSortTypeChange={onSortTypeChange}
        />
      </th>
    </tr>
  </thead>
);
