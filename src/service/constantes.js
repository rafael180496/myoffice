import diamond from '../img/diamond.png'
import ruby from '../img/ruby.png'
import gemstone from '../img/gemstone.png'


const Contacto={
    Telefono:"+50588205311"
}
const AppName = "MineralNic";
const AppNameLength ="Minerales Nicaragua"
const Servicios =[
    {
        titulo:"Ventas de minerales",
        Descripcion:"Como empresa le vendemos variadad de minerales preciosos extraido directamente de minas locales.Por mayor y unidad",
        Img:diamond,
        alt:"diamond"
    },    {
        titulo:"Estudio y muestreo",
        Descripcion:"Analizamos cualquier zona de potencial para extraccion de minerales certificando e haciendo un estudio si es factible dicha extraccion.",
        Img:ruby,
        alt:"ruby"
    },    {
        titulo:"Envio y Procesado",
        Descripcion:"Enviamos cargas por mayor a todo Centro America y por unidad a nivel nacional.Tambien procesamos las piedras dejandola ya para hacerlas en joyeria.",
        Img:gemstone,
        alt:"gemstone"
    },
]


const ConstApp = {
  AppName,
  AppNameLength,
  Servicios,
  Contacto
};

export { ConstApp };
