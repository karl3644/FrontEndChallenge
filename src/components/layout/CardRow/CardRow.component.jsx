import Card from "@/components/layout/Card/Card.component.jsx";
import { cardRow } from "./CardRow.module.scss";
import testImage from "@/assets/imgs/test1920x1080jpg.jpg";

export default function CardRow({
    cardArray = [
        {
            id: "1",
            cardImgSrc: "",
            cardHeading: "testHeading1",
            cardText: "testText1",
        },
        {
            id: "2",
            cardImgSrc: "",
            cardHeading: "testHeading2",
            cardText: "testText2",
        },
        {
            id: "3",
            cardImgSrc: "",
            cardHeading: "testHeading3",
            cardText: "testText3",
        },
        {
            id: "4",
            cardImgSrc: "",
            cardHeading: "testHeading4",
            cardText: "testText4",
        },
        {
            id: "5",
            cardImgSrc: "",
            cardHeading: "testHeading5",
            cardText: "testText5",
        },
        {
            id: "6",
            cardImgSrc: "",
            cardHeading: "testHeading6",
            cardText: "testText6",
        },
        {
            id: "7",
            cardImgSrc: "",
            cardHeading: "testHeading7",
            cardText: "testText7",
        },
    ],
}) {
    return (
        <div className={cardRow}>
            {cardArray?.length
                ? cardArray.map((item) => (
                      <Card
                          key={item?.id}
                          cardImgSrc={item?.cardImgSrc || testImage}
                          cardHeading={item?.cardHeading}
                          cardText={item?.cardText}
                      />
                  ))
                : "nothing"}
        </div>
    );
}
