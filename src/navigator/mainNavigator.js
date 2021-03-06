import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen217296Navigator from '../features/BlankScreen217296/navigator';
import BlankScreen115495Navigator from '../features/BlankScreen115495/navigator';
import BlankScreen015479Navigator from '../features/BlankScreen015479/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen217296: { screen: BlankScreen217296Navigator },
BlankScreen115495: { screen: BlankScreen115495Navigator },
BlankScreen015479: { screen: BlankScreen015479Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
