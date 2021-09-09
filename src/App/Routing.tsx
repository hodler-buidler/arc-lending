import { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import VaultsPage from '@pages/VaultsPage/VaultsPage';
import BorrowPage from '@pages/BorrowPage/BorrowPage';

const Routing: FC = () => {
  return (
    <Switch>
      <Route exact strict path="/vaults" component={VaultsPage} />
      <Route exact strict path="/borrow" component={BorrowPage} />
      <Route path="*">
        <Redirect to="/vaults" />
      </Route>
    </Switch>
  ); 
}

export default Routing;