import diamond from "../img/diamond.png";
import ruby from "../img/ruby.png";
import gemstone from "../img/gemstone.png";

const Muestra = [
  {
    titulo: "Turmalina",
    descripcion:
      "El nombre turmalina procede de la palabra cingalesa «touramalli», que significa, «piedras de colores mezclados» y esta denominación fue originalmente aplicada a una serie de piedras, principalmente circones. ",
    img:
      "https://firebasestorage.googleapis.com/v0/b/minerales-nicaragua.appspot.com/o/imgs%2Fpiedras%2FPiedra1.jpg?alt=media&token=71bea61a-45d1-47cb-a826-cd20d52d7ee1",
    alt: "piedra1"
  },{
    titulo: "Turmalina",
    descripcion:
      "El nombre turmalina procede de la palabra cingalesa «touramalli», que significa, «piedras de colores mezclados» y esta denominación fue originalmente aplicada a una serie de piedras, principalmente circones. ",
    img:
      "https://firebasestorage.googleapis.com/v0/b/minerales-nicaragua.appspot.com/o/imgs%2Fpiedras%2FPiedra2.jpg?alt=media&token=e7c8c211-843b-46f3-bee9-1617989a596d",
    alt: "piedra2"
  },{
    titulo: "Ámbar",
    descripcion:
      "El ámbar, árabe o succino (del latín succinum) es resina fosilizada de origen vegetal, proveniente principalmente de restos de coníferas y algunas angiospermas. Etimológicamente su nombre proviene del árabe عنبر, ámbar, significando , ya que este flota sobre el agua del mar, aunque originalmente se refería al ámbar gris. Es de color marrón claro normalmente, aunque existen variedades amarillas, tono miel y verdosas. Está considerada como piedra semipreciosa. Ha sido apreciada por su color y belleza natural desde los tiempos del Neolítico.1​ El ámbar es utilizado en joyería y como agente curativo en la medicina popular",
    img:
      "https://firebasestorage.googleapis.com/v0/b/minerales-nicaragua.appspot.com/o/imgs%2Fpiedras%2FPiedra3.jpg?alt=media&token=464f1651-5bd7-4238-b93d-a07576883cef",
    alt: "piedra3"
  },{
    titulo: "Cuarzo",
    descripcion:
      "El cuarzo es un mineral compuesto de sílice. Tras el feldespato es el mineral más común de la corteza terrestre estando presente en una gran cantidad de rocas ígneas, metamórficas y sedimentarias. Destaca por su dureza y resistencia a la meteorización en la superficie terrestre.",
    img:
      "https://firebasestorage.googleapis.com/v0/b/minerales-nicaragua.appspot.com/o/imgs%2Fpiedras%2FPiedra4.jpg?alt=media&token=beeb23e7-c87d-4a1e-bacd-f21d9a7586f2",
    alt: "piedra4"
  }
];

const Contacto = {
  Telefono: "+50588205311"
};
const AppName = "MineralNic";
const AppNameLength = "Minerales Nicaragua";
const Servicios = [
  {
    titulo: "Ventas de minerales",
    Descripcion:
      "Como empresa le vendemos variadad de minerales preciosos extraido directamente de minas locales.Por mayor y unidad",
    Img: diamond,
    alt: "diamond"
  },
  {
    titulo: "Estudio y muestreo",
    Descripcion:
      "Analizamos cualquier zona de potencial para extraccion de minerales certificando e haciendo un estudio si es factible dicha extraccion.",
    Img: ruby,
    alt: "ruby"
  },
  {
    titulo: "Envio y Procesado",
    Descripcion:
      "Enviamos cargas por mayor a todo Centro America y por unidad a nivel nacional.Tambien procesamos las piedras dejandola ya para hacerlas en joyeria.",
    Img: gemstone,
    alt: "gemstone"
  }
];

const ConstApp = {
  AppName,
  AppNameLength,
  Servicios,
  Contacto,
  Muestra
};

export { ConstApp };
