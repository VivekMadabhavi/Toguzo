import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function LoginScreen() {

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white", }}>
      <View style={{ margin: 20 }}>
        <View>
          <Text style={{ fontWeight: 600, fontSize: 20 }}>Verify with OTP</Text>
        </View>
        <View style={{height:229, marginTop:24}}>
          <Text>Sent via SMS to xxxxxxxx</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'flex-end', margin: 20, flex: 1 }}>
        <Pressable
          style={{
            backgroundColor: '#347B72',
            borderRadius: 10,
            padding: 12,
            alignItems: 'center',
            marginBottom: 24
          }}
          onPress={() => {
            navigation.navigate("AccountCreate");
          }}
        >
          <Text style={{ color: 'white', fontWeight: 600 }}>Verify</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})