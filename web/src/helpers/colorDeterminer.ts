const DAILY: string = 'daily';
const WEEKLY: string = 'weekly';
const MONTHLY: string = 'monthly';


interface ThemeObject {
        decorationColor: string,
        bg: {
            light: string
        }
}


const getColorTheme = (type: string): ThemeObject => {
    switch (type) {
        case DAILY:
            return { decorationColor: 'decoration-emerald-300', bg: { light: 'bg-emerald-300'} }
        case WEEKLY:
            return { decorationColor: 'decoration-violet-300', bg: { light: 'bg-violet-300'}}
        default:
            return { decorationColor: 'decoration-blue-300', bg: { light: 'bg-blue-300'}}
    }
}

export { getColorTheme, DAILY, WEEKLY, MONTHLY };
