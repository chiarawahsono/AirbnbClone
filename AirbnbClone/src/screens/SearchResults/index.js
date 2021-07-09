import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import {listPosts} from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';

const SearchResultsScreen = () => {
  console.log('hello');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(graphqlOperation(listPosts));
        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
