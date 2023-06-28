import { BtcRecord } from 'types/BtcRecord';
import { TableItem } from '../tableItem';

interface Props {
  displayItems: BtcRecord[];
}

export const TableList: React.FC<Props> = ({ displayItems }) => (
  <tbody>
    {displayItems.map((record) => {
      const normalizedPrice = `$${record.price.toFixed(2)}`;
      const key = record.date + record.time;

      return (
        <TableItem
          key={key}
          date={record.date}
          time={record.time}
          price={normalizedPrice}
        />
      );
    })}
  </tbody>
);
