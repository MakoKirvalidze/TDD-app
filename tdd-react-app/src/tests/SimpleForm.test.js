import { render, screen, fireEvent } from '@testing-library/react';
import { SimpleForm } from '../components/SimpleForm';

test('should render the form and handle submit', () => {
  render(<SimpleForm />);
  
  const input = screen.getByPlaceholderText('Enter text');
  const button = screen.getByText('Submit');
  
  fireEvent.change(input, { target: { value: 'React' } });
  expect(input.value).toBe('React');
  
  fireEvent.click(button);

});
