import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { db, doc, updateDoc, deleteDoc } from '../../firebase/index'


//shopping object
/* 1. id
2. title
3. isChecked */
const ShoppingItem = (props) => {
  const[isChecked, setIsChecked] = useState(props.isChecked)

  const updateIsChecked =async () => {
    const shoppingRef = doc(db, "shopping", props.id);

// Set the "isChecked" field of the city 'props.id'
  await updateDoc(shoppingRef, {
    isChecked: isChecked,
    });
}

const deleteShoppingItem =async () => {
  try {
    if (isChecked) {
      await deleteDoc(doc(db, 'shopping', props.id));
      props.getShoppingList();
    } else {
      console.log('Please select the item first');
    }
  } catch (error) {
    console.error('Error deleting shopping item:', error);
  } 
}

useEffect(() => {
  updateIsChecked()
}, [isChecked])

  return (
    <View style={styles.container}>
      
      {/* checked Icon */}
      <Pressable onPress={() => setIsChecked(!isChecked)}>
        {isChecked ? (
          <AntIcon 
          name="checkcircle"
          size={24} 
          color="black"
          />
        ) : (
          <AntIcon 
          name="checkcircleo"
          size={24} 
          color="black"
          />
        )}
      </Pressable>
 
      {/* shopping text */}
      <Text style={styles.title}>{props.title}</Text>
      
      {/* delete */}
      <Pressable onPress={deleteShoppingItem}>
      <MaterialIcon name="delete" size={24} color="black"/>
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