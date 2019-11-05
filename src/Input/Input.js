import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../util/colors';
const DEFAULT_SIZE = 14;
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => {
  const labelSize = props.size ? { fontSize: props.size * 0.8 } : {};
  const inputSize = props.size ?
    { fontSize: props.size, paddingVertical: props.size < 11 ? 0 : 5 } :
    {};
  const floatingStyle = props.floatingLabel && props.value.length === 0 ?
    { display: 'none' } :
    {};
  const colorStyle = props.color ? { borderBottomColor: props.color } : {};
  const roundStyle = props.round ? styles.roundStyle : {};
  const outlineStyle = props.outline ? styles.outlineStyle : {};
  return (
    <View style={props.containerStyle}>
      {props.label &&
        <Text style={StyleSheet.flatten([styles.label, props.labelStyle, floatingStyle, labelSize])}>
          {props.label}
        </Text>}
      <View style={[styles.inputContainer, roundStyle, outlineStyle, colorStyle, props.style]}>
        {props.leftIcon &&
          <View style={styles.leftIcon}>{props.leftIcon}</View>}
        <TextInput
          editable={!props.disabled}
          {...props}
          ref={ref}
          style={StyleSheet.flatten([styles.input, inputSize])}
          placeholder={props.floatingLabel ? props.label : props.placeholder}
        />
        {props.rightIcon &&
          <View style={styles.rightIcon}>{props.rightIcon}</View>}
      </View>
    </View>
  );
});

Input.propTypes = {
  style: PropTypes.object,
  textStyle: PropTypes.object,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  floatingLabel: PropTypes.bool,
  label: PropTypes.string,
  color: PropTypes.string,
  round: PropTypes.bool,
  outline: PropTypes.bool,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  labelStyle: PropTypes.object,
};

Input.defaultProps = {
  placeholder: 'Type here',
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey[400],
  },
  input: {
    flex: 1,
    padding: 5,
    borderRadius: 3,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    fontSize: DEFAULT_SIZE,
    color: '#333333',
  },
  label: {
    fontSize: DEFAULT_SIZE * 0.8,
    paddingHorizontal: 10,
    color: '#666666',
  },
  leftIcon: {
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundStyle: {
    backgroundColor: colors.grey[200],
    borderBottomWidth: 0,
    borderRadius: 50,
  },
  outlineStyle: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grey[400],
    borderRadius: 3,
  },
});

export default Input;
