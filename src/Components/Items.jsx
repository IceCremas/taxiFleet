import { forwardRef } from "react"

export default function Items(props, ref){
    return(
        <>
        <div className="items" ref={ref}>
                <div className="items__row">
                    <button>Porsche 911</button>
                    <button>Ferrari F8</button>
                    <button>BMW M5</button>
                </div>
                <div className="items__row">
                    <button>BMW M4</button>
                    <button>Lamborghini</button>
                    <button>Mercedes SL</button>
                </div>
                <div className="items__row">
                    <button>BMW Z4</button>
                    <button>Mercedes  C</button>
                    <button>Chevrolet</button>
            </div>
        </div>
        </>
    )
}