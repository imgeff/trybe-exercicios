import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../RenderWithRedux';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('Ao clicar em clique aqui, o valor deve ser 1', () => {
    renderWithRedux(<App />);
    const buttonClick = screen.getByRole('button', { name: 'Clique aqui' })
    userEvent.click(buttonClick);
    const resultClick = screen.getByText('1');
    expect(resultClick).toBeInTheDocument();
  })

  test('Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos', () => {
    renderWithRedux( <App />, { initialState: { clickReducer: { counter: 10 }}} )
    const buttonClick = screen.getByRole('button', { name: 'Clique aqui' })
    userEvent.click(buttonClick);
    const resultClick = screen.getByText('11');
    expect(resultClick).toBeInTheDocument();
  })
});