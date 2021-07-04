import React from 'react';
import {View, Text} from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import places from '../../../assets/data/feed';
import styles from '../../components/PostCarouselItem/styles';

const post = places[0];
const PostScreen = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
