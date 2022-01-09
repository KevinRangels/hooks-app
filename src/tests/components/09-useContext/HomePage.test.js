import { mount } from 'enzyme';
import React from 'react';
import { HomePage } from '../../../components/09-useContext/HomePage';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en componente <HomePage/>', () => {
  const user = {
    name: 'Kevin',
    emial: 'test@mail.com',
  };

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomePage />
    </UserContext.Provider>,
  );

  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
