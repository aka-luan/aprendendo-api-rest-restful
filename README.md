# aprendendo-api-rest-restful

API: Application Programming Interface, capaz de realizar o intermédio entre o cliente e servidor para que o cliente possa usufruir dos recursos disponibilizados pelo servidor

a transferência de recursos, geralmente, utiliza o protocolo HTTP

REST: Representational State Transfer, delimita algumas obrigações nas transferências de dados

RESTful: p/ ser RESTful é preciso cumprir 6 obrigações/padrões (constraints) REST

Tais constraints são:

**Uniform Interface**: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

***client-server**: o cliente e o servidor precisam estar separados, o que ajuda na portabilidade*

***stateless***: cada requisição que o cliente faz deve conter todas as informações necessárias pro servidor ser capaz de responder (RESPONSE) as requisições (REQUEST)

***cacheable**: as resposta para uma requisição deverão ser explicitas ao dizer se aquela requisição pode u não ser cacheada pelo cliente*

***layered system:**  o cliente acessa a um endpoint sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição ou quais outras camadas o servidor estará lidando para que a requisição seja respondida*

***code on demand(opcional)***:  da a possibilidade da aplicação pegar códigos, como o JS, por exemplo, e executar no cliente;

### BOAS PRÁTICAS:

Utilizar verbos HTTP para requisições de resource

// **Verbos HTTP**

// GET: Usado para receber dados de um Resource

// POST: Envia dados para serem processados por um Resource

// PUT: Atualiza os dados de um Resource

// DELETE: Deleta um resource

Lembrar-se sempre de utilizar um padrão para tudo que escrever. e.g: padrão pra endpoints no plural (clients, users, rooms, etc)

Não deixar barra no final do endpoint

Padronizar também a notação que será utilizada no projeto

Nunca deixe o cliente sem respostas!

### STATUS DAS RESPOSTAS:

// 1xx: Informação

// 2xx: Sucesso

- 200: OK
- 201: CREATED
- 204: Não tem conteúdo PUT POST DELETE

// 3xx: Redirection

// 4xx: Client Error

- 400: Bad Request
- 404: Not Found!

// 5xx: Server Error 

- 500: Internal Server Error
