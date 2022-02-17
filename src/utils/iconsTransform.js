import { 
    FaWindows, 
    FaPlaystation, 
    FaXbox, 
    FaApple,
    FaLinux,
    FaNeos,
    FaSteam,
    FaGooglePlay,
    FaItchIo
} from 'react-icons/fa';
import { SiEpicgames } from 'react-icons/si';
import { showIconsSpeciality } from './showsIconsSpeciality';

export const iconsTransform = (icons_obj) => {

    const platforms = {
        1: FaWindows,
        2: FaPlaystation,
        3: FaXbox,
        4: FaApple,
        5: FaLinux,
        6: FaNeos,
    };

    let game_platforms = [];

    let iconsID = icons_obj.map(icon => icon.platform.id);
    
    Object.keys(platforms).forEach(platform => {
        if (iconsID.indexOf(Number(platform)) !== -1) {
            game_platforms.push(platforms[platform])
        }
    })

    return game_platforms.map(showIconsSpeciality)
}

export const iconsStoresTransform = (store_id) => {

    const platforms = {
        1: FaSteam,
        2: FaPlaystation,
        3: FaXbox,
        4: FaApple,
        5: FaLinux,
        6: FaNeos,
        7: FaXbox,
        8: FaGooglePlay,
        9: FaItchIo,
        11: SiEpicgames,
    };

    const platformsStores = {
        1: "Steam",
        2: "PlayStation",
        3: "Xbox Store",
        4: "Apple Store",
        5: "GOG",
        6: "Nintendo",
        7: "Xbox 360 Store",
        8: "Google Play",
        9: "itch.io",
        11: "Epic Games"
    };

    let game_platforms = [];
    let obj = {};
    
    Object.keys(platforms).forEach(platform => {
        if (store_id === Number(platform)) {
            obj['name'] = platformsStores[store_id];
            obj['icon'] = platforms[store_id];
            game_platforms.push(obj)
        }
    })

    return game_platforms
}