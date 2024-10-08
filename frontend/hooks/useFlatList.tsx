import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
const useFlatList = () => {
const [numColumns, setNumColumns] = useState<number>(2); // Default number of columns
const itemWidth = 100; // Desired width of each grid item
useEffect(() => {

// Function to calculate the number of columns based on screen width
const updateLayout = () => {
    const screenWidth = Dimensions.get('window').width; // Get screen width
  const columns = Math.floor(screenWidth / itemWidth); // Calculate number of columns
  setNumColumns(columns > 0 ? columns : 1); // Ensure at least one column
};

// Call on component mount and when the screen size changes
updateLayout();

// Add event listener for screen dimension changes
const subscription = Dimensions.addEventListener('change', updateLayout);

return () => {
  subscription?.remove(); // Clean up event listener on unmount
};
}, []);
return {
    numColumns
}
}
export default useFlatList
