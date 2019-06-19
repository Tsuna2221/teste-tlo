import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

const setCookie = (name, data, minutes) => Cookies.set(name, data, { expires: (1 / 1440) * minutes })

const getCookie = (name) => Cookies.get(name)

const removeCookie = (name) => Cookies.remove(name)

const decodeCookie = (name) => jwt.decode(getCookie(name))

export { setCookie, getCookie, decodeCookie, removeCookie }