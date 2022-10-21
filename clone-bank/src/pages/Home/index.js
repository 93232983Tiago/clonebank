import { 
  StyleSheet,
  Text,
  View,
  FlatList
  } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";


const list = [
  {
    id: 1,
    label: 'Pag*Supermercado',
    value:'130,00',
    date:'14/06/2022',
    type: 0 // DESPESAS
  },
  {
    id: 2,
    label: 'Pix-Recebido',
    value:'700,00',
    date:'14/06/2022',
    type: 1 // ENTRADA /RECEITA 
  },
  {
    id: 3,
    label: 'Uber *Uber *Trip',
    value:'35,00',
    date:'19/06/2022',
    type: 0 // DESPESAS
  },
]



export default function Home() {
    return (
      <View style={styles.container}>
        <Header name="Teste"/>
        <Balance saldo="15.400,00" gastos="-4.056,95"/>
        <Text style={styles.movtitle}>Últimas Movimentações</Text>
        <FlatList
          style={styles.listmov}
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator={false}
          renderItem={ ({item}) => <Movements data={item}/> }
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    movtitle:{
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 14,
      marginRight: 14,
      marginTop: 14,
      marginBottom: 14,
    },
    listmov:{
      marginStart: 14,
      marginEnd: 14,
      margin: 14,
    }
  });