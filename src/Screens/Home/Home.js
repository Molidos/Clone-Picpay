import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import MainBlock from '../../components/HomeScreen/mainBlock/mainBlock'
import ItemMenu from '../../components/HomeScreen/itensMenu/ItemMenu'
import ItemSuggestion from '../../components/HomeScreen/ItemSuggest/ItemSuggestion'
import ItemCard from '../../components/HomeScreen/itemCard/ItemCard'


export default function Home() {
  const [hidden, setHidden] = useState(false);
  return (
    <ScrollView style={styles.container}>
    
      <ScrollView
        horizontal={true}
        style={styles.containerScroll}
        showsHorizontalScrollIndicator={false}
      >

   
          {hidden ?
            <MainBlock
              first_info ='@jony.fernandes2'
              subject = 'Saldo em conta'
              subjectTwo = 'R$ 1000'
              buttonTitle = 'Extrato'
            />
            :
            <MainBlock
              first_info ='@jony.fernandes2'
              subject = 'Saldo em conta'
              subjectTwo = 'R$ ---------'
              buttonTitle = 'Extrato'
            
            />
          }
        <View style={styles.marginMainBlock}>
          <MainBlock
            first_info ='PicPay Card Débito'
            subject = 'PicPay Card Débito'
            subjectTwo = 'R$ ---------'
            buttonTitle = 'Peça Já'
          />
        </View>{/*margin main block */}
        
      </ScrollView>
      
      <View style={styles.itemMenu}>
        <ItemMenu
          img = {require('../../../assets/images/pix-icon.png')} 
          text = 'Pix'
          backgroundColor = "#2C6145"
          iconColor = "#fff"
        />

        <ItemMenu
          icon = "qrcode-scan" 
          text = 'Pagar com QR Code'
          backgroundColor = "#2C6145"
          iconColor = "#fff"
        />
        <ItemMenu 
          icon = "barcode-scan"
          text = 'Pagar Boletos'
          backgroundColor = "#2C6145" 
          iconColor = "#fff"
        />
        <ItemMenu
          icon ="account-switch"
          text = 'Pagar Pessoas'
          backgroundColor = "#2C6145" 
          iconColor = "#fff"
        />

      </View>{/*Item Menu*/}

      <View style={styles.itemMenu}>
        <ItemMenu
          icon = "cellphone"
          text = 'Recarga de celular'
          backgroundColor = "#d4eedf"
          iconColor = "#2C6145"
        />

        <ItemMenu
          icon = "handshake" 
          text = 'Empréstimo'
          backgroundColor = "#d4eedf"
          iconColor = "#2C6145"
        />
        <ItemMenu
          icon = "safe"
          text = 'Cofrinho'
          backgroundColor = "#d4eedf"
          iconColor = "#2C6145"
        />
        <ItemMenu
          icon = "plus"
          text = 'Mais Opções'
          backgroundColor = "#f9f9f9"
          iconColor = "#373c39"
        />

      </View>{/*Item Menu*/}

      <View style={styles.warning}>
        <View style={styles.contentWarning}>
          <Image
            source ={require('../../../assets/images/warning.png')}
            style = {styles.warningimg}
          />
          <Text>Falta Pouco! Finalize agora a solicitação do seu PicPay Card.</Text>
        </View>{/*Content Warning*/}

        <View style={[styles.contentWarning, styles.cloneWarning]}></View>{/*Clone Warning*/}
      </View>{/*Warning*/}

      <View style={styles.suggestions}>
        <Text style={styles.sugestText}>Sugestões para você</Text>
        <ScrollView
          horizontal={true}
          style={styles.scroolSuggest}
          showsHorizontalScrollIndicator={false}
        >
          <ItemSuggestion
            img = {require('../../../assets/images/uber.png')}
            text = "Uber"
          />
          <ItemSuggestion
            img = {require('../../../assets/images/ifood.png')}
            text = "ifood"
          />
          <ItemSuggestion
            img = {require('../../../assets/images/netflix.png')}
            text = "netflix"
          />
          <ItemSuggestion
            img = {require('../../../assets/images/freefire.png')}
            text = "freefire"
          />
          <ItemSuggestion
            img = {require('../../../assets/images/playstore.png')}
            text = "playstore"
          />
          <ItemSuggestion
            img = {require('../../../assets/images/playstation.png')}
            text = "playstation"
          />
          <ItemSuggestion
            img = {require('../../../assets/images/xbox.png')}
            text = "xbox"
          />
          <ItemSuggestion
            img = {require('../../../assets/images/amazon.png')}
            text = "amazon"
          />
          
        </ScrollView>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.containerMarketing}
        showsHorizontalScrollIndicator={false}
        
      >
        <TouchableOpacity>
          <Image
            source={require('.././../../assets/images/marketing1.png')}
            style={styles.marketingItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('.././../../assets/images/marketing2.png')}
            style={styles.marketingItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('.././../../assets/images/marketing3.png')}
            style={styles.marketingItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('.././../../assets/images/marketing4.png')}
            style={styles.marketingItem}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('.././../../assets/images/marketing5.png')}
            style={styles.marketingItem}
          />
        </TouchableOpacity>
      </ScrollView>



      <View style={styles.containerSectionCredit}>
        
      <View style={styles.center}>
        <View style={styles.creditSection}>
          <Text style={styles.creditSectionTitle}>
            Parcele tudo no cartão
          </Text>
          <Text >
            Até 12x, com qualquer cartão de crédito
          </Text>
          
        </View>{/*Credit Section*/}
      </View>{/*center*/}
    
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollCredit}
      >

          <ItemCard
            img={require('../../../assets/images/pix-icon-two.png')}
            title='Faça Pix parcelado'
            subject="Em até 12x!"
          />

          <ItemCard
            img={require('../../../assets/images/boleto.png')}
            title='Parcele seus boletos'
            subject="Suas contas em dia"
          />

          <ItemCard
            img={require('../../../assets/images/carteira.png')}
            title='Adicione seu cartão'
            subject="Pague em até 12x!"
          />

          <ItemCard
            img={require('../../../assets/images/qrcode.png')}
            title='Faça nas maquininhas'
            subject="Em até 12x!"
          />




      </ScrollView>
      </View>{/*containerSectionCredit*/}




      <View style={styles.containerSectionCredit}>

        <View style={styles.center}>
          <View style={styles.creditSection}>
            <Text style={styles.creditSectionTitle}>
              Promoções e Cashback
            </Text>
            <Text >
              Até 12x, com qualquer cartão de crédito
            </Text>
            
          </View>{/*Credit Section*/}
        </View>{/*center*/}
      
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollCredit}
        >
          
          <ItemCard
            img={require('../../../assets/images/amazon.png')}
            title='Amazon Brasil'
            subject="4% de cashback"
          />

          <ItemCard
            img={require('../../../assets/images/xbox.png')}
            title='Xbox'
            subject="1.5% de cashback"
          />

          <ItemCard
            img={require('../../../assets/images/netflix.png')}
            title='Netflix'
            subject="5% de cashback"
          />

          <ItemCard
            img={require('../../../assets/images/uber.png')}
            title='Uber'
            subject="15% de cashback"
          />

        </ScrollView>
      </View>{/*containerSectionCredit*/}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
      width:"100%",
      paddingTop:10,
      backgroundColor:'#fff'
    },
    center:{
      paddingHorizontal:15
    },
    marginMainBlock:{
      marginLeft:-15
    },
    containerScroll:{
    },
  
    itemMenu:{
      padding:15,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-start',
      flexWrap:'wrap'
    },
  
    warning:{
      padding:15,
      justifyContent:'center',
      alignItems:'center'
    },
  
    contentWarning:{
      width:"100%",
      backgroundColor:"#eee",
      padding:15,
      borderRadius:15,
      shadowColor: 'black',
      elevation: 15,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    warningimg:{
      width:20,
      height:20,
      marginRight:10
    },
    cloneWarning:{
      height:70,
      width:"95%",
      position:'absolute',
      zIndex:-1,
      top:"40%",
    },
  
    suggestions:{
      marginTop:25,
    },
    
    sugestText:{
      fontWeight:'bold',
      fontSize:20,
      marginLeft:15
    },
    
    containerMarketing:{
      paddingRight:15
    },
  
    marketingItem:{
      width:300,
      height:250,
      resizeMode:'contain'
    },
  
    containerSectionCredit:{
      marginBottom:50
    },
  
    creditSection:{
      height:180,
      backgroundColor:'#f6f6f6',
      borderRadius:20,
      padding:15
    },
  
    creditSectionTitle:{
      fontSize:18,
      fontWeight:'bold'
    },
    scrollCredit:{
      marginTop:-120
    }
  })