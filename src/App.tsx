import React from 'react';
import './App.css';
import { Movie, IMovieProps } from './components/Movie/Movie';

interface IAppState {
    movies: IMovieProps[];
    isLoading: boolean;
}

class App extends React.Component<any, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            movies: [],
            isLoading: true,
        }
    }

    // this method will be called after the first render, only ONCE!
    public async componentDidMount() {
        // get list of all movies
        let movies = this.state.movies;
        try {
            const response = await fetch('http://localhost:4000/movies');
            movies = await response.json();
        } finally {
            this.setState({
                movies,
                isLoading: false,
            });
        }
    }

    public render() {
        const { movies, isLoading } = this.state;
        if (isLoading) {
            return <div>LOADING MOVIES</div>
        }
        return (
            <div className="App">
                {movies.map(movie =>
                    <Movie key={movie.id} {...movie}
                        onDelete={this.onDelete}
                    />
                )}
            </div>
        );
    }

    onDelete = (id: number) => {
        const { movies } = this.state;
        const moviesAfterDelete = movies.filter(movie => movie.id !== id)
        this.setState({
            movies: moviesAfterDelete
        });
    }
}

export default App;
