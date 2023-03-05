import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  Pressable,
  LogBox,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

{
  /*
TODO:
personality 목록 (문자열 배열)
produceText (문자열) 은 각각 api로 받아와야.
*/
}

const produceText =
  '안녕하세요. 경희대학교에 재학 중인 글로디 관리자입니다. 잘 부탁드려요!';

function ProduceModifyScreen({contentText}) {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);
  const [personality, setPersonality] = useState([
    {personality: '외향적인', isSelected: true},
    {personality: '내향적인', isSelected: false},
    {personality: '신중한', isSelected: false},
    {personality: '친절한', isSelected: false},
    {personality: '유머러스한', isSelected: false},
    {personality: '낙천적인', isSelected: false},
    {personality: '사교적인', isSelected: false},
    {personality: '솔직한', isSelected: false},
    {personality: '책임감 있는', isSelected: false},
    {personality: '차분한', isSelected: false},
    {personality: '활동적인', isSelected: false},
    {personality: '센스있는', isSelected: false},
    {personality: '엉뚱한', isSelected: false},
    {personality: '3차원의', isSelected: false},
    {personality: '리더십 있는', isSelected: false},
    {personality: '트렌드에 민감한', isSelected: false},
  ]);
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={[styles.itemContainer, {width: width - 20}]}>
          <Text style={styles.boldText}>자기소개</Text>
          <TextInput
            style={[styles.inputText]}
            textAlignVertical="top"
            value={produceText}
          />
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={[styles.itemContainer, {width: width - 20}]}>
          <Text style={styles.boldText}>성격</Text>
          <View style={styles.personalityList}>
            {personality.map(
              (item, index) =>
                item.isSelected && (
                  <Personality personalityText={item.personality} key={index} />
                ),
            )}

            <View style={styles.iconContainer}>
              <Pressable
                onPress={() => {
                  navigation.navigate('PersonalitySelectionScreen', {
                    setPersonality: setPersonality,
                    personality: personality,
                  });
                }}>
                <AntIcon name="pluscircle" color="blue" size={20} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ProduceModifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upperContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemContainer: {},
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  //
  personalityList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 10,
  },
  //
  inputText: {
    backgroundColor: '#80808030',
    width: '100%',
    height: '80%',
    borderRadius: 10,
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

function Personality({personalityText}) {
  return (
    <View style={subStyles.container}>
      <Text style={{fontWeight: 'bold'}}>{personalityText}</Text>
    </View>
  );
}

const subStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#80808030',
    margin: 4,
  },
});
