import { useNavigation } from '@react-navigation/native';
import {useMutation} from 'react-query';
import {login} from '../api/auth';
import useAuthActions from '../redux/hooks/useAuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/slices';

export default function useLogin(){
    const email = useSelector((state:RootState)=>state.auth.user.email)

    const navigation = useNavigation();
    const {setToken} = useAuthActions();

    const mutation = useMutation(login,{
        onSuccess: (response)=>{
            setToken(response.data.token);
            console.log('Success', response.data);
            //token, userID 저장
            
            AsyncStorage.setItem(
                'authData',
                JSON.stringify({
                    token: response.data.token,
                    email: email
                })
            )

            if(true){{/* 로그인 성공 */}
                navigation.navigate('MainScreen');
            }
            else{{/* 로그인 실패 */}

            }
        },
        onError: (error:any)=>{
            console.log('error', error.response);
        },
    })
    return mutation;
}