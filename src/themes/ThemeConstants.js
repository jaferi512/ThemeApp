import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
export const ThemeConstants = {
  default: {
    backgroundColor: '#ECF0F1',
    fontColor: 'black',
    btnColor: '#2DCE89',
    placeColor: 'black',
    drawerColor: '#2DCE89',
    graphColor: '#1BB3F4',
  },
  dark: {
    backgroundColor: '#366FC0',
    fontColor: 'white',
    btnColor: 'orange',
    placeColor: '#D7D7D7',
    drawerColor: '#195090',
    graphColor: '#1BB3F4',
  },
};


/* export const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}

export const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
} */

export const Light = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const Dark = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'red',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

