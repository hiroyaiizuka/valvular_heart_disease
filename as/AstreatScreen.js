import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, Image, View, ScrollView, Animated,Modal } from 'react-native';
import { ButtonGroup, Card, Icon } from 'react-native-elements';


class AstreatScreen extends React.Component{
    state = {    
        display: "none",
        display2: "none",
        display3: "none",
        display4: "none",
        display5: "none",
        disabled: true,     
        textdisplay0: "none",    
        textdisplay: "none",
        textdisplay2: "none",
        textdisplay3: "none",
        carddisplay: "none",
        carddisplay2: "none",
        carddisplay3: "none",
        index: 3,
        index1: 3,  
        index2: 4,  
        index3: 3,

        modalVisible: false,
        modalVisible2: false,
    }

    static navigationOptions = {
        title: '治療方針',
        headerTitleStyle: {
            width: '70%',
            textAlign: 'center',
        },
    }



      pressHere(index){
        this.scroller.scrollTo({x: 0, y: 164 })
        if (index ===0){
        this.setState({
                display: "flex",
                display2: "none",
                display3: "none",
                display4: "none",
                color: "white",
                index: index,
                textdisplay0: "none",
                textdisplay: "none",
                textdisplay2: "none",
                textdisplay3: "none",
                carddisplay: "none",
                carddisplay2: "none",
                carddisplay3: "none",
                index1: 4


             });
        }else{
            this.setState({
                display: "flex",
                display2: "none",
                display3: "none",
                display4: "none",
                textdisplay0: "none",
                textdisplay: "none",
                textdisplay2: "none",
                textdisplay3: "none",
                textdisplay4: "none",
                carddisplay: "none",
                carddisplay2: "none",
                carddisplay3: "none",
                color: "white",
                index: index,
                index1: 2
             });
        }
      }
  
      pressHere2(index1){
        this.scroller.scrollTo({x: 0, y: 320 })
            if ( this.state.index === 0 && index1 === 0){
                this.setState({
                    textdisplay0: "none",
                    textdisplay: "flex",
                    color: "white",
                    index1: index1,
                    index2: 4,
                    textdisplay2: "none",
                    textdisplay3: "none",
                    display3: "none",
                    carddisplay: "none",
                    carddisplay2: "none",
                    carddisplay3: "none",
                });
            }else if(this.state.index === 1 && index1 === 0){
                this.setState({
                    textdisplay0: "none",
                    textdisplay: "none",
                    textdisplay2: "none",
                    textdisplay3: "none",
    
                    carddisplay: "none",
                    carddisplay2: "none",
                    carddisplay3: "none",
                    color: "white",
                    index1: index1,
                    index3: 3,
                    display4: "flex",
                });
            }else if(this.state.index === 1 && index1 === 1){
                this.setState({
                    textdisplay0: "none",
                    textdisplay: "none",
                    textdisplay2: "flex",
                    textdisplay3: "none",
                    carddisplay: "none",
                    carddisplay2: "none",
                    carddisplay3: "flex",
                    color: "white",
                    index1: index1,
                    display4: "none",
                });
            }else{
                this.setState({
                    display3: "flex",
                    textdisplay0: "none",
                    textdisplay: "none",
                    carddisplay: "none",
                    carddisplay2: "none",
                    carddisplay3: "none",
                    color: "white",
                    index1: index1
            });
            }
         }

      pressHere3(index2){
            this.scroller.scrollTo({x: 0, y: 360 })
                if (this.state.index1 === 1 && index2 === 0){
                    this.setState({
                        textdisplay0: "flex", 
                        textdisplay: "none",
                        textdisplay2: "none",
                        textdisplay3: "none",
                        color: "white",
                        index2: index2
                    });
                }else if(this.state.index1 === 1 && index2 === 1){
                    this.setState({
                        textdisplay0: "none",
                        textdisplay: "none",
                        textdisplay2: "flex",
                        textdisplay3: "none",
                        carddisplay: "none",
                        carddisplay2: "none",
                        carddisplay3: "none",
                        color: "white",
                        index2: index2
                     });
                }else if (this.state.index1 ===1){
                    this.setState({
                        textdisplay0: "none",
                        textdisplay: "none",
                        textdisplay2: "none",
                        textdisplay3: "flex",
                        carddisplay: "none",
                        carddisplay2: "none",
                        carddisplay3: "none",
                        color: "white",
                        index2: index2
                    });
                }        
      }

      pressHere4(index3){
        this.scroller.scrollTo({x: 0, y: 360 })
            if (index3 === 0){
                this.setState({
                    textdisplay0: "none",
                    textdisplay: "none",
                    textdisplay2: "flex",
                    textdisplay3: "none",
                    carddisplay: "none",
                    carddisplay2: "flex",
                    carddisplay3: "none",
                    color: "white",
                    index3: index3
                });
            }else{
                this.setState({
                    textdisplay0: "none",
                    textdisplay: "none",
                    textdisplay2: "flex",
                    textdisplay3: "none",
                    carddisplay: "flex",
                    carddisplay2: "none",
                    carddisplay3: "none",
                    color: "white",
                    index3: index3
                 });
            
            }        
      }

      openModal(){
        this.setState({modalVisible: true});
      }

      openModal2(){
        this.setState({modalVisible2: true});
      }

      closeModal(){
        this.setState({modalVisible: false});
    　}

      closeModal2(){
        this.setState({modalVisible2: false});
      }

      openCard(){
          this.state.disabled === true ?  this.setState({display5: "flex", disabled: false}) 
                                       :  this.setState({display5: "none", disabled: true})
      }


    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        const {index, index1, index2, index3, textdisplay0, display, display2, display3, display4, display5,
            carddisplay, carddisplay2, carddisplay3, textdisplay, textdisplay2, textdisplay3, textdisplay4} = this.state;
        return(
            <ScrollView  style = {{paddingTop: 100,  backgroundColor: 'rgb(233,231,217)'}} 
                    ref = {(scroller) => {this.scroller = scroller}}>

                    <View style = {{position: 'absolute', top: -60, right:135 }}>
                        <TouchableOpacity  onPress ={()=> this.openModal()} >
                           <View style = {[{backgroundColor: 'rgb(130,200,143)'}, styles.button]}>
                            <Text style = {{color: 'white', fontSize: 12, padding:5}}>フローチャート版</Text>
                           </View>
                        </TouchableOpacity>
                     
                        <Modal
                            visible = {this.state.modalVisible}
                            animationTipe = {'slide'}
                            onrequestClose = {()=>this.closeModal()}>
                   
                            <Image  style={{width: 325, height: 490, alignSelf: 'center', marginTop: 100}} source={require('../assets/chartasnew.png')} />
                            <Text style = {{fontSize: 7, marginTop: 40, textAlign: 'center'}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
          
                          <TouchableOpacity style = {[{marginTop: 40,backgroundColor: 'rgb(130,200,143)',alignSelf: 'center', width: 80}, styles.button]}
                                    onPress ={()=> this.closeModal()} >
                            <View >
                                <Text style = {{color: 'white', fontSize: 12, padding:5, alignSelf: 'center'}}>閉じる</Text>
                            </View>
                          </TouchableOpacity>

                        </Modal>
                    </View>
                    <View style = {{position: 'absolute', top: -60, right:10 }}>
                        <TouchableOpacity  onPress ={()=> this.openCard()} >
                            <View style = {[{backgroundColor: 'rgb(130,200,143)'}, styles.button]}>
                                <Text  style = {{color: 'white', fontSize: 12, padding:5, textAlign: 'center'}}>参考資料</Text>
                            </View>
                        </TouchableOpacity>  
                    </View>

                    <ButtonGroup
                        selectedButtonStyle={{ backgroundColor : 'rgb(24,77,116)'}} 
                        onPress={(index)=> this.pressHere(index)}
                        textStyle = {{fontSize: 14}}
                        selectedIndex={index}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['Vmax > 4m/s', '      Vmax   3-3.9   m/s \n ΔP mean  20-39 mmHg']}
                        containerStyle={{height: 60}}
                        />

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index1)=> this.pressHere2(index1)}
                        textStyle = {{fontSize: 16}}
                        selectedIndex={index1}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['症候性', '無症候性']}
                        containerStyle={{height: 50, marginTop: 80, display: display}} 
                        />

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index3)=> this.pressHere4(index3)}
                        textStyle = {{fontSize: 16}}
                        selectedIndex={index3}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['EF < 50%', 'EF ≧ 50%']}
                        containerStyle={{height: 50, marginTop: 80, display: display4}} 
                        />

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index2)=> this.pressHere3(index2)}
                        textStyle = {{fontSize: 11, padding: 4}}
                        selectedIndex={index2}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['    EF<50%\n        or    \n 他の心臓手術', '     Vmax > 5m/s\nΔPmean > 60mmHg\n　　手術リスク低\n\n　運動負荷試験で異常', ' ΔVmax > 0.3m/s/y\n\n     手術リスク低']}
                        containerStyle={{height: 80, marginTop: 80, display: display3}} 
                        />

                    
                    <Card title = '下記3条件を満たす場合' containerStyle={{display: carddisplay, marginTop: 40, marginBottom: 20}}>
                        <Text　style={{marginBottom: 2, marginTop: 14}}>・AVA ≦ 1cm2  (indexed AVA ≦ 0.6cm2/m2)</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4}}>・SVi ≦ 35 ml/m2</Text>
                        <Text　style={{marginBottom: 34}}>・症状あり: 心不全、(前)失神、胸痛、労作時呼吸苦</Text>
                        <Text　style={{marginBottom: 24, fontSize:13, fontWeight: 'bold'}}>■ 心エコーは、収縮期血圧≦140mmHg  で施行する</Text>
                        <Text　style={{marginBottom: 2, fontSize: 10}}>AVA: 大動脈弁口面積   indexed AVA: 大動脈弁口面積係数</Text>
                        <Text　style={{marginBottom: 4, fontSize: 10}}>SVi: 1回拍出量係数</Text>
                    </Card>

                    <Card title = '下記2条件を満たす場合' containerStyle={{display: carddisplay2, marginTop: 40, marginBottom: 20}}>
                        <Text　style={{marginBottom: 20}}>ドブタミン負荷心エコーの結果</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4}}>・AVA ≦ 1cm2 </Text>
                        <Text　style={{marginBottom: 24, marginTop: 4}}>・Vmax ≧ 4m/s</Text>
                        <Text　style={{marginBottom: 2, fontSize: 10}}>AVA: 大動脈弁口面積  　　Vmax: 最高血流速度 </Text>

                    </Card>


                    <Card title = '他の心臓手術と同時施行の場合' containerStyle={{display: carddisplay3, marginTop: 40, marginBottom: 20}}>
                        <Text　style={{marginBottom: 2}}>石灰化が原因のmoderate ASは、進行すると</Text>
                        <Text　style={{marginBottom: 24}}>5年以内に症状がでる可能性がある</Text>

                    
                        <Text　style={{marginBottom: 2}}>5年以内に心臓再手術を要する可能性を考慮し、</Text>
                        <Text　style={{marginBottom: 6}}>個々の症例に応じ、手術を検討する</Text>
                    </Card>
            

                       
                    <View style = {[{display: textdisplay, alignSelf: 'center',  backgroundColor: 'rgb(197,65,43)',  height: 50, width:'60%', marginTop: 60}, styles.button ]}>                  
                        <TouchableOpacity  onPress ={()=> this.openModal2()} >
                            <Text style = {styles.textstyle}>AVR  class 1 </Text>
                            <Icon 
                                name='touch-app' 
                                color= 'white'
                                containerStyle = {{ position:'relative', top: -25, left: 70 }}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {[{display: textdisplay0, alignSelf: 'center',  backgroundColor: 'rgb(197,65,43)',  height: 50, width:'60%', marginTop: 60}, styles.button ]}>                  
                            <Text style = {styles.textstyle}>AVR  class 1 </Text>
                    </View>

                    <View style = {[{display: textdisplay2, alignSelf: 'center', backgroundColor: 'rgb(50,185,236)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>AVR class 2a </Text>
                    </View>
                        
                    <View style = {[{display: textdisplay3, alignSelf: 'center', backgroundColor: 'rgb(233,152,85)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>AVR class 2b </Text>
                    </View>

                              
                    <Modal
                        visible = {this.state.modalVisible2}
                        animationTipe = {'slide'}
                        onrequestClose = {()=>this.closeModal2()}>
    
                            <Image  style={{width: 340, height: 197, alignSelf: 'center', marginTop: 100, padding:10}} source={require('../assets/tavi.png')} />
                            <Text style = {{fontSize: 7, marginTop: 20,marginRight: 10, textAlign: 'right'}}>
                            2017 AHA/ACC Focused Update of the 2014 AHA/ACC Guideline
                            </Text>
                            <Card title = '下記2条件を満たす場合' containerStyle={{marginTop: 40, marginBottom: 20}}>
                                <Text　style={{marginBottom: 20}}>日本国内では</Text>
                                <Text　style={{marginBottom: 2, marginTop: 4}}>2017年に改訂されたガイドラインでは </Text>
                                <Text　style={{marginBottom: 24, marginTop: 4}}>手術リスクが中等度の症例に対し、TAVIがclass 2a となった。</Text>
                                <Text　style={{marginBottom: 2, marginTop: 4}}>生命予後が1年以内/ TAVIによる延命効果が2年以内の確率が25%以下の場合　</Text>
                                <Text　style={{marginBottom: 2, marginTop: 4}}>TAVIは推奨されない　</Text>
                                <Text　style={{marginBottom: 2, fontSize: 10}}>SAVR: 外科的大動脈弁置換術  　　TAVI: 経カテーテル的大動脈弁置換術 </Text>


                            </Card>





                            <TouchableOpacity style = {[{marginTop: 80,backgroundColor: 'rgb(130,200,143)',alignSelf: 'center', width: 80}, styles.button]}
                                    onPress ={()=> this.closeModal2()} >
                                <View >
                                    <Text style = {{color: 'white', fontSize: 12, padding:5, alignSelf: 'center'}}>閉じる</Text>
                                </View>
                            </TouchableOpacity>
                    </Modal>

                    <Card containerStyle={{display: display5, marginTop: 40, marginBottom: 20}}>
                            <Text　style={{marginBottom: 2}}>Vmax:        最高血流速度</Text>
                            <Text　style={{marginBottom: 2}}>ΔPmean:   平均圧較差</Text>
                            <Text　style={{marginBottom: 2}}>EF:             左室駆出率</Text>
                            <Text　style={{marginBottom: 2}}>AVA:          大動脈弁口面積 </Text>
                            <Text　style={{marginBottom: 2, marginBottom: 24}}>AVR:          外科的/経カテーテル的 大動脈弁置換術</Text>
                            <Text　style={{marginBottom: 2}}>運動負荷試験: トレッドミル運動負荷試験</Text>
                            <View style = {{backgroundColor: 'rgb(207, 226,212)', padding: 6}}>
                                <Text　style={{marginBottom: 1, fontWeight: 'bold',fontSize: 10, color: 'rgb(204,0,10)'}}>有症候性のsevereASに対し、検査は禁忌</Text>
                                <Text　style={{marginBottom: 1, fontSize: 10, color: 'rgb(44,82,60)'}}>無症候性のsevere ASに対し、症状、運動耐用能</Text>
                                <Text　style={{marginBottom: 2, fontSize: 10, color: 'rgb(44,82,60)'}}>血圧変化、不整脈の出現を評価する</Text>
                            </View>
                    </Card>         
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        shadowColor: '#000',shadowOffset: {width: 1.5, height: 0.5},
        shadowOpacity: 0.3, shadowRadius: 1,
    },
    textstyle: {
        textAlign: 'center', padding:15, 
        color: 'white', 
        fontWeight: 'bold', fontSize: 16
    }
})
 
    

export default AstreatScreen;