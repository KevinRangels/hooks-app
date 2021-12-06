import React from 'react'
import { shallow } from 'enzyme'
import { HookApp } from '../HooksApp'
import "@testing-library/jest-dom"

describe('Pruebas in <HookApp>', () => {
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow( <HookApp/> )
        expect(wrapper).toMatchSnapshot()     
    })
    
})
