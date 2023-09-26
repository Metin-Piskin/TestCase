import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RouterProps} from '../Router';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, addTextInput} from '../Redux/ReduxStore';

type OnePageProps = NativeStackNavigationProp<RouterProps, 'OnePage'>;

const OnePage = () => {
  const navigation = useNavigation<OnePageProps>();

  const [TextInputOne, setTextInputOne] = useState('');
  const [TextInputTwo, setTextInputTwo] = useState('');
  const [TextInputThree, setTextInputThree] = useState('');
  const [TextInputFour, setTextInputFour] = useState('');

  const TextInputs = useSelector(
    (state: RootState) => state.textInputs.textInputs,
  );
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      addTextInput([
        ...TextInputs,
        {
          TextOne: TextInputOne,
          TextTwo: TextInputTwo,
          TextThree: TextInputThree,
          TextFour: TextInputFour,
        },
      ]),
    );
    navigation.navigate('TwoPage');
    setTextInputOne('');
    setTextInputTwo('');
    setTextInputThree('');
    setTextInputFour('');
  };

  const handleClear = () => {
    setTextInputOne('');
    setTextInputTwo('');
    setTextInputThree('');
    setTextInputFour('');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>TEST CASE</Text>
      </View>

      <View style={styles.FormContainer}>
        <View style={styles.TitleContainer}>
          <Text style={styles.TitleText}>FORM</Text>
        </View>

        <TextInput
          style={[
            styles.TextInput,
            {
              borderColor: TextInputOne.length >= 4 ? 'green' : 'red',
            },
          ]}
          placeholder="TEXT FORM FILED"
          onChangeText={value => setTextInputOne(value)}
          value={TextInputOne}
        />
        <TextInput
          style={[
            styles.TextInput,
            {
              borderColor: TextInputTwo.length >= 4 ? 'green' : 'red',
            },
          ]}
          placeholder="TEXT FORM FILED"
          onChangeText={value => setTextInputTwo(value)}
          value={TextInputTwo}
        />
        <TextInput
          style={[
            styles.TextInput,
            {
              borderColor: TextInputThree.length >= 4 ? 'green' : 'red',
            },
          ]}
          placeholder="TEXT FORM FILED"
          onChangeText={value => setTextInputThree(value)}
          value={TextInputThree}
        />
        <TextInput
          style={[
            styles.TextInput,
            {
              borderColor: TextInputFour.length >= 4 ? 'green' : 'red',
            },
          ]}
          placeholder="TEXT FORM FILED"
          onChangeText={value => setTextInputFour(value)}
          value={TextInputFour}
        />
      </View>

      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={handleClear}
          style={[
            styles.ResetButtonContainer,
            {
              backgroundColor: TextInputOne
                ? '#CFE2F3'
                : 'gray' && TextInputTwo
                ? '#CFE2F3'
                : 'gray' && TextInputThree
                ? '#CFE2F3'
                : 'gray' && TextInputFour
                ? '#CFE2F3'
                : 'gray',
            },
          ]}
          disabled={
            TextInputOne
              ? false
              : true && TextInputTwo
              ? false
              : true && TextInputThree
              ? false
              : true && TextInputFour
              ? false
              : true
          }>
          <Text style={styles.ResetButtonText}>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit}
          style={[
            styles.SubmitButtonContainer,
            {
              backgroundColor:
                TextInputOne.length >= 4 &&
                TextInputTwo.length >= 4 &&
                TextInputThree.length >= 4 &&
                TextInputFour.length >= 4
                  ? '#CFE2F3'
                  : 'gray',
            },
          ]}
          disabled={
            TextInputOne.length >= 4 &&
            TextInputTwo.length >= 4 &&
            TextInputThree.length >= 4 &&
            TextInputFour.length >= 4
              ? false
              : true
          }>
          <Text style={styles.SubmitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.FooterAllContainer}>
        <View style={styles.FooterContainer}>
          <Text style={styles.FooterText}>FOOTER</Text>
        </View>
      </View>
    </View>
  );
};
export default OnePage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#F4CDCA',
  },
  HeaderContainer: {
    backgroundColor: '#FFE59A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    paddingVertical: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  FormContainer: {
    height: Dimensions.get('screen').height / 2,
    padding: 20,
    justifyContent: 'space-between',
  },
  TitleContainer: {
    backgroundColor: '#1055CC',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#fff',
    borderRadius: 5,
  },
  TitleText: {
    color: '#fff',
    fontSize: 18,
    paddingVertical: 5,
  },
  TextInput: {
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    textAlign: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    color: '#000',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  ResetButtonContainer: {
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#fff',
    borderRadius: 10,
  },
  ResetButtonText: {
    paddingVertical: 20,
    paddingHorizontal: Dimensions.get('screen').width / 8,
    color: '#000',
  },
  SubmitButtonContainer: {
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#fff',
    borderRadius: 10,
  },
  SubmitButtonText: {
    paddingVertical: 20,
    paddingHorizontal: Dimensions.get('screen').width / 8,
    color: '#000',
  },
  FooterAllContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  FooterContainer: {
    backgroundColor: '#B6D7A8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  FooterText: {
    fontSize: 20,
    color: '#000',
  },
});
