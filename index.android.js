/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} = React;

var testt = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
	  <Text style={styles.textView}> checking webview</Text>
        <WebView
          style={styles.webView}
          source ={{uri:'web/helloworld.html'}}
		   javaScriptEnabled={true}
		   scalesPageToFit={true}
        />
		<Text style={styles.textView}> up until here</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998',
  },
  webView: {
    height: 350,
  },
  textView:{
  height:50
  }
});

AppRegistry.registerComponent('testt', () => testt);
