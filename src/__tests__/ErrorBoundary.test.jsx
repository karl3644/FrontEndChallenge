import ErrorBoundary from "@/components/common/ErrorBoundary.jsx";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";

const ErrorChild = () => {
    throw new Error("Child error");
    return <div>Error</div>;
};

describe("ErrorBoundary", () => {
    test("expect ErrorChild to throw error", () => {
        // prevent console error
        vi.spyOn(console, "error").mockImplementation(() => null);
        expect(() => render(<ErrorChild />)).toThrow();
    });
    test("catches error from ErrorChild and displays default fallback", () => {
        // arrange
        const { getByText } = render(
            <ErrorBoundary>
                <ErrorChild />
            </ErrorBoundary>,
        );
        // act
        // prevent console error
        vi.spyOn(console, "error").mockImplementation(() => null);
        // assert
        expect(getByText("Error - something went wrong")).toBeInTheDocument();
    });
    test("catches error from ErrorChild and displays custom fallback", () => {
        // arrange
        const { getByText } = render(
            <ErrorBoundary fallback="Fallback text">
                <ErrorChild />
            </ErrorBoundary>,
        );
        // act
        // prevent console error
        vi.spyOn(console, "error").mockImplementation(() => null);
        // assert
        expect(getByText("Fallback text")).toBeInTheDocument();
    });
    test("display children when no error", () => {
        // arrange
        const { getByText } = render(
            <ErrorBoundary fallback="Fallback text">
                <div>No error</div>
            </ErrorBoundary>,
        );
        // act
        // assert
        expect(getByText("No error")).toBeInTheDocument();
    });
});
