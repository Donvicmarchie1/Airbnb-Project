import { useState } from 'react';

// A reusable utility for any "On/Off" feature in your app
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle] as const;
}