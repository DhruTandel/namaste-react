import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard, {
  RestaurantPromoted,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render Restaurant card", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Burger King");
  expect(name).toBeInTheDocument();
});
test("should render Restaurant label promoted", () => {
  const PromotedCard = RestaurantPromoted(RestaurantCard);
  render(
    <BrowserRouter>
      <PromotedCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText(MOCK_DATA.name);
  expect(name).toBeInTheDocument();
});
