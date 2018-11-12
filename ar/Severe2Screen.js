import React, { Component } from 'react';
import { Dimensions, Text, View, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Table, TableWrapper,Cell,  Col, Cols } from 'react-native-table-component';
import Swiper from 'react-native-swiper'
import { Card} from 'react-native-elements'

const { width } = Dimensions.get('window')

class Severe2Screen extends React.Component{    
    state = {
        tableTitle: ['vena contracta 幅 (cm)','左室流出路逆流幅比 (%)', '圧半減時間 PHT(msec)', '下行大動脈の拡張期逆流波形',
        '逆流量 (ml)', '逆流率 (%)', '有効逆流弁口面積 (cm2)' ],
        tableData: [
          ['軽度', '< 0.3','< 25','>500','拡張早期', '<30', '<30', '<0.1'],
          ['中等度', '0.3 - 0.6','25 - 64','200 - 500','拡張早期', '30 - 59', '30 - 49', '0.1 - 0.29'],
          ['重度', '> 0.6','> 65','< 200', '全拡張期', '≧ 60', '≧ 50', '≧ 0.3'],
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
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Artreat')})
    }
    
    
    render(){
        const state = this.state;

        return(
            
        <ScrollView style={styles.container}>
           <Card title = '心エコーにおける重症度評価' containerStyle={{marginBottom: 20}}>
                <Text style={{marginBottom: 2, marginTop:3, fontSize: 12}}>ARジェットの到達度は、見た目にもわかりやすく </Text>
                <Text style={{marginBottom: 30, fontSize: 12}}>長らく重症度評価に使用されてきたが</Text>
                <Text style={{marginBottom: 2,  fontSize: 12}}>大動脈の拡張期圧と左室拡張末期圧の圧較差に</Text>
                <Text style={{marginBottom: 30, fontSize: 12}}>強く依存するため、推奨されなくなっている</Text>
                <Text style={{marginBottom: 2, fontSize: 12}}>カラードプラー、パルスドプラー、連続波ドプラー</Text>
                <Text style={{marginBottom: 3, fontSize: 12}}>で得られる各指標を元に、総合的な評価を行う</Text>
                <Text style = {{fontSize: 7, marginTop: 30, left: 10}}>2017 ASE, Recommendations for Noninvasive Evaluation of
Native Valvular Regurgitation</Text>
           </Card>

           <Card title = '大動脈弁閉鎖不全症の重症度基準' containerStyle={{marginBottom: 40, paddingBottom: 25}}>
           <View style={styles.container}>
        <Table style={{flexDirection: 'row'}}>
          {/* Left Wrapper */}
          <TableWrapper style={{width: 100}}>
            <Cell data="" style={styles.singleHead}/>
            <TableWrapper style={{flexDirection: 'row'}}>
              <Col data={['定性評価', '定量評価']} style={styles.head} heightArr={[120, 90]} textStyle={styles.text} />
              <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30,30,30,30, 30, 30]} textStyle={styles.titleText}></Col>
            </TableWrapper>
          </TableWrapper>
 
          {/* Right Wrapper */}
          <TableWrapper style={{flex:1}}>
            <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30, 30, 30, 30]} textStyle={styles.text2}/>
          </TableWrapper>
        </Table>
        <Text style={{fontSize: 7, paddingBottom: 10,position: 'absolute', top:275, right:-12}}>{"\n"}  先天性心疾患、心臓大血管の構造的疾患に対するカテーテル治療のガイドライン </Text>  
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

            <Card title = '左室拡大' containerStyle={{marginTop: 60, paddingBottom: 25}}>
                <Text style={{marginBottom: 4, marginTop:6, fontSize: 12}}>ARは、代償反応が働いているうちは無症状であるが</Text>
                <Text style={{marginBottom: 4,  fontSize: 12}}>徐々に左室心筋が繊維化し、リモデリングが進む</Text>
                <Text style={{marginBottom: 4,  fontSize: 12}}>症状が出現する頃にはすでに、心筋障害がかなり進ん</Text>
                <Text style={{marginBottom: 30,  fontSize: 12}}>でいることが多い</Text>
                <Text　style={{marginBottom: 4,  fontSize: 12}}>無症候性severe ARでは</Text>
                <Text style={{marginBottom: 4,  fontSize: 24, fontWeight: 'bold'}}>Dd > 70mm、 Ds > 50mm </Text>
                <Text style={{marginBottom: 30,  fontSize: 12}}>を満たすと予後が悪く、外科的介入が望まれる</Text>
                <Text　style={{marginBottom: 0,  fontSize: 12}}>AR:    大動脈弁閉鎖不全症</Text>
                <Text　style={{marginBottom: 20,  fontSize: 12}}>Dd:    左室拡張末期径             Ds:     左室収縮末期径</Text>
                <Text style={{fontSize: 7, textAlign: 'right'}}>2017 ESC/EACTS Guidelines for the management of valvular heart disease</Text>  
            </Card>
       
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


export default Severe2Screen;