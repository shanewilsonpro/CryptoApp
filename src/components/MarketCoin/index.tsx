import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import PercentageChange from "../PercentageChange";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export interface PortfolioCoinProps {
  marketCoin: {
    id: string;
    image: string;
    name: string;
    symbol: string;
    valueChange24H: number;
    currentPrice: number;
  };
}

const MarketCoin = (props: PortfolioCoinProps) => {
  const {
    marketCoin: { id, image, name, symbol, valueChange24H, currentPrice },
  } = props;

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate("CoinDetails", { id })}
    >
      <View style={styles.left}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.value}>${currentPrice}</Text>
        <PercentageChange value={valueChange24H} />
      </View>
    </Pressable>
  );
};

export default MarketCoin;
