import { useParams } from "react-router-dom";

export function ProductDetails() {
const {id} = useParams()

    return <div>
        <h3>hi this {id} is here</h3>
    </div>
}