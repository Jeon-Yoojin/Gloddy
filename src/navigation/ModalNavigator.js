import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TestModalNavigatorScreen from '../ui/register/components/TestModalNavigatorScreen';
import IdentifyModal from '../ui/register/components/IdentifyModal';

const ModalStack = createStackNavigator();

function ModalNavigator() {
    return (
        <ModalStack.Navigator>
            <ModalStack.Screen
                name="CheckModal"
                component={TestModalNavigatorScreen}
                options={{
                  headerShown: false,
                  presentation: 'modal',
                  cardStyle: {backgroundColor: 'transparent'},
                  cardOverlayEnabled: true
                }}
            />
            <ModalStack.Screen
                name="IdentifyModal"
                component={IdentifyModal}
                options={{
                  headerShown: false,
                  presentation: 'modal',
                  cardStyle: {backgroundColor: 'transparent'},
                  cardOverlayEnabled: true,
                }}
            />
        </ModalStack.Navigator>
    )
}

export default ModalNavigator;