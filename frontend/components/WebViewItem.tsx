import React from "react"
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

interface WebViewItemProps {
    url: string
}
const WebViewItem = ({url}: WebViewItemProps) => {
    return (
        <WebView originWhitelist={["*"]} 
                    source={{ uri: url }} 
                    style={styles.WebView}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
        />
    )
}

export default WebViewItem

const styles = StyleSheet.create({
    WebView: {
      margin: 20,
      alignSelf: 'stretch',
      width: 300,
      height: 400,
    },
    modal: {
        flex: 1,
    }
  });
