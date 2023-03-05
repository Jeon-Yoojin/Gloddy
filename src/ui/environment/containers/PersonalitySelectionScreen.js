import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';

function PersonalitySelectionScreen({route}) {
  const {width} = useWindowDimensions();

  // navigation
  const navigation = useNavigation();
  const updatePersonality = route.params.setPersonality;
  const userPersonality = route.params.personality;

  // state
  const [personalitys, setPersonalitys] = useState(userPersonality);

  return (
    <View style={[styles.container, {width: width}]}>
      <View style={styles.upperContainer}>
        <View style={styles.upperUpperTextView}>
          <Text
            style={[
              styles.boldText,
              {fontSize: 20, letterSpacing: 2, color: 'black'},
            ]}>
            사용자님의 성격을{'\n'}선택해주세요!
          </Text>
        </View>
        <View style={styles.upperLowerTextView}>
          <Text style={[styles.boldText, {fontSize: 13}]}>
            3개 이상 선택해주세요.
          </Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <ScrollView contentContainerStyle={styles.lowerScrollView}>
          {personalitys.map((item, index) => (
            <Personality
              personalitys={personalitys}
              personalityText={item.personality}
              key={index}
              index={index}
              isSelected={item.isSelected}
              setPersonalitys={setPersonalitys}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.lowerLowerContainer}>
        <Pressable
          onPress={() => {
            updatePersonality(personalitys);
            navigation.pop();
          }}>
          <View style={styles.completeBtnView}>
            <Text style={[styles.boldText, {color: 'white'}]}>완료</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default PersonalitySelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  upperContainer: {
    flex: 2,
    marginLeft: 20,
  },
  lowerContainer: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  lowerLowerContainer: {
    flex: 2,
    justifyContent: 'center',
  },

  //
  upperUpperTextView: {
    flex: 4,
    justifyContent: 'center',
  },
  upperLowerTextView: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  lowerScrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  completeBtnView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  //
  boldText: {
    fontWeight: 'bold',
  },
});

function Personality({
  personalityText,
  isSelected,
  setPersonalitys,
  index,
  personalitys,
}) {
  const newPersonalitys = [...personalitys];
  const [pressed, setPressed] = useState(isSelected);
  const [style, setStyle] = useState(
    pressed ? subStyles.container_pressed : subStyles.container_notPressed,
  );
  const [font, setFont] = useState(
    pressed ? subStyles.text_pressed : subStyles.text_notPressed,
  );

  function toggleStyle() {
    if (pressed) {
      setPressed(false);
      setStyle(subStyles.container_notPressed);
      setFont(subStyles.text_notPressed);
      newPersonalitys[index].isSelected = false;
      setPersonalitys(newPersonalitys);
    } else {
      setPressed(true);
      setStyle(subStyles.container_pressed);
      setFont(subStyles.text_pressed);
      newPersonalitys[index].isSelected = true;
      setPersonalitys(newPersonalitys);
    }
  }

  return (
    <Pressable style={[style]} onPress={toggleStyle}>
      <View>
        <Text style={[font]}>{personalityText}</Text>
      </View>
    </Pressable>
  );
}

const subStyles = StyleSheet.create({
  container_notPressed: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    marginRight: 20,
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
  },
  container_pressed: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    marginRight: 20,
    marginBottom: 10,
    paddingVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'blue',
  },
  //
  text_notPressed: {
    color: 'gray',
  },
  text_pressed: {
    color: 'white',
  },
});
