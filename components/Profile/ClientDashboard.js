import React, { PureComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ClientAccountScreen from '../../screens/ClientAccount'

const Stack = createStackNavigator()

export class ClientDashboard extends PureComponent {
    render() {
        return (
            <Stack.Navigator initialRouteName="Compte">
                <Stack.Screen name="Compte" component={ClientAccountScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        )
    }
}

export default ClientDashboard