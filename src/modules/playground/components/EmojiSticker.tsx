import { Image, View, type DimensionValue, type ImageProps } from 'react-native';

type Props = {
  imageSize: DimensionValue;
  stickerSource: ImageProps['source'];
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        resizeMode="contain"
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
