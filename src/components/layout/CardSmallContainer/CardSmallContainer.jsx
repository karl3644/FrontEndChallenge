import { cardSmallContainer } from "@/components/layout/CardSmallContainer/CardSmallContainer.module.scss";
import CardSmall from "@/components/layout/CardSmall/CardSmall.jsx";

export default function CardSmallContainer({
    content = [
        { cardText: "one" },
        { cardText: "two" },
        { cardText: "three" },
        { cardText: "four" },
        { cardText: "five" },
        { cardText: "six" },
        // { cardText: "seven" },
        // { cardText: "eight" },
    ],
}) {
    return (
        <div className={cardSmallContainer}>
            {content?.map((item) => {
                return (
                    <CardSmall key={item?.cardText} cardText={item?.cardText} />
                );
            })}
        </div>
    );
}
