import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import {listPosts} from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import {useRoute} from '@react-navigation/native';

const SearchResultsScreen = props => {
  const {posts} = props;

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
