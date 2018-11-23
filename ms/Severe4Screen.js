import React, { Component } from 'react';
import { Dimensions, Text, View, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import Swiper from 'react-native-swiper';
import { Card} from 'react-native-elements';
import Table2Screen from './Table2Screen';

const { width } = Dimensions.get('window')

class Severe4Screen extends React.Component{    
    state = {
        tableHead: ['重症度', '弁の可動性', '弁下組織変化', '弁の肥厚', '石灰化'],
        tableTitle: ['1点', '2点', '3点', '4点'],
        tableData: [
          ['わずかな制限', 'わずかな肥厚', 'ほぼ正常(4-5mm)', 'わずかに\n輝度亢進'],
          ['弁尖の可動性不良\n弁中部, 基部\nは正常', '腱索の近位 2/3\nまで肥厚', '弁中央は正常\n弁辺縁は肥厚\n(5-8mm)', '弁辺縁の\n輝度亢進'],
          ['弁基部のみ\n可動性あり', '腱索の遠位 1/3\n以上まで肥厚', '弁膜全体に肥厚\n(5-8mm)', '弁中央部まで\n輝度亢進'],
          ['ほとんど\n可動性なし', '全腱索に肥厚\n短縮, 乳頭筋\nまで及ぶ', '弁全体に強い\n肥厚, 肥厚, 短縮\n乳頭筋まで及ぶ', '弁膜の大部分で\n輝度亢進']
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
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Mstreat')})
    }
    
    
    render(){
        const state = this.state;

        return(
            
        <ScrollView style={styles.container}>
            <Card title = '重症度評価　総論'>
              <Text style={{fontSize: 12, marginTop: 16, marginBottom:2}}>経胸壁心エコー法により、僧帽弁弁口面積、僧帽弁逆流</Text>  
              <Text style={{fontSize: 12, marginBottom:2}}>心機能、合併大動脈弁または三尖弁疾患、ならびに僧帽弁</Text>  
              <Text style={{fontSize: 12, marginBottom:30}}>の詳細な性状を評価する。</Text>  
              <Text style={{fontSize: 12, marginBottom:2}}>弁膜と弁下部組織の変形ならびに石灰化の重症度が</Text>  
              <Text style={{fontSize: 12, marginBottom:2}}>PTMC （経皮的経静脈的僧帽弁交連切開術) の適応決定に</Text>  
              <Text style={{fontSize: 12, marginBottom:2}}>大きく影響するが、より客観性のある指標として</Text>  
              <Text style={{fontSize: 12, marginBottom:2}}>Wilkins スコアが汎用されている。</Text>  
              <Text style = {{fontSize: 7, marginTop: 30, left: 80}}>先天性心疾患、心臓大血管の構造的疾患に対するカテーテル治療のガイドライン</Text>
           </Card>

           <Card title = '心エコーによる重症度評価'>
                <Table2Screen/>
                <Text style = {{fontSize: 7, marginTop: 30, left: 184}}>弁膜疾患の非薬物療法に関するガイドライン</Text>
           </Card>

           <Card title = 'Wilkins スコア' containerStyle={{marginBottom: 40}}>
                <View style={styles.container}>
                    <Table>
                    <Row data={state.tableHead} flexArr={[0.75, 1.65, 1.5, 1.5, 1.4]} style={styles.head} textStyle={styles.text}/>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[40,40]} textStyle={styles.text}/>
                        <Rows data={state.tableData} flexArr={[1.65, 1.5, 1.5, 1.4]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
                    </Table>
                    <Text style={{fontSize: 9, marginTop: 16, marginBottom:2}}>上記 4 項目について 1～4 点に分類し合計点を算出する。</Text>  
                    <Text style={{fontSize: 9,  marginBottom:30}}>合計 ８点以下で PTMC（経皮的経静脈的僧帽弁交連切開術) の良い適応である。</Text>  
                    <Text style={{fontSize: 7, left: 80}}>先天性心疾患、心臓大血管の構造的疾患に対するカテーテル治療のガイドライン </Text>  
               
                </View>
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

  head: {  height: 40,  backgroundColor: '#c8e1ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.765, backgroundColor: '#f6f8fa' },
  row: {  height: 40  },
  text: { textAlign: 'center', fontSize: 9, }
  });


export default Severe4Screen;