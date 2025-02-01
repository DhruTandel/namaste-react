import { render,screen} from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from '../utils/appStore';
import Header from '../components/Header';
import "@testing-library/jest-dom"

test("Should be render header component with cart",()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems=screen.getByText("Cart(0)");
    expect(cartItems).toBeInTheDocument();
})