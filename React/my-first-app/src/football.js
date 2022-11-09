export default function Football (){
const players = ["Player 1", "Player 2", "Player 3"];
return (
    <ul>
        {
            players.map((player, index) =>
            <li key = {index}>{player}</li>
            )
        }
    </ul>
);
}
