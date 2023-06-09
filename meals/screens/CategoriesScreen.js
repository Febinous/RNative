import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
function CategoriesScreen() {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem />
  );
}

export default CategoriesScreen;
