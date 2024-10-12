import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../components/CustomHook';

test('should increment and decrement counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
  
  act(() => {
    result.current.decrement();
  });
  expect(result.current.count).toBe(0);
});
