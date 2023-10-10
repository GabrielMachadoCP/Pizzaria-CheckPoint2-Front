import "./Corpo.css"

export default function Corpo() {

    return (
      <>
        <div id="total">
            <div className="sabor1">
                <div>
                    <h2>Pizza de Atum</h2>
                    <img src="/public/pizza1.jpg" alt="atum" />
                    <p>Atum, queijo mussarela, molho tomate e cebola.</p>
                    <p>R$50,00</p>
                </div>

                <div>
                    <h2>Pizza de Calabresa</h2>
                    <img src="/public/pizza2.jpg" alt="calabresa" />
                    <p>Calabresa, queijo mussarela, molho tomate e cebola.</p>
                    <p>R$60,00</p>
                </div>
                
                <div>
                    <h2>Pizza Brasileira</h2>
                    <img src="/public/pizza3.jpg" alt="brasileira" />
                    <p>Ovo, queijo mussarela, molho tomate, cebola e azeitona.</p>
                    <p>R$80,00</p>
                </div>
            </div>

            <div className="sabor2">
                <div>
                    <h2>Pizza Marguerita</h2>
                    <img src="/public/pizza4.jpg" alt="marguerita" />
                    <p>Queijo mussarela, tomate, molho tomate e azeitona.</p>
                    <p>R$40,00</p>
                </div>

                <div>
                    <h2>Pizza Napolitana</h2>
                    <img src="/public/pizza5.webp" alt="napolitana" />
                    <p>Manjericão, queijo mussarela, molho tomate e tomate.</p>
                    <p>R$55,00</p>
                </div>

                <div>
                    <h2>Pizza de Brócolis</h2>
                    <img src="/public/pizza6.jpg" alt="brocolis" />
                    <p>Brócolis, catupiry e molho tomate.</p>
                    <p>R$70,00</p>
                </div>
            </div>
        </div>

      </>
    )
  }