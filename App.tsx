import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import HomeScreen from './src/screens/HomeScreen'
import ProductScreen from './src/screens/ProductScreen'
import ShopingCartScreen from './src/screens/ShopingCartScreen'

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ProductScreen />
            {/* <HomeScreen /> */}
            {/* <ShopingCartScreen /> */}
        </SafeAreaView>
    )
}

export default App
