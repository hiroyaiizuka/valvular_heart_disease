import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image, View,Text, ScrollView, Animated,Modal } from 'react-native';
import { ButtonGroup, Card, Icon,} from 'react-native-elements';


class MrtreatScreen extends React.Component{
    state = {   
        display0: "none", 
        display: "none",
        display2: "none",
        display3: "none",
        display5: "none",
        displayope: "none",
        displayope2: "none",
        displayope3: "none",
        displayope4: "none",
        disabled: true,     
        textdisplay0: "none",    
        textdisplay2: "none",
        textdisplay3: "none",
        textdisplay4: "none",
        textdisplay2new: "none",
        carddisplay: "none",
        index0: 3,
        index: 3,
        index1: 3,  
        index2: 3,  
        index4: 3,
        index5: 3,
        index6: 3,
        index7: 3,
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


    pressHere0(index0){
        this.scroller.scrollTo({x: 0, y: 220 })
        if (index0 ===0){
        this.setState({
                color: "white",
                index0: index0,
                index: 2,
                display: "none",
                display3: "none",
                display0: "flex",
                displayope2: "none",
                displayope3: "none",
                displayope4: "none",
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: "none",
                textdisplay4: "none",
                carddisplay: "none",
             });
        }else{
            this.setState({
                color: "white",
                index0: index0,
                display0: "none",
                display: "none",
                display3: "none",
                displayope: "none",
                displayope2: "none",
                displayope3: "none",
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: "none",
                textdisplay4: "none",
                carddisplay: "flex",
                index7: 3

             });
        }
      }
  



      pressHere(index){
        this.scroller.scrollTo({x: 0, y: 420 })
        if (index ===0){
        this.setState({
                display: "flex",
                display2: "none",
                display3: "none",
                displayope: "none",
                displayope2: "none",
                displayope3: "none",
                color: "white",
                index: index,
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: "none",
                textdisplay4: 'none',
                index1: 4


             });
        }else{
            this.setState({
                display: "none",
                display2: "none",
                display3: "none",
                displayope: "none",
                displayope2: "none",
                displayope3: "none",
                textdisplay0: "none",
                textdisplay2: "none",
                textdisplay2new: "none",
                textdisplay3: "none",
                textdisplay4: "flex",
                color: "white",
                index: index,
                index1: 2,
                index4: 3
             });
        }
      }
  
      pressHere2(index1){
        this.scroller.scrollTo({x: 0, y: 560 })
            if ( this.state.index === 0 && index1 === 0){
                this.setState({
                    textdisplay0: "none",
                    color: "white",
                    index1: index1,
                    index2: 4,
                    index4: 3,
                    index5: 2,
                    index6: 2,
                    textdisplay2: "none",
                    textdisplay2new: "none",
                    textdisplay3: "none",
                    textdisplay4: 'none',
                    display3: "none",
                    displayope: "flex",
                    displayope2: "none",
                    displayope3: "none"
                });
            
            }else{
                this.setState({
                    displayope: "none",
                    displayope2: "none",
                    display3: "flex",
                    textdisplay0: "none",
                    textdisplay3: 'none',
                    color: "white",
                    index1: index1,
                    index2: 3,
                    index4: 3,
                    index5: 2,
                    
            });
            }
         }

      pressHere3(index2){
            this.scroller.scrollTo({x: 0, y: 760 })
                if (this.state.index1 ===1 && index2 === 0){
                    this.setState({
                        textdisplay0: "flex",
                        textdisplay2new: "none",
                        textdisplay4: "none",
                        displayope2: "none",
                        displayope3: "none",
                        color: "white",
                        index2: index2
                    });
                }else if(this.state.index1 ===1 && index2 === 1){
                    this.setState({
                        textdisplay0: "none",
                        textdisplay2new: "none",
                        textdisplay4: "none",
                        displayope2: "flex",
                        displayope3: "none",
                        color: "white",
                        index2: index2,
                        index5: 2,
                     });
                }else if(this.state.index1 ===1 && index2 === 2){
                    this.setState({
                        textdisplay0: "none",
                        textdisplay2: 'none',
                        textdisplay2new: "none",
                        textdisplay4: "none",
                        displayope2: "none",
                        displayope3: "flex",
                        color: "white",
                        index2: index2,
                        index6: 2
                    });
                }        
      }

      pressHere5(index4){
        this.scroller.scrollTo({x: 0, y: 600 })
        if (index4 === 0 ){
            this.setState({
                textdisplay0: 'flex',
                textdisplay3: 'none',
                index4: index4
            });
        }else {
            this.setState({
                textdisplay0: 'none',
                textdisplay3: 'flex',
                index4: index4

            });
        }
      }

      pressHere6(index5){
        this.scroller.scrollTo({x: 0, y: 880 })
        if (index5 === 0 ){
            this.setState({
                displayope3: "none",
                textdisplay2: 'flex',
                textdisplay2new: "none",
                textdisplay3: 'none',
                textdisplay4: 'none',
                index5: index5,
            });
        }else {
            this.setState({
                displayope3: "flex",
                textdisplay2: 'none',
                textdisplay2new: "none",
                textdisplay3: 'none',
                textdisplay4: 'none',
                index5: index5,
                index6:2

            });
        }
      }


      pressHere7(index6){
        this.scroller.scrollTo({x: 0, y: 960 })
        if (index6 === 0 ){
            this.setState({
                textdisplay2new: 'flex',
                textdisplay4: 'none',
                index6: index6,
            });
        }else {
            this.setState({
                textdisplay2new: 'none',
                textdisplay4: 'flex',
                index6: index6,

            });
        }
      }

      pressHere8(){
            this.scroller.scrollTo({x: 0, y: 660 })
            this.setState({displayope4: "flex" })
      }

      pressHere9(index7){
        this.scroller.scrollTo({x: 0, y: 760 })
            if (index7 === 0){
                this.setState({
                    color: "white",
                    index7: index7,
                    textdisplay3: "flex",
                    textdisplay4: "none"
                });
            }else if(index7 === 1){
                this.setState({
                    textdisplay3: "none",
                    textdisplay4: "flex",
                    color: "white",
                    index7: index7,
                 });
            }else if(index7 === 2){
                this.setState({
                    textdisplay3: "none",
                    textdisplay4: "flex",
                    color: "white",
                    index7: index7,
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
        const {index0, index, index1, index2, index4, index5, index6, index7, textdisplay0, display0, display, display2, display3, display5, displayope, displayope2, displayope3, displayope4,
               modalVisible, modalVisible3, textdisplay2, textdisplay2new, textdisplay3, textdisplay4, carddisplay} = this.state;
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
                                <Image  style={{width: 345, height: 800, alignSelf: 'center', marginTop: 60}} source={require('../assets/mrchart.png')} />
                                <Text style = {{fontSize: 6, marginTop: 15, left: 30}}>Focused Update of the 2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
            
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
                        selectedIndex={index0}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['一次性MR', '二次性MR']}
                        containerStyle={{height: 50}}
                        />

                    <ButtonGroup
                        selectedButtonStyle={{ backgroundColor : 'rgb(24,77,116)'}} 
                        onPress={(index)=> this.pressHere(index)}
                        textStyle = {{fontSize: 12, lineHeight: 15 }}
                        selectedIndex={index}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['vena contracta 幅 > 0.7cm \n\n逆流量 ≧ 60ml/beat \n逆流率 ≧ 50% \n有効逆流弁口面積 ≧ 0.4cm2\n\n左室拡大', '\nvena contracta 幅 < 0.7cm \n\n逆流量 < 60ml/beat \n逆流率 < 50% \n有効逆流弁口面積 < 0.4cm2\n\n\n']}
                        containerStyle={{height: 160, marginTop: 80, display: display0}}
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


                   

                    <View style = {{display: displayope, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold'}}>EF > 30% ? </Text>
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

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index2)=> this.pressHere3(index2)}
                        textStyle = {{fontSize: 12,lineHeight: 17 }}
                        selectedIndex={index2}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['EF 30 ~ 60%\n        or\nDs ≧ 40mm', ' EF > 60%\n      and\nDs < 40mm', '新規発症心房細動\n          or\n肺動脈収縮期圧\n > 50mmHg']}
                        containerStyle={{height: 100, marginTop: 80, display: display3}} 
                        />

                           
                    <View style = {{display: displayope2, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>進行性の{"\n"} Ds拡大  or  EF低下あり? </Text>
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

                    
                           
                    <View style = {{display: displayope3, marginTop: 80}}>
                    <Icon 
                                name='warning' 
                                color= 'rgb(24,77,116)'
                                containerStyle = {{position: 'relative', top:24,right: 65}}
                                size = {40}
                    />
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 22, fontWeight: 'bold', lineHeight: 20}}>施設基準</Text>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20, marginTop: 18}}>手術成功率 > 95%、残存MR なし{"\n"}and{"\n"}死亡率 1% 以下</Text>
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

                    
                    <Card title = '最大限の内科的治療' containerStyle={{display: carddisplay, marginTop: 80, marginBottom: 20}}>
                        <Text　style={{marginBottom: 2,  fontSize: 16, fontWeight: 'bold'}}>薬物治療</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>ACE阻害薬、ARB、β遮断薬、利尿薬 </Text>
                        <Text　style={{marginBottom: 2, marginTop: 4,  fontSize: 16, fontWeight: 'bold'}}>CRT</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4, fontSize: 12}}>左脚ブロックによる、両側乳頭筋の非同期運動の改善と</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4, fontSize: 12}}>リバースリモデリングによる心機能改善により</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>僧帽弁の接合不全の軽減が期待される</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4,  fontSize: 16, fontWeight: 'bold'}}>冠動脈治療</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4, fontSize: 12}}>血行再建により、乳頭筋付着部位の</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>壁運動が改善し、接合不全の改善が期待される</Text>
                        <Text　style={{marginBottom: 2, fontSize: 10}}>CRT: 心臓再同期療法 　 </Text>
                        
                    </Card>

                            
                    <View style = {{display: carddisplay, marginTop: 10}}>
                        <Icon 
                                name='archive' 
                                color= 'rgb(24,77,116)'
                                containerStyle = {{position: 'relative', top:0}}
                                size = {40}
                                onPress = {()=> this.pressHere8()}/>    
                    </View>

                     <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index7)=> this.pressHere9(index7)}
                        textStyle = {{fontSize: 13,lineHeight: 17 }}
                        selectedIndex={index7}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['       症候性\n (NYHA Ⅲ-Ⅳ)\n   severe MR', '  無症候性\nsevere MR', '進行性MR']}
                        containerStyle={{height: 70, marginTop: 40, display: displayope4}} 
                        />
    
                    

        
                    <View style = {[{display: textdisplay0, alignSelf: 'center',  backgroundColor: 'rgb(197,65,43)',  height: 50, width:'60%', marginTop: 60}, styles.button ]}>                  
                            <Text style = {styles.textstyle}>MV Surgery  class 1 </Text>
                    </View>
                  
                    <View style = {[{display: textdisplay2, alignSelf: 'center', backgroundColor: 'rgb(50,185,236)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>MV Surgery   class 2a </Text>
                    </View>

                    <View style = {[{display: textdisplay2new, alignSelf: 'center', backgroundColor: 'rgb(50,185,236)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>MV Repair   class 2a </Text>
                    </View>
                        
                    <View style = {[{display: textdisplay3, alignSelf: 'center', backgroundColor: 'rgb(233,152,85)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>MV Surgery   class 2b </Text>
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
                                <Text　style={{marginBottom: 2, marginTop: 20, fontSize: 12}}>MR の容量負荷により、左室拡大は進行し</Text>
                                <Text　style={{marginBottom: 20, fontSize: 12}}>弁の接合性を低下させ、これが更にMRを増悪させる</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>このプロセスは、症状や身体初見の変化として現れず</Text>
                                <Text　style={{marginBottom: 20, fontSize: 12}}>医師や患者が気づかぬうちに進行し、重症化しうる</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>したがって、定期的に、MRの重症度、心機能、心拡大を</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>評価することが重要である</Text>
                                <Text style = {{fontSize: 7, marginTop: 36, left: 15}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
                            </Card>
                            <Card title = '心エコーフォロー ' containerStyle={{marginTop: 25, marginBottom: 20}}>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>mild MR  →　                                         3-5年毎 </Text>
                                <Text　style={{marginBottom: 24, marginTop: 24, fontSize: 12 }}>moderate MR (無症状)   →                      1-2年毎</Text>
                                <Text　style={{marginBottom: 2, fontSize: 12}}>severe MR (無症状、EF>60%) →            6ヶ月毎</Text>                             
                                <Text style = {{fontSize: 7, marginTop: 30, left:74 }}>ESC/EACTS Guidelines for the management of valvular heart disease </Text>
                                <Text style = {{fontSize: 7, left:15 }}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease  </Text>
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
                            <Text　style={{marginBottom: 4}}>MR:                 僧帽弁閉鎖不全症 </Text>
                            <Text　style={{marginBottom: 4}}>EF:                  左室駆出率</Text>
                            <Text　style={{marginBottom: 6}}>MV Surgery:  僧帽弁形成術 or 僧帽弁置換術{"\n"}                       (可能であれば、形成術が望ましい)</Text>
                            <Text　style={{marginBottom: 4}}>MV Repair:     僧帽弁形成術</Text>
                            <Text　style={{marginBottom: 4}}>Ds:                  左室収縮末期径</Text>
                            <Text　style={{marginBottom: 4}}>NYHAⅢ:         安静時は無症状、高度な活動制限あり</Text>
                            <Text　style={{marginBottom: 4}}>NYHAⅣ:        いかなる身体活動も制限される</Text>
                            <Text　style={{marginBottom: 4}}>MitraClip:       経皮的僧帽弁接合不全修復術</Text>
                    </Card>       
                    <Card title = 'MitraClipについて' containerStyle={{display: display5, marginTop: 40, marginBottom: 100}}> 
                        <Text　style={{marginBottom: 2,  fontSize: 16, fontWeight: 'bold'}}>概要:</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>MitraClipは、外科的治療が困難な重度の僧帽弁閉鎖不全症の患者のための、低侵襲な経皮的僧帽弁接合不全修復システムである。これまで全世界で6万人以上の患者が治療を受けており、2018年4月に保険償還が得られた事で、日本で治療が可能となった。 </Text>
                        <Text　style={{marginBottom: 2, marginTop: 4,  fontSize: 16, fontWeight: 'bold'}}>適応:</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>外科手術は、MitraClipより治療成績が良好(残存MRが少ない、耐久性が良い)なため、適応は下記の様に限定される。{"\n"}手術リスクが高い、もしくは困難症例に対して、MRの改善により症状が改善することが期待される、EF 30%以上の症例。</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4,  fontSize: 16, fontWeight: 'bold'}}>治療成績:</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>2次性MR の生命予後は左室心筋障害の程度とされ、最大限の内科治療後の外科手術が、予後を改善したというエビデンスはない。これは、心機能が低下した手術リスクが高い症例が多く、積極的な治療介入が難しかったからである。しかし、MitraClip 治療により、症状、運動耐容能、QOLを改善させることがわかってきた。</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>2018年9月、無作為比較試験(COAPT試験)によって、低心機能2次性MR症例に対し、薬物治療群 vs 薬物治療 + MitraClip群 の治療成績の結果が発表された。1次エンドポイントである24ヶ月間の心不全入院イベント、全死亡共に、MitraClip群で有意に良好な結果であった。</Text>
                        <Text　style={{marginBottom: 20, marginTop: 4, fontSize: 12}}>薬物治療抵抗性の2次性MRに対するMitraClipは、本邦における心不全治療の有効な選択肢となることが、予想される。</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4, fontSize: 6, left: 50}}>2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease</Text>
                        <Text　style={{marginBottom: 2, marginTop: 4, fontSize: 6, left: 82}}>2018 NEJM Transcatheter Mitral-Valve Repair in Patients with Heart Failure</Text>
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
 
    

export default MrtreatScreen;