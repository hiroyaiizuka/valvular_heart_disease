import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, Image, View, ScrollView, Animated,Modal } from 'react-native';
import { ButtonGroup, Card, Icon } from 'react-native-elements';


class ArtreatScreen extends React.Component{
    state = {    
        display: "none",
        display2: "none",
        display3: "none",
        display4: "none",
        display5: "none",
        displayope: "none",
        displayope2: "none",
        disabled: true,     
        textdisplay0: "none",    
        textdisplay2: "none",
        textdisplay3: "none",
        textdisplay4: "none",
        carddisplay: "none",
        carddisplay2: "none",
        carddisplay3: "none",
        index: 3,
        index1: 3,  
        index2: 3,  
        index3: 3,
        index4: 3,
        index5: 3,
        modalVisible: false,
        modalVisible2: false,
        modalVisible3: false,
    }

    static navigationOptions = {
        title: '治療方針',
        headerTitleStyle: {
            width: '70%',
            textAlign: 'center',
        },
    }



      pressHere(index){
        this.scroller.scrollTo({x: 0, y: 320 })
        if (index ===0){
        this.setState({
                display: "flex",
                display2: "none",
                display3: "none",
                display4: "none",
                displayope: "none",
                displayope2: "none",
                color: "white",
                index: index,
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay3: "none",
                textdisplay4: 'none',
                carddisplay: "none",
                carddisplay2: "none",
                carddisplay3: "none",
                index1: 4


             });
        }else{
            this.setState({
                display: "none",
                display2: "none",
                display3: "none",
                display4: "none",
                displayope: "flex",
                displayope2: "none",
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay3: "none",
                textdisplay4: "none",
                carddisplay: "none",
                carddisplay2: "none",
                carddisplay3: "none",
                color: "white",
                index: index,
                index1: 2,
                index4: 3
             });
        }
      }
  
      pressHere2(index1){
        this.scroller.scrollTo({x: 0, y: 440 })
            if ( this.state.index === 0 && index1 === 0){
                this.setState({
                    textdisplay0: "flex",
                    color: "white",
                    index1: index1,
                    index2: 4,
                    index5: 2,
                    textdisplay2: "none",
                    textdisplay3: "none",
                    textdisplay4: 'none',
                    display3: "none",
                    displayope2: "none",
                    carddisplay: "none",
                    carddisplay2: "none",
                    carddisplay3: "none",
                });
            
            }else{
                this.setState({
                    displayope2: "flex",
                    textdisplay0: "none",
                    textdisplay4: 'none',
                    carddisplay: "none",
                    carddisplay2: "none",
                    carddisplay3: "none",
                    color: "white",
                    index1: index1,
                    index5: 2
                    
            });
            }
         }

      pressHere3(index2){
            this.scroller.scrollTo({x: 0, y: 690 })
                if (this.state.index1 === 1 && index2 === 0){
                    this.setState({
                        textdisplay2: "flex",
                        textdisplay3: "none",
                        textdisplay4: "none",
                        color: "white",
                        index2: index2
                    });
                }else if(this.state.index1 === 1 && index2 === 1){
                    this.setState({
                        textdisplay2: "none",
                        textdisplay3: "flex",
                        textdisplay4: "none",
                        carddisplay: "none",
                        carddisplay2: "none",
                        carddisplay3: "none",
                        color: "white",
                        index2: index2
                     });
                }else if(this.state.index1 === 1 && index2 === 2){
                    this.setState({
                        textdisplay2: "none",
                        textdisplay3: "none",
                        textdisplay4: "flex",
                        carddisplay: "none",
                        carddisplay2: "none",
                        carddisplay3: "none",
                        color: "white",
                        index2: index2
                    });
                }        
      }

      pressHere4(index3){
        this.scroller.scrollTo({x: 0, y: 480 })
            if (index3 === 0){
                this.setState({
                    textdisplay0: "none",
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

      pressHere5(index4){
        this.scroller.scrollTo({x: 0, y: 490 })
        if (index4 === 0 ){
            this.setState({
                textdisplay2: 'flex',
                textdisplay4: 'none',
                index4: index4
            });
        }else {
            this.setState({
                textdisplay2: 'none',
                textdisplay4: 'flex',
                index4: index4

            });
        }
      }

      pressHere6(index5){
        this.scroller.scrollTo({x: 0, y: 670 })
        if (index5 === 0 ){
            this.setState({
                textdisplay0: 'flex',
                textdisplay2: 'none',
                textdisplay3: 'none',
                textdisplay4: 'none',
                display3: 'none',
                index5: index5,
                index2: 3
            });
        }else {
            this.setState({
                textdisplay0: 'none',
                textdisplay2: 'none',
                textdisplay3: 'none',
                textdisplay4: 'none',
                display3: 'flex',
                index5: index5,
                index2: 3

            });
        }
      }

      openModal(){
        this.setState({modalVisible: true});
      }

      openModal2(){
        this.setState({modalVisible2: true});
      }

      openModal3(){
        this.setState({modalVisible3: true});
      }

      closeModal(){
        this.setState({modalVisible: false});
    　}

      closeModal2(){
        this.setState({modalVisible2: false});
      }

      closeModal3(){
          this.setState({modalVisible3: false});
      }


      openCard(){
          this.state.disabled === true ?  this.setState({display5: "flex", disabled: false}) 
                                       :  this.setState({display5: "none", disabled: true})
      }


    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        const {index, index1, index2, index3, index4, index5, textdisplay0, display, display2, display3, display4, display5, displayope, displayope2, modalVisible, modalVisible2, modalVisible3,
            carddisplay, carddisplay2, carddisplay3, textdisplay2, textdisplay3, textdisplay4} = this.state;
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
                            visible = {modalVisible}
                            animationTipe = {'slide'}
                            onrequestClose = {()=>this.closeModal()}
                            transparent = {true}
                           >
                            <View style ={{backgroundColor:'rgb(233,231,217)', height: 730}}>
                                <Image  style={{width: 335, height: 590, alignSelf: 'center', marginTop: 60}} source={require('../assets/archart.png')} />
                                <Text style = {{fontSize: 7, marginTop: 15, textAlign: 'center'}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
            
                            <TouchableOpacity style = {[{marginTop: 15,backgroundColor: 'rgb(130,200,143)',alignSelf: 'center', width: 80}, styles.button]}
                                        onPress ={()=> this.closeModal()} >
                                <View>
                                    <Text style = {{color: 'white', fontSize: 12, padding:5, alignSelf: 'center'}}>閉じる</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
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
                        textStyle = {{fontSize: 12, lineHeight: 15 }}
                        selectedIndex={index}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['vena contracta 幅 > 0.6cm \n\n逆流量 ≧ 60ml/beat \n逆流率 ≧ 60% \n有効逆流弁口面積 ≧ 0.3cm2\n\n下行大動脈の汎拡張期逆流\n左室拡大', 'vena contracta 幅 < 0.6cm \n\n逆流量 < 60ml/beat \n逆流率 < 60% \n有効逆流弁口面積 < 0.3cm2\n\n\n']}
                        containerStyle={{height: 160,}}
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

                   

                    <View style = {{display: displayope, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold'}}>他の心臓手術の予定あり? </Text>
                    </View>

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index4)=> this.pressHere5(index4)}
                        textStyle = {{fontSize: 16,lineHeight: 15 }}
                        selectedIndex={index4}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['Yes', 'No',]}
                        containerStyle={{height: 50, marginTop: 40, display: displayope}} 
                        />

                    
                    <View style = {{display: displayope2, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>EF ＜ 50% {"\n"} or {"\n"}他の心臓手術の予定あり? </Text>
                    </View>

                     <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index5)=> this.pressHere6(index5)}
                        textStyle = {{fontSize: 16,lineHeight: 15 }}
                        selectedIndex={index5}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['Yes', 'No',]}
                        containerStyle={{height: 50, marginTop: 40, display: displayope2}} 
                        />
                    


                    <View style = {{display: display3, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>EF > 50% {"\n"}{"\n"}Dd, Dsのサイズは？ </Text>
                    </View>
                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index2)=> this.pressHere3(index2)}
                        textStyle = {{fontSize: 11,lineHeight: 15 }}
                        selectedIndex={index2}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['Ds > 50mm', 'Dd > 65mm\n手術リスク 低', 'Ds ≦ 50mm\nDd ≦ 65mm ']}
                        containerStyle={{height: 50, marginTop: 40, display: display3}} 
                        />



                    
                    <Card title = '下記3条件を満たす場合' containerStyle={{display: carddisplay, marginTop: 80, marginBottom: 20}}>
                        <Text　style={{marginBottom: 2, marginTop: 14}}>・AVA ≦ 1cm2  (indexed AVA ≦ 0.6cm2/m2)</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4}}>・SVi ≦ 35 ml/m2</Text>
                        <Text　style={{marginBottom: 34}}>・症状あり: 心不全、(前)失神、胸痛、労作時呼吸苦</Text>
                        <Text　style={{marginBottom: 24, fontSize:13, fontWeight: 'bold'}}>■ 心エコーは、収縮期血圧≦140mmHg  で施行する</Text>
                        <Text　style={{marginBottom: 2, fontSize: 10}}>AVA: 大動脈弁口面積   indexed AVA: 大動脈弁口面積係数</Text>
                        <Text　style={{marginBottom: 4, fontSize: 10}}>SVi: 1回拍出量係数</Text>
                    </Card>

                    <Card title = '下記2条件を満たす場合' containerStyle={{display: carddisplay2, marginTop: 80, marginBottom: 20}}>
                        <Text　style={{marginBottom: 20}}>ドブタミン負荷心エコーの結果</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4}}>・AVA ≦ 1cm2 </Text>
                        <Text　style={{marginBottom: 24, marginTop: 4}}>・Vmax ≧ 4m/s</Text>
                        <Text　style={{marginBottom: 2, fontSize: 10}}>AVA: 大動脈弁口面積  　　Vmax: 最高血流速度 </Text>

                    </Card>


                    <Card title = '他の心臓手術と同時施行の場合' containerStyle={{display: carddisplay3, marginTop: 80, marginBottom: 20}}>
                        <Text　style={{marginBottom: 2}}>石灰化が原因のmoderate ASは、進行すると</Text>
                        <Text　style={{marginBottom: 24}}>5年以内に症状がでる可能性がある</Text>

                    
                        <Text　style={{marginBottom: 2}}>5年以内に心臓再手術を要する可能性を考慮し、</Text>
                        <Text　style={{marginBottom: 6}}>個々の症例に応じ、手術を検討する</Text>
                    </Card>
            

                       
        
                    <View style = {[{display: textdisplay0, alignSelf: 'center',  backgroundColor: 'rgb(197,65,43)',  height: 50, width:'60%', marginTop: 60}, styles.button ]}>                  
                            <Text style = {styles.textstyle}>AVR  class 1 </Text>
                    </View>
                  
                    <View style = {[{display: textdisplay2, alignSelf: 'center', backgroundColor: 'rgb(50,185,236)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>AVR class 2a </Text>
                    </View>
                        
                    <View style = {[{display: textdisplay3, alignSelf: 'center', backgroundColor: 'rgb(233,152,85)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>AVR class 2b </Text>
                    </View>  
                   
                    <View style = {[{display: textdisplay4, marginTop: 60, width:'60%', height: 50, alignSelf: 'center', backgroundColor: 'rgb(130,200,143)'}, styles.button]}>
                        <TouchableOpacity onPress = {()=>this.openModal3()}>
                            <Text style = {styles.textstyle}>定期フォロー </Text>
                            <Icon 
                                name='touch-app' 
                                color= 'white'
                                containerStyle = {{ position:'relative', top: -30, left: 70 }}/>       
                        </TouchableOpacity>
                    </View>
                    
                    

                              
                    <Modal
                        visible = {modalVisible2}
                        animationTipe = {'slide'}
                        onrequestClose = {()=>this.closeModal2()}
                        transparent = {true}>
                         <View style ={{backgroundColor:'rgb(233,231,217)', height: 730}}>
                            <Image  style={{width: 340, height: 197, alignSelf: 'center', marginTop: 100, padding:10}} source={require('../assets/tavi.png')} />
                            <Text style = {{fontSize: 7, marginTop: 20,marginRight: 10, textAlign: 'right'}}>
                            2017 AHA/ACC Focused Update of the 2014 AHA/ACC Guideline
                            </Text>
                            <Card title = '2017年のガイドライン改訂' containerStyle={{marginTop: 40, marginBottom: 20}}>
                            
                                <Text　style={{marginBottom: 24, marginTop: 4}}>手術リスクが中等度の症例に対し、TAVIがclass 2a となった。</Text>
                                <Text　style={{marginBottom: 24, marginTop: 4}}>国内のガイドラインでは、手術禁忌もしくは高リスクの患者のみに対し、TAVIの適応とされているが、今後その適応が拡大されると予想される。　</Text>
                                <Text　style={{marginBottom: 2, fontSize: 10}}>SAVR: 外科的大動脈弁置換術  　　TAVI: 経カテーテル的大動脈弁置換術 </Text>

                                 <Text　style={{marginBottom: 2, marginTop: 4, fontSize: 9}}>先天性心疾患、心臓大血管の構造的疾患に対するカテーテル治療のガイドライン2014</Text>

                            </Card>
                            <TouchableOpacity style = {[{marginTop: 30,backgroundColor: 'rgb(130,200,143)',alignSelf: 'center', width: 80}, styles.button]}
                                    onPress ={()=> this.closeModal2()} >
                                <View >
                                    <Text style = {{color: 'white', fontSize: 12, padding:5, alignSelf: 'center'}}>閉じる</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                     <Modal
                        visible = {modalVisible3}
                        animationTipe = {'slide'}
                        onrequestClose = {()=>this.closeModal3()}
                        transparent = {true}>
                         <View style ={{backgroundColor:'rgb(233,231,217)', height: 730,}}>
  
                            <Card title = '外来フォロー 総論' containerStyle={{marginTop: 60, marginBottom: 20}}>
                                <Text　style={{marginBottom: 25, marginTop: 20, fontSize: 12}}>ASの進行を、正確に予測することは不可能である。故に、定期的な診察及び、エコーフォローが必要である。 </Text>
                                <Text　style={{marginBottom: 4, fontSize: 16, fontWeight: 'bold'}}>Vmax:　 3.0-3.9m/s </Text>
                                <Text　style={{marginBottom: 2, fontSize: 10}}>1年で平均、Vmax 0.3m/s、ΔPmean 7mmHg 増加し</Text>
                                <Text　style={{marginBottom: 24, fontSize: 10}}>AVA 0.1cm2 減少する</Text>
                                <Text　style={{marginBottom: 4, fontSize: 16, fontWeight: 'bold'}}>Vmax 　≧ 4m/s </Text>
                                <Text　style={{marginBottom: 2, fontSize: 10}}>2年間イベントフリーである確率は、30-50% である</Text>
                                <Text style = {{fontSize: 7, marginTop: 20, textAlign: 'center'}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
                            </Card>
                            <Card title = '外来フォロー 各論' containerStyle={{marginTop: 25, marginBottom: 20}}>
                                <Text　style={{marginBottom: 24, marginTop: 30 }}>Vmax        ≧ 4.0 m/s  →    6-12ヵ月毎に心エコー  </Text>
                                <Text　style={{marginBottom: 24, }}>Vmax:　   3-3.9 m/s  →　1-2年毎に心エコー　</Text>
                                <Text　>Vmax:　   2-2.9 m/s  →　3-5年毎に心エコー </Text>
                                <Text style = {{fontSize: 7, marginTop: 30, textAlign: 'center'}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
                            </Card>
                            <TouchableOpacity style = {[{marginTop: 10,backgroundColor: 'rgb(130,200,143)',alignSelf: 'center', width: 80}, styles.button]}
                                    onPress ={()=> this.closeModal3()} >
                                <View >
                                    <Text style = {{color: 'white', fontSize: 12, padding:5, alignSelf: 'center'}}>閉じる</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                    <Card containerStyle={{display: display5, marginTop: 40, marginBottom: 20}}>
                            <Text　style={{marginBottom: 2}}>Vmax:        最高血流速度</Text>
                            <Text　style={{marginBottom: 2}}>EF:             左室駆出率</Text>
                            <Text　style={{marginBottom: 2}}>Dd:   </Text>
                            <Text　style={{marginBottom: 2}}>Ds:   </Text>
                            <Text　style={{marginBottom: 2}}>AVA:          大動脈弁口面積 </Text>
                            <Text　style={{marginBottom: 2, marginBottom: 24}}>AVR:          外科的大動脈弁置換術</Text>
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
    },

})
 
    

export default ArtreatScreen;