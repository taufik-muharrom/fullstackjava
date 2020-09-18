import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isloading: true,
      data: [],
      page: 1,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' +
        this.state.page,
    )
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          // join old data and new data (array)
          data: this.state.data.concat(resJson),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderRow = ({item}) => {
    return (
      <View style={styles.itemRow}>
        <View style={styles.containerRow}>
          <Image source={{uri: item.url}} style={styles.itemImage} />
          <View style={styles.containerText}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemText}>{item.id}</Text>
          </View>
        </View>
      </View>
    );
  };

  //   handleLoadMore(page) {
  //     // this.setState({page: page + 1});
  //     console.log(page);
  //     alert('HORE');
  //   }

  renderFooter(page) {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            this.setState({page: page + 1}, this.getData);
            // console.log(page);
          }}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
        </TouchableOpacity>
      </View>
    );
  }

  //   handleMore = () => {
  //     this.setState({page: this.state.page + 1}, this.getData);
  //   };

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.state.data}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
          //   onEndReached={this.handleMore}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={this.renderFooter(this.state.page)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#515357',
    margin: 10,
    borderRadius: 12,
    height: 150,
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    height: 100,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemText: {
    marginTop: 5,
    fontSize: 16,
    padding: 5,
  },
  itemImage: {
    width: 100,
    height: '90%',
    margin: 5,
    marginTop: 7,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
