import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { connect } from "react-redux";
import { deleteBlogPost } from "../store/actions";
import { bindActionCreators } from "redux";

const HomeScreen = ({ navigation, list }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.navigate("Show", {
                  id: item.id,
                })
              }
            >
              <Text style={styles.text}>{item.title}</Text>

              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash-2" size={24} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.reducer.blog_list,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteBlogPost,
    },
    dispatch
  );

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
