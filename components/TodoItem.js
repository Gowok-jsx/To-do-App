// 
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler}) {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
          <MaterialIcons name="delete" size={20} color="#333" />
          <Text style={styles.itemText}>{item.Text}</Text>
          <Text style={styles.dateText}>
            {item.date.toDateString()} {item.date.toLocaleTimeString()}
          </Text>
        </View>
      </TouchableOpacity>

    
</View>
      // <TouchableOpacity onPress={() => onEditDate(item.key)}>
      //   <Text style={styles.editDateButton}>Edit Date</Text>
      // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
  },
  // editDateButton: {
  //   color: 'coral',
  //   marginTop: 5,
  // },
});