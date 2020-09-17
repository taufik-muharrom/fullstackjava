import React, {Component} from 'react';
import {Text, Platform, Dimensions, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from './FlatListData';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      newJob: '',
      newImage: '',
    };
  }
  showEditModal = (editData, flatlistItem) => {
    // console.log(`editData = ${JSON.stringify(editData)}`);
    this.setState({
      key: editData.key,
      newName: editData.name,
      newJob: editData.job,
      newImage: editData.imageUrl,
      flatlistItem: flatlistItem,
    });
    this.refs.modalBox.open();
  };
  generateKey = (numberOfCharacters) => {
    return require('random-string')({length: numberOfCharacters});
  };
  render() {
    return (
      <Modal
        ref={'modalBox'}
        style={{
          justifyContent: 'center',
          borderRadius: Platform.OS === 'android' ? 30 : 0,
          shadowRadius: 10,
          width: screen.width - 80,
          height: 350,
        }}
        position="center"
        backdrop={true}
        onClosed={() => {
          // alert("Modal closed");
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 40,
          }}>
          Edit Data Person
        </Text>
        <TextInput
          style={{
            height: 40,
            borderBottomColor: 'gray',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            marginBottom: 10,
            borderBottomWidth: 1,
          }}
          onChangeText={(text) => this.setState({newName: text})}
          placeholder="Name"
          value={this.state.newName}
        />
        <TextInput
          style={{
            height: 40,
            borderBottomColor: 'gray',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
            marginBottom: 20,
            borderBottomWidth: 1,
          }}
          onChangeText={(text) => this.setState({newJob: text})}
          placeholder="Job"
          value={this.state.newJob}
        />
        <TextInput
          style={{
            height: 40,
            borderBottomColor: 'gray',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
            marginBottom: 20,
            borderBottomWidth: 1,
          }}
          onChangeText={(text) => this.setState({newImage: text})}
          placeholder="Image Url"
          value={this.state.newImage}
        />
        <Button
          style={{fontSize: 18, color: 'white'}}
          containerStyle={{
            padding: 8,
            marginLeft: 70,
            marginRight: 70,
            height: 40,
            borderRadius: 6,
            backgroundColor: 'mediumseagreen',
          }}
          onPress={() => {
            if (
              this.state.newName.length == 0 ||
              this.state.newJob.length == 0 ||
              this.state.newImage.length == 0
            ) {
              alert('fill in the form correctly!');
              return;
            }
            //Update Data
            var foundIndex = flatListData.findIndex(
              (item) => this.state.key == item.key,
            );
            if (foundIndex < 0) {
              return; //not found
            }
            flatListData[foundIndex].name = this.state.newName;
            flatListData[foundIndex].job = this.state.newJob;
            flatListData[foundIndex].imageUrl = this.state.newImage;
            //Refresh flatlist item
            this.state.flatlistItem.refreshFlatListItem();
            this.refs.modalBox.close();
          }}>
          Save
        </Button>
      </Modal>
    );
  }
}
