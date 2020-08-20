import React from 'react'
import {Alert} from 'react-native'
import WebView from 'react-native-webview'

const uri = 'https://m.mtime.cn/#!/onlineticket/592171965/'

interface WebViewWindow {
    ReactNativeWebView: {
        postMessage: (value: string) => void
    }
}

const INJECT_JS = (window: WebViewWindow, document: Document) => {
    let submitBtn
    function waitForBtnRender() {
        submitBtn = document.getElementById('submitBtn')
        if (!submitBtn) {
            setTimeout(waitForBtnRender, 1000);
        } else {
            submitBtn.onclick = () => {
                const seats: string[] = []
                document.querySelectorAll('.seat_selected').forEach((node) => {
                    seats.push(node.getAttribute('name')!)
                })
                window.ReactNativeWebView.postMessage(seats.join('，'))
            }
        }
    }
    waitForBtnRender()
}

export default function WebScreen () {
    return (
        <WebView 
            source ={{uri}}
            injectedJavaScript={`(${INJECT_JS.toString()})(window, document)`}
            onMessage={(e) => {
                Alert.alert(`您选中的座位是：${e.nativeEvent.data}`)
            }}
        />
    )
}


