import { useState } from 'react';
import './App.css';
import './DisplayButton.css'
import KanbanBoard from './KanbanBoard';
import { PRIORITY, STATUS, TITLE, USER } from './constants';

import displayLogo from './icons/display-settings.png';

function App() {

  const [grouping, setGrouping] = useState(USER)
  const [ordering, setOrdering] = useState(PRIORITY)

  const [displayList, setDisplayList] = useState(false)

  const handleDisplayChange= (e) => {
    e.preventDefault();
    setDisplayList(!displayList);
  }

  const displayButton = () => {

    return (
      <div>  
        <span className='DropdownButton'>
          <button onClick={(e)=>handleDisplayChange(e)}>
          <img src={displayLogo} alt="settings" />Display
        </button>
        </span>
        {displayList && (
          <div className='DropMenu'>
            <div className='DropMenuItem'>
            <span className='DropdownName'>Grouping</span>
            <select value={grouping} onChange={(e)=>{setGrouping(e.target.value)}}>
              <option value={STATUS}>{STATUS}</option>
              <option value={PRIORITY}>{PRIORITY}</option>
              <option value={USER}>{USER}</option>
            </select>
            </div>
            <div className='DropMenuItem'>
            <span className='DropdownName'>Ordering</span>
            <select value={ordering} onChange={(e)=>{setOrdering(e.target.value)}}>
              <option value={PRIORITY}>{PRIORITY}</option>
              <option value={TITLE}>{TITLE}</option>
            </select>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <div className='DisplayNavigation'>
        {displayButton()}
      </div>
      <KanbanBoard
        group = {grouping}
        order = {ordering}
      />
    </div>
  );
}

export default App;
