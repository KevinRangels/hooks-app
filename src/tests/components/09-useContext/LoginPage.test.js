import React from 'react';
import { mount, shallow } from 'enzyme';
import { LoginPage } from '../../../components/09-useContext/LoginPage';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Prubas en el componente <LoginPage/>', () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider
      value={{
        setUser,
      }}
    >
      <LoginPage />
    </UserContext.Provider>,
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de ejecutar el SetUser con el argumento esperado', () => {
    wrapper.find('button').prop('onClick')();

    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: 'Kevin',
    });
  });
});
