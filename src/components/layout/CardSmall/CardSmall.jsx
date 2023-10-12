import {
    cardSmall,
    imgContainer,
    textButtonDiv,
    buttonDiv,
} from "@/components/layout/CardSmall/CardSmall.module.scss";
import Text from "@/components/common/Text/Text.component.jsx";
import testImage from "@/assets/imgs/test1920x1080jpg.jpg";
import AltButton from "@/components/common/AltButton/AltButton.component.jsx";

export default function CardSmall({
    cardText = "Default Card Text",
    cardImgSrc = testImage,
}) {
    return (
        <div className={cardSmall}>
            <div className={imgContainer}>
                <img src={cardImgSrc} alt="cardImg" />
            </div>
            <div className={textButtonDiv}>
                <Text active>{cardText}</Text>
                <div className={buttonDiv}>
                    <AltButton type="play" size="large" />
                </div>
            </div>
        </div>
    );
}
