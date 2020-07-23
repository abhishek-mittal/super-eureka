import { render } from '@testing-library/react';
import React from 'react';
import DashboardRoutes from './routes';

it('renders Dashboard', () => {
  render(<DashboardRoutes />);
});