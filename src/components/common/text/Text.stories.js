import Text from "@/components/common/text/Text.component.jsx";
import "@/App.scss";

export default {
    title: "Text",
    component: Text,
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
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Paragraph = {
    args: {
        type: "p",
        children: "This is a paragraph",
        active: true,
        cardHeading: false,
        cardText: false,
    },
};
export const Span = {
    args: {
        type: "span",
        children: "This is a span",
        active: false,
        cardHeading: true,
        cardText: false,
    },
};
export const h1 = {
    args: {
        type: "h1",
        children: "This is a h1",
        active: false,
        cardHeading: false,
        cardText: false,
    },
};
export const h2 = {
    args: {
        type: "h2",
        children: "This is a h2",
        active: false,
        cardHeading: false,
        cardText: false,
    },
};
export const h3 = {
    args: {
        type: "h3",
        children: "This is a h3",
        active: false,
        cardHeading: false,
        cardText: false,
    },
};
export const h4 = {
    args: {
        type: "h4",
        children: "This is a h4",
        active: false,
        cardHeading: false,
        cardText: false,
    },
};
export const h5 = {
    args: {
        type: "h5",
        children: "This is a h5",
        active: false,
        cardHeading: false,
        cardText: false,
    },
};
export const a = {
    args: {
        type: "a",
        children: "This is a a",
        active: false,
        cardHeading: false,
        cardText: false,
    },
};
