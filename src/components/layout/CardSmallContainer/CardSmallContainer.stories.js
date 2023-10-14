import CardSmallContainer from "@/components/layout/CardSmallContainer/CardSmallContainer.jsx";

export default {
    title: "CardSmallContainer",
    component: CardSmallContainer,
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
    args: {},
};
