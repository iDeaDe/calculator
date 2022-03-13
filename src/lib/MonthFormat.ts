
const baseMonths = [
    'январ',
    'феврал',
    'март',
    'апрел',
    'ма',
    'июн',
    'июл',
    'август',
    'сентябр',
    'октябр',
    'ноябр',
    'декабр'
];

class MonthFormat {
    public static getBaseMonth(monthNum: number): string | undefined {
        const monthString = baseMonths[monthNum - 1];
        if (monthNum > 0 && monthNum < 13) {
            if (monthNum === 3) {
                return monthString;
            } else if (monthNum === 5) {
              return monthString + 'й';
            } else {
                return monthString + 'ь';
            }
        } else {
            return undefined
        }
    }

    public static getInMonth(monthNum: number): string | undefined {
        if (monthNum > 0 && monthNum < 13) {
            return baseMonths[monthNum - 1] + 'е';
        } else {
            return undefined;
        }
    }

    public static getMonth(monthNum: number): string | undefined {
        if (monthNum > 0 && monthNum < 13) {
            const baseMonth = baseMonths[monthNum - 1];

            if (monthNum === 3 || monthNum === 8) {
                return baseMonth + 'а';
            } else {
                return baseMonth + 'я';
            }
        } else {
            return undefined;
        }
    }

    public static get months() {
        let tmp = {} as Record<number, string>;
        for (let i = 1; i <= 12; ++i) {
            tmp[i] = this.getMonth(i)!;
        }

        return tmp;
    }

    public static get baseMonths() {
        let tmp = {} as Record<number, string>;
        for (let i = 1; i <= 12; ++i) {
            tmp[i] = this.getBaseMonth(i)!;
        }

        return tmp;
    }
}

export { MonthFormat };