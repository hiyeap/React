import { useState, useCallback } from 'react';
// import NewsList from './components/NewsList_load'; 
import NewsList from './components/NewsList_props';
import Categories from './components/Categories_props';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>;
    </>
  );
};

export default App;
