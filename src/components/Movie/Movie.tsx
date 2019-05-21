import * as React from 'react';
import './Movie.css';

export interface IMovieProps {
    id: number;
    title: string;
    description: string;
    onDelete(id: number): void;
}

export class Movie extends React.Component<IMovieProps> {
    public render() {
        const { id, title, description } = this.props;
        return (
            <div className="movie">
                <div className="header">
                    <h4 className="title">{title}</h4>
                    <button className="deleteButton" onClick={this.delete}>🗑️</button>
                </div>
                <div className="content">
                    <p className="description">
                        {description}
                    </p>
                </div>
            </div>
        )
    };

    delete = async () => {
        const { id, onDelete } = this.props;
        const response = await fetch(`http://localhost:4000/movies/${id}`, {
            method: 'DELETE'
        });
        if (response.status === 200) {
            onDelete(id);
        } else {
            console.error('not deleted!');
        }
    }
}