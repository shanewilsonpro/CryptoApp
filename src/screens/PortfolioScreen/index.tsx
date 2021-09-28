import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import PortfolioCoin from "../../components/PortfolioCoin";
import styles from "./styles";

const image = require("../../../assets/images/Saly-10.png");

const portfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "USD",
    amount: 56.44,
    valueUSD: 56440,
  },
  {
    id: "2",
    name: "Bitcoin",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "USD",
    amount: 1.12,
    valueUSD: 36440,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    symbol: "ETH",
    amount: 30,
    valueUSD: 30120,
  },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item }) => <PortfolioCoin portfolioCoin={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: "center"}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
              <Text style={styles.label}>Portfolio balance</Text>
              <Text style={styles.balance}>$56.440</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default PortfolioScreen;
