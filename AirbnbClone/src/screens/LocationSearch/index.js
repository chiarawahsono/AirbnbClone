import React, {useState} from 'react';
import {View, Text, FlatList, TextInput, Pressable} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const LocationSearchScreen = props => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyBzHzcHRupfXyaO6g8S50dr6eWnx4IBpUI',
            language: 'en',
          }}
          suppressDefaultStyles
          renderRow={GooglePlaceData => (
            <SuggestionRow item={GooglePlaceData} />
          )}
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}></TextInput>

      {/* List of Destination */}
    </View>
  );
};

export default LocationSearchScreen;
