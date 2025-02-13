import { PRODUCTS } from "@/assets/products";
import ListHeader from "@/components/list-header";
import ProductListItem from "@/components/product-list-item";

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ index, item, separators }) => (
          <ProductListItem product={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: 5,
  },
});
