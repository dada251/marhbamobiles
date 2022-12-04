import { Routes, Route } from 'react-router-dom';

import Nevigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import Shop from './routes/shop/shop.component';
import AddNewItem from './routes/add-new-item/add-new-item.component';


const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Nevigation />}>
        <Route index element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-in/sign-up' element={<SignUp />} />
        <Route path='addnewitem' element={<AddNewItem />} />
       
      </Route>
    </Routes>
  );
};

export default App;
