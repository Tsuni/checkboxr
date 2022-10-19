const DAILY: string = 'daily';
const WEEKLY: string = 'weekly';
const MONTHLY: string = 'monthly';


const colorDeterminer = (type: string) => {
    switch (type) {
        case DAILY:
            return 'emerald'
        case WEEKLY:
            return 'violet'
        default:
            return 'blue'
    }
}

export { colorDeterminer, DAILY, WEEKLY, MONTHLY };
