import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error, errorInfo) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // console.log(error, info);
        return { error: error, info: info };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <h2>Error - something went wrong</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
