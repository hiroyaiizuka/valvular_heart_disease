import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity,TextInput, Image,Button,ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';



class EchoScreen extends React.Component{
    state ={
        
    }   

    static navigationOptions = ()=>{
      return { 
        title: '心エコー所見',
        headerStyle: { backgroundColor : '#265366'},
        headerTintColor: "#fff",
        headerBackTitle: null,
        headerTitleStyle: {
          width: '90%',
          textAlign: 'center',
          color: '#fff'
         },
      }
    }


  onChangeText1(text) {
    const numValue = text.replace(/[^0-9]/g, "");
    this.setState({age: numValue})
  }

  onChangeText2(text) {
    const numValue = text.replace(/[^0-9]/g, "");
    this.setState({weight: numValue})
  }

  onChangeText3(text) {
    this.setState({cr: text})
  }

  showResult(){
    const a = 140 - this.state.age;
    const b = 72 * this.state.cr;
    const c = a * this.state.weight;
    const d = Math.floor(c/b);
    const f = Math.floor(d * 0.85);

    if(this.state.checked1 === true){
      this.setState({ ccr: f })
    }else{
        this.setState({ccr: d})
    }
}

  
  render() {

    return (
      <ScrollView >
      <View style={styles.container}>
          <View style = {styles.woman} >
            <Text style={styles.text}>{"\n"}    性別　  </Text>
            <CheckBox 
                title= '男性'　
                checked = {this.state.checked} 
                onPress={()=> this.setState({checked: !this.state.checked, checked1: false})}/>
            
            <CheckBox 
                title= '女性'　
                checked = {this.state.checked1} 
                onPress={()=> this.setState({checked1: !this.state.checked1, checked: false})}/>
          </View>
         
          <View style = {styles.squere}>
            <Text style={{marginLeft: 10}}>{"\n"}  年齢　　　　　　　　　　　　　 歳</Text>
            <TextInput 
                style={styles.formage} 
                onChangeText = {text => this.onChangeText1(text) }/>
         </View> 
          <View style = {styles.squere}>
            <Text style={{marginLeft: 10}}>{"\n"}  体重　　　　　　　　　　　　　 kg</Text>
            <TextInput 
              style={styles.formweight} 
              onChangeText = {text => this.onChangeText2(text) }/>
          </View>
          <View  style = {styles.squere1}>
            <Text style={{marginLeft: 10}}>{"\n"}  血清Cr　　　　　　　　　　　   mg/dl</Text>
            <TextInput 
              style={styles.formcr} 
              onChangeText = {text => this.onChangeText3(text) }/>
          </View>
          
        <TouchableOpacity　 onPress = {()=> this.showResult()} >
              <Text style={styles.calbutton}> 計算する</Text>
        </TouchableOpacity > 
          
        <TouchableOpacity　style={styles.result}  >
              <Text style={styles.resultText}> {this.state.ccr}</Text>
              <Text style = {styles.ml}>ml/min</Text>
          </TouchableOpacity > 
          <Text style = {styles.sankou}>Cockcroft DW et al: Nephron 1976;16: 31-41{"\n"}日腎会誌 1997; 39: 1-37.</Text> 

      </View> 
      </ScrollView>
      
    );
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom:10,
    alignItems: 'center',
    
  },
  text:{
    marginTop:5
  },
  woman: {
    flexDirection: 'row',
    marginBottom:20,
    borderWidth: 1.5,
    padding:2,
    borderColor: '#DDD',
    width:300,
  },
  squere: {
    borderWidth: 1.5,
    width:300,
    height: 50,
    borderColor: '#DDD',
    backgroundColor: "transparent",
    marginTop:5,
    marginBottom: 5,
  },
  squere1: {
    borderWidth: 1.5,
    width:300,
    height: 50,
    borderColor: '#DDD',
    backgroundColor: "transparent",
    marginTop:5,
    marginBottom: 25,
  },
  formage: {
    position: 'absolute',
    top: 6, 
    left:150,
    backgroundColor: '#fff',
    height: 36,
    width: 50,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    textAlign: 'center',
  },
  formweight:{
    position: 'absolute',
    top: 6, 
    left:150,
    backgroundColor: '#fff',
    height: 36,
    width: 50,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    textAlign: 'center',
  },
  formcr: {
    position: 'absolute',
    top: 6, 
    left:150,
    backgroundColor: '#fff',
    height: 36,
    width: 50,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    textAlign: 'center',
  },
  result: {
    backgroundColor: '#fff',
    margin: 30,
    height: 50,
    width: 170,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  resultText: {
    color: '#000',
    padding: 11,
    fontWeight: 'bold', 
    textAlign: 'center',  
    fontSize:24
  },
  ml: {
    position: 'absolute',
    top:26,
    right: 5
  },
  sankou: {
    color: '#808080',
    fontSize: 11
  },
  scroll: {
    backgroundColor: '#DDD',
  },
  calbutton: {
    color: '#6600ff',
    padding: 11,
    fontWeight: 'bold', 
    textAlign: 'center',  
    fontSize:16
  },

});


export default EchoScreen;
