import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { API, graphql } from 'aws-amplify';

import PortfolioCoin from "../../components/PortfolioCoin";
import styles from "./styles";

const image = require("../../../assets/images/Saly-10.png");

const PortfolioScreen = () => {
  const [portfolioCoins, setPortfolioCoins] = useState([]);

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
