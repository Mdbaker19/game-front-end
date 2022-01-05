import Card from './UI/Card';

const Enemy = props => {
    console.log("In Enemy  ", props.enemy);
    return (
        <Card>
            <h1>{props.enemy.type}</h1>
            <h3>Lvl: {props.enemy.level}</h3>
            <h3>HP: {props.enemy.health}</h3>
        </Card>
    )
}

export default Enemy;