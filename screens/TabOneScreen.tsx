import * as React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.tickerContainer}>
        <Image style={{height: 50, width: 50,alignSelf:"center"}} source={{uri:"https://res.cloudinary.com/teepublic/image/private/s--lWUj--s9--/c_crop,x_10,y_10/c_fit,h_913/c_crop,g_north_west,h_1038,w_1038,x_-179,y_-62/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-290,y_-173/b_rgb:262c3a/c_limit,f_jpg,h_630,q_90,w_630/v1571584172/production/designs/6398882_0.jpg"}}></Image>
        <View style={styles.TextCotainer}>
        <Text style={[styles.title,{color:"#c7c8cb"}]}>BTC/USD</Text>
        <View style={styles.textView}>
        <Text style={styles.title}>VOL  </Text>
        <Text style={[styles.title,{color:"white",}]}>{'13,962 ' }</Text>
        <Text style={[styles.title,{ textDecorationLine: 'underline',}]}>BTC </Text>
        </View>
        <View style={styles.textView}>
        <Text style={styles.title}>LOW  </Text>
        <Text style={[styles.title,{color:"white",}]}>{'13,962 ' }</Text>
        </View>
        </View>
        <View style={styles.TextCotainer1}>
        <Text style={styles.title1}>9,474.0</Text>
        <View style={styles.textView}>
        <Text style={styles.title3}>86.50</Text>
        <Image style={{height: 10, width: 10, marginHorizontal: 5, alignSelf:"center"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGejA1IG0OTnwzi2YqJ_FDtBGfv77taqpuPlBJQysxxGAWJb2asKrMcGZtQiBDMuXKP-g&usqp=CAU"}}></Image>
        <Text style={styles.title3}>(0.87%) </Text>
        </View>
        <View style={[styles.textView,{ justifyContent: "flex-end",}]}>
        <Text style={[styles.title]}>HIGH  </Text>
        <Text style={[styles.title,{color:"white",}]}>{'13,962 ' }</Text>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tickerContainer: {
    height: 180,
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:"#253038",
    paddingHorizontal: 10,
  },
  TextCotainer:{
    height: 100,
    justifyContent: 'flex-start',
    backgroundColor:"#253038"
  },
  textView:{
    flexDirection:"row",
    backgroundColor:"#253038",
  },
  TextCotainer1:{
    height: 100,
    backgroundColor:"#253038",
  },
  title: {
    fontSize: 20,
    color:"#707476",
    fontWeight: 'bold',
    lineHeight: 35,
  },
  title1: {
    color:"#c7c8cb",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "right",
    lineHeight: 35,
  },
  title3:{
    color: "#7d9f45",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "right",
    lineHeight: 35,
  },
  title2: {
    color:"#c7c8cb",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "right",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
