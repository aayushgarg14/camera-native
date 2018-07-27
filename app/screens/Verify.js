import React from 'react'
import { Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { View, Text, Icon } from 'native-base';

const imageWidth = Dimensions.get('window').width
const imageHeight = Dimensions.get('window').height

const Verify = (props) => {
    // return (
    //     <View style={{ flex: 1, flexDirection: 'column' }}>
    //         <Image
    //             style={{ width: imageWidth, height: imageHeight }}
    //             source={{ uri: `${props.navigation.state.params.path}` }} />
    //         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
    //             <TouchableOpacity style={styles.capture}>
    //                 <Icon name="ios-close" style={{ fontSize: 30, color: 'black' }} />
    //             </TouchableOpacity>
    //             <TouchableOpacity style={styles.capture}>
    //                 <Icon name="ios-checkmark" style={{ fontSize: 30, color: 'white' }} />
    //             </TouchableOpacity>
    //         </View>
    //     </View>

    // )
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <Image
                source={{ uri: `${props.navigation.state.params.path}` }}
                style={{ width: imageWidth, height: imageHeight }}
            />

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}>
                    <Icon name="ios-checkmark" style={{ fontSize: 50, color: 'white' }} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Icon name="ios-close" style={{ fontSize: 50, color: 'white' }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    capture: {
        zIndex: 999,
        position: 'absolute',
        flex: 1,
        bottom: 20,
        alignSelf: 'center',
    },
    buttons: {
        position: 'absolute', 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        bottom: 40
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'grey'
    }
})

export default Verify