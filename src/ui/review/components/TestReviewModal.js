import React, { useState } from "react";
import { View , Text } from "react-native";
import DeriveReviewModal from "./DeriveReviewModal";

const TestReviewModal = () => {
    const [showDeriveReviewModal, setShowDeriveReviewModal] = useState(false);
    return(
        <View>
            <Text onPress={()=>{setShowDeriveReviewModal(true)}}>모달 테스트</Text>
            <DeriveReviewModal showBottomSheet={showDeriveReviewModal} hide={()=>{setShowDeriveReviewModal(false)}}/>
        </View>
    )
}

export default TestReviewModal;