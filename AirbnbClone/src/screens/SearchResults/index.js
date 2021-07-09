import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import {listPosts} from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';

const SearchResultsScreen = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(graphqlOperation(listPosts));
        console.log(postsResult);
      } catch (e) {}
    };
  });

  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
