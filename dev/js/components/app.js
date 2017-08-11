import React from 'react';
require('../../scss/style.scss');

import Userlist from '../containers/user-list';


/*
function App(){
    <div>
        <h2></h2>
    </div>
}
*/

//EVENTUALLY WHERE YOU PUT Static COMPONENTS

const App = () => (
<div>
    <h2>User name list</h2>
    <hr/>
    <Userlist />
    <h2>User Deets</h2>
      <UserDetail />
</div>
);

export default App;