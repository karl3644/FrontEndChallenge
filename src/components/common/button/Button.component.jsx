import PropTypes from "prop-types";
import "@/components/common/button/Button.scss";

export default function Button({
    backgroundColor,
    text = "Default",
    onClick = (e) => {
        console.log(e);
    },
    size = "medium",
    type = "primary",
}) {
    return (
        <button
            type="button"
            style={backgroundColor && { backgroundColor }}
            className={`button ${size} ${type}`}
            onClick={onClick}
        >
            <span className="buttonText">{text}</span>
        </button>
    );
}

// Button.propTypes = {
//     /**
//      * Is this the principal call to action on the page?
//      */
//     primary: PropTypes.bool,
//     /**
//      * What background color to use
//      */
//     backgroundColor: PropTypes.string,
//     /**
//      * How large should the button be?
//      */
//     size: PropTypes.oneOf(["small", "medium", "large"]),
//     /**
//      * Button contents
//      */
//     label: PropTypes.string.isRequired,
//     /**
//      * Optional click handler
//      */
//     onClick: PropTypes.func,
// };

// Button.defaultProps = {
//     backgroundColor: null,
//     primary: false,
//     size: "medium",
//     onClick: undefined,
// };
