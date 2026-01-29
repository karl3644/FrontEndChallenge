import PropTypes from "prop-types";
import styles from "@/components/common/altButton/AltButton.module.scss";

import { ReactComponent as Left } from "@/assets/svg/chevron_left_white_18dp.svg";
import { ReactComponent as Right } from "@/assets/svg/chevron_right_white_18dp.svg";
import { ReactComponent as Add } from "@/assets/svg/add.svg";
import { ReactComponent as PlayArrow } from "@/assets/svg/playArrow.svg";

// function ButtonType({ type }) {
//     if (type === "navLeft") {
//         return <Left />;
//     }
//     if (type === "navRight") {
//         return <Right />;
//     }
//     if (type === "add") {
//         return <Add />;
//     }
//     if (type === "play") {
//         return <PlayArrow />;
//     }
//     return "";
// }

export default function AltButton({
    buttonStyle,
    onClick = (e) => {
        console.log(e);
    },
    size = "medium",
    type = "navLeft",
    disabled = false,
}) {
    return (
        <button
            data-testid="altButton"
            type="button"
            style={buttonStyle}
            className={`${styles[type]} ${styles[size]} ${
                disabled ? styles.disabled : null
            }`}
            onClick={!disabled ? onClick : null}
        >
            {type === "navLeft" ? (
                <Left data-testid="navLeft" />
            ) : type === "navRight" ? (
                <Right data-testid="navRight" />
            ) : type === "add" ? (
                <Add data-testid="add" />
            ) : type === "play" ? (
                <PlayArrow data-testid="play" />
            ) : (
                "Icon"
            )}
            {/* <ButtonType type={type} /> */}
        </button>
    );
}

AltButton.propTypes = {
    /**
     * Style overrides for the button element
     */
    style: PropTypes.string,
    /**
     * Which button type?
     */
    type: PropTypes.oneOf(["navLeft", "navRight", "add", "play"]),
    /**
     * Size
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Button contents
     */
    disabled: PropTypes.bool,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};
