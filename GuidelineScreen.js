import React, { Component } from 'react';
import {Text,View,ScrollView,Linking} from 'react-native';
import { List, ListItem } from 'react-native-elements'


const list = [
    {
        name: '循環器超音波検査の適応と判読ガイドライン',
        subtitle: '2010年 日本循環器学会'

    },
    {
        name: '弁膜疾患の非薬物療法に関するガイドライン',
        subtitle: '2012年 日本循環器学会'
      
    },
    {
        name: '先天性心疾患、心臓大血管の構造的疾患に対するカテーテル治療のガイドライン',
        subtitle: '2014年 日本循環器学会'   
    },
]

const list2 = [
    {
        name: 'AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease',
        subtitle: '2014年 Journal of the American College of Cardiology'
    },

    {
        name: 'Focused Update of the 2014 AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease',
        subtitle: '2017年 Circulation'
    }, 
    {
        name: 'ESC/EACTS Guidelines for the management of valvular heart disease',
        subtitle: '2017年 European Heart Journal'
    }
]


class GuidelineScreen extends React.Component{

    
    onPress1(name){
        if (name === '循環器超音波検査の適応と判読ガイドライン'){
            Linking.openURL('http://www.j-circ.or.jp/guideline/pdf/JCS2010yoshida.h.pdf')
        
        }else if (name === '弁膜疾患の非薬物療法に関するガイドライン'){
            Linking.openURL('http://www.j-circ.or.jp/guideline/pdf/JCS2012_ookita_h.pdf')

        } else {
            Linking.openURL('http://www.j-circ.or.jp/guideline/pdf/JCS2014_nakanishi_h.pdf')
        }
    }

    onPress2(name){
        if (name === 'AHA/ACC Guideline for the Management of Patients With Valvular Heart Disease'){
            Linking.openURL('http://www.onlinejacc.org/content/accj/63/22/e57.full.pdf')
        }else if (name === 'ESC/EACTS Guidelines for the management of valvular heart disease'){
            Linking.openURL('https://academic.oup.com/eurheartj/article/38/36/2739/4095039')
        }else {
            Linking.openURL('https://secardiologia.es/images/grupos-trabajo/valvulopatias/documentos/2017-AHA-ACC-Focused-Update-VHD.pdf')
        }       
    }



    render(){
        const state = this.state;

        return(
          <ScrollView >
           <Text style={{fontSize: 25 ,padding: 20}} >国内</Text>
            <List>
                {list.map((item) => (
                    <ListItem
                        key={item.name}
                        title={item.name}
                        titleStyle = {{fontSize: 16, paddingTop: 6}}
                        subtitle={item.subtitle}
                        subtitleStyle = {{fontSize: 12, paddingTop: 6}}
                        onPress = {(name) => this.onPress1(item.name)}
                    />
                ))}
            </List>



            <Text style={{fontSize: 25 ,paddingTop: 40, paddingBottom: 20, paddingLeft: 20}} >海外</Text>
            <List>
                {list2.map((item) => (
                    <ListItem
                        key={item.name}
                        title={item.name}
                        titleStyle = {{fontSize: 16, paddingTop: 6}}
                        subtitle={item.subtitle}
                        subtitleStyle = {{fontSize: 12, paddingTop: 6}}
                        onPress = {(name) => this.onPress2(item.name)}
                    />
                ))}
            </List>
        
          </ScrollView>
        )
      
    }
}

export default GuidelineScreen;