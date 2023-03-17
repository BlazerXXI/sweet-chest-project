import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import { Sketch } from './components/Sketch/Sketch';

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Hero />
				<Catalog />
				<Sketch />
			</main>
			<footer></footer>
		</>
	);
}
export default App;
