import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import header from '../assets/assets/img/header.webp';
import imagen1 from '../assets/assets/img/imagen1.png'
import imagen2 from '../assets/assets/img/imagen2.webp'
import imagen3 from '../assets/assets/img/imagen 3.webp'

import cat1 from '../assets/assets/img/cat1.jpg'
import cat2 from '../assets/assets/img/cat2.jpg'
import cat3 from '../assets/assets/img/cat3.jpg'

import envio from '../assets/assets/img/envio.jpg'

import Oferta1 from '../assets/assets/img/oft3.webp'
import Oferta2 from '../assets/assets/img/oft2.webp'
import Oferta3 from '../assets/assets/img/oft1.webp'

import historia from '../assets/assets/img/historia.jpg'

import { ArrowRightCircle } from "react-bootstrap-icons";



export const Banner = () =>{

    const [loopnum, setloopnum] = useState(0);
    const [isDeleting, setsiDeleting] = useState(false);
    const toRotate = ["Dispositivos", "Gadgets", "Innovación", "Electrónica", "Tecnología", "Smartphones", "Portátiles", "Accesorios", "Conectividad", "Exploradores"];
    const [text, setText] = useState("");
    const tiempo = 2000;
    const [delta, setDelta]=useState(300 - Math.random() * 100);

    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        cvv: "",
      });


    useEffect(()=>{
        let ticker = setInterval(()=>{             /*38:15 3*/
            tick();
        },delta)
        return ()=>{clearInterval(ticker)}; 
    },[text])
    
    const tick =()=>{
        let i = loopnum % toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0, text.length-1) : fulltext.substring(0, fulltext.length+1);
    
        setText(updateText);
    
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
    
        if(!isDeleting && updateText === fulltext){
            setsiDeleting(true);
            setDelta(tiempo);
    
        }else{
            if(isDeleting && updateText === ''){
                setsiDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500)
            }
        }
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({
          ...paymentData,
          [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!paymentData.cardNumber || !paymentData.cardHolder || !paymentData.expirationDate || !paymentData.cvv) {
          console.error("Todos los campos del formulario de pago son obligatorios");
          return;
        }
        setTimeout(() => {
          console.log("Procesamiento de pago exitoso. Datos de pago:", paymentData);
        }, 2000);
      };


    return(
        <section>
            <Container className="banner" id="home">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={17}>
                    <span className="tagline">ElectraByte</span>
                    <h1>{'Explora el mundo digital con '}
                    <br></br>
                    <span className="wrap">{text}</span>
                    <br></br>
                    </h1>
                    <p>Descubre un universo de dispositivos electrónicos 
                    de última generación cuidadosamente seleccionados para 
                    ofrecerte lo mejor en cada categoría. Desde smartphones
                     inteligentes hasta portátiles ultrapotentes, cámaras 
                     de vanguardia y accesorios electrónicos que potenciarán 
                     tu experiencia digital, en ElectraByte encontrarás 
                     todo lo que necesitas para mantenerte conectado y a la 
                     vanguardia de la tecnología.</p>
                    <button>Mas Informacion<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col>
                        <img src={header} alt="" className="img2"/>
                    </Col>
                </Row>
                <br></br>
                <Row id="skills">
                    <Carousel>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen1}
                            alt="Primer slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen2}
                            alt="Segundo slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={imagen3}
                            alt="Tercer slide"
                        />
                        </Carousel.Item>
                        {/* Agrega más elementos Carousel.Item según sea necesario */}
                    </Carousel>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <Row id='projects'>
                    <h2>Catálogo de Productos</h2>
                    <Col xs={12} md={4}>
                        <div className="product-item">
                        <img src={cat1} alt="Producto 1" />
                        <br></br>
                        <br></br>
                        <h3>Placa de Expancion ESP-32 38Pines</h3>
                        <p>Descripción del producto 1.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="product-item">
                        <img src={cat2} alt="Producto 2" />
                        <br></br>
                        <br></br>
                        <h3>Producto 2</h3>
                        <p>Descripción del producto 2.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="product-item">
                        <img src={cat3} alt="Producto 3" />
                        <br></br>
                        <br></br>
                        <h3>Adaptador Dual Motor Nema17 Eje Z</h3>
                        <p>Un "Adaptador Dual Motor (Nema17 Eje Z)" es un componente utilizado en sistemas de movimiento controlado por motores, comúnmente en impresoras 3D y máquinas CNC.</p>
                        </div>
                    </Col>
                </Row>
                <br id="compras"></br>
                <br></br>
                <br></br>
                <br></br>
                <Row id="compras">
                    <h2 id="compras">¡Haz tus Compras con Nosotros!</h2>
                    <Col xs={12} md={6}>
                        <div className="shopping-experience">
                        <h3>Ofertas Especiales</h3>
                        <p>Descubre nuestras ofertas exclusivas en una amplia gama de productos electrónicos.</p>
                        <button>Ver Ofertas</button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="shopping-experience">
                        <h3>Envío Rápido y Seguro</h3>
                        <p>Disfruta de envíos rápidos y seguros para que recibas tus productos en perfecto estado.</p>
                        <img src={envio} alt="envios" width={30}/>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row id="pagos">
                    <h2>Proceso de Pago</h2>
                    <Col xs={12} md={6}>
                    <form className="pagos-form" onSubmit={handleSubmit}>
                        <label>Número de Tarjeta:</label>
                        <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="Ingrese el número de tarjeta"
                        required
                        />

                        <label>Nombre del Titular:</label>
                        <input
                        type="text"
                        name="cardHolder"
                        value={paymentData.cardHolder}
                        onChange={handleInputChange}
                        placeholder="Nombre del titular"
                        required
                        />

                        <label>Fecha de Expiración:</label>
                        <input
                        type="text"
                        name="expirationDate"
                        value={paymentData.expirationDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                        />

                        <label>CVV:</label>
                        <input
                        type="text"
                        name="cvv"
                        value={paymentData.cvv}
                        onChange={handleInputChange}
                        placeholder="CVV"
                        required
                        />

                        <button type="submit" className="butt" id="butt">Pagar</button>
                    </form>
                    </Col>
                    <Col xs={12} md={6}>
                    <p>Ingrese los detalles de su tarjeta para completar la compra de sus productos electrónicos.</p>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row id="ofertas">
                    <h2>¡Ofertas Especiales!</h2>
                    <br></br>
                    <br></br>
                    <Col xs={12} md={4}>
                    <div className="oferta-item">
                        <img src={Oferta3} alt="Oferta 1" />
                        <br></br>
                        <br></br>
                        <h3>Oferta Especial 1</h3>
                        <p>¡Gran descuento en este producto! Aprovecha ahora.</p>
                        <p>ahora:220,00 Bs. antes:179,03 Bs.</p>
                        <button>Comprar Ahora</button>
                    </div>
                    </Col>
                    <Col xs={12} md={4}>
                    <div className="oferta-item">
                        <img src={Oferta2} alt="Oferta 2" />
                        <br></br>
                        <br></br>
                        <h3>Oferta Especial 2</h3>
                        <p>¡Solo por tiempo limitado! No te pierdas esta oportunidad.</p>
                        <p>ahora:2.778,83 Bs. antes:3.118,01 Bs.</p>
                        <button>Comprar Ahora</button>
                    </div>
                    </Col>
                    <Col xs={12} md={4}>
                    <div className="oferta-item">
                        <img src={Oferta1} alt="Oferta 3" />
                        <br></br>
                        <br></br>
                        <h3>Oferta Especial 3</h3>
                        <p>Descuento exclusivo para clientes online. ¡Compra ya!</p>
                        <p>ahora:297,00 Bs. antes:349,03 Bs.</p>
                        <button>Comprar Ahora</button>
                    </div>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row id="blog">
                    <h2>Blog de Electrónica en la Actualidad</h2>
                    <Col xs={12} md={6}>
                    <div className="blog-post">
                        <h3>Título del Artículo</h3>
                        <p>Fecha: 12 de diciembre de 2023</p>
                        <p>Reciclar</p>
                        <iframe
                        width="100%"
                        height="315"
                        src="https://youtube.com/watch?v=0bPZuMSFxbk"
                        title="Video de Electrónica"
                        frameBorder="0"
                        allowFullScreen
                        ></iframe>
                    </div>
                    </Col>
                    <Col xs={12} md={6}>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <Row id="nosotros">
                    <Col xs={12} md={6}>
                    <h2>Nuestra Historia</h2>
                    <p>Somos una tienda de electrónica apasionada por ofrecer la última tecnología a nuestros clientes. En ElectraByte, nos esforzamos por proporcionar productos de alta calidad y mantenernos a la vanguardia de las últimas tendencias en electrónica.</p>
                    <p>Nuestro compromiso con la innovación y la excelencia nos ha convertido en líderes en el mercado de dispositivos electrónicos. Comenzamos nuestra travesía con el objetivo de ofrecer soluciones tecnológicas de primera clase y seguimos comprometidos con ese propósito.</p>
                    </Col>
                    <Col xs={12} md={6}>
                    <h2>Nuestro Equipo</h2>
                    <p>En ElectraByte, contamos con un equipo diverso de expertos en tecnología. Desde ingenieros hasta diseñadores, todos comparten una pasión común por la innovación y la excelencia. Trabajamos juntos para garantizar que nuestros clientes reciban el mejor servicio y productos de calidad.</p>
                    <p>Estamos aquí para ayudarte en cada paso de tu viaje tecnológico. Ya sea que estés buscando asesoramiento sobre productos o necesites asistencia técnica, nuestro equipo está listo para brindarte el apoyo necesario.</p>
                    </Col>
                    <Col xs={12}>
                    <h2>Nuestra Misión</h2>
                    <p>Nuestra misión es proporcionar a nuestros clientes productos electrónicos de primera calidad que mejoren su vida diaria. Buscamos constantemente las últimas innovaciones y nos esforzamos por ofrecer una experiencia de compra única y satisfactoria.</p>
                    <p>En ElectraByte, no solo vendemos productos; construimos relaciones duraderas con nuestros clientes. Queremos ser tu destino confiable para todas tus necesidades tecnológicas.</p>
                    </Col>
                </Row>
                <br></br>
                <Row id="historia">
                    <Col xs={12} md={6}>
                    <h2>Historia de la Tienda</h2>
                    <p>En nuestros primeros días, comenzamos como una pequeña tienda en línea con una pasión compartida por la electrónica. Nos enfocamos en ofrecer una selección cuidadosamente curada de dispositivos y accesorios de alta calidad.</p>
                    <p>A medida que la demanda de productos electrónicos de vanguardia creció, también lo hizo ElectraByte. Nos expandimos para incluir una tienda física en el centro de la ciudad, brindando a los clientes la oportunidad de experimentar nuestros productos de primera mano.</p>
                    <p>En 2010, lanzamos nuestra propia línea de productos. Esta iniciativa nos permitió destacarnos en el mercado y establecer relaciones sólidas con fabricantes líderes.</p>
                    <p>Hoy, ElectraByte es reconocida como una de las principales tiendas de electrónica, conocida por su compromiso con la calidad, la innovación y el servicio al cliente excepcional.</p>
                    </Col>
                    <Col xs={12} md={6}>
                    <img src={historia} alt="Historia de la Tienda" style={{ width: '100%', borderRadius: '8px' }} />
                    </Col>
                </Row>
                <Row id="contacto">
                    <Col xs={12} md={6}>
                    <h2>Información de la Estudiante</h2>
                    <ul>
                        <li><strong>Email:</strong> rosiomasielticonachirinos@gmail.com</li>
                        <li><strong>Celular:</strong> +591 71595374</li>
                        <li><strong>Carnet:</strong> 13760252</li>
                        <li><strong>Matricula:</strong> 1845102</li>
                    </ul>
                    </Col>
                    <Col xs={12} md={6}>
                    <h2>Informacion del Curso</h2>
                    <ul>
                        <li><strong>Doctora:</strong> Ph.D. MARISOL TELLEZ RAMIREZ</li>
                        <li><strong>Horario:</strong> MARTES - JUEVES 16:00 a 18:00 - P3-Lab3</li>
                        <li><strong>Paralelo:</strong> D</li>
                    </ul>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
    
}