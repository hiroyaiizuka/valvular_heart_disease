import React, { Component } from 'react';
import { Dimensions, Text, View, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Table, TableWrapper,Cell,  Col, Cols } from 'react-native-table-component';


class TableScreen extends React.Component{    
    state = {
        tableTitle: ['逸脱','退行性変化', '感染', '先天性',
        '虚血性', '心筋症', '弁輪拡大' ],
        tableData: [
          ['軽度', '< 0.3','< 25','>500','拡張早期', '<30', '<30', '<0.1'],
          ['中等度', '0.3 - 0.6','25 - 64','200 - 500','拡張早期', '30 - 59', '30 - 49', '0.1 - 0.29'],
        ]
    }
    
    
    render(){
        const state = this.state;

        return(
            <Table style={{flexDirection: 'row'}}>
            {/* Left Wrapper */}
            <TableWrapper style={{width: 100}}>
                <Cell data="" style={styles.singleHead}/>
                <TableWrapper style={{flexDirection: 'row'}}>
                <Col data={['一次性', '二次性']} style={styles.head} heightArr={[120, 90]} textStyle={styles.text} />
                <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30,30,30,30, 30, 30]} textStyle={styles.titleText}></Col>
                </TableWrapper>
            </TableWrapper>
    
            {/* Right Wrapper */}
            <TableWrapper style={{flex:1}}>
                <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30, 30, 30,30]} textStyle={styles.text2}/>
            </TableWrapper>
            </Table>
        )
      
    }
}

     
const styles = StyleSheet.create({
  singleHead: { width: 100, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 0.5, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right', fontSize: 9 },
  text: { textAlign: 'center', fontSize: 11 },
  text2: { textAlign: 'center', fontSize: 10 },
  });


export default TableScreen;