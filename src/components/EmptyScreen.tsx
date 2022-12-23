import React from "react"
import IMG1 from '../assets/images/img-1.svg'

const EmptyScreen: React.FC = (props) => {
  return (
    <div className='empty-screen'>
      <div className='empty-screen__inner'>
        <img src={IMG1} alt="To to"/>
        <h3>What do you want to do today?</h3>
        <p>Tap + to add your tasks</p>
      </div>
    </div>
  );
}

export default EmptyScreen