import App from './App.svelte';

import './styles/main.scss';

const app = new App({
	target: document.body,
	props: {
		name: 'Svelte Font Previewer'
	}
});

export default app;