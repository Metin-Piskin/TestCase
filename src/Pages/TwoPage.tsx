import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RouterProps} from '../Router';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/ReduxStore';

type TwoPageProps = NativeStackNavigationProp<RouterProps, 'TwoPage'>;

const ColorArray = [
  '#ADD8E6',
  '#C0C0C0',
  '#FFA500',
  '#808080',
  '#A52A2A',
  '#808000',
  '#7FFFD4',
  '#800080',
  '#00FFFF',
  '#0000FF',
  '#FF0000',
  '#FFFF00',
  '#00FF00',
  '#FF00FF',
  '#FFC0CB',
  '#000000',
  '#800000',
  '#008000',
];

const TwoPage = () => {
  const navigation = useNavigation<TwoPageProps>();

  const [color, setColor] = useState(false);

  const TextInputs = useSelector(
    (state: RootState) => state.textInputs.textInputs,
  );

  const MenuPress = () => {
    setColor(true);
  };

  return (
    <View style={styles.Container}>
      <View
        style={[
          styles.HeaderContainer,
          {backgroundColor: color ? '#176B87' : '#FFE59A'},
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.BackText}>￩</Text>
        </TouchableOpacity>
        <Text style={styles.HeaderText}>TEST CASE</Text>
        <TouchableOpacity style={{opacity: 0}} disabled>
          <Text style={styles.BackText}>￩</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{backgroundColor: '#176B87'}}>
        <View style={styles.ScrollViewContainer}>
          {TextInputs.map((e, index) => {
            return (
              <View key={index}>
                {index == 0 ? (
                  <></>
                ) : (
                  <TouchableOpacity
                    onPress={MenuPress}
                    style={[
                      styles.MenüItemContainer,
                      {
                        backgroundColor: ColorArray[index % ColorArray.length],
                      },
                    ]}>
                    <View style={styles.MenüItemInnerContainer}>
                      <Text style={styles.MenüItemTitle}>Name: </Text>
                      <Text style={styles.MenüItemText}>{e.TextOne}</Text>
                    </View>
                    <View style={styles.MenüItemInnerContainer}>
                      <Text style={styles.MenüItemTitle}>Surname: </Text>
                      <Text style={styles.MenüItemText}>{e.TextTwo}</Text>
                    </View>
                    <View style={styles.MenüItemInnerContainer}>
                      <Text style={styles.MenüItemTitle}>City: </Text>
                      <Text style={styles.MenüItemText}>{e.TextThree}</Text>
                    </View>
                    <View style={styles.MenüItemInnerContainer}>
                      <Text style={styles.MenüItemTitle}>E-Mail: </Text>
                      <Text style={styles.MenüItemText}>{e.TextFour}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View
        style={[
          styles.FooterAllContainer,
          {backgroundColor: color ? '#176B87' : '#B6D7A8'},
        ]}>
        <View style={styles.FooterContainer}>
          <Text style={styles.FooterText}>FOOTER</Text>
        </View>
      </View>
    </View>
  );
};

export default TwoPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#176B87',
  },
  HeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  BackText: {
    color: '#000',
    fontSize: 35,
    alignSelf: 'center',
  },
  HeaderText: {
    paddingVertical: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  ScrollViewContainer: {
    flex: 1,
  },
  MenüItemContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 5,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderRadius: 20,
    borderColor:'#053B50'
  },
  MenüItemInnerContainer: {
    flexDirection: 'row',
  },
  MenüItemTitle: {
    color: '#fff',
    fontSize: 18,
  },
  MenüItemText: {
    color: '#fff',
    fontSize: 18,
    width: Dimensions.get('screen').width / 1.57,
  },

  FooterAllContainer: {},
  FooterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  FooterText: {
    fontSize: 20,
    color: '#000',
  },
});
