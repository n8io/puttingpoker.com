import { useHistory } from 'react-router-dom';
import { useAuth } from 'shared/useAuth';
import { useTimeout } from 'shared/useTimeout';
import { Route } from 'types/route';

const Logout = () => {
  const history = useHistory();
  const { logout } = useAuth();

  useTimeout(() => {
    logout();
    history.push(Route.LOGIN.path);
  }, 1);

  return null;
};

export { Logout };
