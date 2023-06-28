import React from 'react';

interface Props {
  optionValue: number;
  optionTitle: string;
}

export const SelectOption: React.FC<Props> = ({
  optionValue,
  optionTitle,
}) => (
  <option
    value={optionValue}
  >
    {optionTitle}
  </option>
);
