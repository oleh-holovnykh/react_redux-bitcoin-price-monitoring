interface Props {
  date: string;
  time: string;
  price: string;
}

export const TableItem: React.FC<Props> = ({ date, time, price }) => (
  <tr>
    <td>{`${date} / ${time}`}</td>
    <td>{price}</td>
  </tr>
);
