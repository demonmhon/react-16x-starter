import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import { AppRoute } from './route';
import Pages from './pages';

describe('Route', () => {
  test('should render home page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <AppRoute />
      </MemoryRouter>
    );
    expect(wrapper.find(Pages.Home)).toHaveLength(1);
    expect(wrapper.find(Pages.Error404)).toHaveLength(0);
  });

  test('should render about page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']} initialIndex={0}>
        <AppRoute />
      </MemoryRouter>
    );
    expect(wrapper.find(Pages.About)).toHaveLength(1);
    expect(wrapper.find(Pages.Error404)).toHaveLength(0);
  });

  test('should render 404 page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random-page']} initialIndex={0}>
        <AppRoute />
      </MemoryRouter>
    );
    expect(wrapper.find(Pages.Home)).toHaveLength(0);
    expect(wrapper.find(Pages.Error404)).toHaveLength(1);
  });
});
