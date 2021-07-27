import { StyleSheet } from 'react-native';

const createStyles = theme => {
  const { button } = theme;

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 9,
      height: 36,
      borderStyle: 'solid',
      backgroundColor: button.background,
      borderColor: button.borderColor,
      borderWidth: button.borderWidth,
      borderRadius: button.borderCornerRadius,
      opacity: 1,
    },
    containerDisabled: {
      opacity: 0.4,
    },
    containerStandardPressed: {
      backgroundColor: button.active.background,
      borderColor: button.selected.borderColor,
    },
    containerEmphasized: {
      backgroundColor: button.emphasized.background,
      borderColor: button.emphasized.borderColor,
    },
    containerEmphasizedPressed: {
      backgroundColor: button.emphasized.active.background,
      borderColor: button.emphasized.active.borderColor,
    },
    containerTransparent: {
      backgroundColor: button.lite.background,
      borderColor: button.lite.borderColor,
    },
    containerTransparentPressed: {
      backgroundColor: button.active.background,
      borderColor: button.selected.borderColor,
    },
    containerPositive: {
      backgroundColor: button.accept.background,
      borderColor: button.accept.borderColor,
    },
    containerPositivePressed: {
      backgroundColor: button.accept.active.background,
      borderColor: button.accept.active.borderColor,
    },
    containerNegative: {
      backgroundColor: button.reject.background,
      borderColor: button.reject.borderColor,
    },
    containerNegativePressed: {
      backgroundColor: button.reject.active.background,
      borderColor: button.reject.active.borderColor,
    },
  });
};

export default createStyles;
