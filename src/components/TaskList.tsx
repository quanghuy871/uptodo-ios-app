import React from "react";
import {IonItem, IonLabel, IonCheckbox} from "@ionic/react";
import {TaskStore} from '../store';
import EmptyScreen from "./EmptyScreen";

const TaskList: React.FC = (props) => {
  const list = TaskStore.useState(s => s.list)

  return (
    <div className='task-list'>
      <div className='task-list__inner'>
        {
          list.length === 0 ?
            <EmptyScreen/>
            :
            <>
              <h1><strong>Your Tasks</strong></h1>
              {
                list.map((el, index) => (
                  <IonItem key={index}>
                    <div className='task-list__item'>
                      <div className='task-list__top'>
                        <h6>{el.text}</h6>
                        <IonCheckbox slot="end"></IonCheckbox>
                      </div>

                      <div className='task-list__bottom'>
                        <div className='task-list__time'>
                          <p>{el.date}</p>
                        </div>

                        <div className='task-list__cat' style={{backgroundColor: `${el.category.color}`}}>
                          {el.category.text}
                        </div>
                      </div>
                    </div>
                  </IonItem>
                ))
              }
            </>
        }
      </div>
    </div>
  )
}

export default TaskList