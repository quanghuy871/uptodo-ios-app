import React, {useRef, useState} from "react";
import {TaskStore} from "../store";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput, IonIcon,
} from '@ionic/react';
import {OverlayEventDetail} from '@ionic/core/components';
import {checkmarkCircle, barbellOutline, bookOutline, businessOutline, schoolOutline, peopleOutline, diamondOutline, musicalNotesOutline} from 'ionicons/icons';
import timeConverter from "../utils/timeConverter";

const categories = [
  {
    text: 'Homework',
    icon: bookOutline,
    color: '#006BA6',
  },
  {
    text: 'Work',
    icon: businessOutline,
    color: '#FFBC42',
  },
  {
    text: 'Health',
    icon: barbellOutline,
    color: '#D81159',
  },
  {
    text: 'University',
    icon: schoolOutline,
    color: '#902923',
  },
  {
    text: 'Social',
    icon: peopleOutline,
    color: '#56E39F',
  },
  {
    text: 'Grocery',
    icon: diamondOutline,
    color: '#FF3CC7',
  },
  {
    text: 'Music',
    icon: musicalNotesOutline,
    color: '#F17105',
  },
]

interface containerProps {
  isOpen: boolean
  trigger: string
}

const AddTask: React.FC<containerProps> = (props) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);
  const [cat, setCat] = useState({text: ''});
  const [priority, setPriority] = useState(-1);
  const list = TaskStore.useState(s => s.list)

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');


    const data = {
      text: input.current?.value,
      date: timeConverter(),
      category: cat,
    }

    if (priority > -1) {
      TaskStore.update(s => {
        s.list.splice(priority, 0, data);
      })
    } else {
      TaskStore.update(s => {
        s.list.push(data);
      })
    }
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  function catHandler(index: number) {
    const category = categories[index];
    setCat(category);
  }

  return (
    <IonModal trigger={props.trigger} ref={modal} onWillDismiss={(ev) => onWillDismiss(ev)}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => {
              modal.current?.dismiss()
              setPriority(-1)
              setCat({text: ''})
            }}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton strong={true} onClick={() => {
              confirm()
              setPriority(-1)
              setCat({text: ''})
            }}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Add Task</IonLabel>
          <IonInput ref={input} type="text" placeholder="Your task"/>
        </IonItem>

        <IonItem style={{marginTop: 30}}>
          <IonLabel position="stacked">Choose your category</IonLabel>

          <div className='cat-item__list'>
            {
              categories.map((el, index) => (
                <div
                  key={index}
                  className={`cat-item`}
                  onClick={(e) => catHandler(index)}>
                  <div className='cat-item__icon' style={{backgroundColor: `${el.color}`}}>
                    {
                      cat.text === categories[index].text ?
                        <IonIcon
                          style={{position: 'absolute', top: 3, right: 3}}
                          size='small' icon={checkmarkCircle}/>
                        :
                        null
                    }
                    <IonIcon size='large' icon={el.icon}/>
                  </div>

                  <div className='cat-item__text'>
                    {el.text}
                  </div>
                </div>
              ))
            }
          </div>
        </IonItem>

        {
          list.length === 0 ? null :
            <IonItem style={{marginTop: 30}}>
              <IonLabel position="stacked">Priority</IonLabel>

              <div className='cat-item__list'>
                {
                  list.map((el, index) => (
                    <div
                      key={index}
                      className={`cat-item ${priority === index ? 'selected' : ''}`}
                      onClick={(e) => setPriority(index)}>
                      <div className='cat-item__icon cat-item__priority'>
                        {index + 1}
                      </div>
                    </div>
                  ))
                }
              </div>
            </IonItem>
        }
      </IonContent>
    </IonModal>
  );
}

export default AddTask