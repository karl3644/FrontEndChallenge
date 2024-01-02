import Card from "@/components/layout/Card/Card.component.jsx";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Card", () => {
    test("renders correctly", () => {
        const { getByTestId, debug } = render(<Card />);
        expect(getByTestId("card")).toBeInTheDocument();
    });
    test("renders AltButton and Text components", () => {
        const { getByTestId, getAllByTestId, rerender, debug } = render(
            <Card />,
        );
        expect(getByTestId("altButton")).toBeInTheDocument();

        rerender(<Card />);
        const allTexts = getAllByTestId("default");
        allTexts.forEach((text) => {
            expect(text).toBeInTheDocument();
        });
        debug();
    });
});
// passes correct props to AltButton and Text components
// renders img with correct src
// hover css
