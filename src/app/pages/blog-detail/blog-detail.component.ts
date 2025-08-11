import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { BtnShareComponent } from '@components/btn-share/btn-share.component';

registerLocaleData(localeEs);

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, BtnShareComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog: any;

  blogs = [
    {
      id: 1,
      image: '/assets/images/chocolate1-min.jpg',
      title: 'Beneficios del Café en tu Día a Día',
      date: '2025-07-25',
      descriptionShort: 'Descubre cómo una taza de café puede mejorar tu productividad y estado de ánimo.',
      descriptionLong: `El café no es solo una bebida que nos despierta por las mañanas; es un ritual que conecta con nuestra rutina, nuestra cultura y nuestras emociones. Diversos estudios han demostrado que la cafeína presente en el café actúa como un estimulante natural para el sistema nervioso central, mejorando la concentración, la memoria a corto plazo y el tiempo de reacción. Esto lo convierte en un aliado perfecto para comenzar el día con energía o para afrontar una tarde de trabajo intensa.

  Además, el café es rico en antioxidantes, los cuales ayudan a combatir los radicales libres y contribuyen a reducir el riesgo de ciertas enfermedades. Incluso, se ha vinculado con una mejor salud cardiovascular y un menor riesgo de padecer enfermedades neurodegenerativas como el Alzheimer o el Parkinson.

  Por otro lado, el café tiene un componente social que no se debe subestimar. Compartir una taza con amigos, compañeros o familiares crea un espacio de conexión y conversación. En muchos países, la pausa para el café es casi sagrada, y no se trata solo de la bebida, sino de la experiencia.

  En el contexto de un Ecommerce de café, conocer estos beneficios permite a los clientes entender por qué vale la pena invertir en granos de calidad. No se trata únicamente de un sabor superior, sino de potenciar su bienestar físico y emocional.

  Si bien es importante disfrutarlo con moderación para evitar efectos secundarios como el insomnio o la ansiedad, una o dos tazas al día pueden marcar la diferencia en tu productividad y en tu estado de ánimo. La próxima vez que prepares tu café, recuerda que no solo estás llenando tu taza: también estás alimentando tu cuerpo, tu mente y tus relaciones.`
    },
    {
      id: 2,
      image: '/assets/images/chocolate2-min.jpg',
      title: 'Cómo Preparar un Espresso Perfecto',
      date: '2025-07-20',
      descriptionShort: 'Guía paso a paso para lograr un espresso con sabor intenso y cremoso.',
      descriptionLong: `Un espresso perfecto es el sueño de cualquier amante del café. Su sabor concentrado, su aroma profundo y su característico toque cremoso son el resultado de una preparación precisa y cuidadosa. Aunque muchos piensan que solo una máquina profesional puede lograrlo, la realidad es que con el equipo adecuado y algo de práctica, es posible obtener resultados sorprendentes en casa.

  El primer paso para preparar un espresso de calidad es seleccionar granos frescos y de buena procedencia. Un café de tueste medio a oscuro suele funcionar muy bien, ya que aporta un cuerpo robusto y notas aromáticas complejas. El molido debe ser fino, casi como la textura de la sal de mesa, para garantizar que el agua extraiga todos los compuestos del café de manera uniforme.

  Otro aspecto clave es la proporción: generalmente, se utilizan entre 18 y 20 gramos de café para obtener una bebida de 25 a 30 ml en un tiempo de extracción de 25 a 30 segundos. Esta precisión es la que marca la diferencia entre un espresso balanceado y uno sobreextraído o subextraído.

  La temperatura del agua debe rondar los 90-96°C, y la presión óptima suele ser de 9 bares. Estos factores influyen directamente en la formación de la crema, esa capa dorada y espesa que corona un buen espresso y que concentra gran parte del aroma.

  Finalmente, servir el espresso inmediatamente después de su extracción es fundamental para preservar todo su perfil sensorial. Un espresso no es solo café: es una experiencia que combina técnica, calidad y pasión. En un Ecommerce de café, enseñar a los clientes estos detalles no solo mejora su disfrute, sino que también fortalece su lealtad hacia la marca.`
    },
    {
      id: 3,
      image: '/assets/images/chocolate3-min.jpg',
      title: 'Café de Especialidad: ¿Qué lo Hace Único?',
      date: '2025-07-15',
      descriptionShort: 'Explora las características que diferencian al café de especialidad del convencional.',
      descriptionLong: `El café de especialidad es mucho más que un término de moda en el mundo cafetero; representa un estándar de calidad que transforma la experiencia de beber café. Este tipo de café proviene de granos que han sido cuidadosamente cultivados, cosechados y procesados, alcanzando un puntaje de al menos 80 sobre 100 en la escala de la Specialty Coffee Association (SCA).

  A diferencia del café comercial, que muchas veces proviene de mezclas de origen desconocido, el café de especialidad ofrece trazabilidad: puedes saber exactamente de qué región, finca e incluso lote proviene. Esto no solo garantiza un mejor control de calidad, sino que también apoya a productores comprometidos con prácticas sostenibles y éticas.

  Su cultivo suele realizarse a mayores altitudes, en condiciones climáticas específicas y con métodos de cosecha manual que permiten seleccionar únicamente las cerezas maduras. El resultado es una taza con perfiles sensoriales únicos: desde notas frutales y florales hasta matices achocolatados y especiados.

  El tueste de estos granos también es más cuidadoso, buscando resaltar sus características naturales en lugar de enmascararlas. Esto significa que un café de especialidad no será necesariamente “fuerte” en términos de amargor, sino que ofrecerá una complejidad de sabores que evoluciona en cada sorbo.

  Para un Ecommerce de café, ofrecer productos de especialidad significa educar al cliente en la apreciación de un café de alta calidad. Es vender no solo un producto, sino una historia: la del agricultor, la tierra, el clima y el cuidado que hay detrás de cada grano. Y para el consumidor, cada taza se convierte en un viaje sensorial que lo conecta con el origen y la pasión por el café auténtico.`
    },
    {
    id: 4,
    image: '/assets/images/chocolate4-min.jpg',
    title: 'Los Mejores Métodos de Filtrado Casero',
    date: '2025-07-10',
    descriptionShort: 'Comparativa entre V60, Chemex y prensa francesa para preparar café en casa.',
    descriptionLong: `Preparar café en casa se ha convertido en todo un arte, y la elección del método de filtrado puede transformar por completo la experiencia. Entre los métodos más populares encontramos el V60, la Chemex y la prensa francesa, cada uno con sus particularidades y encantos.

El V60 es ideal para quienes disfrutan de un café limpio y con notas muy definidas. Su forma cónica y el uso de filtros de papel permiten una extracción uniforme y controlada. El truco está en la técnica del vertido: movimientos circulares y constantes que aseguren un contacto homogéneo del agua con el café molido.

La Chemex, por otro lado, es perfecta para quienes buscan una bebida suave y elegante. Su filtro grueso retiene más aceites y sedimentos, resultando en un café de sabor delicado y claridad excepcional. Además, su diseño de vidrio no solo es estético, sino que también es funcional para mantener la temperatura.

La prensa francesa destaca por producir un café con cuerpo y textura más rica. Al no utilizar filtros de papel, los aceites naturales del café permanecen en la bebida, lo que intensifica el sabor y el aroma. Es una opción excelente para quienes disfrutan de cafés más robustos.

En un Ecommerce de café, ofrecer no solo los granos sino también las herramientas para estos métodos, junto con guías prácticas, puede enriquecer la experiencia del cliente. No se trata solo de vender café, sino de ayudar a las personas a descubrir cuál es el método que mejor resalta los sabores que aman.

Cada técnica requiere su propio tipo de molido, tiempo de extracción y proporción de agua. Dominar estas variables es la clave para lograr un café casero que rivalice con el de una cafetería profesional.`
    },
    {
      id: 5,
      image: '/assets/images/chocolate5-min.jpg',
      title: '¿Molido Fino o Grueso? Guía de Molido de Café',
      date: '2025-07-05',
      descriptionShort: 'Aprende cómo el grosor del molido afecta el sabor de tu bebida.',
      descriptionLong: `El molido del café es uno de los factores más determinantes en el resultado final de la bebida, y sin embargo, es un aspecto que muchos pasan por alto. El grosor del molido debe adaptarse al método de preparación, ya que influye en la velocidad de extracción y, por ende, en el sabor.

  Un molido fino, similar a la textura de la sal de mesa, es ideal para espressos. Esto permite que el agua, a alta presión, extraiga rápidamente los compuestos aromáticos y de sabor. Sin embargo, un molido demasiado fino en otros métodos puede provocar sobreextracción, generando un café amargo y astringente.

  En el extremo opuesto, un molido grueso es perfecto para métodos como la prensa francesa, donde el contacto con el agua es más prolongado. Este grosor evita que el café se sature y permite una extracción equilibrada. Un molido muy grueso en métodos de filtrado rápido, como el V60, resultará en un café aguado y sin carácter.

  Existen también molidos intermedios para métodos como la cafetera de goteo o la AeroPress, cada uno con su propio rango óptimo de grosor. La clave está en ajustar el molido para encontrar el balance perfecto entre cuerpo, acidez y dulzura.

  En un Ecommerce de café, educar al cliente sobre la importancia del molido y ofrecer opciones de molienda personalizadas según el método de preparación es un valor añadido que mejora la experiencia y fideliza a los consumidores. Después de todo, un café excelente comienza con un molido adecuado.`
    },
    {
      id: 6,
      image: '/assets/images/chocolate6-min.jpg',
      title: 'El Origen del Café: Un Viaje por Etiopía',
      date: '2025-07-01',
      descriptionShort: 'Conoce la historia y cultura detrás del país donde nació el café.',
      descriptionLong: `Etiopía es reconocida como la cuna del café, y su historia está tan impregnada de aroma como sus paisajes. La leyenda más conocida cuenta que un pastor llamado Kaldi descubrió el café cuando notó que sus cabras se volvían más enérgicas tras comer las cerezas rojas de un arbusto.

  Más allá de la leyenda, Etiopía es un país donde el café forma parte esencial de la vida diaria. Las ceremonias de café etíopes son un acto social y cultural profundo, en el que la preparación de la bebida se convierte en un momento de conexión y respeto. El proceso puede durar horas y se realiza con granos recién tostados, molidos a mano y servidos en varias rondas.

  Los cafés etíopes son famosos por sus perfiles sensoriales únicos. Dependiendo de la región, pueden ofrecer notas florales, frutales o vinosas. Sidamo, Yirgacheffe y Harrar son algunas de las zonas más prestigiosas, cada una con características distintivas que fascinan a los amantes del café.

  En un Ecommerce, contar la historia del origen del café y ofrecer granos etíopes auténticos permite al cliente no solo degustar una bebida de calidad, sino también participar de una tradición milenaria. Esto convierte cada taza en un viaje a las tierras altas de África, donde el café no es solo un producto, sino un legado.`
    },
    {
      id: 7,
      image: '/assets/images/chocolate7-min.jpg',
      title: 'Cómo Conservar tu Café por Más Tiempo',
      date: '2025-06-27',
      descriptionShort: 'Consejos prácticos para mantener la frescura y el aroma del café molido o en grano.',
      descriptionLong: `La frescura es uno de los aspectos más importantes del café, y conservarla puede marcar la diferencia entre una taza vibrante y una insípida. El café comienza a perder aroma y sabor poco después de ser tostado, y la exposición al aire, la luz, la humedad y el calor acelera este proceso.

  La mejor forma de conservar café es almacenarlo en un recipiente hermético, opaco y colocado en un lugar fresco y seco. Los envases con válvula unidireccional son ideales, ya que permiten que el CO₂ liberado por el café escape sin dejar entrar oxígeno.

  En el caso del café molido, la pérdida de frescura es aún más rápida, por lo que lo recomendable es molerlo justo antes de prepararlo. Si esto no es posible, almacenar pequeñas cantidades y consumirlas pronto es clave.

  Aunque muchos guardan el café en el refrigerador o congelador, esto puede ser contraproducente, ya que la humedad y los olores de otros alimentos pueden afectar su sabor. Solo es recomendable congelarlo si se hace en envases sellados al vacío y en porciones que no requieran recongelar.

  En un Ecommerce, ofrecer café en presentaciones que favorezcan su conservación y educar sobre estos cuidados es una forma de asegurar que los clientes disfruten siempre de un café en su mejor punto.`
    },
    {
      id: 8,
      image: '/assets/images/chocolate8-min.jpg',
      title: 'Café y Salud: Lo que Dice la Ciencia',
      date: '2025-06-20',
      descriptionShort: 'Estudios recientes sobre los efectos positivos del café en la salud.',
      descriptionLong: `El café ha sido objeto de numerosos estudios científicos en las últimas décadas, y la mayoría de ellos coinciden en que, consumido con moderación, puede tener beneficios importantes para la salud. Su alto contenido de antioxidantes ayuda a combatir el estrés oxidativo, reduciendo el riesgo de enfermedades crónicas.

  Diversas investigaciones han asociado el consumo regular de café con un menor riesgo de padecer enfermedades neurodegenerativas como el Alzheimer y el Parkinson. También se ha encontrado que puede mejorar la sensibilidad a la insulina y reducir el riesgo de desarrollar diabetes tipo 2.

  En el ámbito cardiovascular, aunque se pensaba que el café podía ser perjudicial, estudios recientes sugieren que un consumo moderado (3 a 4 tazas al día) puede estar vinculado a una mejor salud del corazón. Además, su efecto estimulante puede mejorar el rendimiento físico y mental.

  Es importante destacar que los beneficios se obtienen mejor cuando el café se consume sin exceso de azúcar y evitando aditivos poco saludables. La clave está en la moderación y en elegir granos de calidad.

  En un Ecommerce de café, transmitir esta información de manera clara y basada en evidencia no solo educa al cliente, sino que también refuerza la confianza en la marca y en el producto que se ofrece.`
    },
    {
      id: 9,
      image: '/assets/images/chocolate9-min.jpg',
      title: 'Tendencias en el Mundo del Café 2025',
      date: '2025-06-15',
      descriptionShort: 'Desde cafés fríos hasta mezclas con adaptógenos: lo que viene en este año.',
      descriptionLong: `El mundo del café está en constante evolución, y 2025 trae consigo tendencias que están revolucionando la forma en que lo consumimos. Una de las más fuertes es el auge de los cafés fríos, como el cold brew y el nitro coffee, que ofrecen una alternativa refrescante y menos ácida para los meses cálidos.

  Otra tendencia emergente es la incorporación de adaptógenos y superalimentos en las mezclas de café. Ingredientes como la ashwagandha, el reishi o el colágeno están ganando popularidad por sus supuestos beneficios para la salud y el bienestar.

  La sostenibilidad también está marcando el rumbo, con un mayor interés por cafés de comercio justo, envases compostables y prácticas agrícolas regenerativas. Los consumidores buscan no solo calidad, sino también un impacto positivo en el medio ambiente y en las comunidades productoras.

  En cuanto a la tecnología, las cafeteras inteligentes y las suscripciones personalizadas permiten a los usuarios recibir café adaptado a sus gustos y molido según el método que utilicen, todo sin salir de casa.

  Para un Ecommerce, estar al tanto de estas tendencias y adaptarse rápidamente es clave para atraer a un público cada vez más informado y exigente. El futuro del café es innovador, inclusivo y sostenible, y ser parte de esta transformación es una oportunidad única para las marcas.`
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find(blog => blog.id === id);
  }
}
