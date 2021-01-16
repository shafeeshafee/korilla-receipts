import "./Receipt.css"

const Receipt = ({person, ...data}) => {
    return (
        <div className="receipt-container">
            <h3>Receipt for: {(person).toUpperCase()}</h3>
            <ul>
                <li><span class="receipt-titles">Main:</span> {data.order.main}</li>
                <li><span class="receipt-titles">Protein:</span> {data.order.protein}</li>
                <li><span class="receipt-titles">Rice:</span> {data.order.rice}</li>
                <li><span class="receipt-titles">Sauce:</span> {data.order.sauce}</li>
                <li><span class="receipt-titles">Drink:</span> {data.order.drink}</li>

                <li><span class="receipt-titles">Toppings:</span>
                    {data.order.toppings.map((item, index) => {
                        return ` ${index + 1}\n: ${item} `;
                    })}
                    
                    </li>

                <li class="cost"><span class="receipt-titles cost">Cost:</span>$ <span class="cost-amount"> {data.order.cost}</span></li>
            </ul>
        </div>
    )
}


export default Receipt;