import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import giftImage from './assets/present.png';
import './App.css';

function App() {
  const [list, setList] = useState([3, 3, 3]);

  function Present({ el, indx }) {
    const size = 100 * el;
    return (
      <img
        onClick={() => openPresent(el, indx)}
        src={giftImage}
        width={size}
        height={size}
      ></img>
    );
  }

  function openPresent(el, indx) {
    const newSize = list[indx] - 1;

    const randomNum = Math.floor(Math.random() * 2) + 1;

    const cloneList = [...list];

    cloneList.splice(indx, 1);

    for (let i = 0; i < randomNum; i++) {
      cloneList.splice(indx + i, 0, newSize);
    }
    setList([...cloneList]);
  }
  return (
    <>
      <div>
        <div className="flex ">
          {list.map((el, indx) => (
            <Present key={uuid()} el={el} indx={indx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
