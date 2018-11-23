import React, { Component } from 'react';
import { Dimensions, Text, View, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Table, TableWrapper, Row, Rows, } from 'react-native-table-component';


class Table2Screen extends React.Component{    
    state = {
        tableHead: ['','軽度', '中等度', '重度'],
        tableData: [
            ['平均圧較差 (mmHg)', '< 5','5 - 10','> 10'],
            ['収縮期肺動脈圧 (mmHg)', '< 30','30 - 50','> 50'],
            ['弁口面積\n(cm2)', '> 1.5','1.0 - 1.5','< 1.0'],
        ]
    }
    
    
    render(){
        const state = this.state;

        return(
         <Table style = {{marginTop:15}}>
            <Row data={state.tableHead} flexArr={[1.5,0.95,1.15,0.95]} style={styles.head} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1.5,0.95,1.15,0.95]} textStyle={styles.text}/>
          </Table>
        )
      
    }
}

     
const styles = StyleSheet.create({
    container: { flex: 1, padding: 3, paddingTop: 0, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#c8e1ff' },
    text: { margin: 6, fontSize:12, textAlign: 'center'},
  });


export default Table2Screen;