import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image, View,Text, ScrollView, Animated,Modal } from 'react-native';
import { ButtonGroup, Card, Icon,} from 'react-native-elements';


class MstreatScreen extends React.Component{
    state = {   
        display: "none",
        display2: "none",
        display3: "none",
        display5: "none",
        displayope: "none",
        displayope2: "none",
        displayope3: "none",
        disabled: true,     
        textdisplay0: "none",    
        textdisplay2: "none",
        textdisplay3: "none",
        textdisplay4: "none",
        textdisplay2new: "none",
        index:  3,
        index1: 3,  
        index2: 3,  
        index4: 3,
        index5: 3,
        index6: 3,
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


    pressHere0(index){
        this.scroller.scrollTo({x: 0, y: 220 })
        if (index ===0 || index ===1 ){
        this.setState({
                color: "white",
                index: index,
                index1: 2,
                display: "flex",
                display3: "none",
                displayope: "none",
                displayope2: "none",
                displayope3: "none",
                textdisplay0: 'none',
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: 'none',
                textdisplay4: "none",
             });
        }else{
            this.setState({
                color: "white",
                index: index,
                index1: 2,
                display: "none",
                display3: "flex",
                displayope: "none",
                displayope2: "none",
                displayope3: "none",
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: 'none',
                textdisplay4: "none",
                index2: 2
             });
        }
      }
  


      pressHere2(index1){
        this.scroller.scrollTo({x: 0, y: 340 })
        const {index} = this.state 
            if (index === 0 && index1 === 0 ){
                this.setState({
                    color: "white",
                    displayope: "flex",
                    displayope2: "none",
                    index1: index1,
                    index4: 2,
                    textdisplay0: 'none',
                    textdisplay2: "none",
                    textdisplay2new: "none",
                    displayope3: "none",
                    textdisplay4: "none",
                });
            
            }else if(index === 1 && index1 === 1) {
                this.setState({
                    color: "white",
                    displayope: "none",
                    displayope2: "none",
                    displayope3: "flex",
                    index1: index1,
                    textdisplay0: 'none',
                    textdisplay2: "none",
                    textdisplay2new: "none",
                    textdisplay3: 'none',
                    textdisplay4: "none",
                    index6: 2
                });
            }else{
                this.setState({
                    displayope: "flex",
                    displayope2: "none",
                    displayope3: "none",
                    color: "white",
                    index1: index1,       
                    index4: 2,
                    textdisplay0: 'none',
                    textdisplay2: "none",
                    textdisplay2new: "none",
                    textdisplay3: "none",
                    textdisplay4: "none",   
                    
            });
            }
         }

      pressHere3(index2){
            this.scroller.scrollTo({x: 0, y: 440 })
                if (index2 === 0){
                    this.setState({
                        textdisplay3: "flex",
                        textdisplay4: "none",
                        color: "white",
                        index2: index2
                    });
                }else {
                    this.setState({
                        textdisplay3: "none",
                        textdisplay4: "flex",
                        color: "white",
                        index2: index2,
                     });
              
                }        
      }

      pressHere5(index4){
        this.scroller.scrollTo({x: 0, y: 560 })

        if (this.state.index ===1 && index4 === 0 && this.state.index1 === 1){
            this.setState({
                textdisplay3: 'flex',
                textdisplay4: "none",
                index4: index4
        });
        }else if (this.state.index1 === 1 && index4 === 0 ){
            this.setState({
                textdisplay2: "none",
                textdisplay2new: "flex",
                textdisplay4: 'none',
                displayope2: "none",
                index4: index4
            });
        }else if (this.state.index1 === 1 && index4 ===1 ){
            this.setState({
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: "none",
                textdisplay4: 'flex',
                displayope2: "none",
                index4: index4

            });
        }else if (this.state.index1 ===0 && index4 ===0 ){
            this.setState({
                textdisplay0: 'none',
                textdisplay2: "flex",
                textdisplay2new: "none",
                textdisplay3: 'none',
                textdisplay4: 'none',
                displayope2: "none",
                index4: index4
            });
        }else {
            this.setState({
                textdisplay0: 'none',
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: 'none',
                textdisplay4: 'none',
                displayope2: "flex",
                index4: index4,
                index5: 2

            });
        }
      }

      pressHere6(index5){
        this.scroller.scrollTo({x: 0, y: 780 })
        if (index5 === 0 ){
            this.setState({
                textdisplay3: 'flex',
                textdisplay0: 'none',
                index5: index5,
            });
        }else {
            this.setState({
                textdisplay3: 'none',
                textdisplay0: 'flex',
                index5: index5,
            });
        }
      }


      pressHere7(index6){
        this.scroller.scrollTo({x: 0, y: 520 })
        if (index6 === 0 ){
            this.setState({
                textdisplay4: 'none',
                displayope: "flex",
                index6: index6,
                index4: 2
            });
        }else {
            this.setState({
                textdisplay2new: "none",
                textdisplay3: "none",
                textdisplay4: 'flex',
                displayope: "none",
                index6: index6,
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
        const {index, index1, index2, index4, index5, index6,textdisplay0,  display, display2, display3, display5, displayope, displayope2, displayope3,
               modalVisible, modalVisible3, textdisplay2, textdisplay2new, textdisplay3, textdisplay4} = this.state;
        return(
            <ScrollView  style = {{paddingTop: 100, backgroundColor: 'rgb(233,231,217)'}} 
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
                            <ScrollView style ={{backgroundColor:'rgb(233,231,217)', height: 1200, marginBottom: 80}}>
                                <Image  style={{width: 328, height: 600, alignSelf: 'center', marginTop: 60}} source={require('../assets/mschart.png')} />
                                <Text style = {{fontSize: 6, marginTop: 15, marginBottom: 5,left: 30}}>Focused Update of the 2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
            
                            <TouchableOpacity style = {[{marginTop: 15,backgroundColor: 'rgb(130,200,143)',alignSelf: 'center', width: 80}, styles.button]}
                                        onPress ={()=> this.closeModal()} >
                                <View>
                                    <Text style = {{color: 'white', fontSize: 12, padding:5, alignSelf: 'center'}}>閉じる</Text>
                                </View>
                            </TouchableOpacity>
                            </ScrollView>
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
                        onPress={(index)=> this.pressHere0(index)}
                        textStyle = {{fontSize: 14, lineHeight: 15 }}
                        selectedIndex={index}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['Very Severe MS', 'Severe MS', '進行性 MS']}
                        containerStyle={{height: 50}}
                        />

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index1)=> this.pressHere2(index1)}
                        textStyle = {{fontSize: 16}}
                        selectedIndex={index1}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['有症候性', '無症候性']}
                        containerStyle={{height: 50, marginTop: 80, display: display}} 
                        />

                                
                    <View style = {{display: displayope3, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>新規発症心房細動あり?</Text>
                    </View>
                    
                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index6)=> this.pressHere7(index6)}
                        textStyle = {{fontSize: 16,lineHeight: 15 }}
                        selectedIndex={index6}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['Yes', 'No',]}
                        containerStyle={{height: 50, marginTop: 40, display: displayope3}} 
                        />

                   

                    <View style = {{display: displayope, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)',marginBottom:6, fontSize: 16, fontWeight: 'bold'}}>弁の形が好適</Text>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)',marginBottom:6, fontSize: 16, fontWeight: 'bold'}}> 左房内血栓なし</Text>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)',marginBottom:6, fontSize: 16, fontWeight: 'bold'}}>MR:  mild 以下  </Text>
                    </View>

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index4)=> this.pressHere5(index4)}
                        textStyle = {{fontSize: 16,lineHeight: 15 }}
                        selectedIndex={index4}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['Yes', 'No']}
                        containerStyle={{height: 50, marginTop: 40, display: displayope}} 
                        />


                    <View style = {{display: display3, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold'}}>MS以外の原因が考えられない、症状あり {"\n"}{"\n"}運動時肺動脈楔入圧 > 25mmHg</Text>
                    </View>

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index2)=> this.pressHere3(index2)}
                        textStyle = {{fontSize: 16,lineHeight: 15 }}
                        selectedIndex={index2}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['Yes', 'No']}
                        containerStyle={{height: 50, marginTop: 80, display: display3}} 
                        />

                           
                    <View style = {{display: displayope2, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>NYHA Ⅲ-Ⅳ{"\n"}かつ{"\n"}手術高リスク</Text>
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

                    



        
                    <View style = {[{display: textdisplay0, alignSelf: 'center',  backgroundColor: 'rgb(197,65,43)',  height: 50, width:'60%', marginTop: 60}, styles.button ]}>                  
                            <Text style = {styles.textstyle}>MVR  class 1 </Text>
                    </View>
                  
                    <View style = {[{display: textdisplay2, alignSelf: 'center', backgroundColor: 'rgb(197,65,43)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>PMBC  class 1 </Text>
                    </View>

                    <View style = {[{display: textdisplay2new, alignSelf: 'center', backgroundColor: 'rgb(50,185,236)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>PMBC  class 2a </Text>
                    </View>
                        
                    <View style = {[{display: textdisplay3, alignSelf: 'center', backgroundColor: 'rgb(233,152,85)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>PMBC  class 2b </Text>
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
                         <ScrollView style ={{backgroundColor:'rgb(233,231,217)', height: 738,}}>
  
                            <Card title = '外来フォロー 総論' containerStyle={{marginTop: 60, marginBottom: 20}}>
                                <Text　style={{marginBottom: 2, marginTop: 20, fontSize: 12}}>弁口面積が 1.5 cm2 以下の、中等度以上の MSに進行</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>すると，左房から左室への血液流入障害を生じ、</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>左房圧の上昇と、それに伴う労作負荷時の臨床症状が</Text>
                                <Text　style={{marginBottom: 20, fontSize: 12}}>出現するとされる。</Text>
                                <Text　style={{marginBottom: 20, fontSize: 12}}>この段階に至ると、交連切開術や弁置換術による根本的治療が必要になる。</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>進行度合いについては、非常に個人差が大きくその</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>予測は困難であるが、弁口面積は、年間約 0.09cm2 程度</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>縮小し、軽度狭窄例で進行が早い傾向にあると言われる。</Text>
                                <Text style = {{fontSize: 7, marginTop: 36, left: 80}}>先天性心疾患、心臓大血管の構造的疾患に対するカテーテル治療のガイドライン</Text>
                                <Text style = {{fontSize: 7, marginTop: 2, left: 15}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
                            </Card>
                            <Card title = '心エコーフォロー' containerStyle={{marginTop: 25, marginBottom: 20}}>
                                <Text　style={{marginBottom: 24, marginTop: 24, fontSize: 12 }}>進行性 MS (弁口面積 ≧ 1.5cm2)  →             3-5年毎</Text>
                                <Text　style={{marginBottom: 24, fontSize: 12}}>severe MS (弁口面積 ≦ 1.5cm2) →              1-2年毎</Text>                             
                                <Text　style={{marginBottom: 2, fontSize: 12}}>Very Severe MS (弁口面積 ≦ 1.0cm2) →         1年毎</Text>  
                                <Text style = {{fontSize: 7, left:15, marginTop: 36 }}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease  </Text>
                            </Card>
                            <TouchableOpacity style = {[{marginTop: 10,backgroundColor: 'rgb(130,200,143)',alignSelf: 'center', width: 80}, styles.button]}
                                    onPress ={()=> this.closeModal3()} >
                                <View >
                                    <Text style = {{color: 'white', fontSize: 12, padding:5, alignSelf: 'center'}}>閉じる</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </Modal>

                    <Card containerStyle={{display: display5, marginTop: 60, marginBottom: 20}}>
                            <Text　style={{marginBottom: 4}}>MS:                 僧帽弁狭窄症 </Text>
                            <Text　style={{marginBottom: 4}}>MR:                 僧帽弁閉鎖不全症 </Text>
                            <Text　style={{marginBottom: 6}}>PMBC:            経皮的僧帽弁裂開術</Text>
                            <Text　style={{marginBottom: 4}}>MVR:              僧帽弁置換術</Text>
                            <Text　style={{marginBottom: 4}}>NYHAⅢ:         安静時は無症状、高度な活動制限あり</Text>
                            <Text　style={{marginBottom: 4}}>NYHAⅣ:        いかなる身体活動も制限される</Text>
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
 
    

export default MstreatScreen;