import Button from "@/components/common/button/Button.component.jsx";

export default {
    title: "Button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
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
};
