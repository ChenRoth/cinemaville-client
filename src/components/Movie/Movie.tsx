import * as React from 'react';
import './Movie.css';

export interface IMovieProps {
    id: number;
    title: string;
    description: string;
}

export class Movie extends React.Component<IMovieProps> {
    public render() {
        const { id, title, description } = this.props;
        return (
            <div className="movie">
                <h4 className="title">{title}</h4>
                <p className="description">
                    {description}
                </p>
                <button onClick={this.delete}>פח</button>
            </div>
        )
    };

    delete = async () => {
        const { id } = this.props;
        const response = await fetch(`http://localhost:4000/movies/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 200) {
            console.log('deleted!')
        } else {
            console.error('not deleted!');
        }
    }
}