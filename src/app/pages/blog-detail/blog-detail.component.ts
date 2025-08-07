import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
import { BtnShareComponent } from '../../components/btn-share/btn-share.component';

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
    image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg',
    title: 'El Origen del Chocolate Oscuro',
    date: '2025-07-05',
    shortDescription: 'Explora el origen del chocolate oscuro y su evolución histórica.',
    longDescription: `El chocolate oscuro tiene una historia profundamente ligada a las antiguas civilizaciones mesoamericanas. Mayas y aztecas utilizaban el cacao no solo como alimento, sino también como moneda y elemento ritual. Lo consumían en forma líquida, amargo y especiado, muy diferente a como lo conocemos hoy. Cuando los conquistadores españoles llevaron el cacao a Europa en el siglo XVI, comenzó una transformación. Se endulzó, se mezcló con leche y se convirtió en una bebida de la nobleza.
    Con los siglos, la tecnología permitió refinar el cacao y convertirlo en tabletas sólidas. El chocolate oscuro, con alto porcentaje de cacao y sin leche, se mantuvo como una de las formas más puras de esta delicia. A partir del siglo XIX, países como Suiza, Bélgica y Francia perfeccionaron el arte del chocolate, dándole texturas más suaves y sabores más complejos.

    En la actualidad, el chocolate oscuro es valorado tanto por su sabor como por sus beneficios para la salud. Rico en antioxidantes, especialmente flavonoides, ayuda a la circulación, reduce la presión arterial y mejora el estado de ánimo. Estudios sugieren que su consumo moderado puede incluso favorecer la concentración y la memoria.

    El mundo del chocolate oscuro es fascinante. Existen decenas de variedades según el origen del cacao: los granos de Madagascar tienden a tener notas afrutadas, mientras que los ecuatorianos son más florales, y los de Ghana, más robustos y achocolatados. El movimiento "bean to bar" ha potenciado esta diversidad, permitiendo que productores trabajen directamente con comunidades cacaoteras y controlen todo el proceso, desde el grano hasta la barra.

    Cada tableta cuenta una historia. Desde las regiones selváticas donde se cosecha el cacao hasta los talleres donde se tuesta, muele y conchea el chocolate, hay pasión, técnica y tradición. Es por eso que los amantes del chocolate oscuro lo consideran más que un dulce: es una experiencia sensorial y cultural.

    Probar diferentes porcentajes de cacao es parte del disfrute. Una barra al 70% tendrá un equilibrio entre dulzura e intensidad, mientras que una al 85% o más será seca, amarga, pero profundamente aromática. Así como ocurre con el vino o el café, el chocolate oscuro invita a educar el paladar y apreciar cada matiz.` 

  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
    title: 'Trufas: El Lujo en Bocaditos',
    date: '2025-07-03',
    shortDescription: 'Deliciosas trufas de chocolate, sofisticación y sabor en miniatura.',
    longDescription: `Las trufas de chocolate son un ícono de la repostería fina. Pequeñas, redondas y de textura suave, deben su nombre a su parecido con las trufas negras, un hongo gourmet muy valorado. Las originales nacieron en Francia a principios del siglo XX, cuando un chef pastelero improvisó una mezcla de nata caliente y chocolate fundido que al enfriarse se convirtió en una ganache cremosa. Desde entonces, su fama se extendió por el mundo.
    El secreto de una buena trufa está en su interior: la ganache. Esta se elabora combinando chocolate de calidad con crema, y a veces con mantequilla o licor. La mezcla se enfría hasta que se pueda moldear a mano en pequeñas bolitas que luego se recubren con cacao, coco, frutos secos o una capa crujiente de chocolate templado. Este contraste de texturas, entre lo crujiente por fuera y lo suave por dentro, es parte del encanto de cada bocado.

    Existen muchas variedades de trufas. Algunas llevan sabores como menta, naranja, chile o ron. Otras son rellenas con praliné, frutas deshidratadas o incluso sal marina. Las más sofisticadas se decoran con polvos de oro comestible o pétalos cristalizados. Su versatilidad las convierte en un regalo ideal para celebraciones especiales.

    Pero más allá del lujo, hacer trufas puede ser una experiencia casera. No se necesita equipo profesional, solo buenos ingredientes, paciencia y creatividad. Prepararlas en casa es una forma perfecta de personalizar sabores, jugar con texturas y disfrutar del proceso. Incluso puede ser una actividad relajante o un plan divertido en pareja o con amigos.

    Nutricionalmente, las trufas deben disfrutarse con moderación. Aunque pequeñas, pueden ser bastante calóricas. Sin embargo, cuando se hacen con chocolate de alta calidad y sin exceso de azúcar, también pueden ofrecer beneficios antioxidantes gracias al cacao.

    En definitiva, las trufas no son solo un postre, son un símbolo de elegancia. Cada una es un homenaje al chocolate en su forma más concentrada y artística. Ya sea que las compres en una chocolatería especializada o las hagas tú mismo, siempre son un detalle que demuestra buen gusto y amor por lo exquisito.` 
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/691152/pexels-photo-691152.jpeg',
    title: '¿Chocolate con Sal? Una Combinación Sorprendente',
    date: '2025-07-01',
    shortDescription: 'La fusión perfecta entre dulce y salado en chocolate gourmet.',
    longDescription: `La idea de combinar chocolate con sal puede parecer extraña al principio, pero es una tendencia que ha conquistado a chefs, chocolateros y amantes del cacao en todo el mundo. Esta mezcla inesperada logra un equilibrio que resalta sabores, crea texturas interesantes y deja una impresión duradera en el paladar. Es una prueba de cómo lo dulce y lo salado pueden coexistir en perfecta armonía.
    El principio detrás de esta fusión se basa en la forma en que nuestros sentidos reaccionan al contraste. La sal actúa como un intensificador de sabor, despertando las papilas gustativas y permitiendo que los matices del chocolate se expresen con mayor claridad. Incluso una pizca de sal puede revelar notas frutales, florales o especiadas que de otro modo pasarían desapercibidas.

    El tipo de sal también importa. Las escamas de sal marina, por ejemplo, tienen una textura ligera y crujiente que añade un componente sensorial único. Algunas marcas utilizan sal del Himalaya, sal negra o incluso sal ahumada para aportar profundidad al perfil del chocolate. Estas combinaciones se aplican tanto a tabletas como a bombones, brownies y trufas.

    En la cocina gourmet, esta fusión es común en postres de alto nivel: desde tartas con ganache salada hasta mousse de chocolate con cristales de sal en la superficie. Incluso el clásico caramelo salado con chocolate ha ganado un lugar privilegiado en reposterías y tiendas de lujo.

    Además de su sabor atractivo, el chocolate con sal también puede tener beneficios para la salud cuando se consume con moderación. La sal utilizada en pequeñas cantidades no representa un riesgo significativo, y si se emplea chocolate oscuro, el aporte de antioxidantes y minerales puede ser considerable.

    Culturalmente, la combinación no es nueva. En México, por ejemplo, el chocolate se ha mezclado con ingredientes como chile y sal desde hace siglos. Lo que hoy parece una innovación occidental tiene raíces ancestrales en prácticas culinarias tradicionales.

    Así que la próxima vez que veas una barra de chocolate con sal marina, no dudes en probarla. Podrías descubrir una nueva forma de disfrutar el cacao que combine lo mejor de dos mundos: la intensidad dulce con el toque preciso de salinidad. Un equilibrio que transforma cada mordida en una experiencia única.` 
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1693027/pexels-photo-1693027.jpeg',
    title: 'Chocolate Blanco: Mitos y Realidades',
    date: '2025-06-30',
    shortDescription: 'El chocolate blanco genera debates, dudas y opiniones encontradas constantemente.',
    longDescription: `El chocolate blanco es uno de los productos más debatidos en el mundo del cacao. Para algunos, es una delicia cremosa; para otros, ni siquiera merece llamarse chocolate. Pero ¿qué lo hace tan polémico? Todo comienza con su composición: a diferencia del chocolate oscuro o con leche, el blanco no contiene sólidos de cacao, solo manteca de cacao, azúcar y productos lácteos. Esto significa que conserva la grasa del grano de cacao, pero no su pasta oscura.

    Debido a esta ausencia, muchos puristas lo consideran un derivado, no un chocolate en sí. Sin embargo, la manteca de cacao es parte esencial del grano y aporta características únicas: una textura suave, un aroma delicado y una sensación cremosa al paladar. Además, es el ingrediente más caro del cacao, lo que refuerza su valor.

    El sabor del chocolate blanco es más dulce y sutil. Suele tener notas de leche, vainilla y caramelo. Esta suavidad lo hace ideal para combinar con otros ingredientes como frutas ácidas (maracuyá, frambuesa), frutos secos o incluso especias como cardamomo. En la repostería es muy valorado: se funde con facilidad y da un acabado brillante y terso.

    A nivel nutricional, no tiene los antioxidantes del chocolate oscuro, pero tampoco es un “enemigo” como algunos piensan. Al ser más graso y dulce, debe consumirse con moderación, pero también puede formar parte de una dieta equilibrada si se elige una versión de calidad, con menos azúcar y sin aceites vegetales añadidos.

    Muchos mitos rodean al chocolate blanco: que es solo azúcar y grasa, que no tiene valor culinario o que siempre es artificial. Sin embargo, existen marcas artesanales que elaboran chocolate blanco con manteca de cacao pura, sin conservadores ni saborizantes. Incluso algunos chocolateros bean-to-bar han comenzado a experimentar con lotes pequeños de chocolate blanco, dándole el mismo respeto que a sus versiones oscuras.

    En resumen, el chocolate blanco no es mejor ni peor que otros tipos de chocolate. Es diferente. Y como todo en gastronomía, el valor está en cómo se elabora y con qué propósito se consume. Si lo pruebas con mente abierta y paladar atento, podrías encontrar en él una experiencia deliciosa y elegante que merece su lugar en la mesa del cacao.` 
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    title: 'El Maridaje Perfecto: Vino y Chocolate',
    date: '2025-06-28',
    shortDescription: 'Aprende a combinar chocolate y vino con armonía exquisita.',
    longDescription: `Maridar vino y chocolate puede parecer un reto, pero cuando se hace bien, el resultado es una sinfonía de sabores. Ambos productos comparten complejidad aromática, riqueza sensorial y una larga tradición artesanal. Sin embargo, también presentan desafíos: el vino puede acentuar lo amargo del cacao o chocar con su dulzor si no se elige la combinación adecuada.
    La regla principal del maridaje es la armonía. Un vino debe acompañar al chocolate, no competir con él. Por ejemplo, un chocolate oscuro con alto porcentaje de cacao suele ir bien con vinos tintos estructurados como un Cabernet Sauvignon, Malbec o Syrah. Estos vinos, ricos en taninos y con cuerpo, resaltan las notas profundas del cacao.

    Para chocolates con leche, un vino más suave y afrutado, como un Pinot Noir o incluso un Merlot joven, puede equilibrar la cremosidad y el dulzor. Los chocolates blancos, por su parte, combinan bien con vinos espumosos, Rieslings dulces o incluso un Moscato. El objetivo es lograr un balance entre textura, dulzor y acidez.

    Un clásico maridaje es el de vino de Oporto con trufas de chocolate oscuro. El dulzor del vino equilibra el amargor del cacao, mientras que el alcohol potencia el sabor. También puedes probar chocolate con notas cítricas acompañado de un vino blanco fresco o espumoso.

    Más allá de la teoría, el maridaje es un arte subjetivo. Lo ideal es experimentar. Organiza una cata en casa con distintas combinaciones y deja que tus sentidos guíen la experiencia. Puedes usar chocolates con ingredientes como naranja, almendra, menta o sal marina para crear contrastes más complejos.

    No hace falta ser sommelier para disfrutar esta experiencia. Basta con tener curiosidad y gusto por lo gourmet. Eso sí, es importante prestar atención a la calidad: tanto el vino como el chocolate deben ser buenos, ya que uno puede arruinar al otro si no están a la altura.

    En definitiva, el maridaje entre vino y chocolate no solo enriquece el paladar, sino que convierte un simple postre en una experiencia inolvidable. Una copa y un cuadrado pueden transportarte a otros lugares, contarte historias y crear momentos memorables. Porque cuando se encuentran dos placeres, lo importante es disfrutarlos con todos los sentidos.` 
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/775579/pexels-photo-775579.jpeg',
    title: 'Chocolate Artesanal Mexicano',
    date: '2025-06-25',
    shortDescription: 'México preserva la tradición del cacao en cada tableta artesanal.',
    longDescription: `El chocolate artesanal mexicano es una joya cultural y gastronómica que honra el legado ancestral del cacao. Desde los tiempos de los mayas y aztecas, el cacao ha sido parte esencial de la identidad de México, no solo como alimento, sino también como símbolo espiritual y económico. Hoy en día, muchos productores locales continúan cultivando y transformando el cacao con métodos tradicionales que respetan la tierra y el sabor.
    En estados como Oaxaca, Chiapas y Tabasco, pequeños talleres y cooperativas trabajan con variedades criollas de cacao, consideradas de las más finas del mundo. Estos chocolates se elaboran con procesos manuales, sin aditivos artificiales, lo cual permite que el sabor del grano se exprese de manera auténtica. A menudo se mezcla con ingredientes locales como canela, chile o vainilla, creando perfiles de sabor únicos.

    Además, el chocolate artesanal mexicano suele tener un fuerte componente social. Muchas marcas trabajan bajo esquemas de comercio justo, apoyando a comunidades indígenas y promoviendo el empoderamiento económico local. Esto lo convierte no solo en un producto delicioso, sino también ético y sostenible.

    La presentación también es distintiva. Las tabletas suelen envolverse en papel reciclado o decorado con arte local, y su textura es menos refinada, más granulada, lo cual realza la experiencia sensorial. Su aroma es intenso y terroso, con notas que evocan a la selva y a la historia.

    Este tipo de chocolate ha ganado reconocimiento internacional en ferias gourmet y concursos de cacao. Algunos productores incluso exportan a Europa o Asia, donde es considerado un producto premium por su origen y autenticidad.

    Redescubrir el chocolate mexicano es, en realidad, reconectar con nuestras raíces. Es una experiencia que va más allá del paladar y que invita a valorar la riqueza cultural que encierra cada pedacito de cacao.` 
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/1700859/pexels-photo-1700859.jpeg',
    title: 'El Cacao en Cosmética',
    date: '2025-06-22',
    shortDescription: 'El cacao también nutre tu piel con propiedades extraordinarias naturales.',
    longDescription: `El cacao no solo es un placer culinario, también es un poderoso aliado para el cuidado de la piel. Gracias a su alta concentración de antioxidantes como los flavonoides y polifenoles, el cacao ayuda a combatir los radicales libres responsables del envejecimiento prematuro.

    Muchos productos cosméticos utilizan manteca de cacao como ingrediente base por sus propiedades humectantes. Esta grasa natural hidrata profundamente, creando una barrera protectora que evita la pérdida de humedad, ideal para pieles secas o sensibles.

    Además, el cacao estimula la circulación sanguínea cuando se aplica de forma tópica. Esto se traduce en una piel más luminosa, firme y rejuvenecida. También tiene un efecto relajante: su aroma rico y terroso estimula la liberación de endorfinas, mejorando el estado de ánimo. Es por eso que muchos spas utilizan cacao en tratamientos corporales como mascarillas o envolturas.

    Algunas líneas de productos naturales emplean polvo de cacao puro en exfoliantes faciales y corporales. Gracias a su textura suave, elimina impurezas sin irritar la piel, y deja una sensación sedosa y revitalizada. También es frecuente encontrarlo en bálsamos labiales, cremas anti-edad y jabones artesanales.

    En la cosmética capilar, la manteca de cacao ayuda a fortalecer el cabello, dándole brillo y suavidad. Combinado con aceites esenciales, es una alternativa natural y efectiva a los tratamientos químicos.

    Lo mejor del cacao cosmético es que, cuando proviene de fuentes orgánicas, se convierte en una opción saludable y ética. Es biodegradable, no contamina el agua ni daña la fauna marina. Además, su producción sustentable apoya a comunidades agrícolas que cuidan el medio ambiente.

    Incorporar cacao en tu rutina de belleza no solo es un mimo para tu piel, sino también una forma consciente de consumir. Pocas cosas nutren por dentro y por fuera como este regalo de la naturaleza.` 
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/749102/pexels-photo-749102.jpeg',
    title: 'Cómo Hacer Bombones en Casa',
    date: '2025-06-20',
    shortDescription: 'Aprende paso a paso a crear deliciosos bombones caseros irresistibles.',
    longDescription: `Hacer bombones en casa es una de esas actividades que combinan arte, paciencia y sabor. A primera vista puede parecer complicado, pero con los utensilios adecuados y un poco de práctica, cualquiera puede convertirse en un pequeño maestro chocolatero.

    El primer paso para crear buenos bombones es elegir un chocolate de calidad, preferentemente con alto contenido de cacao. Puedes usar chocolate oscuro, con leche o blanco, según tus preferencias. También necesitarás un molde para bombones, una espátula, un bowl para fundir y una manga pastelera.

    El proceso comienza con el templado del chocolate: una técnica que consiste en derretirlo a una temperatura precisa, luego enfriarlo y volverlo a calentar ligeramente. Esto asegura que el chocolate tenga brillo, sea crujiente y se desmolde fácilmente. Sin templado, el bombón puede quedar opaco o con manchas.

    Una vez templado, vierte una capa delgada de chocolate en el molde, cubriendo todas las paredes. Deja enfriar y añade el relleno: puede ser ganache, caramelo salado, mermelada, crema de avellana, licor o lo que tu imaginación dicte. Luego sella el bombón con más chocolate.

    Después de desmoldarlos, puedes decorarlos con cacao en polvo, ralladura de naranja, frutos secos triturados o glaseado. Es importante almacenarlos en un lugar fresco, lejos del sol y la humedad.

    Además de ser deliciosos, los bombones caseros son un regalo perfecto para sorprender. Puedes personalizarlos con colores o empaques temáticos, haciéndolos ideales para cumpleaños, aniversarios o festividades.

    Este proceso también puede volverse una tradición familiar o una actividad relajante para el fin de semana. Lo importante no es solo el resultado final, sino también el placer de crear algo con tus propias manos. ¡Anímate a probar y verás lo gratificante que es el mundo del chocolate artesanal!`
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg',
    title: 'Chocolate Vegano: ¿A Qué Sabe?',
    date: '2025-06-18',
    shortDescription: 'Chocolate sin ingredientes animales, saludable, ético y delicioso también.',
    longDescription: `El chocolate vegano es una alternativa deliciosa y consciente para quienes buscan eliminar productos de origen animal de su dieta. A diferencia del chocolate tradicional con leche, el chocolate vegano utiliza leches vegetales, como la de avena, almendra o coco, o simplemente prescinde de la leche completamente.
    El sabor del chocolate vegano puede ser incluso más intenso que el convencional, ya que muchos productos utilizan cacao de alta calidad y poca azúcar, lo que permite apreciar mejor las notas naturales del grano. Al ser más puro, es una excelente opción para quienes valoran sabores auténticos y complejos.

    En cuanto a textura, los avances en técnicas de producción han permitido crear chocolates veganos tan cremosos como sus contrapartes con leche. Las marcas especializadas también ofrecen opciones con ingredientes orgánicos, comercio justo y empaques sustentables.

    Además de ser apto para veganos, este chocolate es ideal para personas con intolerancia a la lactosa o alergias. También tiene un impacto ambiental más bajo, ya que su producción requiere menos agua y genera menos emisiones.

    Puedes encontrar chocolate vegano en tabletas, bombones, trufas e incluso en repostería gourmet. Es un mundo cada vez más amplio y accesible, y cada día más chocolaterías se suman a esta tendencia ética y deliciosa.` 
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg',
    title: 'Los Mejores Chocolates del Mundo',
    date: '2025-06-15',
    shortDescription: 'Una selección imperdible de chocolates exquisitos de todo el mundo.',
    longDescription: `Hacer una lista de los mejores chocolates del mundo es una tarea compleja y deliciosa. Desde los Alpes suizos hasta las costas del Pacífico japonés, cada país aporta su propia interpretación del cacao, reflejando su cultura y pasión por el sabor.
    En Suiza, marcas como Lindt y Läderach se han convertido en símbolos de precisión y suavidad. Bélgica, por su parte, es famosa por sus pralinés y trufas artesanales, con casas como Neuhaus y Pierre Marcolini. Francia también destaca con chocolates elegantes, refinados y con un toque artístico.

    Más allá de Europa, Japón ha sorprendido al mundo con chocolates minimalistas, innovadores y de altísima calidad. Y América Latina no se queda atrás: Perú, Ecuador y México producen algunos de los mejores cacaos del mundo, con marcas bean-to-bar que apuestan por la pureza y el comercio justo.

    Cada uno de estos chocolates tiene su historia, su terroir, su legado. Probarlos es viajar con el paladar por todo el mundo, descubriendo sabores florales, frutales, terrosos o especiados. Una experiencia gourmet que vale cada mordida.` 
  }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find(blog => blog.id === id);
  }
}
