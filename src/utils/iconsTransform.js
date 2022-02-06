import { createElement  } from "react";
import { 
    FaWindows, 
    FaPlaystation, 
    FaXbox, 
    FaApple,
    FaLinux,
    FaNeos
} from 'react-icons/fa';

export const iconsTransform = (icons_obj) => {

    const platforms = {
        'PC': FaWindows,
        'PlayStation': FaPlaystation,
        'Xbox': FaXbox,
        'Mac': FaApple,
        'Linux': FaLinux,
        'Nintendo': FaNeos,
    };

    let showIconsSpeciality = (nameIcon, i) => { 
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

    let game_platforms = [];
    
    icons_obj.forEach(platform => {
        let parent_platforms_arr = [];
        parent_platforms_arr.push(platform.platform.name);
        Object.keys(platforms).forEach(platform => {
            if (parent_platforms_arr.indexOf(platform) !== -1) {
                game_platforms.push(platforms[platform])
            }
        })
    })

    return game_platforms.map(showIconsSpeciality)
}