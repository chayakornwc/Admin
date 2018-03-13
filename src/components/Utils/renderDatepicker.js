import React, { Component } from 'react';

import { DateRangePicker } from 'react-dates';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';
import moment from 'moment'; // eslint-disable-line

class DateRangePickerWrapper extends Component {
  static propTypes = {
    displayFormat: PropTypes.string,
    className: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object
  };

  static defaultProps = {
    displayFormat: 'DD.MM.YYYY',
    className: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null
    };
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput } = this.state;
    const { className, name, input: { onChange, value }, meta: { error, touched } } = this.props;
    if (value) {
      if (value.startDate && (typeof value.startDate !== 'object')) value.startDate = moment(value.startDate);
      if (value.endDate && (typeof value.endDate !== 'object')) value.endDate = moment(value.endDate);
    }

    return (
      <Form.Group>
        <div className={`date-range-picker ${className}` + (error && touched ? ' has-error ' : '')}>
          <DateRangePicker
            {...this.props}
            name="data"
            displayFormat={this.props.displayFormat}
            onDatesChange={val => onChange(val)}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={(value && value.startDate) || null}
            endDate={(value && value.endDate) || null}
          />
        </div>
        {error && touched && <Form.Error message={error && touched ? error : ''} />}
      </Form.Group>
    );
  }
}

export default props => <Field   {...props} component={DateRangePickerWrapper} />;
