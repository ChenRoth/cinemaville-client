import React from 'react';
import './App.css';
import { Movie } from './components/Movie/Movie';

interface IMovie {
    id: number;
    title: string;
    description: string;
}

interface IAppState {
    movies: IMovie[];
}

class App extends React.Component {

    public render() {
        return (
            <div className="App">
                <Movie />
            </div>
        );
    }
}

export default App;
