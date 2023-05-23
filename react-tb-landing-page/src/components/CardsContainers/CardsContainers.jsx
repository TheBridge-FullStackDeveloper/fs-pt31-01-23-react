import "./CardsContainers.css";


const CardsContainers = ( {title, img, time, modo, description, info} ) => {

    return(<>
    
        <div className="containBoxes">
            <section className="Cards">
                <section className="flex-cont-head">
                    <h2 className="title">{title}</h2>
                    <img src={img} className="logo-bt"/>
                </section>

                <section className="flex-cont-card">
                    <p className="bg-black-time flex-cont-card"> 
                        <img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63e4d647d89630b5205c_Time%20Circle.svg" className="size-svg"/>
                        <div className="centering-text"> {time} </div>
                    </p>

                    <p className="bg-black-modo flex-cont-card">
                        <img src="https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/60ab63bdeec8ef0ff6d3600d_Location.svg" className="size-svg"/>
                        <div className="centering-text"> {modo} </div>
                    </p>
                </section>

                <section className="description">{description}</section>
        
                <div className="line-extra"></div>

                <div className="info">+ {info}</div>  

            </section>        
        </div>

    </>)
}


export default CardsContainers