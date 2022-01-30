import { writable } from 'svelte/store';

export const sideMenuOpen = writable(false);
export const headerMenuOpen = writable(false);

export const menuItems = writable([
  { path: '/', label: 'Home', icon: '', isActive: false },
  { path: 'dashboard', label: 'Dashboard', icon: '', isActive: false },
]);