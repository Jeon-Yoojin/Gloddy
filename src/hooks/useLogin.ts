import { useNavigation } from '@react-navigation/native';
import {useMutation} from 'react-query';
import {login} from '../api/auth';
import useAuthActions from '../redux/hooks/useAuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/slices';
import client from '../api/client';

export default function useLogin(){
    const email = useSelector((state:RootState)=>state.auth.user.email)

    const navigation = useNavigation();
    const {setToken, signIn, setEmail} = useAuthActions();

    const mutation = useMutation(login,{
        onSuccess: (response)=>{
            const userID = JSON.parse(response.config.data).email;
            setEmail(userID);
            
            //모든 api 요청 콜마다 token 정보 담기도록
            client.defaults.headers.common['X-AUTH-TOKEN'] = response.data.token

            setToken(response.data.token);
            console.log('Success', response.data);
            
            AsyncStorage.setItem(
                'authData',
                JSON.stringify({
                    token: response.data.token,
                    email: email
                })
            );

            signIn(response.data.userId);

            navigation.navigate('MainScreen');
        },
        onError: (error:any)=>{
            console.log('login error', error.response.status);
        },
    })
    return mutation;
}