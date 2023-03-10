export default function Modal ({ close, name, data }) {
    return(
        <div>
            modal içeriği<br></br>
            <button onClick={close}>Kapat</button>
        </div>
    )
}