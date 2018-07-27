import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'native-base';

class Camera extends Component {
    state = {
        path: null
    }
    takePicture = async () => {
        try {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            this.setState({ path: data.uri })
            this.props.navigation.navigate('Verify', { path: data.uri })
        }
        catch (err) {
            console.log(err);
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
                    <TouchableOpacity
                        onPress={this.takePicture}
                        style={styles.capture}>
                        <Icon name="ios-aperture" style={{fontSize: 100, color: 'black' }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        position: 'absolute',
        flex: 1,
        bottom: 20,
        alignSelf: 'center',
    }
});

export default Camera