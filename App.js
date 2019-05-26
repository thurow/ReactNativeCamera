import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, CameraRoll } from "react-native";

import { RNCamera } from "react-native-camera";

export default class App extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      CameraRoll.saveToCameraRoll(data.uri);

      alert(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          pauseAfterCapture
          permissionDialogTitle={"Permissão para usar a câmera"}
          permissionDialogMessage={
            "Nós precisamos de sua permissão para usar a câmera."
          }
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={styles.buttonText}> Tirar Foto </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  buttonText: {
    fontSize: 14
  }
});
