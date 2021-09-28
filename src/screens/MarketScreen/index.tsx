import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import MarketCoin from "../../components/MarketCoin";
import styles from "./styles";

const image = require("../../../assets/images/Saly-17.png");

const portfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "USD",
    valueChange24H: 56.44,
    valueUSD: 56440,
  },
  {
    id: "2",
    name: "Bitcoin",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "USD",
    valueChange24H: -1.12,
    valueUSD: 36440,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    valueChange24H: 3.54,
    valueUSD: 30120,
  },

];

const MarketScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item }) => <MarketCoin marketCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: "center"}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
              <Text style={styles.label}>Market</Text>
          </>
        )}
      />
    </View>
  );
};

export default MarketScreen;