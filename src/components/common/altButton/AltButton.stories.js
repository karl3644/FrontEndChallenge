import AltButton from "@/components/common/altButton/AltButton.component.jsx";

export default {
    title: "AltButton",
    component: AltButton,
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

export const NavLeft = {
    args: {
        type: "navLeft",
        disabled: true,
    },
    parameters: {},
};
export const NavRight = {
    args: {
        type: "navRight",
    },
    parameters: {},
};
export const Add = {
    args: {
        type: "add",
    },
    parameters: {},
};
export const Play = {
    args: {
        type: "play",
    },
    parameters: {},
};
