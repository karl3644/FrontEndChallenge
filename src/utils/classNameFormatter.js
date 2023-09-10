/**
 *
 * @param {...*} var_args string or array of strings
 * @returns string of active classnames space separated
 *
 * takes string or array of strings and returns string of active classnames space separated
 */
export function classNameFormatter(...args) {
    const toJoin = [];
    args.forEach((item) => {
        if (typeof item === "string") {
            toJoin.push(item);
        } else if (Array.isArray(item)) {
            const inside = item.filter(
                (item) => ![undefined, null].includes(item),
            );
            toJoin.push(...inside);
        }
    });
    return toJoin.join(" ");
}
