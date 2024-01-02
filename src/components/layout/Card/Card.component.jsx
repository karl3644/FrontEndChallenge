import {
    cardContainer,
    cardContent,
    imgContainer,
    image,
    cardAltButton,
} from "@/components/layout/Card/Card.module.scss";
import Text from "@/components/common/Text/Text.component.jsx";
import AltButton from "@/components/common/AltButton/AltButton.component.jsx";
import testImage from "@/assets/imgs/test1920x1080jpg.jpg";

export default function Card({
    cardImgSrc = testImage,
    cardHeading,
    cardText,
}) {
    // TODO - add div to be a click handler which take 100% width and height
    return (
        <div className={cardContainer} data-testid="card">
            <div className={cardContent}>
                <div className={imgContainer}>
                    <img className={image} src={cardImgSrc} alt="cardImg" />
                    <div className={cardAltButton}>
                        <AltButton
                            data-testid="altButton"
                            size="large"
                            type="play"
                        />
                    </div>
                </div>
                <Text cardHeading>{cardHeading}</Text>
                <Text cardText>{cardText}</Text>
            </div>
        </div>
    );
}
