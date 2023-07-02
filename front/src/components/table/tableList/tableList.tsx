import { BtcRecord } from 'types/BtcRecord';
import { TableItem } from 'components/Table/TableItem';

interface Props {
  displayItems: BtcRecord[];
}

export const TableList: React.FC<Props> = ({ displayItems }) => (
  <tbody>
    {
      displayItems.map(({
        id, date, time, price,
      }) => {
        const normalizedPrice = `$${price.toFixed(2)}`;

        return (
          <TableItem
            key={id}
            date={date}
            time={time}
            price={normalizedPrice}
          />
        );
      })
    }
  </tbody>
);
