import PropTypes from "prop-types";
import styles from "@/components/common/Button/Button.module.scss";
import { ReactComponent as Add } from "@/assets/svg/add.svg";

export default function Button({
    buttonStyle,
    onClick = (e) => {
        console.log(e);
    },
    label = "Button",
    size = "medium",
    type = "primary",
    // withSvg = false,
    svg = false,
}) {
    return (
        <button
            data-testid="button"
            type="button"
            style={buttonStyle}
            className={`${styles.button} ${styles[size]} ${styles[type]}`}
            onClick={onClick}
        >
            <span className={`${styles.buttonText}`}>
                {svg ? <Add data-testid="svg" /> : null}
                {label}
            </span>
        </button>
    );
}

Button.propTypes = {
    /**
     * Style overrides for the button element
     */
    style: PropTypes.string,
    /**
     * Which button type?
     */
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};
