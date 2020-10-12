import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { connect } from "react-redux";

const ShowScreen = ({ route, navigation, list }) => {
  const { id } = route.params;

  const blog = list.find((item) => item.id === id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
          <MaterialIcons
            name="edit"
            size={30}
            color="black"
            style={styles.icon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.content}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.blog_list,
  };
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});

export default connect(mapStateToProps)(ShowScreen);
