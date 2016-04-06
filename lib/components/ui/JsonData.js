import React, { Component, PropTypes } from 'react';

let dispatch;

function Col(data) {
    const keys = Object.keys(data);
    const len = keys.length;
    return (
        <span className="flex gray">
            <span className="gray mr1">{'{'}</span>
            <span>
                {keys.map((key, i) => {
                    return (
                        <span className="flex" key={i}>
                            {dispatch(key)}
                            {': '}
                            {dispatch(data[key])}
                            {i < (len - 1) ? <span className="self-end">,</span> : null}
                        </span>
                    );
                })}
            </span>
            <span className="self-end gray ml1">{'}'}</span>
        </span>
    );
}


function Arr(data) {
    const len = data.length;
    return (
        <span className="flex gray">
            <span className="gray mr1">{'['}</span>
            <span>
                {data.map((n, i) => {
                    return (
                        <span className="flex" key={i}>
                            {dispatch(n)}
                            {i < (len - 1) ? <span className="self-end">,</span> : null}
                        </span>
                    );
                })}
            </span>
            <span className="self-end gray ml1">{']'}</span>
        </span>
    );
}

function Str(data) {
    return (
        <span className="olive">{JSON.stringify(data)}</span>
    );
}

function Data(data) {
    return (
        <span className="black">{data.toString()}</span>
    );
}

dispatch = function dispatch(data) {
    if (Array.isArray(data)) {
        return Arr(data);
    }
    switch(typeof data) {
    case 'object':
        return Col(data);
        break;
    case 'string':
        return Str(data);
        break;
    default:
        return Data(data);
        break;
    }
};

export default class JsonData extends Component {
    static propTypes = {
        data: PropTypes.any.isRequired,
    }

    render() {
        const { data } = this.props;
        return (
            <pre className="p1" style={{whiteSpace: 'pre', overflow: 'auto'}}>
                {dispatch(data)}
            </pre>
        );
    }
}
