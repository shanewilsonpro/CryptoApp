import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import UserRankingItem from "../../components/UserRankingItem";
import styles from "./styles";

const image = require("../../../assets/images/Saly-20.png");

const portfolioCoins = [
  {
    id: "1",
    name: "Virtual Dollars",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    netWorth: 56440,
  },
  {
    id: "2",
    name: "Bitcoin",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    netWorth: 36440,
  },
  {
    id: "3",
    name: "Etherium",
    image: "https://g.foolcdn.com/art/companylogos/square/btc.png",
    netWorth: 30120,
  },

];

const RankingScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={portfolioCoins}
        renderItem={({ item, index }) => <UserRankingItem user={item} place={index + 1} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: "center"}}
        ListHeaderComponent={() => (
          <>
            <Image style={styles.image} source={image} />
            <Text style={styles.label}>Rankings</Text>
          </>
        )}
      />
    </View>
  );
};

export default RankingScreen;