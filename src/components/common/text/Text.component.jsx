import styles from "@/components/common/Text/Text.module.scss";

export default function Text({
    // withAnchor = false,
    type = "p",
    children = "Text",
    active = false,
}) {
    switch (type) {
        case "p":
            return (
                <p
                    className={`${styles.paragraph} ${
                        active ? styles.active : null
                    }`}
                >
                    {children}
                </p>
            );
        case "span":
            return (
                <span
                    className={`${styles.span} ${
                        active ? styles.active : null
                    }`}
                >
                    {children}
                </span>
            );
        case "h1":
            return (
                <h1 className={`${styles.h1} ${active ? styles.active : null}`}>
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2 className={`${styles.h2} ${active ? styles.active : null}`}>
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3 className={`${styles.h3} ${active ? styles.active : null}`}>
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4 className={`${styles.h4} ${active ? styles.active : null}`}>
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h5 className={`${styles.h5} ${active ? styles.active : null}`}>
                    {children}
                </h5>
            );
        case "a":
            return (
                <a className={`${styles.a} ${active ? styles.active : null}`}>
                    {children}
                </a>
            );
        default:
            return <p>Not rendered</p>;
    }
}
