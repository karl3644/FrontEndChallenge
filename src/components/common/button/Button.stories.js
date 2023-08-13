import Button from "@/components/common/button/Button.component.jsx";

export default {
    title: "Button",
    component: Button,
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

export const Primary = {
    args: {
        label: "Primary",
    },
    parameters: {},
};
export const Secondary = {
    args: {
        label: "Secondary",
        type: "secondary",
    },
    parameters: {},
};
export const Tertiary = {
    args: {
        label: "Tertiary",
        type: "tertiary",
    },
    parameters: {},
};
export const Large = {
    args: {
        size: "large",
        label: "Button",
    },
};

export const Small = {
    args: {
        size: "small",
        label: "Button",
    },
};
