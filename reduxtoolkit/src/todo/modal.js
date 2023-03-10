import { useSelector, useDispatch } from "react-redux"
import { closeModal } from "../store/modal"
import modals from "../modals"

export default function Modal() {

    const dispacth = useDispatch()
    const { name, data } = useSelector(state => state.modal)
    const modal = modals.find(m => m.name == name)
    const close = () => {
        dispacth(closeModal())
    }

    return (
        <div className="modal">
            <div className="modal-inner">
                <modal.element close={close} data={data} />
            </div>
        </div>
    )
}