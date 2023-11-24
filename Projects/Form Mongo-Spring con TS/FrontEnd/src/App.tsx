import HeadBarBehavior from './customHooks/HeadBarBehavior';
import { Formulario } from './components/Fromulario/components/Formulario/Formulario'
import { HeadBar } from './components/HeadBar/HeadBar'
import { ShowAllUsers } from './components/ShowData/ShowAllUsers';
import React from 'react';


function App() {

  const HeadBarFunctionality = HeadBarBehavior()

  return (
    <>
      <HeadBar HeadBarBehaivor={HeadBarFunctionality}/>
      {HeadBarFunctionality.isLoginOption && <Formulario FormName="User Form" BackgroundImgSrc={undefined}/>}
      {HeadBarFunctionality.isShowInfo && <ShowAllUsers InfoName="User Info" BackgroundImgSrc={undefined}/>}
    </>
  )
}

export default App
