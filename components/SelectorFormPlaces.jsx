import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'solo thai massage', label: 'solo thai massage' },
    { value: 'medical massage', label: 'medical massage' },
    { value: 'tantra exprience', label: 'tantra exprience' },
  ];

  export default function SelectorFormPlaces() {
    const [selectedOption, setSelectedOption] = useState(null);
  

  return (
    <div className="Selector">
      <Select
      name={'place'}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}