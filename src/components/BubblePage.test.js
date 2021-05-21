import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";




test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  render(<BubblePage />)
  const bubblesContainer = screen.getByTestId('bubbles')
  expect(bubblesContainer).toBeInTheDocument();
  console.log("-------------BUBBLES--------------", bubblesContainer)
  
  //I don't know what is going on with this test....
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading