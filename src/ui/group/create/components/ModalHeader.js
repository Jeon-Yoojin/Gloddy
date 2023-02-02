import React from "react";
import { Text, Dimensions } from "react-native";

import X_shape from '../../../../assets/image/X_shape.svg';
import BackArrow from '../../../../assets/image/backarrow.svg';
import Header from "../../../../common/Header";

const windowWidth = Dimensions.get("window").width;

const ModalHeader = ({title}) => {
    return (
        <Header
            title={<Text style={{ fontSize: 18 }}>{title}</Text>}
            noIcon={false}
            leftIcon={<BackArrow />}
            rightIcon={<X_shape />}
            headerStyle={{width: windowWidth}}
            leftIconPress={() => { }}
            rightIconPress={() => { }}
            noBorderLine={true}
        />
    )
}

export default ModalHeader;