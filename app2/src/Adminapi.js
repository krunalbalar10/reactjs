function getUrl() {
    return "http://dholerasmartcities.in/shop/"
}

export default function ApiURL() {

    return getUrl() + 'ws/';

}

export function getImageUrl() {
    return getUrl() + "images/";
}

// name of the cookie file to be use everywhere
export const COOKIENAME = ['dholerasmartcities'];
