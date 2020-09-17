import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import {Header, Input} from 'react-native-elements';
import IconFea from 'react-native-vector-icons/Feather';
import IconFa from 'react-native-vector-icons/Ionicons';
import flatListData from './FlatListData';
import AddModal from './AddModal';
import EditModal from './EditModal';

// import AddModal from './ModalBox';

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 0,
    };
  }

  refreshFlatListItem = () => {
    this.setState((prevState) => {
      return {
        numberOfRefresh: prevState.numberOfRefresh + 1,
      };
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'
          backgroundColor: '#3B93A6',
          borderWidth: 3,
          borderColor: '#515357',
          margin: 10,
          borderRadius: 12,
        }}>
        <Image source={{uri: this.props.item.imageUrl}} style={styles.image} />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            height: 100,
          }}>
          <View style={{marginLeft: 10, marginTop: 15}}>
            <Text style={styles.textName}>{this.props.item.name}</Text>
            <Text style={styles.textJob}>{this.props.item.job}</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            marginBottom: 20,
            marginRight: 5,
          }}>
          <IconFea
            name="edit"
            size={30}
            color="white"
            onPress={() => {
              // alert("Update");
              this.props.parentFlatList.refs.editModal.showEditModal(
                flatListData[this.props.index],
                this,
              );
            }}
            style={{marginBottom: 5}}
          />
          <IconFea
            name="delete"
            size={30}
            color="white"
            onPress={() => {
              const deletingRow = this.state.activeRowKey;
              Alert.alert(
                'Alert',
                'Are you sure you want to delete ?',
                [
                  {
                    text: 'Yes',
                    onPress: () => {
                      flatListData.splice(this.props.index, 1);
                      //Refresh FlatList !
                      this.props.parentFlatList.refreshFlatList(deletingRow);
                    },
                  },
                  {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                ],
                {cancelable: true},
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default class FlatListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
    this._onPressAdd = this._onPressAdd.bind(this);
  }

  refreshFlatList = (activeKey) => {
    this.setState((prevState) => {
      return {
        deletedRowKey: activeKey,
      };
    });
    this.refs.flatList.scrollToEnd();
  };

  _onPressAdd() {
    this.refs.addModal.showAddModal();
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Header
          containerStyle={{
            backgroundColor: '#3B93A6',
          }}
          // leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{
            text: 'CONTACT LIST',
            style: {color: '#fff', fontWeight: 'bold', fontSize: 20},
          }}
          rightComponent={
            <TouchableHighlight onPress={this._onPressAdd}>
              <IconFa name="ios-person-add-outline" color="white" size={25} />
            </TouchableHighlight>
          }
        />

        <FlatList
          ref={'flatList'}
          data={flatListData}
          // ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item, index}) => {
            // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
            return (
              <FlatListItem item={item} index={index} parentFlatList={this} />
            );
          }}
        />
        <AddModal ref={'addModal'} parentFlatList={this} />
        <EditModal ref={'editModal'} parentFlatList={this} />
      </View>
    );
  }
}
// export default function FlatListScreenNavigation({navigation}) {
//   return <FlatListScreen />;
// }

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 5 : 0,
  },

  FlatList_Item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  header_style: {
    width: '100%',
    height: 45,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header_footer_style: {
    width: '100%',
    height: 45,
    backgroundColor: 'blue',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },

  modalView: {
    height: 400,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    marginLeft: 10,
  },
  textStyleModal: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  textJob: {
    color: 'white',
    fontSize: 16,
  },

  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
  image: {
    width: 70,
    height: 70,
    margin: 5,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 15,
  },
});
