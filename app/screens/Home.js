import React from 'react'
import { View, Button, Text } from 'native-base';

const Home = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                success
                style={{ padding: 20, alignSelf: 'center' }}
                onPress={() => props.navigation.navigate('Camera')}>
                <Text>Camera</Text>
            </Button>
        </View>
    )
}

export default Home