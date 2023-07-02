import { SelectorValue } from 'types/SelectorValue';
import { SelectOption } from 'components/Select/SelectOption';
import styles from './сustomSelect.module.scss';

interface Props {
  title: string;
  values: SelectorValue[];
  controlParam: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  htmlFor: string;
  name: string;
}

export const CustomSelect: React.FC<Props> = ({
  title,
  values,
  controlParam,
  onChange,
  htmlFor,
  name,
}) => (
  <div>
    <label
      className={styles['select-tile']}
      htmlFor={htmlFor}
    >
      {title}
    </label>
    <select
      name={name}
      id={htmlFor}
      onChange={onChange}
      value={controlParam}
    >
      {values.map((el) => (
        <SelectOption
          key={el.id}
          optionTitle={el.title}
          optionValue={el.value}
        />
      ))}
    </select>
  </div>
);
