import Button from "@/components/common/button/Button.component.jsx";
import Text from "@/components/common/text/Text.component.jsx";
import Card from "@/components/layout/Card/Card.component.jsx";

import ErrorBoundary from "@/components/common/ErrorBoundary.jsx";

export default function LandingPage() {
    return (
        <div>
            <ErrorBoundary>
                <h1>hi</h1>
            </ErrorBoundary>
        </div>
    );
}
