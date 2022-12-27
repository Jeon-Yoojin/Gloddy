import { request, PERMISSIONS, RESULTS } from "react-native-permissions";


const GetPermission = async () => {
    try{
        const result = await request(Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
        switch (result) {
            case RESULTS.UNAVAILABLE:
                console.log('This feature is not available (on this device / in this context)');
                return false;
            case RESULTS.DENIED:
                console.log('The permission has not been requested / is denied but requestable');
                return false;
            case RESULTS.LIMITED:
                console.log('The permission is limited: some actions are possible');
                return false;
            case RESULTS.GRANTED:
                console.log('The permission is granted');
                return true;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                return false;
        }
    } catch (error){
        console.log("getPermissions error", error);
    }
};

export default GetPermission;