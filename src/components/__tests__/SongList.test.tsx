import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SongList from "../SongList";
import store from "../../redux/store";

test("renders Songs Library heading", () => {
  render(
    <Provider store={store}>
      <SongList
        query={`
           
          `}
        showForm={false}
        onFormClose={() => {
          console.log("Form closed");
        }}
      />
    </Provider>
  );

  expect(screen.getByText(/Songs Library/i)).toBeInTheDocument();
});
