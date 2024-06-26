import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import NoResult from "../../assets/images/Mainpage/NoResult.svg"

const Reels = () => {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", alignItems: "center", paddingTop: "50%", margin: 20 }}>
        <NoResult />
        <Text style={{fontSize: 20, fontWeight:600}}>Comming Soon!</Text>
      </View>
    </SafeAreaView>
  )
}

export default Reels