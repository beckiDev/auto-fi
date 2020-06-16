import React from 'react';
import { mount } from 'enzyme'
import App from './App.js';

describe('App', () => {
    let app = mount(<App test={{}}/>)
    it('App Renders child component Header', ()=>{
        console.log(app.debug());
        
    })

})

