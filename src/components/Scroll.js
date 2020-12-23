export default function Scroll(props){
	return(
		<div style = {{overflowY:'auto', border : '1px solid black', height: '600px'}}>
			{props.children}
		</div>
	)
}