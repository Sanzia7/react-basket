import { useState } from 'react';
import BasketElem from '../BasketElem';
import Total from '../Total';

function App() {

  const defaultProducts = [
    { id: 1, title: 'coat', price: 2000, count: 5 },
    { id: 2, title: 'jacket', price: 800, count: 7 },
    { id: 3, title: 'dress', price: 600, count: 4 },
    { id: 4, title: 'shoes', price: 550, count: 6 },
    { id: 5, title: 'hat', price: 80, count: 3 },
    { id: 6, title: 'gloves', price: 50, count: 4 },
  ];

  const [basket, setBasket] = useState(defaultProducts);

  const incr = progress => {
    const target = basket.find(({ id }) => id === progress);
    target.count++;
    setBasket([...basket]);
  };

  const decr = progress => {
    const target = basket.find(({ id }) => id === progress);
    target.count--;

    if (target.count === 0) {
      setBasket(basket.filter(elem => elem !== target));
    } else {
      setBasket([...basket]);
    }
  };

  return (
    <div>
      <div>
        {basket.map(item => (
          <BasketElem
            //{...{ incr, decr }}
            incr={incr}
            decr={decr}
            key={item.id}
            {...item}
          />
        ))}
      </div>
      <div>
        <Total basket={basket} />
      </div>
    </div>
  );
}

export default App;
