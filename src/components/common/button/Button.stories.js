import Button from "@/components/common/button/Button.component.jsx";
import { ReactComponent as Add } from "@/assets/svg/add.svg";

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
        type: "primary",
        withSvg: false,
    },
};
export const Secondary = {
    args: {
        label: "Secondary",
        type: "secondary",
        withSvg: false,
    },
};
export const Tertiary = {
    args: {
        label: "Tertiary",
        type: "tertiary",
        withSvg: false,
    },
};
export const Large = {
    args: {
        size: "large",
        label: "Large",
        withSvg: false,
    },
};

export const Small = {
    args: {
        size: "small",
        label: "Small",
        type: "primary",
        withSvg: false,
    },
};
export const WithSvg = {
    args: {
        size: "small",
        label: "Small",
        type: "secondary",
        withSvg: true,
        // svg: <Add />,
    },
};
