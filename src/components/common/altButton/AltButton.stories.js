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
        disabled: false,
    },
};
export const NavRight = {
    args: {
        type: "navRight",
        disabled: false,
    },
};
export const Add = {
    args: {
        type: "add",
        disabled: false,
    },
};
export const Play = {
    args: {
        type: "play",
        disabled: false,
    },
};
export const Disabled = {
    args: {
        type: "navRight",
        disabled: true,
    },
};
