import { Component } from 'react';

class UserFavoriteAnimals extends Component {
    render() {
        const { favAnimals } = this.props;
        return (
            <>
            <ul>
                {favAnimals.map((animal, idx) => (<li key={idx}>{animal}</li> ))}
            </ul>
            </>
        )
    }
}

export default UserFavoriteAnimals;