import React from "react"
import { Text } from "react-native"

import ParticipatingGroupList from "../components/ParticipatingGroupList"

const groups = [
    {
        title: `Let's go for a walk`,
        place: '동대문구 회기동',
        meetDate: '04.27',
    },
    {
        title: `Let's go`,
        place: '월계동',
        meetDate: '04.27',
    },
    {
        title: `Let's go`,
        place: '월계동',
        meetDate: '04.27',
    },
    {
        title: `Let's go`,
        place: '월계동',
        meetDate: '04.27',
    },
    {
        title: `Let's go`,
        place: '월계동',
        meetDate: '04.27',
    },
    {
        title: `Let's go`,
        place: '월계동',
        meetDate: '04.27',
    },
    {
        title: `Let's go`,
        place: '월계동',
        meetDate: '04.27',
    },
    {
        title: `Let's go`,
        place: '월계동',
        meetDate: '04.27',
    },

]

const ParticipatingGroupScreen = () => {
    return (
        <ParticipatingGroupList groups={groups} />
    )
}

export default ParticipatingGroupScreen;