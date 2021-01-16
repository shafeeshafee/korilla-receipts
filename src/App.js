import "./App.css";
import info from "./components/Records";
import { useState } from "react";
import Receipt from "./components/Receipt";

function App() {
	const [receipts, setReceipts] = useState(info);
	return (
		<div className="App-container">
			{receipts.map((personalDish, index) => {
				return <Receipt {...personalDish} key={index} />;
			})}
		</div>
	);
}

export default App;
