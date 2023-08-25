import React, { useState } from 'react';
import Select from 'react-select';



  export default function SelectorFormPlaces(props) {
    const [selectedOption, setSelectedOption] = useState(null);
  

  return (
    <div className="selector">
      <Select
      name={'place'}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={props.options}
      />
    </div>
  );
}