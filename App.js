import {Alert, FlatList, StyleSheet, TouchableWithoutFeedback, View,Keyboard } from 'react-native';
import React,{useState} from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
 
  const [todos,setTodos]=useState([
    // {Text:'buy coffee',key:'1',date:new Date()},
    // {Text:'craete an app',key:'2',date:new Date()},
    // {Text:'play on the switch',key:'3',date:new Date()},
    
  ]);
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key !=key);

    });
    
  }
  const submitHandler=(text)=>{
    if(text.length>3){

      setTodos((prevTodos)=>{
        return[
          {Text:text,key:Math.random().toString(),date:new Date(),},
          ...prevTodos
        ];
      })
    }
    else{
      Alert.alert('OOPS!','Todos must be over 3 chars long',[{text:'understood',onPress:()=>console.log('alert closed')}])
    }
  }
  
  return (
  
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss(); console.log('Dismissed keyboard');}}>
    <View style={styles.container}>
      <Header/>
       <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}

          
          />

        </View>

       </View>
    
       
    </View>
    </TouchableWithoutFeedback>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20

  },
 content:{
     padding:40,
     flex:1
     
    
      

},
list:{
  marginTop:20,
  flex:1
  
},
}); 
//     // alignItems: 'center',
//     // justifyContent: 'center',
  
//   // buttonContainer:{
//   //   marginTop:20
//   // },
//   // input:{
//   //   backgroundColor:'#aaa',
//   //   marginTop:20,
//   //   width:200,
//   //   padding:10
//   // },
// import { Alert, FlatList, StyleSheet, View, Keyboard } from 'react-native';
// import React, { useState } from 'react';
// import Header from './components/Header';
// import TodoItem from './components/TodoItem';
// import AddTodo from './components/AddTodo';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export default function App() {
//   const [todos, setTodos] = useState([
//     // {
//     //   Text: 'buy coffee',
//     //   key: '1',
//     //   date: new Date(),
//     // },
//     // {
//     //   Text: 'create an app',
//     //   key: '2',
//     //   date: new Date(),
//     // },
//     // {
//     //   Text: 'play on the switch',
//     //   key: '3',
//     //   date: new Date(),
//     // },
//   ]);

//   const pressHandler = (key) => {
//     setTodos((prevTodos) => {
//       return prevTodos.filter((todo) => todo.key !== key);
//     });
//   };

//   const [isEditingDate, setIsEditingDate] = useState(false);
//   const [selectedTodoKey, setSelectedTodoKey] = useState(null);

//   const handleEditDate = (key) => {
//     setSelectedTodoKey(key);
//     setIsEditingDate(true);
//   };

//   const handleDateChange = (event, date) => {
//     if (event.type === 'set') {
//       const updatedTodos = todos.map((todo) => {
//         if (todo.key === selectedTodoKey) {
//           return {
//             ...todo,
//             date: date,
//           };
//         }
//         return todo;
//       });

//       setTodos(updatedTodos);
//       setSelectedTodoKey(null);
//       setIsEditingDate(false);
//     }
//   };

//   const submitHandler = (text) => {
//     if (text.length > 3) {
//       setTodos((prevTodos) => {
//         return [
//           {
//             Text: text,
//             key: Math.random().toString(),
//             date: new Date(),
//           },
//           ...prevTodos,
//         ];
//       });
//     } else {
//       Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
//         {
//           text: 'Understood',
//           onPress: () => console.log('Alert closed'),
//         },
//       ]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.content}>
//         <AddTodo submitHandler={submitHandler} />
//         <View style={styles.list}>
//           <FlatList
//             data={todos}
//             renderItem={({ item }) => (
//               <TodoItem
//                 item={item}
//                 pressHandler={pressHandler}
//                 onEditDate={handleEditDate}
//               />
//             )}
//           />
//         </View>
//       </View>
//       {isEditingDate && selectedTodoKey !== null && (
//          <DateTimePicker
//              value={todos.find((todo) => todo.key === selectedTodoKey).date}
//               mode="datetime"
//               is24Hour={true}
//                display="default"
//             onChange={handleDateChange}
//           />
//         )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: 20,
//   },
//   content: {
//     padding: 40,
//     flex: 1,
//   },
//   list: {
//     marginTop: 20,
//     flex: 1,
//   },
// });
