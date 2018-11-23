import React, { Component } from 'react';
import { Dimensions, Text, View, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Table, TableWrapper,Cell,  Col, Cols } from 'react-native-table-component';
import Swiper from 'react-native-swiper';
import { Card} from 'react-native-elements';
import TableScreen from './TableScreen';

const { width } = Dimensions.get('window')

class Severe3Screen extends React.Component{    
    state = {
        tableTitle: ['vena contracta 幅 (cm)','カラードプラジェット面積 (%)', 
        '逆流量 (ml)', '逆流率 (%)', '有効逆流弁口面積 (cm2)', '左房', '左室' ],
        tableData: [
          ['軽度', '< 0.3','左房面積の\n20%未満', '<30', '<30', '<0.2', '', ''],
          ['中等度', '0.3 - 0.7','','30 - 59', '30 - 49', '0.2 - 0.39', '', ''],
          ['重度', '≧ 0.7','左房面積の\n40%以上','≧ 60', '≧ 50', '≧ 0.4', '拡大', '拡大'],
        ]
    }
    

    static navigationOptions = ({navigation}) =>{
        const {state} = navigation
        return {
            title: '重症度評価',
            headerStyle: { backgroundColor : 'rgb(114,95,70)'},
            headerTintColor: "#fff",
            headerRight: 
            <View> 
                <TouchableOpacity style = {{paddingRight:15}} onPress={() => state.params.handleCcr()}> 
                    <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}> 治療 </Text> 
                </TouchableOpacity> 
            </View>,
            headerTitleStyle: {
                width: '85%',
                textAlign: 'center',
                color: '#fff'
            },
        }
    }


    componentDidMount(){
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Mrtreat')})
    }
    
    
    render(){
        const state = this.state;

        return(
            
        <ScrollView style={styles.container}>
           <Card title = '一次性MR  vs  二次性MR ' containerStyle={{marginBottom: 20}}>
                <Text　style={{marginTop: 4, marginBottom:2}}>一次性:  僧帽弁の形態的な異常</Text>
                <Text　style={{marginBottom: 20}}>二次性:  左室、乳頭筋、弁輪、腱索の異常</Text>
                <TableScreen/>
                <Text style = {{fontSize: 7, marginTop: 30, left: 10}}>2017 ASE, Recommendations for Noninvasive Evaluation of
Native Valvular Regurgitation</Text>
           </Card>

           <Card title = '僧帽弁閉鎖不全症の重症度基準' containerStyle={{marginBottom: 40, paddingBottom: 25}}>
           <View style={styles.container}>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 100}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['定性評価', '定量評価', 'その他']} style={styles.head} heightArr={[65, 90,60 ]} textStyle={styles.text} />
              <Col data={state.tableTitle} style={styles.title} heightArr={[30, 35,30,30,30, 30, 30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>
 
          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData} heightArr={[40, 30, 35, 30, 30, 30, 30, 30]} textStyle={styles.text2}/>
          </TableWrapper>
        </Table>
        <Text style={{fontSize: 7, paddingBottom: 10,position: 'absolute', top:275, right:-12}}>{"\n"}  弁膜疾患の非薬物療法に関するガイドライン </Text>  
      </View>
     
           
           
           
           </Card>
           
            <Swiper style={styles.wrapper} height={240}
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                paginationStyle={{
                    bottom: -23, left: null, right: 10
                }} loop autoplay>
                <View style={styles.slide} title={<Text numberOfLines={1}>心尖部五腔像</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../assets/maxnew.png')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>心尖部五腔像</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../assets/meannew.png')} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1} style = {{fontSize: 12}}>左: 傍胸骨短軸断層像       右: 心尖部五腔像</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../assets/avanew.png')} />
                </View>
               
            </Swiper>
       
          </ScrollView>
        )
      
    }
}

     
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20
  },
  wrapper: {
    marginBottom: 600
},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    
  },
  image: {
    width,
    flex: 1
  },
  singleHead: { width: 100, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 0.5, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right', fontSize: 9 },
  text: { textAlign: 'center', fontSize: 11 },
  text2: { textAlign: 'center', fontSize: 10 },
  });


export default Severe3Screen;