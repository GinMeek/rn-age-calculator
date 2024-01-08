import React, { useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

import styles from "./styles";

const DoBForm = ({
  name,
  setName,
  handlePress,
  birthDate,
  setBirthDate,
  handleEdit,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setBirthDate(date);
    hideDatePicker();
  };

  return (
    <View style={[styles.container, { marginVertical: "auto" }]}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="What is your name? (optional)"
          placeholderTextColor="#d3d3d3"
          value={name}
          onChangeText={(text) => setName(text)}
          onEndEditing={handleEdit}
        />
      </View>

      <Pressable style={styles.searchWrapper} onPress={showDatePicker}>
        <Text style={styles.datePrompt}>Choose Your Date of Birth:</Text>
        <TextInput
          style={[styles.searchInput, { color: "#000" }]}
          numberOfLines={1}
          editable={false}
          placeholder="Choose Your Date of Birth"
          placeholderTextColor="#d3d3d3"
          value={moment(birthDate).format("DD-MM-YYYY")}
        />
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        maximumDate={new Date(moment().add(-1, "days"))}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={birthDate}
      />

      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          { opacity: pressed ? 0.7 : 1.0 },
          styles.searchBtn,
        ]}
      >
        <Text style={styles.searchBtnImage}>Go</Text>
      </Pressable>
    </View>
  );
};

export default DoBForm;
