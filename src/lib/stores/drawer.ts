import { writable } from 'svelte/store';

export const drawerStore = writable(false);

export const openAndCloseDrawer = () => {
	drawerStore.set(!drawerStore);
};

export const openAndCloseAfterTimeout = () => {
	drawerStore.set(true);
	setTimeout(() => {
		drawerStore.set(false);
	}, 1500);
};
