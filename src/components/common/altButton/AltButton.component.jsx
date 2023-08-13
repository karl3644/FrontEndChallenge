import PropTypes from "prop-types";
import "@/components/common/altButton/AltButton.scss";

import { ReactComponent as Left } from "@/assets/svg/chevron_left_white_18dp.svg";
import { ReactComponent as Right } from "@/assets/svg/chevron_right_white_18dp.svg";

function ButtonType({ type }) {
    if (type === "navLeft") {
        return <Left />;
    }
    if (type === "navRight") {
        return <Right />;
    }
}

export default function AltButton({
    buttonStyle,
    onClick = (e) => {
        console.log(e);
    },
    type = "navLeft",
}) {
    return (
        <button
            type="button"
            style={buttonStyle}
            className={`${type}Button`}
            onClick={onClick}
        >
            {type === "navLeft" ? (
                <Left />
            ) : type === "navRight" ? (
                <Right />
            ) : (
                "Icon"
            )}
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
     * Button contents
     */
    symbol: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};
