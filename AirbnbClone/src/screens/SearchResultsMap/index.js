import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';
import places from '../../../assets/data/feed';
import Post from '../../components/PostCarouselItem';

const SearchResultsMap = props => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();

  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    } else {
      const index = places.findIndex(place => place.id === selectedPlaceId);
      flatlist.current.scrollToIndex({index});
      console.log('scroll to ' + selectedPlaceId);
      return () => {};
    }
  }, [selectedPlaceId]);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            coordinate={place.coordinate}
            price={place.newPrice}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={{itemVissiblePercentThreshold: 70}}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
