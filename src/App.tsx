import React from 'react';
import './App.css';
import { Movie, IMovieProps } from './components/Movie/Movie';

interface IAppState {
    movies: IMovieProps[];
}

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            movies: [{
                id: 1,
                title: 'Shrek 3',
                description: 'Giant green guy gets the princess',
            }]
        }
    }

    public render() {
        const { movies } = this.state;
        return (
            <div className="App">
                {movies.map(movie =>
                    <Movie key={movie.id} {...movie} />
                )}
            </div>
        );
    }
}

export default App;
