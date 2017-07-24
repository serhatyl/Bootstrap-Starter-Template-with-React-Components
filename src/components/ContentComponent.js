import React from 'react';
import '../App.css';

import {SliderComponent} from './SliderComponent';
import {ContainerComponent} from './ContainerComponent';

export class ContentComponent extends React.Component{
  render(){
    return (
      <main>
        <SliderComponent/>
        <ContainerComponent/>
      </main>
    )
  }
}
