import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {authorize, signIn, logout, setEmail, setToken} from '../slices/auth';
import {useMemo} from 'react';

export default function useAuthActions() {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators({authorize, setToken, signIn, logout, setEmail}, dispatch),
    [dispatch],
  );
}
