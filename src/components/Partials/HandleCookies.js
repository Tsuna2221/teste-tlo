import Cookies from 'js-cookie'

const setCookie = (name, data, minutes) => Cookies.set(name, data, { expires: (1 / 1440) * minutes })

const getCookie = (name) => Cookies.get(name)

export { setCookie, getCookie }