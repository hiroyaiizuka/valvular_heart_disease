import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Text, Image, View, ScrollView, Animated,Modal } from 'react-native';
import { ButtonGroup, Card, Icon } from 'react-native-elements';


class ArtreatScreen extends React.Component{
    state = {    
        display: "none",
        display2: "none",
        display3: "none",
        display5: "none",
        displayope: "none",
        displayope2: "none",
        disabled: true,     
        textdisplay0: "none",    
        textdisplay2: "none",
        textdisplay3: "none",
        textdisplay4: "none",
        index: 3,
        index1: 3,  
        index2: 3,  
        index4: 3,
        index5: 3,
        modalVisible: false,
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
                displayope: "none",
                displayope2: "none",
                color: "white",
                index: index,
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay3: "none",
                textdisplay4: 'none',
                index1: 4


             });
        }else{
            this.setState({
                display: "none",
                display2: "none",
                display3: "none",
                displayope: "flex",
                displayope2: "none",
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay3: "none",
                textdisplay4: "none",
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
                });
            
            }else{
                this.setState({
                    displayope2: "flex",
                    textdisplay0: "none",
                    textdisplay4: 'none',
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
                        color: "white",
                        index2: index2
                     });
                }else if(this.state.index1 === 1 && index2 === 2){
                    this.setState({
                        textdisplay2: "none",
                        textdisplay3: "none",
                        textdisplay4: "flex",
                        color: "white",
                        index2: index2
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

      openModal3(){
        this.setState({modalVisible3: true});
      }

      closeModal(){
        this.setState({modalVisible: false});
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
        const {index, index1, index2, index4, index5, textdisplay0, display, display2, display3, display5, displayope, displayope2, modalVisible, modalVisible3,
              textdisplay2, textdisplay3, textdisplay4} = this.state;
        return(
            <ScrollView  style = {{paddingTop: 100,  backgroundColor: 'rgb(233,231,217)'}} 
                    ref = {(scroller) => {this.scroller = scroller}}>

                    <View style = {{position: 'absolute', top: -60, alignSelf: 'center'}}>
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
                            <View style ={{backgroundColor:'rgb(233,231,217)', height: 738}}>
                                <Image  style={{width: 335, height: 590, alignSelf: 'center', marginTop: 60}} source={require('../assets/archart.png')} />
                                <Text style = {{fontSize: 7, marginTop: 15, left: 54}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
            
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
                        visible = {modalVisible3}
                        animationTipe = {'slide'}
                        onrequestClose = {()=>this.closeModal3()}
                        transparent = {true}>
                         <View style ={{backgroundColor:'rgb(233,231,217)', height: 738,}}>
  
                            <Card title = '外来フォロー 総論' containerStyle={{marginTop: 60, marginBottom: 20}}>
                                <Text　style={{marginBottom: 25, marginTop: 20, fontSize: 12}}>BNPの上昇は、左室機能低下と関係するため、計測することが望ましい</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>弁置換術後も、大動脈拡大は進行するので</Text>
                                <Text　style={{marginBottom: 24, fontSize: 12}}>術前に、上行大動脈置換の適応を考慮する必要がある</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>もし、上行大動脈が40mm以上に拡大した時は{"\n"}CTもしくはMRIで評価する</Text>
                                <Text style = {{fontSize: 7, marginTop: 20, textAlign: 'center'}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
                            </Card>
                            <Card title = '外来フォロー 各論' containerStyle={{marginTop: 25, marginBottom: 20}}>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>mild - moderate AR 　　→　2年毎         に心エコー </Text>
                                <Text　style={{marginBottom: 24, marginTop: 30, fontSize: 12 }}>severe AR (手術適応なし)→   最低1年毎   に心エコー</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>左室のサイズや、EFに大きな変化があった場合</Text>
                                <Text　style={{marginBottom: 16, fontSize: 12}}>または、手術適応の閾値に、計測値が近い時　</Text>
                                <Text　style={{marginBottom: 2,fontSize: 12}}>　　　　　　　　　　　    →　3-6ヶ月毎  に心エコー</Text>
                              
                                <Text style = {{fontSize: 7, marginTop: 30, left:47 }}>2017 ESC/EACTS Guidelines for the management of valvular heart disease</Text>
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
                            <Text　style={{marginBottom: 4}}>EF:             左室駆出率</Text>
                            <Text　style={{marginBottom: 4}}>Dd:            左室拡張末期径</Text>
                            <Text　style={{marginBottom: 4}}>Ds:             左室収縮末期径</Text>
                            <Text　style={{marginBottom: 4, marginBottom: 4}}>AVR:          外科的大動脈弁置換術</Text>
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