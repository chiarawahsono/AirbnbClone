import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import {listPosts} from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import {useRoute} from '@react-navigation/native';

const SearchResultsScreen = props => {
  const [posts, setPosts] = useState([]);

  const {guests} = props;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              maxGuests: {
                ge: guests,
              },
            },
          }),
        );
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
