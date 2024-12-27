import './style.scss';

export function Button(props) {
    return <div className="button" onClick={props.click ? props.click : () => null}>{...props.children}</div>
}