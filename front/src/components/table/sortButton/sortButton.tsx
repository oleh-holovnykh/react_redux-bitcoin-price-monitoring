import { SortField } from 'types/SortField';
import cn from 'classnames';
import '@fortawesome/fontawesome-free/css/all.css';
import styles from './sortButton.module.scss';

interface Props {
  onSortChange: (sortType: SortField) => void;
  activeSort: SortField;
  field: SortField;
  isReversed: boolean;
}

export const SortButton: React.FC<Props> = ({
  onSortChange,
  activeSort,
  field,
  isReversed,
}) => (
  <a
    href="#sort"
    className="icon"
    onClick={() => {
      onSortChange(field);
    }}
  >
    <i
      className={cn('fas', styles.icon, {
        'fa-sort': activeSort !== field,
        'fa-sort-up': activeSort === field && !isReversed,
        'fa-sort-down': activeSort === field && isReversed,
      })}
    />
  </a>
);
