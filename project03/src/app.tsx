import React, { useCallback, useState } from 'react';

type FormData = {
  id: string;
  password: string;
};

const App = () => {
  const [data, setData] = useState<FormData>({
    id: '',
    password: '',
  });

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (data.id && data.password) {
        console.log('submit');
        alert(`${data.id} | ${data.password}`);
      }
    },
    [data]
  );

  const onChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;

      setData({
        ...data,
        [name]: value,
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="id" placeholder="Enter your ID" onChange={onChange} />
        <input type="password" name="password" placeholder="Enter your password" onChange={onChange} />
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default App;
