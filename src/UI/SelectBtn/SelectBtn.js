import React from 'react';
import style from './SelectBtn.module.scss';

const SelectBtn = ({options, defaultValue, value, onChange}) => {

    return (
        <select
            className={style.selectBtn}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option 
                    key={option.value} 
                    value={option.value} 
                >
                        {option.name}
                </option>
            )}
        </select>
    );
};

export default SelectBtn;