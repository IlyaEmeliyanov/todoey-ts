import { useEffect, useState } from 'react';
import './App.css';

// Importing types
import { ItemType } from './types'

// Importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

// Importing components
import ListItem from "./components/ListItem";
import FloatingBadge from './components/FloatingBadge';

function App() {

  const [items, setItems] = useState<ItemType[]>([]);

  const handleDeleteItem = (index: number) => {
    items.splice(index, 1);
    setItems([...items]);
  }

  return (
    <div className="justify-center">
      <h1 className="active bold">Todoey</h1>
      <button onClick={() => setItems([...items, {title: "", description: "", completed: false}])} className="add-item__btn">
        <h2 className='align-center active'>Add item<pre> </pre><FontAwesomeIcon className="active" icon={faPlus} beatFade style={{ fontSize: '30px' }} /></h2>
      </button>
      <ul className="list__menu">
        {items.map(({ title, description, completed }, key) =>
          <li className="list__item align-center" key={key}>
            <ListItem title={title} description={description} completed={completed}/>
            <button onClick={() => handleDeleteItem(key)}><FontAwesomeIcon icon={faCircleMinus} color={"red"} style={{fontSize: "2rem", color: 'var(--active-color)'}}/></button>
            <FloatingBadge message="delete"/>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
