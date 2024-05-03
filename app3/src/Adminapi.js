function getUrl() {
    // return "http://dholerasmartcities.in/shop/"
    return "http://localhost:5000/"
}

export default function ApiURL() {

    return getUrl();

}

export function getImageUrl() {
    return getUrl() + "images/";
}

// name of the cookie file to be use everywhere
export const COOKIENAME = ['dholerasmartcities'];
