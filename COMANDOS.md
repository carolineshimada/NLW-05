npm init -y **SERVE PARA CRIAR ARQUIVO PC JSON**

npm add express **SERVE PARA ADD O EXPRESS AO ARQUIVO JSON**

npm add @types/express -D **SERVE PARA TIRAR OS TRÊS PONTINHOS DO IMPORT EXPRESS, ONDE INSTALAMOS AS TIPAGENS**

npm add typescript **SERVE PARA CRIAR DEPENDENCIA/ARQUIVO DE CONFIG TYPESCTIPT**

npx tsc init **SERVE PARA INSTALAR CONFIGURAÇÕES PARA USAR TYPESCRIPT**


**MUDAR O STRICT PARA FALSE EM TC CONFIG POIS ELE COLOCA UMA XCONFIGURAÇÃO A MAIS NO TYPESCRIPT E PRECISAMOS DESATIVAR PARA NAO ATRAPALHAR NO DESENVOLVIMENTO**


npm add typeorm reflect-metadata sqlite3 **CONFIG BANCO DE DADOS, APOS ISSO CRIAR PASTA ORMCONFIG.JSON**

npx typeorm migration:create -n CreateSettings **CRIAR UMA MIGRATION**

npm run typeorm migration:run **SUBIR UMA TABELA**

npx typeorm migration:revert **REVERTER TABELA**

Ao fazer as entidades descomentar do tsconfig 
       **"experimentalDecorators": true,           "emitDecoratorMetadata": true,**         

npm add @types/uuid -D    **DEFINIR AS TIPAGENS PARA ID**

import { v } from "uuid" **DEFINIR O TIPO DE CHAVE QUE DESEJA, NO V4 É POR NUMEROS ALEATÓRIOS**

**Tipos de parâmetros** 
Routes params => parametros de rotas - ex: http://localhost:3333/settings/1 
Quey params => Filtros e buscas - ex http://localhost:3333/settings/1?search=algumacoisa  
Body Params => no corpo de requisição - {
    objeto para enviar requisição
}


**Order é: criar migration inserir as infos de dados na mesma => criar respositorio => Criar pasta services => criar controller => **
//é um javascript melhorada com algumas adições, conseguimos tipar os objetos e atributos a receber
//void-não tem retorno na função

/*
nesta função não foi passado tipagem do dado
----------------------------------------------------------
function cadastrarUsuario(id, name, email){
  console.log(id, name, email)
}
----------------------------------------------------------
*/

//mesma função passando tipagem
function cadastrarUsuario(id: string, name: string, email: string){
  console.log(id, name, email)
}


class CadastrarAdministrador {
  cadastro():void {
    cadastrarUsuario('1', 'carol', 'carol@gmail.com');
  }
}

class cadastrarVendedor {
  cadastro(){
    cadastrarUsuario('2', 'daniela', 'daniela@gmail.com')
  }
}//foi colocado sem as aspas foi passado direto como numero e não trará nenhum erro pois não esta sendo mostrado nenhuma tipagem pra essa condição

//--------------------------------------------------------------------------------------------------------
//maneira simplificada de tirar os dados do usuário separadamente
interface DadosDoUsuario1{
  id: string, name: string, email: string
}
function cadastrarUsuarioEx1( {email, id, name} : DadosDoUsuario1){ // os : nomex dos objetos
  console.log(id, name, email)
}
