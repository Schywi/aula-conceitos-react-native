<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Aula conceitual de React Native
</h3>


## Conceitos abordados


### Diferenças e semelhanças entre React e React Native

Os mesmos conceitos de estado, componentização, propriedades e imutabilidade do React podem 
ser aplicados no React Native, logo no React Native também usaremos useState e useEffect.

No entanto no React Native não temos herança de estilos e em grande parte dos comandos 
não há estilização pre-programada , então devemos estiliza-los importanto a propriedade StyleSheet 
do pacote "react-native" . Além disso , temos "tags" universais como 
"Text" e "View" que substituiem tags relacionadas a texto ou divisões do HTML.

` <Text> = <h1> , <h2> ... <strong> ...`
` <View> = <div> , <main> , <footer> ....`


#### Propriedades do FlatList:

- **FlatList**

     FlatList é um componente do React Native que é responsável por apresentar lista na nossa tela

- **data**

    São os nossos dados que vieram do back-end e vão preencher nossa lista

- **keyExtractor**

    É a nossa key que é passsada em uma lista do ReactJs, só que nesse caso fazemos um map especificando qual é o atributo que não se repete cada um dos nossos items.

- **renderItem**

    É uma função responsável por renderizar nossa lista na tela, dentro dela criamos um loop com o código que queremos que se repita dentro.

    ex: 

    ```jsx
    renderItem={({item: project}) => (
    	 <Text style={styles.project}>{project.title}</Text>
    )}
    ```
**SafeAreaView** : Serve para deixar a nossa aplicação ocupando somente sua area visivel.
 
**Touchable** : São componentes tocáveis, eles não possuem estilo então devemos cria-los.

### Como criar os estilos 

Após importar a propriedade "StyleSheet" do "react-native" podemos criar uma variavel que armazenará 
toda a nossa estilização em CSS após executar a função StyleSheet.create().   


    ```jsx
   
	const styles = StyleSheet.create({
	  container: { 
	    flex: 1,
	    backgroundColor: '#7159c1',
	  }, 
	  title: { 
	    color: '#FFF', 
	    fontSize: 20, 
	  }, 
	  button: {
	    backgroundColor: '#FFF',
	    margin: 20,
	    height:50, 
	    borderRadius: 4,
	    justifyContent: 'center',
	    alignItems: 'center'
	  },
	  buttonText: { 
	    fontWeight: 'bold'
	  }
	})
    ```


## Instalando dependências

 Execute o comando `yarn` no seu terminal para instalar todas as dependências .

**Atenção**: Caso você esteja emulando no iOS, na pasta do seu projeto navegue até a pasta ios executando o comando `cd ios` e depois execute `pod install` para instalar todas as dependências para o iOS.

