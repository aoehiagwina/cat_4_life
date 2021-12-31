import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

//import ListItem from './components/ListItem';

/*
const mockData = [
  "test1",
  "test2"
]
*/
const func = jest.fn()

describe("add component", () => {
  test('check onChange component', () => {
    render(<App />);
    const element = screen.getByTestId(/clear-btn/i);
    expect(element).toHaveTextContent("Clear Basket");
  });


  test('check onChange component', () => {
    render(<App setInput={func}/>);
    const element = screen.getByPlaceholderText(/clearBasket/i);
    fireEvent.click(clearBasket)
    expect(setBasketOrder).toBe([])
  });
})