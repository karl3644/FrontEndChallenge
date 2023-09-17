import {
    cardContainer,
    cardContent,
} from "@/components/layout/Card/Card.module.scss";
import Text from "@/components/common/Text/Text.component.jsx";
import testImage from "@/assets/imgs/test1920x1080jpg.jpg";

export default function Card({
    cardImgSrc = testImage,
    cardHeading,
    cardText,
}) {
    // add div to be a click handler which take 100% width and height
    return (
        <div className={cardContainer}>
            <div className={cardContent}>
                <div className="imgContainer">
                    <img src={cardImgSrc} alt="cardImg" />
                </div>
                <Text cardHeading>{cardHeading}</Text>
                <Text cardText>{cardText}</Text>
            </div>
        </div>
    );
}
