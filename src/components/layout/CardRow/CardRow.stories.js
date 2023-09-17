import CardRow from "@/components/layout/CardRow/CardRow.component.jsx";
// import Card from "@/components/layout/Card/Card.component.jsx";

export default {
    title: "CardRow",
    component: CardRow,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
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
