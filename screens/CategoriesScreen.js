import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderCategoryItem = (itemData) => {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
};

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        numColumns={2}
        key="categories"
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;
