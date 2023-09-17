import Card from "@/components/layout/Card/Card.component.jsx";
import { cardRow } from "./CardRow.module.scss";
import testImage from "@/assets/imgs/test1920x1080jpg.jpg";

export default function CardRow({
    cardArray = [
        { cardImgSrc: "", cardHeading: "testHeading1", cardText: "testText1" },
        { cardImgSrc: "", cardHeading: "testHeading2", cardText: "testText2" },
        { cardImgSrc: "", cardHeading: "testHeading3", cardText: "testText3" },
        { cardImgSrc: "", cardHeading: "testHeading4", cardText: "testText4" },
        { cardImgSrc: "", cardHeading: "testHeading5", cardText: "testText5" },
        { cardImgSrc: "", cardHeading: "testHeading6", cardText: "testText6" },
        { cardImgSrc: "", cardHeading: "testHeading7", cardText: "testText7" },
    ],
}) {
    return (
        <div className={cardRow}>
            {cardArray?.length
                ? cardArray.map((item) => (
                      <Card
                          cardImgSrc={item.cardImgSrc || testImage}
                          cardHeading={item.cardHeading}
                          cardText={item.cardText}
                      />
                  ))
                : "nothing"}
        </div>
    );
}
