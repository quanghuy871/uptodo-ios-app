import React, {FC, useState} from "react";
import {IonButton, IonIcon} from "@ionic/react";
import {addOutline} from "ionicons/icons";
import AddTask from "./AddTask";


const AddButton: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonButton onClick={() => setIsOpen(true)} shape='round' id='add-button' className='add-button'>
        <IonIcon slot="icon-only" size='large' icon={addOutline}/>
      </IonButton>

      <AddTask trigger="add-button" isOpen={isOpen}/>
    </>
  );
}

export default AddButton