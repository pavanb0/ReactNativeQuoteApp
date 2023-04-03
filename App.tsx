/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */




import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


async function getQuote(){
  const response = await fetch('https://zenquotes.io/api/random');
  let quotes = await response.json();
  return quotes;
}


function arroperator({}){
  
}

function App(): JSX.Element {
  const [buttontext,setbuttontext] = useState<string[]>([]);
  // create empty array of quotes
  let arr:Array<string> = ['the best quote', 'the second best quote', 'the third best quote'];


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.button}>
      <Button
        title="getQuote"
        onPress={async () => {
          var quote = await getQuote();
          if (quote && quote[0] && quote[0].q) {
            const newQuote = String(quote[0].q);
            const newButtonText = [...buttontext, newQuote];
            setbuttontext(newButtonText);
          }
        
          // quote = String(quote[0].q);
          // arr.push(quote);
          // console.log(arr);
          // setbuttontext(arr);
          
        }}
      />
    </View>

    <ScrollView style={styles.scroll}>

    {buttontext.map((item, index) => {
      return (
        <View key={index}>
          <Text style={styles.text}>{item}</Text>
        </View>
      );
    })}

    </ScrollView>

  </SafeAreaView>
  );
}
const isDarkMode = true;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  },
  button: {
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    color: isDarkMode ? Colors.white : Colors.black,
    margin: 20,
  },
  scroll: {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
    marginHorizontal: 20,
    marginLeft:0,
    width: 400,
    marginRight:0,
    
  },
});
export default App;
