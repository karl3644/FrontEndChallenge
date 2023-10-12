import CardSmall from "@/components/layout/CardSmall/CardSmall.jsx";
import testImage from "@/assets/imgs/test1920x1080jpg.jpg";

export default {
    title: "CardSmall",
    component: CardSmall,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
        backgrounds: {
            default: "spotifyDark",
            values: [
                { name: "grey", value: "rgb(100,100,100)" },
                { name: "spotifyDark", value: "rgb(18,18,18)" },
            ],
        },
    },
    tags: ["autodocs"],
};

export const Default = {
    args: {
        cardText: "Periphery - Reptile",
        cardImgSrc: testImage,
    },
};
