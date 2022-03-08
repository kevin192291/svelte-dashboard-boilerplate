import { writable } from 'svelte/store';

export const sideMenuOpen = writable(false);
export const headerMenuOpen = writable(false);
export const showHeader = writable(true);
export const showFooter = writable(true);
export const jwtToken = writable('');

export const menuItems = writable([
  { path: '/', label: 'Home', icon: 'house-fill', isActive: false },
  { path: 'dashboard', label: 'Dashboard', icon: 'pie-chart-fill', isActive: false },
  { path: 'assets', label: 'Assets', icon: 'box-seam', isActive: false },
  { path: '/account/login', label: 'Login', icon: 'file-lock2', isActive: false },
  { path: 'https://CropWatch.io', label: 'Website', icon: 'globe2', isActive: false },
]);