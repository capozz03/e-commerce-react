import { createElement  } from "react";

export let showIconsSpeciality = (nameIcon, i) => { 
    return createElement(
    'span',
    { key: i },
    createElement(nameIcon, {
        name: nameIcon,
        style: {
            display: 'inline-block',
            width: '13px',
            height: '13px',
            marginRight: '5px'
        }
    })
  );           
}