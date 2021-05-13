import jscookie from 'js-cookie';



export const removeCookie = (key) => {
    if (process.browser) {
        jscookie.remove(key, {
            expires: 1
        })
    }
}

export const setCookie = (key, value) => {
    if (process.browser) {
        jscookie.set(key, value, {
            expires: 1
        })
    }
}

