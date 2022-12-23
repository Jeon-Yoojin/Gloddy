import React from "react";

import Header from "../../../common/Header";
import BackArrow from "../../../assets/image/backarrow.svg";

const RegisterHeader = () => {
    return (
        < Header
            title={'회원가입'}
            noIcon={false}
            leftIcon={<BackArrow/>}
            leftIconPress={() => { console.log('pressed!') }}
        />
    )
}

export default RegisterHeader;