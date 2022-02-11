import { writable } from 'svelte/store';

export const sideMenuOpen = writable(false);
export const headerMenuOpen = writable(false);
export const showHeader = writable(true);
export const showFooter = writable(true);

export const menuItems = writable([
  { path: '/', label: 'Home', icon: '', isActive: false },
  { path: 'dashboard', label: 'Dashboard', icon: '', isActive: false },
  { path: 'account/login', label: 'Login', icon: '', isActive: false },

  { path: 'https://CropWatch.io', label: 'Website', icon: '', isActive: false },
]);