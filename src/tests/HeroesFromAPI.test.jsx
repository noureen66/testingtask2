import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import HeroesFromAPI from "../tests/lab/Heroes";

import { vi } from "vitest";

vi.mock("axios");

test('should display "No heroes available" when API returns empty list', async () => {
  axios.get.mockResolvedValue({ data: [] });

  render(<HeroesFromAPI />);

  expect(await screen.findByText("No heroes available")).toBeInTheDocument();
});

test("should render heroes after API fetch", async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: "Ironman", strength: 10 },
      { id: 2, name: "Thor", strength: 20 },
    ],
  });

  render(<HeroesFromAPI />);

  await waitFor(() => {
    expect(screen.getByText(/Ironman/)).toBeInTheDocument();
    expect(screen.getByText(/Thor/)).toBeInTheDocument();
  });
});

//bonus
test("should show error message on API failure", async () => {
  axios.get.mockRejectedValue(new Error("500"));

  render(<HeroesFromAPI />);

  expect(await screen.findByText("Failed to fetch heroes")).toBeInTheDocument();
});
