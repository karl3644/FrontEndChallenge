import Button from "@/components/common/button/Button.component.jsx";

export default {
    title: "Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
        backgrounds: {
            // default: "grey",
            values: [{ name: "grey", value: "rgb(100,100,100)" }],
        },
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Primary = {
    args: {
        primary: true,
        text: "Button",
    },
    parameters: {
        backgrounds: { default: "grey" },
    },
};
export const Secondary = {
    args: {
        label: "Button",
    },
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
