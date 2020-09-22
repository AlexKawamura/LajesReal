import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager } from 'react-native';

import styles from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function LongText({label = "", content = "-"}) {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleIsExpanded() {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsExpanded(!isExpanded);
    }

    return (
      <View style={styles.line}>
        <Text style={[styles.cell, styles.label]}>{label}</Text>
        <TouchableWithoutFeedback onPress={() => toggleIsExpanded()}>
          <View>
            <Text style={[
              styles.cell,
              styles.content,
              isExpanded ? styles.expanded : styles.collapsed
            ]}>{content}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
}
