import {Redirect, Route} from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {ellipse, square, triangle, addOutline, homeOutline, timeOutline} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import {star} from 'ionicons/icons';
import AddButton from "./components/AddButton";
import AddTask from "./components/AddTask";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Main styles */
import './assets/scss/main.css';

setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1/>
            </Route>
            <Route exact path="/tab2">
              <Tab2/>
            </Route>
            <Route exact path="/">
              <Redirect to="/tab1"/>
            </Route>
          </IonRouterOutlet>
          <IonTabBar className='ion-tab-bar' slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={homeOutline}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={timeOutline}/>
              <IonLabel>Recent</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>

        <AddButton/>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
