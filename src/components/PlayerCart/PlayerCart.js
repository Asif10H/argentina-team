import React from 'react';
import './PlayerCart.css'


const PlayerCart = (props) => {
    console.log(props);
    const player = props.player;
    console.log(player.length);
    const totalSalary = player.reduce((total, player) => total + player.salary, 0)
    return (
        <div className="card salary-info">
            <div className="card-header">Total Number of players: {player.length}</div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Total Salary: {totalSalary}</li>
            </ul>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    player.map(player =>
                        <div class="col">
                            <div class="card">
                                <img src={player.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6 className="card-title">Name: {player.name}</h6>
                                    <h6 className="card-text">Position: {player.position}</h6>
                                    <h6 className="card-text">Salary: {player.salary}</h6>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PlayerCart;