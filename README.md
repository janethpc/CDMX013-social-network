# **_Party Girls Social Network_**

Te presentamos [**_Party Girls_**](https://party-girls-2022.web.app), una red social donde podrás encontrar y publicar las mejores recomendaciones de _alitas y bebidas_, porque somos **_"Borrachas pero buenas muchachas"_**.

<center><img src="src\Images\Mi proyecto.png"></center>

___

## **Indice**

**_1. [Primeros Pasos](#1-primeros-pasos)_**

**_2. [Organización](#2-organización)_**

**_3. [Diseño](#3-diseño)_**

**_4. [App Web SPA](#4-app-web-spa)_**


___
## **_1.Primeros Pasos_**

Este proyecto representó un gran reto y al mismo tiempo un gran aprendizaje, ya que logramos la integración de un excelente equipo de trabajo, en el que la comunicación y la empatía fueron los principales ingredientes.

El primer paso fue la elección del tema, queríamos que fuera un tema relajado y atractivo, que además se prestara para _la convivencia e intercambio de opiniones_, el tema elegido para esta red social fue **_"The Best Drinks & Wings"_**, en donde l@s Usiari@s pudieran dar y leer reseñas de los diversos comercios que ofrecen venta de _alitas y bebidas alcoholicas_ . El tema fue bien acogido por nuestras compañeras del bootcamp, despertando el interés de la mayoría.
____
## **_2. Organización_**

Teniendo claro el tema y los requiriemientos del proyecto nos enfocamos en la planeación para el adecuado desarrollo de nuestro proyecto, iniciando con un tableto colaborativo de organizacion digital, en la plataforma [**_Trello_**](https://trello.com/b/kBthYiLd/mujer-fiestera).

Dicho tablero fue seccionado en etapas para ir trabajando progresivamente en Historias de Usuario, las cuales fueron detalladas lo más posible de acuerdo a las necesidades de nuestr@s usuari@s y definición de terminado para ayudarnos delimitar cuando ha sido suficiente trabajo en una HU y ajustarnos asi a los tiempos de entrega.

<center><img src=src\Images\TRELLO.PNG></center>

___

## **_3. Diseño_**

La elección del nombre fue el siguiente paso a seguir, nos decidimos por **PARTY GIRLS**, pensando en lo atractivo del mismo y la facilidad para recordarlo, quedándose en la mente de nuestros miembros. El slogan **_"Best wings & drinks"_**, nos da una idea de la finalidad de esta red social, inspirando asi los primeras imagenes de los que sería la esencia de nuestra red social, los logos.
"
<center><img src="src\Images\lfr.PNG"></center>


Haciendo uso de la memoria colectiva en donde viven los letreros de luz neon, fueron seleccionados cuidasamente la paleta de colores y fuentes que transporten al usuario a una experiencia de fiesta nocturna. 

Con las ideas bien definidas y siempre inclinadas a la satisfaccion de las necesidades del usuario se procede a la realización del diseño de un prototipo de alta fidelidad en la plataforma [**_FIGMA_**](https://www.figma.com/file/4G4h6C6a3X9j8LDKX16AcE/Social-Network) en el cual se piensa principalmente en que el usuario pueda tener una interacción sencilla con la interfaz final del producto. 

<center><img src=src\Images\Figma.PNG></center>


Se pensó en el concepto de [**_Mobile First_**](https://mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/), por lo que nuestro diseño y desarrollo parte de como se ve y funciona la aplicación en un dispositivo móvil. 
___

## **4. App Web SPA**

Uno de los objetivos del proyecto era crear una [**_Single Page Application (SPA)_**](https://es.wikipedia.org/wiki/Single-page_application#Frameworks_de_JavaScript), en la que todos recursos se cargan dinámicamente con el propósito de brindar una mejor experiencia al usuario.

El siguiente objetivo consistía en permitir a la usuarias, darse de alta y loguearse, teniendo la opción de realizarlo directamente en *nuestro formulario* o haciendo uso de sus cuentas de **_Google, Twitter o GitHub_**. Para lograr esto se hizo uso del [**_SDK de Firebase Authentication (Auth)_**](https://firebase.google.com/docs/auth), la cual nos permite la creación de una base de datos y el fácil acceso a la misma, logrando que nuestros usuarios puedan guardar la información de su usuario para logearse cuando ellos quieran y revisar sus recomendaciones pasadas.

Otro objetivo era el conseguir que nuestros usuarios pudieran visualizar un muro, en el cual pudieran **publicar** sus recomendaciones, y no solo eso, si no tambien permitirle, dar **like** y visualizar **cuántos likes** tiene cierta publicación, **eliminar** una publicación específica, **editar** sus recomendaciones por si cambió de parecer. Para lo cual, hacemos uso de las herramientas proporcionadas por **firebase**, implementando **Cloud Firestore** a fin de poder almacenar y sincronizar los datos de los usuarios. 

<center><img src="src\Images\Post.PNG"></center>




