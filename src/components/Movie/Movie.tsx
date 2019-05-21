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
            </div>
        )
    };
}