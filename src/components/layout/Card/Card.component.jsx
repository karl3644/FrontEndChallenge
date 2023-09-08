import styles from "@/components/layout/Card/Card.module.scss";
import Text from "@/components/common/Text/Text.component.jsx";

export default function Card({
    cardImgSrc = "https://via.placeholder.com/150",
    cardHeading,
    cardText,
}) {
    // add div to be a click handler which take 100% width and height
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <img src={cardImgSrc} alt="cardImg" />
                <Text cardHeading>{cardHeading}</Text>
                <Text cardText>{cardText}</Text>
            </div>
        </div>
    );
}
