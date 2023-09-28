import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { type ComponentPropsWithoutRef } from 'react';
import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

type Props = {
  label: string;
  icon: ComponentPropsWithoutRef<typeof MaterialIcons>['name'];
  onPress?: PressableProps['onPress'];
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
