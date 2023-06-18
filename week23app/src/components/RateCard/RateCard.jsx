import './RateCard.css';

function RateCard(props) {
    const {name, price, speed, traffic, isSelected} = props;

    return (
        <div className = {'rate-card ' + (isSelected ? 'selected' : '')}>
            <div className = "rate-name">{name}</div>
            <div className = "rate-price-wrapper">
                <div className = "rate-currency">руб.</div>
                <div className = "rate-price">{price}
                    <span>/мес.</span>
                </div>
            </div>
            <div className = "rate-speed">{speed}</div>
            <div className = "rate-traffic">{traffic}</div>
        </div>  
    );
}

export default RateCard;