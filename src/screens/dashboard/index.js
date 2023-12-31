import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PropertyListingItem from '../../components/PropertyListingItem';
import {sampleData} from '../../utils/sampleData';

const Dashboard = ({navigation}) => {
  const {openDrawer} = navigation;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={openDrawer}>
          <MaterialCommunityIcons name="home" color='#000' size={24} />
          </TouchableOpacity>
          <Text style={styles.searchTextPlaceHolder}>Search Here</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={sampleData}
          renderItem={({item}) => <PropertyListingItem {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  wrapper: {padding: 16},
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 12,
  },
  searchTextPlaceHolder: {
    color: '#666',
    marginLeft: 8,
  },
});
