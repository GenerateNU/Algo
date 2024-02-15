import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { Modal } from "react-native-paper"
import WebViewItem from './WebViewItem';

interface WebViewProps {
    url: string;
    displaying: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const WebViewModal = (props: WebViewProps) => {
    useEffect(() => {
        console.log("value of url", props.url);
      }, [props.url])
    return (
        <Modal visible={props.displaying} style={styles.modal}
        onDismiss={() => props.setVisible(false)}>
            {
                props.url != "" &&
                <WebViewItem url={props.url}/>
                
            }
        </Modal>
    )
}

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

export default WebViewModal