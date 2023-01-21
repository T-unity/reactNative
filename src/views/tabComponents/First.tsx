// dependencies
import React, { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Define footer tabs
function First({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <View style={[styles.base]}>
          <Text style={styles.text}>Hoge</Text>
          <Button
            title="詳細を見る"
            onPress={() => {
              // navigate with params
              navigation.navigate('詳細画面', {
                indexId: 1,
                subText: 'hogehogehoge',
              });
            }}
          />
        </View>

      </View>
    </View>
  );
}

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  }
});
