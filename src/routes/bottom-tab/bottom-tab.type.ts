export interface BottomTabProps {
  label: string;
  isFocused: boolean;
  onPress?: () => void;
}

export type MainAppParamList = {
  HomeScreen: undefined;
  CompareScreen: undefined;
};
