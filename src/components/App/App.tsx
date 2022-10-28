import { InputField } from 'components/form-controls';
import { useAppSelector } from 'hooks/useStore';
import React from 'react';
import { useEffect } from 'react';

export const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <InputField></InputField>
    </div>
  );
};
