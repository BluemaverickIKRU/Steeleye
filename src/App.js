import React from 'react';
import List from './List';

const App = () => {
  return (
    <div>
      <List
        items={[{ text: 'Apple' }, { text: 'Banana' }, { text: 'Orange' }]}
      />
    </div>
  );
};

export default App;
