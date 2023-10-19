import { View, Text, Pressable } from "react-native";

const CategoryGridTile = ({ categoryTitle, color }) => {
	return (
		<View>
			<Pressable>
				<View>
					<Text>{categoryTitle}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridTile;
