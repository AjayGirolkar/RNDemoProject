import React from "react";
import { AppRegistry, View, Text } from "react-native";


class SwiftViewComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>This is React Native</Text>
            </View>
          );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
  });

  AppRegistry.registerComponent('SwiftViewComponent', () => SwiftViewComponent);