import React, { Component } from 'react';
import { Dimensions, Text, View, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {Table, TableWrapper,Cell,  Col, Cols } from 'react-native-table-component';


class TableScreen extends React.Component{    
    state = {
        tableTitle: ['粘液変性','退行性変化', '感染', '炎症性', '先天性',
        '虚血性', '心筋症', '弁輪拡大' ],
        tableData: [
          ['原因', '逸脱、腱索断裂/過伸展 ','石灰化、肥厚','感染性心内膜炎','リウマチ、膠原病、血管炎、放射線、薬剤', 'クレフト、パラシュートMV', '', '', '心房細動、拘束型心筋症'],
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
                <Col data={['一次性', '二次性']} style={styles.head} heightArr={[120, 120]} textStyle={styles.text} />
                <Col data={state.tableTitle} style={styles.title} heightArr={[30, 30,30,30,30, 30, 30, 30]} textStyle={styles.titleText}></Col>
                </TableWrapper>
            </TableWrapper>
    
            {/* Right Wrapper */}
            <TableWrapper style={{flex:1}}>
                <Cols data={state.tableData} heightArr={[40, 30, 30, 30, 30, 30, 30,30, 30]} textStyle={styles.text2}/>
            </TableWrapper>
            </Table>
        )
      
    }
}

     
const styles = StyleSheet.create({
  singleHead: { width: 100, height: 40, backgroundColor: '#c8e1ff' },
  head: { flex: 0.5, backgroundColor: '#c8e1ff' },
  title: { flex: 2, backgroundColor: '#f6f8fa' },
  titleText: { marginRight: 6, textAlign:'right', fontSize: 12 },
  text: { textAlign: 'center', fontSize: 11 },
  text2: { textAlign: 'center', fontSize: 10 },
  });


export default TableScreen;