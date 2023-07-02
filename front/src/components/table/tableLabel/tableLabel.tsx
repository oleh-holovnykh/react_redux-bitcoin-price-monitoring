import { useAppSelector } from 'app/hooks';
import { SortButton } from 'components/Table/SortButton';
import React from 'react';
import { SortField } from 'types/SortField';
import styles from './tableLabel.module.scss';

interface Props {
  title: string;
  field: SortField;
  onSortTypeChange: (sortType: SortField) => void;
}

export const TableLabel: React.FC<Props> = ({
  title,
  field,
  onSortTypeChange,
}) => {
  const { sortBy, isReversed } = useAppSelector((state) => state.sort);

  return (
    <>
      <span className={styles.title}>{title}</span>
      <SortButton
        onSortChange={onSortTypeChange}
        activeSort={sortBy}
        field={field}
        isReversed={isReversed}
      />
    </>
  );
};
