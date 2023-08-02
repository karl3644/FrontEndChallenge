export default function Button({ text = "Default", onClick = () => {} }) {
    return <button onClick={onClick}>{text}</button>;
}
