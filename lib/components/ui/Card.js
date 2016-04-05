import React, { PropTypes } from 'react';
import Documentation from './Markdown';
import Container from './Container';

export default function Card(props) {
    const {
        name,
        documentation,
        body,
        options
    } = props;

    let example = body;

    if (options.padding) {
        example = <Container><div className="p1">{example}</div></Container>;
    }

    return (
        <div>
            <Container>
                <div className="p1">
                    {options.heading ? <h3>{name}</h3> : null }
                    {documentation ? <Documentation text={documentation.text} /> : null}
                </div>
            </Container>
            {example}
        </div>
    );
}

Card.propTypes = {
    body: PropTypes.node.isRequired,
    documentation: PropTypes.string.isRequired,
    initialData: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.any.isRequired
};

Card.defaultProps = {
    body: null,
    initialData: {},
    options: {
        frame: true,
        heading: true,
        padding: true,
        hidden: false,
        inspectData: false,
        watchAtom: true,
        history: false,
    }
};
