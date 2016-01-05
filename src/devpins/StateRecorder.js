import  React, { Component, PropTypes } from 'react';
import JsonData from './JsonData';
import styles from './StateRecorder.css';

export default class StateRecorder extends Component {
  static propTypes = {
    initialState: PropTypes.any.isRequired,
    showState: PropTypes.bool.isRequired,
    historyLimit: PropTypes.number.isRequired,
  }

  static defaultProps = {
    initialState: {},
    showState: false,
    showHistory: false,
    historyLimit: 5,
  }

  constructor(props) {
    super(props);
    const history = [this.props.initialState];
    this.state = {
      history,
      idx: 0
    }

    this.handlePrevious = this._handlePrevious.bind(this);
    this.handleNext = this._handleNext.bind(this);
    this.handleReset = this._handleReset.bind(this);
    this.handleRewind = this._handleRewind.bind(this);
    this.handleFastForward = this._handleFastForward.bind(this);
  }

  render() {
    const { fn, showState, recordState } = this.props;
    const { history, idx } = this.state;
    const state = history[idx];

    const atom = {
      deref: () => { return state },
      reset: (val) => { this.transition(val) },
      set: (fn) => { this.transition(fn(state)) }
    }

    return (
      <div>
        {fn(atom)}
        {recordState ? this.renderHistoryControls() : null }
        {showState ? <JsonData data={state} /> : null }
      </div>
    );
  }

  transition(val) {
    var history = this.state.history.slice(0, this.state.idx + 1);
    history.push(val);

    this.setState({
      history,
      idx: history.length - 1
    });
  }

  _handlePrevious() {
    this.setState({
      idx: this.state.idx - 1
    });
  }

  _handleNext() {
    this.setState({
      idx: this.state.idx + 1
    })
  }

  _handleReset() {
    this.setState({
      history: this.state.history.slice(0, this.state.idx + 1)
    })
  }

  _handleRewind() {
    this.setState({
      idx: 0
    })
  }

  _handleFastForward() {
    this.setState({
      idx: this.state.history.length - 1
    })
  }

  renderHistoryControls() {
    const { history, idx } = this.state;
    const len = history.length;

    return (
        <div className={styles.controls}>
        {control(idx > 0, "Rewind", this.handleRewind)}
        {control(idx > 0, "Previous", this.handlePrevious)}
        {control(idx + 1 < len, "Reset", this.handleReset)}
        {control(idx + 1 < len, "Next", this.handleNext)}
        {control(idx + 1 < len, "Fast forward", this.handleFastForward)}
        </div>
    )
  }
}

function control(pred, text, onClick) {
  return (
    <div className={styles.control}>
      {pred ? <a onClick={onClick}>{text}</a> : <span>{text}</span>}
    </div>
  )
}
