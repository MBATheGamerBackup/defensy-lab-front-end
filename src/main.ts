import './app.css';
import App from './App.svelte';
import "./interceptors/axios";

const app = new App({
  target: document.body
});

export default app;
