import { Component } from 'react';
import './Exercises.css';

class Exercise extends Component {
    render() {
        const { favAnimals } = this.props;

        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };

        return (
            <>
            <h1 className='exercise-header' style={style_header}>This is a Header</h1>
            <p className='para'>This is a paragraph</p>
            <a href="#">This is a link</a>
            <h2>This is a Form:</h2>
            <p>Enter your name:</p>
            <form>
                <input type="text">
                </input>
                <button type="submit">
                    Submit
                </button>
            </form>
            <h3>Here is an image:</h3>
            <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1603797780927/S6loCK6fY.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" width="500px"></img>
            <h3>This is a list:</h3>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            

            </>
        )
    }
}

export default Exercise;