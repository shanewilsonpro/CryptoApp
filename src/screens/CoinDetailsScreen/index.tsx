import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import PercentageChange from "../../components/PercentageChange";

const CoinDetailsScreen = () => {
  const [coin, setCoin] = useState({
    id: "1",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    name: "Bitcoin",
    symbol: "BTC",
    valueChange24H: -1.12,
    valueChange1D: 2.12,
    valueChange7D: -1.12,
    currentPrice: 56440,
    amount: 2,
  });
  
  const onBuy = () => {

  }

  const onSell = () => {
      
}

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={styles.left}>
          <Image style={styles.image} source={{ uri: coin.image }} />
          <View>
            <Text style={styles.name}>{coin.name}</Text>
            <Text style={styles.symbol}>{coin.symbol}</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <AntDesign name={"staro"} size={30} color={"#2f95dc"} />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>Current price</Text>
          <Text style={styles.value}>${coin.currentPrice}</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.label}>1 hour</Text>
          <PercentageChange value={coin.valueChange24H} />
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.label}>1 day</Text>
          <PercentageChange value={coin.valueChange1D} />
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.label}>7 days</Text>
          <PercentageChange value={coin.valueChange7D} />
        </View>
      </View>

      <View style={styles.row}>
        <Text>Position</Text>
        <Text>
          {coin.symbol} {coin.amount} (${coin.currentPrice * coin.amount})
        </Text>
      </View>

      <View style={[styles.row, { marginTop: 'auto'}]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#20b100" }]}
          onPress={onBuy}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: "#ff0000" }]}
          onPress={onSell}
        >
          <Text style={styles.buttonText}>Sell</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
