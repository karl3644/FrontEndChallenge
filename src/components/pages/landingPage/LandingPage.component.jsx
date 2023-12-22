import Button from "@/components/common/Button/Button.component.jsx";
import Text from "@/components/common/Text/Text.component.jsx";
import Card from "@/components/layout/Card/Card.component.jsx";

import ErrorBoundary from "@/components/common/ErrorBoundary.jsx";

export default function LandingPage() {
    return (
        <div>
            <ErrorBoundary>
                <Card />
                <Button />
            </ErrorBoundary>
        </div>
    );
}
