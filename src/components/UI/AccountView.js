import {useState} from 'react';

const AccountView = props => {
    const [showInfo, setShowInfo] = useState(false);

    const showInfoHandler = () => setShowInfo(true);
    const closeInfoHandler = () => setShowInfo(false);

    return (
        <div>
            {!showInfo && <button onClick={showInfoHandler}>View info</button>}
            {showInfo && <div>
                <button onClick={closeInfoHandler}>X</button>
                {props.items.map((item, idx) => {
                    return <p key={`${idx}.${item.name}`}>{item.name}</p>
                })}
                {Object.entries(props.stats).map((stat, idx) => {
                    return <p key={`${idx}.${stat}`}>{stat}</p>
                })}
            </div>}
        </div>
    )
}

export default AccountView;