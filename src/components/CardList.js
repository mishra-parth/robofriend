import Card from './card'

function CardList({robots}){
	// if(true){
	// 	throw new Error('NOOOOOOO!')
	// }
	return(
		<div>
			{
				robots.map((user, i) =>{
					return(
						<Card key = {user.id} 
						id = {user.id} 
						name = {user.name} 
						email = {user.email} 
						/>
			    )
				})}
		</div>
		)
	
}

export default CardList;
