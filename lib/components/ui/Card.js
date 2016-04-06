import React, { PropTypes } from 'react';
import Documentation from './Markdown';
import Container from './Container';
import StateRecorder from './StateRecorder';

export default function Card(props) {
    const {
        name,
        documentation,
        body,
        initialData,
        options
    } = props;

    let example = body;

    if (typeof body === 'function') {
        example = (
            <StateRecorder
                fn={body}
                historyLimit={100}
                initialState={initialData}
                showHistory={options.history}
                showState={options.inspectData}
            />
        );
    }

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
    body: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]).isRequired,
    documentation: PropTypes.shape({
        isDoc: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
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
