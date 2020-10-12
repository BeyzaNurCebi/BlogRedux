import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { addBlogPost } from "../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const CreateScreen = ({navigation,addPost}) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.text}>Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save"
        onPress={() => {
          addPost(title, content);

          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.blog_list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title,content) => {dispatch(addBlogPost(title,content))}
  }
}

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       addBlogPost,
//     },
//     dispatch
//   );

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  text: {
    margin: 5,
    fontSize: 17,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
