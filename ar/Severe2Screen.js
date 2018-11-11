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
           <Card title = '心エコーによる重症度評価' containerStyle={{marginBottom: 20}}>
                <Text style={{marginBottom: 20, marginTop:3, fontSize: 12}}>弁通過血流速度から算出される </Text>
                <Text>・最大/平均 左室-大動脈圧較差</Text>
                <Text　style={{marginBottom: 20, marginTop: 4}}>・連続の式で求められる弁口面積</Text>
                <Text　style={{marginBottom: 16, fontSize: 12}}>によって評価される。</Text>
                <Text style={{marginBottom: 2, fontSize: 12}}>左室-大動脈圧較差は、手軽に求められるが</Text>
                <Text style={{marginBottom: 3, fontSize: 12}}>血行動態の影響を受けるという欠点がある．</Text>
           </Card>

           <Card title = '大動脈狭窄症の重症度基準' containerStyle={{marginBottom: 40, paddingBottom: 25}}>
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
        <Text style={{fontSize: 6, paddingBottom: 10,position: 'absolute', top:275, right:-12}}>{"\n"}  先天性心疾患、心臓大血管の構造的疾患に対するカテーテル治療のガイドライン </Text>  
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
             <Text style={{marginBottom: 24, marginTop:6, fontSize: 12}}>AVA ≦ 1.0cm2 にもかかわらず、心拍出量の低下により大動脈弁を通過する血流が減少し、Vmax ＜ 4m/s、ΔPmean ＜40mmHg と計測されるAS</Text>
                <Text　style={{marginBottom: 4}}>・EF低下</Text>
                <Text　style = {{marginBottom:4, borderWidth: 1, fontSize: 12}}>   虚血や心筋症などが原因</Text>
                <Text　style={{marginBottom: 20, fontSize: 12}}>   → ドブタミン負荷心エコー で 重症 AS か確認</Text>
                <Text　style={{marginBottom: 4}}>・EF>50% </Text>
                <Text style={{borderWidth:1, marginBottom: 4, fontSize: 12}}>   左室狭小化や、拡張能低下が原因</Text>
                <Text style={{marginBottom: 20, fontSize: 12}}>    → SVi (1回拍出量係数 : SV/体表面積) を計測 </Text>
                <Text style={{fontSize: 12}}>✔︎  SVi > 35ml/m2   →    moderate AS</Text>
                <Text style={{marginBottom: 6, fontSize: 12}}>✔︎  SVi ≦ 35ml/m2　→   ドブタミン負荷心エコー</Text>
              
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