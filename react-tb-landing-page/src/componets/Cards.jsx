
import "./Cards.css"


function Cards() {
    const cardData = [
        {
            id: 1,
            text: 'Año de fundación',
            title: '2019',
          },
          {
            id: 2,
            text: 'Número de alumnos',
            title: '+1000',
          },
          {
            id: 3,
            text: 'Tasa de empleabilidad',
            title: '91%*',
          },
          {
            id: 4,
            text: 'Como nos valoran',
            title: '4.79/5',
          },
        ];
    
    return (
    <div class="yard">
        <div class="behind">
        
            {cardData.map((card) => (
            <div class="card" key={card.id}>      
            <div>{card.text}</div>
            <h3 >{card.title}</h3>
        </div>
        ))}
        </div>
        <div class="asterisk">*Alumnos Full-Time entre 2021 y 2022, 180 días después de graduarse.</div>
    </div>
)}


export default Cards;