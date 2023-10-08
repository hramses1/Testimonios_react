import { Testimonio } from './Testimonio';


export function TestiCompo(){
    return (
      <div className='contenedor-comentarios'>
        <Testimonio 
          nombre='Susana White'
          pais='Suecia'
          img='img2'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, felis placerat mi aenean commodo morbi per, tempor justo et volutpat at fermentum ultricies. Bibendum est hendrerit a lobortis dictumst in ridiculus.' />
        <Testimonio
          nombre='Paola Farias'
          pais='Argentina'
          img='img1'
          cargo='Ingeniera de Software'
          empresa='Nestle'
          testimonio='Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, felis placerat mi aenean commodo morbi per, tempor justo et volutpat at fermentum ultricies. Bibendum est hendrerit a lobortis dictumst in ridiculus.' />
        
        <Testimonio
          nombre='Jacod Tall'
          pais='Estados Unidos'
          img='img3'
          cargo='Ingeniero de Software'
          empresa='Google'
          testimonio='Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, felis placerat mi aenean commodo morbi per, tempor justo et volutpat at fermentum ultricies. Bibendum est hendrerit a lobortis dictumst in ridiculus.' />
        <Testimonio
          nombre='Roberto Torres'
          pais='Bolivia'
          img='img4'
          cargo='Ingeniero de Datos'
          empresa='Tesla'
          testimonio='Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, felis placerat mi aenean commodo morbi per, tempor justo et volutpat at fermentum ultricies. Bibendum est hendrerit a lobortis dictumst in ridiculus.' />
        </div>
    )
}