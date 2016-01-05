import React, { Component, PropTypes } from 'react';
import Container from './Container';
import Breadcrumb from './Breadcrumb';

import 'basscss';

export class App extends Component {
    render() {
        const foo = this.props.namespaces.reduce((m, card) => {
            const key = card.path.join('/');
            if (!m.hasOwnProperty(key)) {
                m[key] = [];
            }
            m[key].push(card.func);
            return m;
        }, {});

        const page = 'PinUI/SegmentedControl'

        return (
            <Container>
                <Breadcrumb links={[
                  {title: 'PinUI',
                   url: '#!/'},
                  {title: 'Counter',
                   url: '#!/Counter'}]} />
                {foo[page].map((card, i) => {
                     console.log(card(i.toString()))
                     return <div className="blue" key={i} id={i}>{card(i.toString())}</div>
                })}
            </Container>
        );
    }
}
