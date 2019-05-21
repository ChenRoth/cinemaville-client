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
            movies: []
        }
        console.log('constructor');
    }

    // this method will be called after the first render, only ONCE!
    public async componentDidMount() {
        console.log('component did mount');
        // get list of all movies
        const response = await fetch('http://localhost:4000/movies');
        const movies = await response.json();
        this.setState({
            movies,
        });
    }

    public render() {
        const { movies } = this.state;
        console.log('render');
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
