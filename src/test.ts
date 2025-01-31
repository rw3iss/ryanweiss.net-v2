export interface User {
    id: number;
    name: string;
    activatedOn: Date;
    deactivatedOn: Date | null;
    customerId: number;
}

export interface Subscription {
    id: number;
    customerId: number;
    monthlyPriceInCents: number;
}

/**
 * Computes the monthly charge for a given subscription.
 *
 * @returns The total monthly bill for the customer in cents, rounded
 * to the nearest cent. For example, a bill of $20.00 should return 2000.
 * If there are no active users or the subscription is null, returns 0.
 *
 * @param month - Always present
 *   Has the following structure:
 *   "2022-04"  // April 2022 in YYYY-MM format
 *
 * @param subscription - May be null
 *   If present, has the following structure (see Subscription interface):
 *   {
 *     'id': 763,
 *     'customerId': 328,
 *     'monthlyPriceInCents': 359  // price per active user per month
 *   }
 *
 * @param users - May be empty, but not null
 *   Has the following structure (see User interface):
 *   [
 *     {
 *       id: 1,
 *       name: "Employee #1",
 *       customerId: 1,
 *
 *       // when this user started
 *       activatedOn: new Date("2021-11-04"),
 *
 *       // last day to bill for user
 *       // should bill up to and including this date
 *       // since user had some access on this date
 *       deactivatedOn: new Date("2022-04-10")
 *     },
 *     {
 *       id: 2,
 *       name: "Employee #2",
 *       customerId: 1,
 *
 *       // when this user started
 *       activatedOn: new Date("2021-12-04"),
 *
 *       // hasn't been deactivated yet
 *       deactivatedOn: null
 *     },
 *   ]
 */
export function monthlyCharge(yearMonth: string, subscription: Subscription | null, users: User[]): number {
    // convert yearMonth to Date at first day, and calculate total days in the month
    const md = new Date(`${yearMonth}-01T00:00:00`);
    const fd = firstDayOfMonth(md), ld = lastDayOfMonth(md);
    const daysInMonth = datediff(fd, ld);
    let billTotal = 0; // running total

    if (subscription) {
        const dayRateInCents = subscription.monthlyPriceInCents / daysInMonth;
        const activeUsersPerDay: Array<number> = []; // running count of active users for each day of this month
        console.log(`d`, daysInMonth, dayRateInCents)

        // iterate through each day of month until it's end, checking for any active users per day
        let cd = new Date(fd);
        let i = 0;
        while (cd < ld) {
            console.log(`${i++}`)
            let dau = 0; // daily active users;
            users.forEach(u => {
                // consider a user active if this day falls within their activation dates
                if ((u.activatedOn <= cd) &&
                    (u.deactivatedOn == null || u.deactivatedOn >= cd))
                    dau++;
            });

            // this day is finished, continue to next and add this day's total to the monthly list
            cd = nextDay(cd);
            activeUsersPerDay.push(dau);
        }

        // sum the total
        activeUsersPerDay.forEach(aud => billTotal += (aud * dayRateInCents));
    }
    // parse yearMonth to a Date, get first and last day of that month.
    // foeach nextDate until last day of month:
    //

    return Math.round(billTotal);
}

// did quick google for this function to: https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates
function datediff(first: Date, second: Date) {
    return Math.round((second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24));
}

function firstDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}
function lastDayOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}
function nextDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
}



const users = [
    {
        id: 1,
        name: 'Employee #1',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
    {
        id: 2,
        name: 'Employee #2',
        activatedOn: new Date('2019-01-01'),
        deactivatedOn: null,
        customerId: 1,
    },
];

const plan = {
    id: 1,
    customerId: 1,
    monthlyPriceInCents: 5000,
};

console.log(`Test:`)
console.log(monthlyCharge('2019-01', plan, users));
