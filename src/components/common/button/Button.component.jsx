import PropTypes from "prop-types";
import styles from "@/components/common/button/Button.module.scss";

export default function Button({
    buttonStyle,
    onClick = (e) => {
        console.log(e);
    },
    label = "Button",
    size = "medium",
    type = "primary",
}) {
    return (
        <button
            type="button"
            style={buttonStyle}
            className={`${styles.button} ${styles[size]} ${styles[type]}`}
            onClick={onClick}
        >
            <span className={`${styles.buttonText}`}>{label}</span>
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
