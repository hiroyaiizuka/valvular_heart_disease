import React, { Component } from 'react';
import {StyleSheet,Text,View,ScrollView, TouchableOpacity,Button} from 'react-native';
import {Linking} from 'react-native';

class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
      }


    render(){
      
        return(
            <ScrollView style ={styles.container}>
                
                    <View style = {styles.haien}>
                      <Text style = {styles.haienText}> 大動脈弁</Text>
                    </View>
                    <TouchableOpacity style = {{paddingBottom: 40}} onPress = {() =>{ this.props.navigation.navigate('Severe1')}}>
                        <Text style={{color: 'rgb(52,62,62)', paddingTop: 20, textAlign: 'center'}}>大動脈弁狭窄症{"\n"}   (Aortic Stenosis; AS)</Text>
                    </TouchableOpacity>
            
                    <TouchableOpacity style = {{paddingBottom: 25}} onPress = {() =>{ this.props.navigation.navigate('Severe2')}}>
                        <Text style={{color: 'rgb(52,62,62)', textAlign: 'center'}}>大動脈弁閉鎖不全症{"\n"}   (Aortic Regurgitation; AR)</Text>
                    </TouchableOpacity>



                    <View style = {styles.soubou}>
                        <Text style = {styles.haienText}> 僧帽弁 </Text>
                    </View>
                    <TouchableOpacity style = {{paddingBottom: 40}} onPress = {() =>{ this.props.navigation.navigate('Severe4')}}>
                        <Text style = {{textAlign: 'center'}}>僧帽弁狭窄症{"\n"}  (Mitral Stenosis; MS)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {{paddingBottom: 10}} onPress = {() =>{ this.props.navigation.navigate('Severe3')}}>
                        <Text style = {{textAlign: 'center'}}>僧帽弁閉鎖不全症{"\n"}(Mitral Regurgitation; MR)</Text>
                    </TouchableOpacity>


                    <View style = {styles.soubou}>
                        <Text style = {styles.haienText}> 三尖弁 </Text>
                    </View>    
                        <TouchableOpacity style = {{paddingBottom: 10}} onPress = {() =>{ this.props.navigation.navigate('Severe5')}}>
                        <Text style = {{textAlign: 'center'}}>三尖弁閉鎖不全症{"\n"}(Tricupid Regurgitation; TR)</Text>
                        </TouchableOpacity>
                   

                    <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 50,
                                    marginBottom: 20
                                    }}>
                        <Text style={{color: 'grey', fontSize: 10}} onPress = {()=> Linking.openURL('https://medical-leap.com/2018/10/07/rule/')}> 利用規約</Text>
                        <Text style={{color: 'grey' , fontSize: 10 ,paddingLeft: 25}} onPress = {()=> Linking.openURL('https://medical-leap.com/2018/10/07/privacy_policy/')}>プライバシーポリシー</Text>
                    </View>
           </ScrollView>
         
        );
    }    
}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'rgb(250,250,240)',
            height: 1000,

        },
        haien: {
            backgroundColor: 'rgb(130,200,143)',
            alignSelf: 'center',
            padding:14,
            borderRadius: 4,
            width: 250,
            marginTop:60,
            marginBottom: 30  
        },
        haienText: {
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          
        },
        soubou: {
            backgroundColor: 'rgb(130,200,143)',
            alignSelf: 'center',
            padding:14,
            borderRadius: 4,
            width: 250,
            marginTop:60,
            marginBottom: 40 
        },
        
    })


export default HomeScreen;