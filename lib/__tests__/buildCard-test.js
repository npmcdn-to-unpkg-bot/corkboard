/* eslint-env jest */

jest.unmock('../buildCard');

describe('buildCard', () => {
    it('returns a Card genrator', () => {
        const subject = require('../buildCard').default;
        const result = subject()();
        expect(result.type.name).toBe('Card');
    });

    it('passes props', () => {
        const subject = require('../buildCard').default;
        const result = subject()({key: 'abc'});
        expect(result.key).toBe('abc');
    });

    it('(\'Foo\')', () => {
        const subject = require('../buildCard').default;
        const result = subject('Foo')();
        expect(result.props.name).toBe('Foo');
        expect(result.props.doc).toBe(null);
    });

    it('(\'Foo\', \'Markdown\')', () => {
        const subject = require('../buildCard').default;
        const result = subject('Foo', 'Markdown')();

        expect(result.props.name).toBe('Foo');
        expect(result.props.doc).toBe('Markdown');
    });

    it('(\'Foo\', <div />)', () => {
        const subject = require('../buildCard').default;
        const child = {name: 'div', props: {}};
        const result = subject(null, child)();
        expect(result.props.children).toBe(child);
    });

    it('(\'Foo\', <div />, {id: \'foo\'})', () => {
        const subject = require('../buildCard').default;
        const child = {name: 'div', props: {}};
        const result = subject(null, child)();
        expect(result.props.children).toBe(child);
    });
});
