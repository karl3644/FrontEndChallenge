import styles from "@/components/common/text/Text.module.scss";

export default function Text({
    // withAnchor = false,
    type = "p",
    children = "Text",
}) {
    switch (type) {
        case "p":
            return <p className={`${styles.paragraph}`}>{children}</p>;
        case "span":
            return <span className={`${styles.span}`}>{children}</span>;
        case "h1":
            return <h1 className={`${styles.h1}`}>{children}</h1>;
        case "h2":
            return <h2 className={`${styles.h2}`}>{children}</h2>;
        case "h3":
            return <h3 className={`${styles.h3}`}>{children}</h3>;
        case "h4":
            return <h4 className={`${styles.h4}`}>{children}</h4>;
        case "h5":
            return <h5 className={`${styles.h5}`}>{children}</h5>;
        case "a":
            return <a className={`${styles.a}`}>{children}</a>;
        default:
            return <p>Not rendered</p>;
    }
}
