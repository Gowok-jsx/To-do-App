import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class Header extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  animate() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration:3000, // Adjust the duration as needed
      useNativeDriver: false,
       // Optional: Use a linear easing function for a smoother loop
    }).start(() => {
      // When the animation completes, reset the value to 0 and run the animation again.
      this.animatedValue.setValue(0);
      this.animate();
    }); 
  }

  componentDidMount() {
    this.animate();
  }

  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [1,2],
      outputRange: ['1%', '5%'], // Move from left to right
    });

    return (
      <View style={styles.header}>
        <Text style={styles.title}>My Todos App</Text>
        <Animated.Text style={[styles.movingText, { marginLeft }]}>
          A powerful and user-friendly task management application that helps you stay organized, productive, and in control of your daily tasks and responsibilities.
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height:110,
    padding:10,
    backgroundColor: 'coral',
    marginTop:10,
    textAlign: 'center',
    paddingBottom:20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    

  },
  movingText: {
    fontWeight: 'normal',
    fontSize:15,
   

  },
});







// export default function Header () {
//   return (
//     <View style={styles.header}>
//         <Text style={styles.title}>My Todos App</Text>
//         <Text style={styles.movingText}>A powerful and user-friendly task management application that helps you stay organized, productive, and in control of your daily tasks and responsibilities. </Text>
      
      
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//  header:{
//     height:120,
//     padding:20,
//     backgroundColor:'coral',
//     marginTop:20,
//     textAlign:'center',
//     paddingTop:30
  
//  },
//  title:{
//     textAlign:'center',
//     fontSize:20,
//     fontWeight:'bold',

//  },
//  movingText:{
//   textAlign:'center',
//   fontWeight:'regular',

  
//  }
// });
