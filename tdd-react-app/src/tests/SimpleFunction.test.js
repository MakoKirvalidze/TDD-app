import { greet } from '../components/SimpleFunction';

test('should greet a person', () => {
  expect(greet('John')).toBe('Hello, John!');
});
