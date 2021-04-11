import Cookies from 'js-cookie'

//const SupportKey = 'supportKey';

export function setCookie(key, value, expires) {
    return Cookies.set(key, value, {expires: expires})
}

export function getCookie(key) {
    return Cookies.get(key)
}