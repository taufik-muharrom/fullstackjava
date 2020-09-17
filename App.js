// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   TouchableHighlight,
//   Modal,
// } from 'react-native';
// import {ListItem, Header, Input} from 'react-native-elements';
// import IconFa from 'react-native-vector-icons/Ionicons';

// const list = [
//   {
//     name: 'Amy Farha',
//     image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//     job: 'Vice President',
//   },
//   {
//     name: 'Chris Jackson',
//     image:
//       'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     job: 'Vice Chairman',
//   },
//   {
//     name: 'Jhon Takpoor',
//     image:
//       'data:image/jpeg;base64,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',
//     job: 'Technician',
//   },
// ];

// const App = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [image, setImage] = useState('');
//   const [job, setJob] = useState('');
//   const [list, setList] = useState([{key: '', name: '', image: '', job: ''}]);
//   const generateKey = (numberOfCharacters) => {
//     return require('random-string')({length: numberOfCharacters});
//   };
//   return (
//     <View>
//       <Header
//         leftComponent={{icon: 'menu', color: '#fff'}}
//         centerComponent={{text: 'LIST PERSON', style: {color: '#fff'}}}
//         rightComponent={
//           <TouchableHighlight
//             onPress={() => {
//               setModalVisible(true);
//             }}>
//             <IconFa name="ios-person-add-outline" color="white" size={25} />
//           </TouchableHighlight>
//         }
//       />

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>ADD PERSON</Text>
//             <Input placeholder="Name" onChangeText={(val) => setName(val)} />
//             <Input placeholder="Image" onChangeText={(val) => setImage(val)} />
//             <Input placeholder="Job" onChangeText={(val) => setJob(val)} />
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: 'row',
//               }}>
//               <View style={{flex: 1, justifyContent: 'center'}}>
//                 <TouchableHighlight
//                   style={{...styles.openButton, backgroundColor: '#2196F3'}}
//                   const
//                   newKey={generateKey(24)}
//                   onPress={() => {
//                     const newItem = {
//                       key: {newKey},
//                       name: {name},
//                       image: {image},
//                       job: {job},
//                     };
//                     // list.push(newItem);
//                     console.log(newItem);
//                     setModalVisible(!modalVisible);
//                   }}>
//                   <Text style={styles.textStyle}>Add</Text>
//                 </TouchableHighlight>
//               </View>
//               <View style={{flex: 1, justifyContent: 'center'}}>
//                 <TouchableHighlight
//                   style={{...styles.openButton, backgroundColor: '#2196F3'}}
//                   onPress={() => {
//                     setModalVisible(!modalVisible);
//                   }}>
//                   <Text style={styles.textStyle}>Cancel</Text>
//                 </TouchableHighlight>
//               </View>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       <FlatList data={list} renderItem={({item}) => <Text>{item}</Text>} />

//       {/* {list.map((data, index) => (
//         <ListItem
//           key={index}
//           leftAvatar={{
//             source: {
//               uri:
//                 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//             },
//           }}
//           title={data.name}
//           subtitle={data.job}
//           bottomDivider
//         />
//       ))} */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     height: 400,
//     width: 300,
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 1,
//     marginRight: 10,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',//   },
// });

// // export default App;

// // import React, {useState} from 'react';
// // import {
// //   Alert,
// //   Modal,
// //   StyleSheet,
// //   Text,
// //   TouchableHighlight,
// //   View,
// // } from 'react-native';

// // import {Input} from 'react-native-elements';

// // const App = () => {
// //   const [modalVisible, setModalVisible] = useState(false);
// //   return (
// //     <View style={styles.centeredView}>
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={() => {
// //           Alert.alert('Modal has been closed.');
// //         }}>
// //         <View style={styles.centeredView}>
// //           <View style={styles.modalView}>
// //             <Text style={styles.modalText}>Hello World!</Text>
// //             <Input placeholder="Name" />
// //             <Input placeholder="Name" />
// //             <Input placeholder="Name" />
// //             <TouchableHighlight
// //               style={{...styles.openButton, backgroundColor: '#2196F3'}}
// //               onPress={() => {
// //                 setModalVisible(!modalVisible);
// //               }}>
// //               <Text style={styles.textStyle}>Hide Modal</Text>
// //             </TouchableHighlight>
// //           </View>
// //         </View>
// //       </Modal>

// //       <TouchableHighlight
// //         style={styles.openButton}
// //         onPress={() => {
// //           setModalVisible(true);
// //         }}>
// //         <Text style={styles.textStyle}>Show Modal</Text>
// //       </TouchableHighlight>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({});

// export default App;
