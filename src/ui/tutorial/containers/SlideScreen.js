import React from 'react';
import { StyleSheet, View, Text, SliderBase, Image, Button, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import LoginMain from '../../login/components/LoginMain';
import EmailAuthScreen from '../../register/containers/EmailAuthScreen';
import EmailConfirmScreen from '../../register/containers/EmailConfirmScreen';
import PersonalityScreen from '../../register/containers/PersonalityScreen';
import RegisterScreen from '../../register/containers/RegisterScreen';
import CreateGroupScreen from '../../group/create/containers/CreateGroupScreen';
import GroupDetailScreen from '../../group/detail/containers/GroupDetailScreen';
import ApplicationScreen from '../../apply/containers/ApplicationScreen';
import ApplicationManageScreen from '../../apply/containers/ApplicationManageScreen';
import ComplimentScreen from '../../review/containers/ComplimentScreen';
import BestPartnerScreen from '../../review/containers/BestPartnerScreen';
import GroupingScreen from '../../group/grouping/containers/GroupingScreen';
import PostingScreen from '../../group/detail/containers/PostingScreen';
import GroupCategoryScreen from '../../group/grouping/containers/GroupCategoryScreen';
import MyProfileScreen from '../../myprofile/containers/MyProfileScreen';
 
const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontFamily: 'Inter-ExtraBold',
        fontWeight: '700', 
        margin: 20,
        color: '#1249FC'
    },
    text: {
        fontSize: 24,
        lineHeight: 29,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        marginTop: 25,
        color: 'black',
        fontWeight: '800'
    },
    button:{
        backgroundColor: '#1249FC',
        padding: 15,
        marginBottom: 40,
        borderRadius: 8
    },
    buttonText:{
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
        color: 'white',
        fontWeight: '800',
    }
})

const slides = [
  {
    key: 1,
    title: `Here's your Gloddy!`,
    text: `지금 나와 가까운 외국인\n친구들과 모임을 즐겨보세요!`,
    image: require('../../../assets/image/tutorial/slide_1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: `Here's your Gloddy!`,
    text: `여러분이 조금 더 믿을 만한\n모임을 할 수 있도록 준비했어요!`,
    image: require('../../../assets/image/tutorial/slide_2.png'),
    backgroundColor: '#febe29',
  },
];
 
export default class SlideScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showRealApp: false
        };
    }
  
  _renderItem = ({ item }) => {
    return (
      <View style={{flex:0.9, justifyContent:'center', alignItems: 'center'}}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  }
  _renderDoneButton = () => {
    return (
          <TouchableOpacity style={styles.button} onPress={()=>{this.setState({ showRealApp: true });}}>
            <Text style={styles.buttonText}>친구 만나러 가기</Text>
        </TouchableOpacity>
    );
  };
  render() {
    if (this.state.showRealApp) {
      return (
        <LoginMain/>
      )
    } else {
      return (
      <AppIntroSlider
      activeDotStyle={{width: 20, backgroundColor: '#1249FC'}}
      renderItem={this._renderItem}
      data={slides}
      onDone={this._onDone}
      showNextButton={false}
      bottomButton={true}
      renderDoneButton={this._renderDoneButton}
      />
      );
    }
  }
}

