import { render,screen } from "@testing-library/react";
import Contact from '../components/pages/Contact';
import "@testing-library/jest-dom";

test("Component should render",()=>{
    render(<Contact/>)

    //assertion
    const heading =screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
