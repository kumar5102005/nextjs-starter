import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import "@testing-library/jest-dom";

jest.mock("../src/app/utilis/flagsmith", () => ({
  __esModule: true,
  default: {
    getEnvironmentFlags: jest.fn().mockResolvedValue({
      isFeatureEnabled: jest.fn().mockReturnValue(true),
    }),
  },
}));

describe("Home", () => {
  it("renders a heading", async () => {
    const HomeComponent = await Home();

    render(HomeComponent);

    const docH = screen.getByRole("heading", {
      name: "Hello World",
      level: 2
    });

    expect(docH).toBeInTheDocument();
  });
});

// describe("Home", () => {
//   it("renders a heading", () => {
//     render(<Home />);

//     const docH = screen.getByRole("heading", {
//       name: "Hello World",
//       level: 2,
//     });

//     expect(docH).toBeInTheDocument();
//   });
// });
