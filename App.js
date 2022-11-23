import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PessoaAddTela from './telas/PessoaAddTela';
import PessoaListTela from './telas/PessoaListTela';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

        //* Stack.Screen definine o nome e o componente que irá renderizar no roteamento       
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName='PessoaList'
        >          
    <Stack.Screen 
            name="PessoaAdd"
            component={PessoaAddTela}
          />
          <Stack.Screen 
          name ="PessoaList"
          component={PessoaListTela}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
