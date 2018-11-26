import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image, View,Text, ScrollView, Animated,Modal } from 'react-native';
import { ButtonGroup, Card, Icon,} from 'react-native-elements';


class TrtreatScreen extends React.Component{
    state = {   
        displayprogressive: "none",
        displaykinou: "none",
        displaysymptomthree: "none",

        referencedisplay: "none",
        milddisplay: "none",
        sashindisplay: "none",
        ushitsudisplay: "none",
        proushitsudisplay: "none",

    
        t1: "none",    
        ta: "none",
        ta2: "none",
        tb: "none",
        tb2: "none",
       
        index:  3,
        index1: 3,  

        index3: 3,
        index4: 3,

        modalVisible: false,
        disabled: true,   
    }

    static navigationOptions = {
        title: '治療方針',
        headerTitleStyle: {
            width: '70%',
            textAlign: 'center',
        },
    }


    pressHere1(index){
        this.scroller.scrollTo({x: 0, y: 200 })
        if (index ===0 ){
        this.setState({
                color: "white",
                index: index,
                index1: 2,
                milddisplay: "flex",
                sashindisplay: "flex",
                ushitsudisplay: "none",
                proushitsudisplay: "none", 
                displayprogressive: "flex",
                displaykinou: "none",
                displaysymptomthree: "none",
                t1: "none",
                ta: "none",
                ta2: "none",
                tb: "none",
                tb2: "none"



             });
        }else if(index ===1){
            this.setState({
                color: "white",
                index: index,
                index3: 2,
                milddisplay: "none",
                sashindisplay: "none",
                ushitsudisplay: "none",
                proushitsudisplay: "none", 
                displayprogressive: "none",
                displaykinou: "flex", 
                displaysymptomthree: "none",
                t1: "none",
                ta: "none",
                ta2: "none",
                tb: "none",
                tb2: "none"
             });
        }else{
            this.setState({
                index: index,
                index4: 3, 
                milddisplay: "none",
                sashindisplay: "none",
                proushitsudisplay: "none", 
                displayprogressive: "none",
                displaykinou: "none",
                displaysymptomthree: "flex",
                t1: "none",
                ta: "none",
                ta2: "none",
                tb: "none",
                tb2: "none"
            });
        }
      }
  


      pressHere2(index3){
        this.scroller.scrollTo({x: 0, y: 340 })
            if (index3 === 0 ){
                this.setState({
                    color: "white",
                    index3: index3,
                    sashindisplay: "flex",
                    proushitsudisplay: "none", 
                    t1: "flex",
                    tb2: "none"
                });
            
            }else {
                this.setState({
                    color: "white",
                    index3: index3,
                    sashindisplay: "none",
                    proushitsudisplay: "flex",
                    t1: "none",
                    tb2: "flex"
                });
            }
      }







      pressHere3(index1){
        this.scroller.scrollTo({x: 0, y: 340 })
        const {index} = this.state 
            if (index1 === 0 ){
                this.setState({
                    color: "white",
                    index1: index1,
                    ta: "flex",
                    tb: "none"
                });
            
            }else if(index1 === 1) {
                this.setState({
                    color: "white",
                    index1: index1,
                    ta: "none",
                    tb: "flex"
                });
            }
      }


      pressHere4(index4){
        this.scroller.scrollTo({x: 0, y: 340 })

        if (index4 === 0){
            this.setState({
                sashindisplay: "none",
                ushitsudisplay: "flex",
                t1: "none",
                ta2: "none",
                tb2: "flex",
           
                index4: index4
        });
        }else if (index4 === 1 ){
            this.setState({
                sashindisplay: "flex",
                ushitsudisplay: "none",
                t1: "flex",
                ta2: "none",
                tb2: "none",
                index4: index4
            });
        }else {
            this.setState({
                sashindisplay: "none",
                ushitsudisplay: "none",
                t1: "none",
                ta2: "flex",
                tb2: "none",
                index4: index4,
     

            });
        }
      }




      openModal(){
        this.setState({modalVisible: true});
      }

      closeModal(){
        this.setState({modalVisible: false});
    　}

      openCard(){
          this.state.disabled === true ?  this.setState({referencedisplay: "flex", disabled: false}) 
                                       :  this.setState({referencedisplay: "none", disabled: true})
      }


    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        const {index, index1, index3, index4,  displayprogressive, displaykinou, displaysymptomthree, referencedisplay, milddisplay, sashindisplay, ushitsudisplay, proushitsudisplay, 
               modalVisible, t1,  ta, ta2, tb, tb2, } = this.state;
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
                                <Image  style={{width: 370, height: 555, alignSelf: 'center', marginTop: 60}} source={require('../assets/trchart.png')} />
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
                        onPress={(index)=> this.pressHere1(index)}
                        textStyle = {{fontSize: 14, lineHeight: 15 }}
                        selectedIndex={index}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['進行性TR', '無症候性重症TR', '症候性重症TR']}
                        containerStyle={{height: 50}}
                        />

                                
                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index3)=> this.pressHere2(index3)}
                        textStyle = {{fontSize: 16,lineHeight: 15 }}
                        selectedIndex={index3}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['機能性', '一次性',]}
                        containerStyle={{height: 50, marginTop: 100, display: displaykinou}} 
                        />


                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index4)=> this.pressHere4(index4)}
                        textStyle = {{fontSize: 16,lineHeight: 15 }}
                        selectedIndex={index4}
                        selectedTextStyle= {{color: 'white'}}　
                        buttons={['再手術', '機能性', '一次性']}
                        containerStyle={{height: 50, marginTop: 80, display: displaysymptomthree}} 
                        />


                    <View style = {{display: sashindisplay, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>左心系弁膜症手術の予定</Text>
                    </View>
                    <View style = {{display: milddisplay, marginTop: 40}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>mild or moderate TR</Text>
                    </View>
                    <View style = {{display: ushitsudisplay, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>右室機能良好{"\n"}肺高血圧高度以下</Text>
                    </View>
                    <View style = {{display: proushitsudisplay, marginTop: 80}}>
                        <Text style = {{textAlign: 'center', color: 'rgb(24,77,116)', fontSize: 16, fontWeight: 'bold', lineHeight: 20}}>進行性右室機能不全</Text>
                    </View>
                    

                    <ButtonGroup
                        selectedButtonStyle={{backgroundColor: 'rgb(24,77,116)'}} 
                        onPress={(index1)=> this.pressHere3(index1)}
                        textStyle = {{fontSize: 16}}
                        selectedIndex={index1}
                        selectedTextStyle= {{color: 'white'}}
                        buttons={['三尖弁輪拡大', '三尖弁輪拡大\n肺高血圧あり']}
                        containerStyle={{height: 50, marginTop: 80, display: displayprogressive}} 
                        />

        
                    <View style = {[{display: t1, alignSelf: 'center',  backgroundColor: 'rgb(197,65,43)',  height: 50, width:'60%', marginTop: 60}, styles.button ]}>                  
                            <Text style = {styles.textstyle}>TV Repair or TVR  class 1 </Text>
                    </View>
                  
                    <View style = {[{display: ta, alignSelf: 'center', backgroundColor: 'rgb(50,185,236)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>TV Repair  class 2a </Text>
                    </View>

                    <View style = {[{display: ta2, alignSelf: 'center', backgroundColor: 'rgb(50,185,236)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>TV Repair or TVR  class 2a </Text>
                    </View>
                        
                    <View style = {[{display: tb, alignSelf: 'center', backgroundColor: 'rgb(233,152,85)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>TV Repair  class 2b </Text>
                    </View>  

                    <View style = {[{display: tb2, alignSelf: 'center', backgroundColor: 'rgb(233,152,85)',  height: 50, width:'60%', marginTop: 60}, styles.button]}>
                        <Text style = {styles.textstyle}>TV Repair or TVR  class 2b </Text>
                    </View> 
                   
                   
                    
                    <Card containerStyle={{display: referencedisplay, marginTop: 60, marginBottom: 20}}>
                            <Text　style={{marginBottom: 4}}>TR:                 三尖弁閉鎖不全症 </Text>
                            <Text　style={{marginBottom: 4}}>TV Repair:                 僧帽弁閉鎖不全症 </Text>
                            <Text　style={{marginBottom: 6}}>TVR:            経皮的僧帽弁裂開術</Text>
                         
                            <Text　style={{marginBottom: 4}}>進行性右室機能不全:        いかなる身体活動も制限される</Text>
                            <Text　style={{marginBottom: 4}}>三尖弁輪拡大:                 僧帽弁閉鎖不全症 </Text>
                            <Text　style={{marginBottom: 6}}>再手術:            経皮的僧帽弁裂開術</Text>
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
 
    

export default TrtreatScreen;

