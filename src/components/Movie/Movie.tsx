import * as React from 'react';

export interface IMovieProps {
    id: number;
    title: string;
    description: string;
}

export class Movie extends React.Component<IMovieProps> {
    public render() {
        const { id, title, description } = this.props;
        return (
            <div>
                <h4>{title}</h4>
                <p>
                    {description}
                </p>
            </div>
        )
    };
}