import React, { Component } from 'react';
import { Dimensions, Text, View, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';


class Severe1Screen extends React.Component{

    state = {
        checked: false,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false,
        checked13: false,
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
        this.props.navigation.setParams({handleCcr: ()=> this.props.navigation.navigate('Antibiotics1')})
    }



    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return(
            <ScrollView horizontal={true} pagingEnabled={true}>
                <View style={{
                    width: screenWidth,
                    backgroundColor: 'rgb(250,250,240)',
                    flex: 1,
                }}>
                 <Text style ={styles.adrop}>A -DROP  </Text>
                    <CheckBox 
                        title= '   A: 年齢           男性 ≧70歳、女性 ≧75歳'　
                        checked = {this.state.checked} 
                        onPress={()=> this.setState({checked: !this.state.checked})}/>
                    <CheckBox 
                        title= '   D: 脱水           BUN ≧21  または、脱水あり'
                        checked = {this.state.checked1} 
                        onPress={()=> this.setState({checked1: !this.state.checked1})}/>
                    <CheckBox 
                        title= '   R: 呼吸           SpO2 ≦90%'　   
                        checked = {this.state.checked2} 
                        onPress={()=> this.setState({checked2: !this.state.checked2})}/>
                    <CheckBox 
                        title= '   O: 意識           意識障害あり'　
                        checked = {this.state.checked3} 
                        onPress={()=> this.setState({checked3: !this.state.checked3})}/>     
                    <CheckBox 
                        title= '   P: 血圧           sBP ≦90mmHg'　
                        checked = {this.state.checked4} 
                        onPress={()=> this.setState({checked4: !this.state.checked4})}/>
                    <View style = {styles.resultadrop}> 
                    <Text style={{marginBottom: 8, marginTop:0, fontSize: 15,color: 'rgb(255,255,255)', fontWeight:'bold',}}>１-２項目    中等症</Text>
                    <Text style = {{  fontSize: 15,color: 'rgb(255,255,255)', fontWeight:'bold',padding:6}}> ≧ ３項目     重症</Text>
                    </View>
                
                </View>

                <View style={{
                    width: screenWidth,
                    backgroundColor: 'rgb(232,240,240)',
                    flex: 1,
                    paddingLeft: 30,
                    paddingRight: 30,
                   
                }}>
                   <View >
                    <Text style = {styles.qsofa}>q SOFA</Text>
                    <CheckBox 
                        title= '                sBP ≦ 100mmHg'　
                        checked = {this.state.checked5} 
                        onPress={()=> this.setState({checked5: !this.state.checked5})}/>
                     <CheckBox 
                        title= '                 呼吸数 ≧ 22回/分'　
                        checked = {this.state.checked6} 
                        onPress={()=> this.setState({checked6: !this.state.checked6})}/>
                     <CheckBox 
                        title= '                 意識状態の変化'　
                        checked = {this.state.checked7} 
                        onPress={()=> this.setState({checked7: !this.state.checked7})}/>
                    <Text style = {styles.resultqsofa}> qSOFA ≧２項目     敗血症疑い </Text>
                        <Text style = {styles.result}> ADROP ≧３項目  qSOFA ≧２項目{"\n"}{"\n"}➡︎  超重症 (ICU 検討) </Text>
                </View>

                
                </View>
                
                <View style={{
                    width: screenWidth,
                    backgroundColor: 'rgb(252,252,229)',
                    flex: 1,
                    
                }}>
                    
                    <Text style={styles.hiteikei}>ー 非定型肺炎との鑑別項目 ー</Text>
                    <CheckBox 
                        title= '1)  年齢 < 60歳'　
                        checked = {this.state.checked8} 
                        onPress={()=> this.setState({checked8: !this.state.checked8})}/>
                     <CheckBox 
                        title= '2)  基礎疾患がない、あるいは軽微'　
                        checked = {this.state.checked9} 
                        onPress={()=> this.setState({checked9: !this.state.checked9})}/>
                     <CheckBox 
                        title= '3)  頑固な咳がある'　
                        checked = {this.state.checked10} 
                        onPress={()=> this.setState({checked10: !this.state.checked10})}/>
                    <CheckBox 
                        title= '4)  聴診所見に乏しい'　
                        checked = {this.state.checked11} 
                        onPress={()=> this.setState({checked11: !this.state.checked11})}/>
                    <CheckBox 
                        title= '5)  痰がない or 迅速診断法で原因菌の証明 (-)'　
                        checked = {this.state.checked12} 
                        onPress={()=> this.setState({checked12: !this.state.checked12})}/>
                    <CheckBox 
                        title= '6)  白血球数 <10,000/μl'　
                        checked = {this.state.checked13} 
                        onPress={()=> this.setState({checked13: !this.state.checked13})}/>
                    <View style = {styles.answer}>
                        <Text style = {styles.six}> ☆  1 〜 6 のうち {"\n"} 4項目以上で、非定型肺炎疑い (感度78%, 特異度93%) </Text>
                        <Text style = {styles.five}> ☆   1 〜 5 のうち {"\n"} 3項目以上で、非定型肺炎疑い (感度84%, 特異度87%)</Text>
                        
                    </View>
                </View>

            </ScrollView>
        )
    }
};

    const styles = StyleSheet.create({
        adrop: {
            backgroundColor: '#fff',
            marginTop: 20,
            marginBottom: 20,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 13,
            fontSize: 18,
            fontWeight: 'bold'
        },
        resultadrop: {
            backgroundColor: 'rgb(130,200,143)',
            marginTop: 25,
            marginBottom: 25,
            height: 90,
            width: 165,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            alignSelf: 'center',
            padding: 19,
        },
        qsofa: {
            backgroundColor: '#fff',
            marginTop: 23,
            marginBottom: 20,
            height: 50,
            width: 170,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.4,
            shadowRadius: 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 13,
            fontSize: 18,
            fontWeight: 'bold'
        },
        resultqsofa: {
            backgroundColor: 'rgb(130,200,143)',
            color: 'rgb(255,255,255)',
            fontWeight:'bold',
            marginTop: 50,
            height: 60,
            width: 250,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 17,
            fontSize: 16

        },
        result: {
            color: 'rgb(114,95,70)',
            fontWeight:'bold',
            marginTop: 23,
            height: 110,
            width: 310,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0.5},
            shadowOpacity: 0.2,
            shadowRadius: 1,
            textAlign: 'center',
            alignSelf: 'center',
            padding: 20,
            fontSize: 17,
            borderColor: 'rgb(114,95,70)',
            borderRadius: 50
        },
      
        hiteikei: {
            fontSize: 13,
            textAlign: 'center', 
            marginTop: 20,
            marginBottom: 10,
            fontWeight: 'bold',
            color: 'rgb(114,95,70)'
        },
        answer: {
            backgroundColor: 'rgb(130,200,143)',
            marginTop: 20,
            height: 180,
            width: 480,
            padding: 15,
            
        },
      
        six: {
            fontSize: 11,
            color: 'rgb(255,255,255)',
            marginBottom:7,
            marginTop:0,
            fontWeight: 'bold',
            padding:2
        },
        five: {
            fontSize: 11,
            color: 'rgb(255,255,255)',
            marginBottom:6,
            fontWeight: 'bold',
            padding:4
           
        },
       
    });


export default Severe1Screen;