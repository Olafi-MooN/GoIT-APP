import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class App extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://br.linkedin.com/in/go-it-formando-empreendedores-4132351a7' }} />;
  }
}