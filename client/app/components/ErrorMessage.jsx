export default function ErrorMessage(props) {
    return !props.message ? null : (<span className="text-red-600 mx-1 -mt-1 text-[9px]">* {props.message}</span>)
}