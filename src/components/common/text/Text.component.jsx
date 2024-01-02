import styles from "@/components/common/Text/Text.module.scss";
import { classNameFormatter } from "@/utils/classNameFormatter.js";

export default function Text({
    // withAnchor = false,
    type = "p",
    children = "Text",
    active = false,
    cardHeading = false,
    cardText = false,
}) {
    const classes = [
        styles[type],
        active ? `${styles.active}` : null,
        cardHeading ? styles.cardHeading : null,
        cardText ? styles.cardText : null,
    ];

    switch (type) {
        case "p":
            return (
                <p
                    data-testid="default"
                    className={classNameFormatter(...classes)}
                >
                    {children}
                </p>
            );
        case "span":
            return (
                <span
                    data-testid="span"
                    className={classNameFormatter(...classes)}
                >
                    {children}
                </span>
            );
        case "h1":
            return (
                <h1 data-testid="h1" className={classNameFormatter(...classes)}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 data-testid="h2" className={classNameFormatter(...classes)}>
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3 data-testid="h3" className={classNameFormatter(...classes)}>
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4 data-testid="h4" className={classNameFormatter(...classes)}>
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5 data-testid="h5" className={classNameFormatter(...classes)}>
                    {children}
                </h5>
            );
        case "a":
            return (
                <a data-testid="a" className={classNameFormatter(...classes)}>
                    {children}
                </a>
            );
        default:
            return <p data-testid="notRendered">Not rendered</p>;
    }
}
