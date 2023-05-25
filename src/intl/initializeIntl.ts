import intl from 'react-intl-universal'
import en from '../locale/en/common.json'
import fl from '../locale/fl/common.json'

const LOCALE_LIST = [
    {
        label: 'en',
        value: 'en'
    },
    {
        label: 'fl',
        value: 'fl'
    }
]

const LOCALE_DATA = {
    'en':en,
    'fl':fl
}

function setCurrentLocale (currentLocale:string) {
    intl.init({
        currentLocale,
        locales:LOCALE_DATA
    })
}
export function initializeIntl () {
    let currentLocale = intl.determineLocale({
        urlLocaleKey: 'lang',
        cookieLocaleKey: 'lang'
    });

    if(!LOCALE_LIST.some(item => item.value === currentLocale)) {
        currentLocale = LOCALE_LIST[1].value
    }
    setCurrentLocale(currentLocale)
}