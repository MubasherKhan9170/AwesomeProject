import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ShoppingItem = () => {
  return (
    <View style={styles.container}>
      {/* checked Icon */}
      <Pressable>
      <Icon name="check-circle" size={24} color="black"/>
      </Pressable>
 
      {/* shopping text */}
      <Text style={styles.title}>Bread</Text>
      
      {/* delete */}
      <Pressable>
      <Icon name="delete" size={24} color="black"/>
      </Pressable>

    </View>
  )
}

export default ShoppingItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightgray",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "500"
  },
})