import { Fragment } from 'react';
import MyList from '../components/MyList';
import UpdateList from '../components/UpdateList';

function Home() {
  return (
    <div className={`home`}>
      <Fragment>
        <MyList />
        <UpdateList />
      </Fragment>
    </div>
  );
}

export default Home;