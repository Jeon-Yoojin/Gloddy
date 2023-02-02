import React, {useState} from 'react';
import { Dimensions, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { managePanProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import Modal from 'react-native-modal';
import ModalHeader from '../ui/group/create/components/ModalHeader';
import CustomButton from './CustomButton';

Date.prototype.format = function(f) {
  if (!this.valueOf()) return " ";

  var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  var d = this;
   
  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
      switch ($1) {
          case "yyyy": return d.getFullYear();
          case "yy": return (d.getFullYear() % 1000).zf(2);
          case "MM": return (d.getMonth() + 1).zf(2);
          case "dd": return d.getDate().zf(2);
          case "E": return weekName[d.getDay()];
          case "HH": return d.getHours().zf(2);
          case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
          case "mm": return d.getMinutes().zf(2);
          case "ss": return d.getSeconds().zf(2);
          case "a/p": return d.getHours() < 12 ? "오전" : "오후";
          default: return $1;
      }
  });
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

export default function CustomDatePicker({setDateValue, placeholder, placeholderStyle, style, rightIcon}) {
    //const placeholder = "생년월일을 선택해주세요.";
    const [open, setOpen] = useState(false);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [text, onChangeText] = useState("");
    
    const hide = ()=> {setShowBottomSheet(false)}

    return (
      <>
            <TouchableOpacity
                onPress={() => { setOpen(true); setShowBottomSheet(true) }}
            >
                <TextInput
                    pointerEvents="none"
                    style={style? style:styles.textInput}
                    placeholder={placeholder}
                    placehoderStyle={placeholderStyle}
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={text}
                    //onEndEditing={onEndEditing}
                />
                <DateModal showBottomSheet={showBottomSheet} hide={hide}/>
            </TouchableOpacity>
            </>
  );
}

const DateModal = ({showBottomSheet, hide})=>{
    const [date, setDate] = useState(new Date());
    const handleConfirm = (date) => {
        setOpen(false);
        setDate(date);
        onChangeText(date.format("yyyy-MM-dd"))
        
        setDateValue(date.format("yyyy-MM-dd"))
    };

    return(
        <Modal
            isVisible={showBottomSheet}
            useNativeDriver={true}
            onBackdropPress={hide}
            transparent={true}
            style={{ justifyContent: 'flex-end', margin: 0 }}
        >
            <View style={styles.backDrop}>
                <View style={{paddingVertical: 5}}>
                <ModalHeader title={'생년월일'} />
                </View>
                <DatePicker
                    mode="date"
                    androidVariant='nativeAndroid'
                    locale='ko'
                    maximumDate={new Date("2010-12-31")}
                    minimumDate={new Date("1990-01-01")}
                    onConfirm={handleConfirm}
                    date={date}
                    style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center'}}
                />
                <CustomButton
                    text={'완료'}
                    color={'#1249FC'}
                    textColor={'#FFFFFF'}
                    onPress={() => { console.log('pressed') }}
                    style={{ alignItem: 'center' }}
                />
            </View>
        </Modal>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({ 
    textInput: {
        fontSize: 16,
        color: '#000000',
        height: 52, 
        width: windowWidth*0.9, 
        borderColor: '#B7B7B7',
        borderWidth: 1, 
        borderRadius: 10,
        //backgroundColor: '#F6F6F6',
    },
    inputBox:{
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
    },
    backDrop: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderTopStartRadius: 36,
        borderTopEndRadius: 36,
        height: 350,
        width: '100%',
    },
})