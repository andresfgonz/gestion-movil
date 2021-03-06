import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Colors, Fonts, FontSizes } from '../../../../config/constants/styles';

type ComponentStyles = {
  container: ViewStyle;
  formContainer: ViewStyle;
  input: ViewStyle;
  inputBoxStyle: ViewStyle;
  restorePassText: TextStyle;
};

export const styles = StyleSheet.create<ComponentStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  formContainer: {
    flex: 1,
    borderRadius: 4,
    shadowOpacity: 0.3,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    marginTop: 10,
    shadowOpacity: 0.1,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    borderWidth: 0,
  },
  inputBoxStyle: {
    paddingHorizontal: 15,
    height: 55,
  },
  restorePassText: {
    marginTop: 10,
    fontFamily: Fonts.Medium,
    fontSize: FontSizes.small,
    color: Colors.white,
    textShadowRadius: 4,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
  },
});
